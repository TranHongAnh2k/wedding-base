# Giải pháp lỗi CORS với Google Apps Script

## Vấn đề

Google Apps Script Web App không hỗ trợ CORS headers một cách đầy đủ, dẫn đến lỗi:
```
Access to fetch at '...' from origin '...' has been blocked by CORS policy
```

## Giải pháp: Sử dụng JSONP

Đã cập nhật code để sử dụng JSONP (JSON with Padding) thay vì fetch thông thường.

### Bước 1: Cập nhật Google Apps Script

1. Mở Google Apps Script editor
2. Tìm function `doGet`
3. Đảm bảo function có hỗ trợ JSONP callback:

```javascript
// Hỗ trợ JSONP callback nếu có parameter callback
const callback = e.parameter.callback;
if (callback) {
  // Trả về JSONP format
  return ContentService.createTextOutput(
    callback + '(' + JSON.stringify(response) + ');'
  ).setMimeType(ContentService.MimeType.JAVASCRIPT);
}
```

4. Deploy lại Web App

### Bước 2: React App đã được cập nhật

File `src/components/MessagesSection.js` đã được cập nhật để sử dụng JSONP thay vì fetch.

### Cách hoạt động

1. React app tạo một `<script>` tag với URL chứa parameter `callback`
2. Google Apps Script trả về dữ liệu dưới dạng JavaScript: `callbackName({...data...})`
3. Browser tự động execute script và gọi callback function
4. Callback function nhận dữ liệu và resolve promise

### Lợi ích

- ✅ Không cần CORS headers
- ✅ Hoạt động với mọi browser
- ✅ Đơn giản và hiệu quả

### Lưu ý

- JSONP chỉ hoạt động với GET request
- Cần đảm bảo Google Apps Script hỗ trợ parameter `callback`
- Timeout được set là 10 giây

