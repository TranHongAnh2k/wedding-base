import React from 'react';
import { animated } from '@react-spring/web';
import { useScrollReveal } from '../utils/useScrollReveal';

const CoupleSection = () => {
  const { ref, style } = useScrollReveal({ 
    threshold: 0.1, 
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 }
  });

  return (
    <animated.div ref={ref} style={style} className="com-section couple-section" data-section="">
      <div className="section-wrapper full-width full-height p-relative">
        <div className="section-background p-absolute full-width full-height"></div>
        <div className="section-container full-height p-relative">
          <div className="com-text-block p-absolute animation couple-header-text">
            <div className="text-block">
              <h2 className="text-block-css full-width">Trân Trọng Báo Tin Lễ Thành Hôn Của<br /></h2>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-groom-name">
            <div className="full-width full-height">
              <div className="text-block">
                <h1 className="text-block-css full-width">Nguyễn Anh Tú</h1>
              </div>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-bride-name">
            <div className="full-width full-height">
              <div className="text-block">
                <h1 className="text-block-css full-width">Trần Thị Diệu Nhi</h1>
              </div>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-ampersand">
            <div className="full-width full-height">
              <div className="text-block">
                <h1 className="text-block-css full-width">&amp;</h1>
              </div>
            </div>
          </div>
          <div className="com-image-block p-absolute couple-decoration-image-1">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div className="com-image-block p-absolute couple-decoration-image-2">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div className="com-image-block p-absolute animation couple-main-image">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-groom-side-label">
            <div className="text-block">
              <p className="text-block-css full-width">&nbsp;NHÀ TRAI<br /><br /></p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-bride-side-label">
            <div className="text-block">
              <p className="text-block-css full-width">&nbsp;NHÀ GÁI<br /><br /></p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-groom-location">
            <div className="text-block">
              <p className="text-block-css full-width">Quận 8, Hồ Chí Minh</p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-bride-location">
            <div className="text-block">
              <p className="text-block-css full-width">Quận 8, Hồ Chí Minh</p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-groom-parents">
            <div className="text-block">
              <p className="text-block-css full-width">ÔNG CẤN VĂN AN<br />BÀ NGUYỄN THỊ HẢI<br /></p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-bride-parents">
            <div className="text-block">
              <p className="text-block-css full-width">ÔNG CẤN VĂN AN<br />BÀ NGUYỄN THỊ HẢI<br /></p>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default CoupleSection;

