import React, { useState } from 'react';
import { animated } from '@react-spring/web';
import { useScrollReveal } from '../utils/useScrollReveal';
import { GOOGLE_SHEETS_CONFIG } from '../config/googleSheetsConfig';

const FormSection = ({ side = 'groom' }) => {
  const { ref, style } = useScrollReveal({ 
    threshold: 0.1, 
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 }
  });
  const [formData, setFormData] = useState({
    full_name: '',
    text_input_1: '',
    text_input_2: '',
    select_1gkq22: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset status khi user thay đổi input
    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Form submit triggered', formData);
    
    // Validate form
    if (!formData.full_name.trim() || !formData.select_1gkq22) {
      setSubmitStatus('error');
      setSubmitMessage('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');
    
    console.log('Starting submission...');

    try {
      // Kiểm tra xem có URL config chưa
      if (!GOOGLE_SHEETS_CONFIG.WEB_APP_URL) {
        throw new Error('Chưa cấu hình Google Sheets URL. Vui lòng xem file docs/google-apps-script.js để hướng dẫn.');
      }

      // Chuẩn bị dữ liệu gửi đi
      const payload = {
        ...formData,
        side: side // Thêm thông tin phía mời
      };

      // Gửi dữ liệu đến Google Sheets
      // Sử dụng no-cors mode vì Google Apps Script Web App không hỗ trợ CORS
      // Request vẫn được gửi và xử lý, chỉ là không đọc được response
      await fetch(GOOGLE_SHEETS_CONFIG.WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      // Với no-cors mode, không thể đọc response
      // Nhưng request đã được gửi thành công nếu không có lỗi network
      // Giả sử thành công (trong thực tế, bạn có thể kiểm tra trong Google Sheets)
      console.log('Form submitted successfully', payload);
      setSubmitStatus('success');
      setSubmitMessage('Cảm ơn bạn! Thông tin đã được gửi thành công.');
      
      // Reset form sau 2 giây
      setTimeout(() => {
        setFormData({
          full_name: '',
          text_input_1: '',
          text_input_2: '',
          select_1gkq22: ''
        });
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage(error.message || 'Có lỗi xảy ra khi gửi form. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <animated.div ref={ref} style={style} className="com-section form-section" data-section="">
      <div className="section-wrapper full-width full-height p-relative">
        <div className="section-background p-absolute full-width full-height"></div>
        <div className="section-container full-height p-relative">
          <div className="com-rectangle p-absolute animation form-container">
            <div className="rectangle-css full-mask-size mask-position full-height full-width">
              <div className="rectangle-gradient-border"></div>
            </div>
          </div>
          <div className="p-absolute form-wrapper">
            <form className="full-width full-height" onSubmit={handleSubmit}>
              <div className="p-absolute form-input-name">
                <div className="input-css full-width full-height">
                  <input
                    type="text"
                    className="full-width full-height"
                    placeholder="Tên của bạn là?"
                    name="full_name"
                    aria-label="Input full_name"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="p-absolute form-input-relation">
                <div className="input-css full-width full-height">
                  <input
                    type="text"
                    className="full-width full-height"
                    placeholder="Bạn là gì của Dâu Rể nhỉ?"
                    name="text_input_1"
                    aria-label="Input text_input_1"
                    value={formData.text_input_1}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="p-absolute form-input-message">
                <div className="input-css full-width full-height">
                  <input
                    type="text"
                    className="full-width full-height"
                    placeholder="Gửi lời chúc đến Dâu Rể nhé!"
                    name="text_input_2"
                    aria-label="Input text_input_2"
                    value={formData.text_input_2}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="p-absolute form-select-attendance">
                <div className="select-css full-width full-height p-relative">
                  <select
                    className="full-width full-height"
                    name="select_1gkq22"
                    required
                    data-required="1"
                    aria-label="Bạn Có Tham Dự Không?"
                    value={formData.select_1gkq22}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Bạn Có Tham Dự Không?</option>
                    <option value="Có Thể Tham Dự">Có Thể Tham Dự</option>
                    <option value="Không Thể Tham Dự">Không Thể Tham Dự</option>
                  </select>
                  <div className="chevron">
                    <span className="icon"></span>
                  </div>
                </div>
              </div>
              <div 
                className="com-button p-absolute cursor-pointer form-submit-button" 
                style={{transition: '0.3s'}}
                onClick={(e) => {
                  e.preventDefault();
                  // Trigger form submit
                  const form = e.currentTarget.closest('form');
                  if (form && !isSubmitting) {
                    form.requestSubmit();
                  }
                }}
              >
                <div className="button-css full-height full-width" style={{opacity: isSubmitting ? 0.7 : 1, pointerEvents: isSubmitting ? 'none' : 'auto'}}>
                  <span className="button-loader" style={{display: isSubmitting ? 'block' : 'none'}}></span>
                  <div className="button-text full-width u-select-none">
                    <span style={{color: 'rgb(0, 0, 0)'}}>
                      {isSubmitting ? 'ĐANG GỬI...' : 'GỬI NGAY'}
                    </span>
                  </div>
                  <button type="submit" formNoValidate style={{display: 'none'}} disabled={isSubmitting}></button>
                </div>
              </div>
              {submitStatus && (
                <div 
                  className="form-submit-message"
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    backgroundColor: submitStatus === 'success' ? '#4caf50' : '#f44336',
                    color: 'white',
                    fontSize: '14px',
                    zIndex: 1000,
                    textAlign: 'center',
                    maxWidth: '80%',
                    animation: 'fadeIn 0.3s ease-in'
                  }}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
          <div className="com-text-block p-absolute animation form-header-text">
            <div className="text-block">
              <h2 className="text-block-css full-width">Xác Nhận Tham Dự<br />&amp;<br />Gửi Lời Chúc<br /></h2>
            </div>
          </div>
          {/* <div className="com-button p-absolute cursor-pointer animation form-gift-button">
            <div className="button-css full-height full-width">
              <span className="button-loader"></span>
              <div className="button-text full-width u-select-none">GỬI MỪNG CƯỚI</div>
            </div>
          </div> */}
          <div className="com-image-block p-absolute form-background-image">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default FormSection;

