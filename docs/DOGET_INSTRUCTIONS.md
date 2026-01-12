# Hướng dẫn thêm hàm doGet vào Google Apps Script

## Cách 1: Copy từ file đơn giản (Khuyến nghị)

1. Mở file `docs/doGet-simple.js`
2. Copy toàn bộ code
3. Paste vào Google Apps Script editor (bên cạnh function `doPost` hiện có)
4. **Quan trọng**: Đảm bảo bạn đã có `SPREADSHEET_ID` và `SHEET_NAME` được định nghĩa ở đầu file
5. Deploy lại Web App

## Cách 2: Copy từ file đầy đủ

1. Mở file `docs/doGet-function.js`
2. Copy toàn bộ code
3. Thay đổi:
   - `SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'` → ID thật của bạn
   - `SHEET_NAME = 'database'` → Tên sheet của bạn (hoặc 'Sheet1')
4. Paste vào Google Apps Script editor
5. Deploy lại Web App

## Kiểm tra

Sau khi deploy, test bằng cách:
- Mở URL: `YOUR_WEB_APP_URL?limit=5`
- Bạn sẽ thấy JSON response với danh sách lời chúc

## Lưu ý

- Function `doGet` sẽ tự động được gọi khi có GET request đến Web App URL
- Function `doOptions` xử lý CORS preflight (nên có)
- Nếu bạn đã có `SPREADSHEET_ID` và `SHEET_NAME` ở đầu file, dùng version đơn giản
- Nếu chưa có, dùng version đầy đủ và thay đổi các giá trị

