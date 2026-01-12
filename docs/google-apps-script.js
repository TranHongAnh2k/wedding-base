/**
 * Google Apps Script để nhận dữ liệu từ form và ghi vào Google Sheets
 * 
 * HƯỚNG DẪN SỬ DỤNG:
 * 
 * 1. Mở Google Sheets và tạo một sheet mới
 * 2. Vào Tools > Script editor
 * 3. Paste code này vào editor
 * 4. Thay đổi SPREADSHEET_ID bằng ID của Google Sheets của bạn
 *    (ID nằm trong URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit)
 * 5. Lưu script với tên bất kỳ
 * 6. Deploy > New deployment
 * 7. Chọn type: Web app
 * 8. Execute as: Me
 * 9. Who has access: Anyone
 * 10. Click Deploy
 * 11. Copy Web app URL và paste vào src/config/googleSheetsConfig.js
 * 
 * CẤU TRÚC GOOGLE SHEETS:
 * Dòng 1 (Header): Tên | Mối quan hệ | Lời chúc | Tham dự | Thời gian | Phía mời
 */

// Thay đổi ID này bằng ID của Google Sheets của bạn
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
// Thay đổi tên sheet nếu bạn dùng tên khác (ví dụ: 'database')
const SHEET_NAME = 'database'; // Hoặc 'Sheet1' nếu bạn dùng sheet mặc định

function doPost(e) {
  try {
    // Mở Google Sheets
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    
    // Kiểm tra nếu sheet chưa có header, tạo header
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Tên',
        'Mối quan hệ',
        'Lời chúc',
        'Tham dự',
        'Thời gian',
        'Phía mời'
      ]);
    }
    
    // Parse dữ liệu từ POST request
    const data = JSON.parse(e.postData.contents);
    
    // Lấy thời gian hiện tại
    const timestamp = new Date();
    const formattedTime = Utilities.formatDate(
      timestamp,
      Session.getScriptTimeZone(),
      'yyyy-MM-dd HH:mm:ss'
    );
    
    // Xác định phía mời từ side
    const sideLabel = data.side === 'bride' ? 'Cô Dâu (Nhà Gái)' : 'Chú Rể (Nhà Trai)';
    
    // Ghi dữ liệu vào sheet
    sheet.appendRow([
      data.full_name || '',
      data.text_input_1 || '', // Mối quan hệ
      data.text_input_2 || '', // Lời chúc
      data.select_1gkq22 || '', // Tham dự
      formattedTime,
      sideLabel
    ]);
    
    // Trả về response thành công với CORS headers
    const response = {
      success: true,
      message: 'Dữ liệu đã được ghi thành công!'
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
    
  } catch (error) {
    // Trả về response lỗi với CORS headers
    const errorResponse = {
      success: false,
      message: 'Có lỗi xảy ra: ' + error.toString()
    };
    
    return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
}

// Xử lý OPTIONS request cho CORS preflight
function doOptions() {
  return ContentService.createTextOutput('')
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

// Function để lấy dữ liệu lời chúc từ Google Sheets
function doGet(e) {
  try {
    // Mở Google Sheets
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    
    // Lấy tất cả dữ liệu từ sheet (bỏ qua dòng header)
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    
    // Nếu không có dữ liệu (chỉ có header hoặc rỗng)
    if (values.length <= 1) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: true,
          messages: []
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Lấy header (dòng đầu tiên)
    const headers = values[0];
    
    // Tìm index của các cột
    const nameIndex = headers.indexOf('Tên');
    const relationIndex = headers.indexOf('Mối quan hệ');
    const messageIndex = headers.indexOf('Lời chúc');
    const attendanceIndex = headers.indexOf('Tham dự');
    const timeIndex = headers.indexOf('Thời gian');
    const sideIndex = headers.indexOf('Phía mời');
    
    // Lọc và format dữ liệu (bỏ qua dòng header)
    const messages = [];
    for (let i = 1; i < values.length; i++) {
      const row = values[i];
      // Chỉ lấy những dòng có lời chúc
      if (row[messageIndex] && row[messageIndex].trim()) {
        messages.push({
          name: row[nameIndex] || '',
          relation: row[relationIndex] || '',
          message: row[messageIndex] || '',
          attendance: row[attendanceIndex] || '',
          time: row[timeIndex] || '',
          side: row[sideIndex] || ''
        });
      }
    }
    
    // Sắp xếp theo thời gian mới nhất (nếu có)
    messages.sort((a, b) => {
      if (!a.time || !b.time) return 0;
      return new Date(b.time) - new Date(a.time);
    });
    
    // Giới hạn số lượng (tùy chọn, ví dụ 50 lời chúc mới nhất)
    const limit = e.parameter.limit ? parseInt(e.parameter.limit) : 50;
    const limitedMessages = messages.slice(0, limit);
    
    // Trả về dữ liệu dưới dạng JSON với CORS headers
    const response = {
      success: true,
      messages: limitedMessages,
      total: messages.length
    };
    
    // Hỗ trợ JSONP callback nếu có parameter callback
    const callback = e.parameter.callback;
    if (callback) {
      // Trả về JSONP format
      return ContentService.createTextOutput(
        callback + '(' + JSON.stringify(response) + ');'
      ).setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    
    // Nếu không có callback, trả về JSON thông thường
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
    
  } catch (error) {
    // Trả về response lỗi
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: 'Có lỗi xảy ra: ' + error.toString(),
        messages: []
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

