import React, { useState } from 'react';
import { animated } from '@react-spring/web';
import { useScrollReveal } from '../utils/useScrollReveal';

const FormSection = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <animated.div ref={ref} style={style} id="w-j6a4d4fc" className="com-section" data-section="">
      <div className="section-wrapper full-width full-height p-relative">
        <div className="section-background p-absolute full-width full-height"></div>
        <div className="section-container full-height p-relative">
          <div id="w-qp7zqavj" className="com-rectangle p-absolute animation">
            <div className="rectangle-css full-mask-size mask-position full-height full-width">
              <div className="rectangle-gradient-border"></div>
            </div>
          </div>
          <div id="w-d688ytkq" className="p-absolute">
            <form id="d688ytkq" className="full-width full-height" onSubmit={handleSubmit}>
              <div id="w-yj3hxu4w" className="p-absolute">
                <div className="input-css full-width full-height">
                  <input
                    id="wi-yj3hxu4w"
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
              <div id="w-qycil5et" className="p-absolute">
                <div className="input-css full-width full-height">
                  <input
                    id="wi-qycil5et"
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
              <div id="w-81v32j1d" className="p-absolute">
                <div className="input-css full-width full-height">
                  <input
                    id="wi-81v32j1d"
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
              <div id="w-gkkgczp7" className="p-absolute">
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
                    <option id="l9hnpkib" value="Có Thể Tham Dự">Có Thể Tham Dự</option>
                    <option id="lwo6r79l" value="Không Thể Tham Dự">Không Thể Tham Dự</option>
                  </select>
                  <div className="chevron">
                    <span className="icon"></span>
                  </div>
                </div>
              </div>
              <div id="w-jsy0cioh" className="com-button p-absolute cursor-pointer" style={{transition: '0.3s'}}>
                <div className="button-css full-height full-width">
                  <span className="button-loader"></span>
                  <div className="button-text full-width u-select-none">
                    <span style={{color: 'rgb(0, 0, 0)'}}>GỬI NGAY</span>
                  </div>
                  <button type="submit" formNoValidate style={{display: 'none'}}></button>
                </div>
              </div>
            </form>
          </div>
          <div id="w-yj0y61d2" className="com-text-block p-absolute animation">
            <div className="text-block">
              <h2 className="text-block-css full-width">Xác Nhận Tham Dự<br />&amp;<br />Gửi Lời Chúc<br /></h2>
            </div>
          </div>
          <div id="w-qbpa8242" className="com-button p-absolute cursor-pointer animation">
            <div className="button-css full-height full-width">
              <span className="button-loader"></span>
              <div className="button-text full-width u-select-none">GỬI MỪNG CƯỚI</div>
            </div>
          </div>
          <div id="w-1gjqg7sh" className="com-image-block p-absolute">
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

