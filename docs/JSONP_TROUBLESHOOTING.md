# Khắc phục lỗi JSONP

## Lỗi thường gặp

### 1. "Could not establish connection" hoặc "Không thể tải dữ liệu"

**Nguyên nhân:**
- Google Apps Script chưa được cập nhật với JSONP support
- URL không đúng
- Google Apps Script chưa được deploy lại sau khi cập nhật

**Giải pháp:**

1. **Kiểm tra Google Apps Script có hỗ trợ JSONP:**
   - Mở Google Apps Script editor
   - Tìm function `doGet`
   - Đảm bảo có đoạn code này:
   ```javascript
   const callback = e.parameter.callback;
   if (callback) {
     return ContentService.createTextOutput(
       callback + '(' + JSON.stringify(response) + ');'
     ).setMimeType(ContentService.MimeType.JAVASCRIPT);
   }
   ```

2. **Deploy lại Web App:**
   - Trong Google Apps Script, click **Deploy** > **Manage deployments**
   - Click vào biểu tượng bút chì (Edit) bên cạnh deployment hiện tại
   - Click **Deploy** (không cần thay đổi gì)
   - **Quan trọng**: Copy lại Web App URL mới nếu có

3. **Test trực tiếp trong browser:**
   - Mở URL: `YOUR_WEB_APP_URL?limit=5&callback=test`
   - Bạn sẽ thấy: `test({success: true, messages: [...]});`
   - Nếu thấy JSON thông thường thay vì JavaScript, nghĩa là JSONP chưa được bật

### 2. "Timeout khi tải dữ liệu"

**Nguyên nhân:**
- Google Apps Script chạy quá lâu
- Kết nối mạng chậm
- Sheet có quá nhiều dữ liệu

**Giải pháp:**
- Giảm số lượng limit (ví dụ: `limit=10` thay vì `limit=20`)
- Kiểm tra kết nối mạng
- Tối ưu Google Apps Script code

### 3. Lỗi CORS vẫn xuất hiện

**Nguyên nhân:**
- Đang sử dụng `fetch()` thay vì JSONP
- Code chưa được cập nhật

**Giải pháp:**
- Đảm bảo đang sử dụng `fetchWithJSONP()` trong MessagesSection
- Kiểm tra file `src/components/MessagesSection.js` đã được cập nhật chưa

## Cách test JSONP

1. **Test trong browser console:**
   ```javascript
   // Tạo script tag thủ công
   const script = document.createElement('script');
   script.src = 'YOUR_WEB_APP_URL?limit=5&callback=testCallback';
   window.testCallback = (data) => {
     console.log('Data received:', data);
   };
   document.body.appendChild(script);
   ```

2. **Test trực tiếp URL:**
   - Mở: `YOUR_WEB_APP_URL?limit=5&callback=test`
   - Nếu thấy JavaScript code: `test({...})` → JSONP hoạt động ✅
   - Nếu thấy JSON: `{"success": true, ...}` → JSONP chưa hoạt động ❌

## Checklist

- [ ] Google Apps Script có function `doGet` với JSONP support
- [ ] Google Apps Script đã được deploy lại
- [ ] Web App URL đúng trong `googleSheetsConfig.js`
- [ ] MessagesSection sử dụng `fetchWithJSONP()`
- [ ] Test URL trực tiếp trong browser cho thấy JSONP format

## Alternative: Sử dụng Proxy Server

Nếu JSONP vẫn không hoạt động, có thể sử dụng proxy server hoặc CORS proxy service như:
- `https://cors-anywhere.herokuapp.com/` (cho development)
- Tạo proxy server riêng

