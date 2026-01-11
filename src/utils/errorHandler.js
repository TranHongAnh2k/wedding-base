// Error handler để bắt các lỗi từ browser extensions và các lỗi không quan trọng
(function() {
  'use strict';
  
  // Danh sách các lỗi cần bỏ qua (từ extensions)
  const IGNORED_ERRORS = [
    'JSON.parse',
    'undefined',
    'runtime.lastError',
    'Receiving end does not exist',
    'is not valid JSON',
    'SOURCE_LANG',
    'React DevTools',
    'duplicate welcome',
    'content script'
  ];

  function shouldIgnoreError(message) {
    if (!message || typeof message !== 'string') return false;
    return IGNORED_ERRORS.some(ignored => message.includes(ignored));
  }

  function shouldIgnoreReason(reason) {
    if (!reason) return false;
    
    const message = reason.message || reason.toString() || '';
    if (shouldIgnoreError(message)) return true;
    
    // Kiểm tra nếu là SyntaxError với JSON
    if (reason instanceof SyntaxError && message.includes('JSON')) {
      return true;
    }
    
    // Kiểm tra nếu là object với error property
    if (typeof reason === 'object' && reason.error) {
      const errorStr = String(reason.error);
      if (shouldIgnoreError(errorStr)) return true;
    }
    
    return false;
  }
  
  // Bắt lỗi global
  const originalErrorHandler = window.onerror;
  window.onerror = function(message, source, lineno, colno, error) {
    if (shouldIgnoreError(message)) {
      // Không log để tránh spam console
      return true; // Ngăn lỗi hiển thị
    }
    
    // Gọi error handler gốc nếu có
    if (originalErrorHandler) {
      return originalErrorHandler.apply(this, arguments);
    }
    return false;
  };

  // Bắt unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    if (shouldIgnoreReason(event.reason)) {
      event.preventDefault();
      return false;
    }
  });

  // KHÔNG override console.error và console.warn để không che giấu lỗi quan trọng
  // Chỉ bắt các lỗi global và unhandled rejections
})();

