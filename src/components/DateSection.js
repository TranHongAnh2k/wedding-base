import React from 'react';
import { animated } from '@react-spring/web';
import { useScrollReveal } from '../utils/useScrollReveal';

const DateSection = () => {
  const { ref, style } = useScrollReveal({ 
    threshold: 0.1, 
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 }
  });

  return (
    <animated.div ref={ref} style={style} className="com-section date-section" data-section="">
      <div className="section-wrapper full-width full-height p-relative">
        <div className="section-background p-absolute full-width full-height"></div>
        <div className="section-container full-height p-relative">
          <div className="com-text-block p-absolute animation date-day-number">
            <div className="text-block">
              <p className="text-block-css full-width">15<br /></p>
            </div>
          </div>
          <div className="com-image-block p-absolute animation date-image-1">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div className="com-image-block p-absolute animation date-image-2">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div className="com-image-block p-absolute animation date-image-3">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div className="com-text-block p-absolute animation date-header-text">
            <div className="text-block">
              <h2 className="text-block-css full-width">Trân Trọng Kính Mời<br /></h2>
            </div>
          </div>
          <div className="com-image-block p-absolute animation date-decoration-image">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div className="com-text-block p-absolute animation date-event-description">
            <div className="text-block">
              <p className="text-block-css full-width">THAM DỰ TIỆC MỪNG LỄ THÀNH HÔN<br />Vào Lúc<br /></p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation date-time">
            <div className="text-block">
              <p className="text-block-css full-width">10 giờ 00<br /></p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation date-year">
            <div className="text-block">
              <p className="text-block-css full-width"><span style={{fontWeight: 'normal'}}>Năm 2025</span><br /></p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation date-lunar-date">
            <div className="text-block">
              <p className="text-block-css full-width">(Tức Ngày 18 Tháng 01 Năm Ất Tỵ)<br /></p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation date-weekday">
            <div className="text-block">
              <p className="text-block-css full-width">Thứ 5<br /></p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation date-month">
            <div className="text-block">
              <p className="text-block-css full-width">Tháng 2<br /></p>
            </div>
          </div>
          <div className="p-absolute animation date-decorative-line-1">
            <div className="full-width full-height">
              <div className="line-css full-width">
                <div className="line-container"></div>
              </div>
            </div>
          </div>
          <div className="p-absolute animation date-decorative-line-2">
            <div className="full-width full-height">
              <div className="line-css full-width">
                <div className="line-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default DateSection;

