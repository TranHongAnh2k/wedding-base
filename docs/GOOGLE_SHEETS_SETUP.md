# Hướng dẫn kết nối Form với Google Sheets

## Bước 1: Tạo Google Sheets

1. Mở [Google Sheets](https://sheets.google.com)
2. Tạo một sheet mới
3. Copy **Spreadsheet ID** từ URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
   ```
   Ví dụ: Nếu URL là `https://docs.google.com/spreadsheets/d/1abc123xyz/edit`
   thì Spreadsheet ID là `1abc123xyz`

## Bước 2: Tạo Google Apps Script

1. Trong Google Sheets, vào **Tools** > **Script editor**
2. Xóa code mặc định và paste code từ file `docs/google-apps-script.js`
3. Thay đổi `SPREADSHEET_ID` bằng ID bạn đã copy ở bước 1:
   ```javascript
   const SPREADSHEET_ID = '1abc123xyz'; // Thay bằng ID của bạn
   ```
4. Lưu script (Ctrl+S hoặc Cmd+S)
5. Đặt tên cho script (ví dụ: "Wedding Form Handler")

## Bước 3: Deploy Web App

1. Click vào **Deploy** > **New deployment**
2. Click vào biểu tượng bánh răng ⚙️ bên cạnh "Select type"
3. Chọn **Web app**
4. Điền thông tin:
   - **Description**: Wedding Form Handler (hoặc tên bất kỳ)
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Quan trọng**: Copy **Web app URL** (sẽ có dạng: `https://script.google.com/macros/s/...`)

## Bước 4: Cấu hình trong React App

### Cách 1: Sử dụng Environment Variable (Khuyến nghị)

1. Tạo file `.env` trong thư mục gốc của project:
   ```
   REACT_APP_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   (Thay `YOUR_SCRIPT_ID` bằng URL bạn đã copy ở bước 3)

2. Restart development server:
   ```bash
   npm start
   ```

### Cách 2: Cấu hình trực tiếp trong code

1. Mở file `src/config/googleSheetsConfig.js`
2. Thay đổi `WEB_APP_URL`:
   ```javascript
   export const GOOGLE_SHEETS_CONFIG = {
     WEB_APP_URL: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
     SHEET_NAME: 'Sheet1',
   };
   ```

## Bước 5: Kiểm tra

1. Chạy ứng dụng: `npm start`
2. Điền form và submit
3. Kiểm tra Google Sheets xem dữ liệu đã được ghi chưa

## Cấu trúc dữ liệu trong Google Sheets

Sheet sẽ tự động tạo header với các cột:
- **Tên**: Tên khách mời
- **Mối quan hệ**: Quan hệ với cô dâu/chú rể
- **Lời chúc**: Lời chúc từ khách mời
- **Tham dự**: Có thể tham dự / Không thể tham dự
- **Thời gian**: Thời gian submit form
- **Phía mời**: Cô Dâu (Nhà Gái) / Chú Rể (Nhà Trai)

## Xử lý lỗi

### Lỗi: "Chưa cấu hình Google Sheets URL"
- Kiểm tra file `.env` hoặc `googleSheetsConfig.js` đã có URL chưa
- Đảm bảo URL đúng format

### Lỗi: "CORS" hoặc không gửi được
- Google Apps Script Web App đã được deploy với "Who has access: Anyone"
- Kiểm tra lại bước 3

### Dữ liệu không xuất hiện trong Sheets
- Kiểm tra Spreadsheet ID trong Google Apps Script có đúng không
- Kiểm tra quyền truy cập của Google Apps Script với Google Sheets
- Xem logs trong Google Apps Script: **View** > **Execution log**

## Lấy lời chúc từ Google Sheets

Sau khi setup xong, bạn có thể lấy lời chúc để hiển thị trên trang:

1. **Cập nhật Google Apps Script**: 
   - Đảm bảo function `doGet` trong `docs/google-apps-script.js` đã được cập nhật
   - Function này sẽ trả về danh sách lời chúc dưới dạng JSON

2. **Cấu hình CORS** (nếu cần):
   - Trong Google Apps Script, thêm vào đầu function `doGet`:
   ```javascript
   // Cho phép CORS
   return ContentService.createTextOutput(JSON.stringify(data))
     .setMimeType(ContentService.MimeType.JSON)
     .setHeaders({
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
       'Access-Control-Allow-Headers': 'Content-Type'
     });
   ```

3. **Component MessagesSection**:
   - Đã được tích hợp vào App.js
   - Tự động load lời chúc khi trang được tải
   - Tự động refresh mỗi 30 giây

## Lưu ý bảo mật

- Google Apps Script URL có thể được truy cập bởi bất kỳ ai nếu biết URL
- Nên thêm validation trong Google Apps Script để kiểm tra dữ liệu
- Có thể thêm API key hoặc token để bảo mật hơn (cần cập nhật code)

