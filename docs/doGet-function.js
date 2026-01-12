/**
 * HÀM doGet ĐỂ LẤY LỜI CHÚC TỪ GOOGLE SHEETS
 * 
 * HƯỚNG DẪN:
 * 1. Copy toàn bộ code này
 * 2. Paste vào Google Apps Script editor (bên cạnh function doPost)
 * 3. Đảm bảo SPREADSHEET_ID và SHEET_NAME đúng với cấu hình của bạn
 * 4. Deploy lại Web App
 * 
 * LƯU Ý: 
 * - SHEET_NAME phải khớp với tên sheet trong Google Sheets của bạn
 * - Nếu bạn dùng 'database' thì giữ nguyên, nếu dùng 'Sheet1' thì đổi lại
 */

function doGet(e) {
  try {
    // Đảm bảo SPREADSHEET_ID và SHEET_NAME đúng với cấu hình của bạn
    // Nếu bạn đã có trong doPost, có thể bỏ qua phần này
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Thay bằng ID của bạn
    const SHEET_NAME = 'database'; // Hoặc 'Sheet1' nếu bạn dùng sheet mặc định
    
    // Mở Google Sheets
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    
    // Kiểm tra nếu sheet không tồn tại
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'Sheet không tồn tại: ' + SHEET_NAME,
        messages: []
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
    }
    
    // Lấy tất cả dữ liệu từ sheet
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    
    // Nếu không có dữ liệu (chỉ có header hoặc rỗng)
    if (values.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        messages: [],
        total: 0
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
    }
    
    // Lấy header (dòng đầu tiên)
    const headers = values[0];
    
    // Tìm index của các cột (tự động tìm theo tên header)
    const nameIndex = headers.indexOf('Tên');
    const relationIndex = headers.indexOf('Mối quan hệ');
    const messageIndex = headers.indexOf('Lời chúc');
    const attendanceIndex = headers.indexOf('Tham dự');
    const timeIndex = headers.indexOf('Thời gian');
    const sideIndex = headers.indexOf('Phía mời');
    
    // Kiểm tra nếu không tìm thấy các cột cần thiết
    if (messageIndex === -1) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'Không tìm thấy cột "Lời chúc" trong sheet',
        messages: []
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
    }
    
    // Lọc và format dữ liệu (bỏ qua dòng header)
    const messages = [];
    for (let i = 1; i < values.length; i++) {
      const row = values[i];
      
      // Chỉ lấy những dòng có lời chúc (không rỗng)
      const message = row[messageIndex];
      if (message && message.toString().trim()) {
        messages.push({
          name: nameIndex >= 0 ? (row[nameIndex] || '').toString().trim() : '',
          relation: relationIndex >= 0 ? (row[relationIndex] || '').toString().trim() : '',
          message: message.toString().trim(),
          attendance: attendanceIndex >= 0 ? (row[attendanceIndex] || '').toString().trim() : '',
          time: timeIndex >= 0 ? (row[timeIndex] || '').toString().trim() : '',
          side: sideIndex >= 0 ? (row[sideIndex] || '').toString().trim() : ''
        });
      }
    }
    
    // Sắp xếp theo thời gian mới nhất (nếu có)
    messages.sort((a, b) => {
      if (!a.time || !b.time) return 0;
      try {
        const dateA = new Date(a.time);
        const dateB = new Date(b.time);
        return dateB - dateA; // Mới nhất trước
      } catch (e) {
        return 0;
      }
    });
    
    // Giới hạn số lượng (lấy từ parameter hoặc mặc định 50)
    const limit = e && e.parameter && e.parameter.limit ? parseInt(e.parameter.limit) : 50;
    const limitedMessages = messages.slice(0, limit);
    
    // Trả về dữ liệu dưới dạng JSON với CORS headers
    const response = {
      success: true,
      messages: limitedMessages,
      total: messages.length,
      showing: limitedMessages.length
    };
    
    // Hỗ trợ JSONP callback nếu có parameter callback
    const callback = e && e.parameter && e.parameter.callback;
    if (callback) {
      // Trả về JSONP format
      return ContentService.createTextOutput(
        callback + '(' + JSON.stringify(response) + ');'
      ).setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    
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
      message: 'Có lỗi xảy ra: ' + error.toString(),
      messages: []
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

/**
 * HÀM doOptions ĐỂ XỬ LÝ CORS PREFLIGHT REQUEST
 * (Tùy chọn, nhưng nên thêm để tránh lỗi CORS)
 */
function doOptions() {
  return ContentService.createTextOutput('')
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

