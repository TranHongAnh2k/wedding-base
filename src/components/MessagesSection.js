import React, { useState, useEffect } from 'react';
import { animated } from '@react-spring/web';
import { useScrollReveal } from '../utils/useScrollReveal';
import { GOOGLE_SHEETS_CONFIG } from '../config/googleSheetsConfig';

// Helper function để fetch với JSONP (tránh CORS)
const fetchWithJSONP = (url) => {
  return new Promise((resolve, reject) => {
    // Tạo callback function name duy nhất
    const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    
    // Tạo script tag
    const script = document.createElement('script');
    
    // Đảm bảo URL có parameter callback
    const separator = url.indexOf('?') >= 0 ? '&' : '?';
    script.src = url + separator + 'callback=' + callbackName;
    script.async = true;
    script.charset = 'utf-8';
    
    let isResolved = false;
    
    // Định nghĩa callback function
    window[callbackName] = (data) => {
      if (isResolved) return;
      isResolved = true;
      
      // Cleanup
      try {
        if (script.parentNode) {
          document.body.removeChild(script);
        }
      } catch (e) {
        console.warn('Error removing script:', e);
      }
      
      try {
        delete window[callbackName];
      } catch (e) {
        window[callbackName] = undefined;
      }
      
      resolve(data);
    };
    
    // Xử lý lỗi
    script.onerror = (error) => {
      if (isResolved) return;
      isResolved = true;
      
      console.error('Script load error:', error);
      
      // Cleanup
      try {
        if (script.parentNode) {
          document.body.removeChild(script);
        }
      } catch (e) {
        // Ignore
      }
      
      try {
        delete window[callbackName];
      } catch (e) {
        window[callbackName] = undefined;
      }
      
      reject(new Error('Không thể tải dữ liệu từ server. Vui lòng kiểm tra URL và đảm bảo Google Apps Script đã được cập nhật.'));
    };
    
    // Thêm script vào DOM
    try {
      document.body.appendChild(script);
    } catch (e) {
      reject(new Error('Không thể tạo script tag: ' + e.message));
      return;
    }
    
    // Timeout sau 15 giây
    setTimeout(() => {
      if (!isResolved && window[callbackName]) {
        isResolved = true;
        
        try {
          if (script.parentNode) {
            document.body.removeChild(script);
          }
        } catch (e) {
          // Ignore
        }
        
        try {
          delete window[callbackName];
        } catch (e) {
          window[callbackName] = undefined;
        }
        
        reject(new Error('Timeout khi tải dữ liệu. Vui lòng kiểm tra kết nối mạng.'));
      }
    }, 15000);
  });
};

const MessagesSection = ({ side = 'groom' }) => {
  const { ref, style } = useScrollReveal({ 
    threshold: 0.1, 
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 }
  });

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
    // Refresh messages mỗi 30 giây
    const interval = setInterval(fetchMessages, 2* 30 *1000);
    return () => clearInterval(interval);
  }, [side]);

  const fetchMessages = async () => {
    try {
      if (!GOOGLE_SHEETS_CONFIG.WEB_APP_URL) {
        setError('Chưa cấu hình Google Sheets URL');
        setLoading(false);
        return;
      }

      // Google Apps Script Web App không hỗ trợ CORS tốt
      // Sử dụng JSONP callback để lấy dữ liệu
      const url = new URL(GOOGLE_SHEETS_CONFIG.WEB_APP_URL);
      url.searchParams.set('limit', '20');
      
      console.log('Fetching messages from:', url.toString());
      
      // Sử dụng JSONP để tránh CORS
      const data = await fetchWithJSONP(url.toString());
      
      console.log('Received data:', data);
      
      if (data && data.success) {
        // Lọc lời chúc theo side nếu cần (hoặc hiển thị tất cả)
        const filteredMessages = (data.messages || []).filter(msg => {
          // Có thể filter theo side hoặc hiển thị tất cả
          // return msg.side && msg.side.includes(side === 'bride' ? 'Cô Dâu' : 'Chú Rể');
          return true; // Hiển thị tất cả lời chúc
        });
        
        setMessages(filteredMessages);
        setError(null);
      } else {
        throw new Error(data?.message || 'Có lỗi xảy ra khi tải dữ liệu');
      }
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError(err.message || 'Không thể tải lời chúc. Vui lòng kiểm tra Google Apps Script đã được cập nhật với JSONP support chưa.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <animated.div ref={ref} style={style} className="com-section messages-section" data-section="">
      <div className="section-wrapper full-width full-height p-relative">
        <div className="section-background p-absolute full-width full-height"></div>
        <div className="section-container full-height p-relative">
          <div className="com-text-block p-absolute animation messages-header-text">
            <div className="text-block">
              <h2 className="text-block-css full-width">LỜI CHÚC<br />TỪ KHÁCH MỜI<br /></h2>
            </div>
          </div>

          <div className="messages-container" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            padding: '20px',
            boxSizing: 'border-box'
          }}>
            {loading && (
              <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                Đang tải lời chúc...
              </div>
            )}

            {error && (
              <div style={{ textAlign: 'center', padding: '40px', color: '#f44336' }}>
                {error}
              </div>
            )}

            {!loading && !error && messages.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc!
              </div>
            )}

            {!loading && !error && messages.length > 0 && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      padding: '20px',
                      borderRadius: '12px',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                      animation: 'fadeIn 0.5s ease-in',
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    <div style={{ marginBottom: '10px' }}>
                      <strong style={{ fontSize: '18px', color: '#333' }}>
                        {msg.name || 'Khách mời'}
                      </strong>
                      {msg.relation && (
                        <span style={{ fontSize: '14px', color: '#666', marginLeft: '10px' }}>
                          ({msg.relation})
                        </span>
                      )}
                    </div>
                    <div style={{
                      fontSize: '16px',
                      color: '#444',
                      lineHeight: '1.6',
                      marginBottom: '10px',
                      fontStyle: 'italic'
                    }}>
                      "{msg.message}"
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#999',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span>{msg.attendance}</span>
                      {msg.time && (
                        <span>{new Date(msg.time).toLocaleDateString('vi-VN')}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default MessagesSection;

