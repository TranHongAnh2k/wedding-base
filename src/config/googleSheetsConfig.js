// Google Sheets Configuration
// Thay thế URL này bằng URL của Google Apps Script Web App của bạn
// Hướng dẫn: 
// 1. Tạo Google Apps Script (xem file google-apps-script.js trong thư mục docs)
// 2. Deploy as Web App
// 3. Copy URL và paste vào đây

export const GOOGLE_SHEETS_CONFIG = {
  // URL của Google Apps Script Web App
  // Ví dụ: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
  WEB_APP_URL: process.env.REACT_APP_GOOGLE_SHEETS_URL || 'https://script.google.com/macros/s/AKfycbyXg6xZnW8kRmVKmQFC-2lUJxyb1Qhkc8bz_8AGglKB7Eg2ly7ty1hSH08qblQrKBU/exec',
  
  // Tên sheet trong Google Sheets (mặc định là 'Sheet1')
  SHEET_NAME: 'database',
};

