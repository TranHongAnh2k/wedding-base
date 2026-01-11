import React from 'react';
import { animated } from '@react-spring/web';
import { useScrollReveal } from '../utils/useScrollReveal';

const LocationSection = () => {
  const { ref, style } = useScrollReveal({ 
    threshold: 0.1, 
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 }
  });

  return (
    <animated.div ref={ref} style={style} id="w-rs50dgw2" className="com-section" data-section="">
      <div className="section-wrapper full-width full-height p-relative">
        <div className="section-background p-absolute full-width full-height"></div>
        <div className="section-container full-height p-relative">
          <div id="w-zajrqtwu" className="com-rectangle p-absolute">
            <div className="rectangle-css full-mask-size mask-position full-height full-width">
              <div className="rectangle-gradient-border"></div>
            </div>
          </div>
          <div id="w-vdwipz9k" className="com-image-block p-absolute animation">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div id="w-bv76anck" className="com-image-block p-absolute animation">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div id="w-avv4pubr" className="com-text-block p-absolute animation">
            <div className="text-block">
              <p className="text-block-css full-width">BUỔI TIỆC ĐƯỢC TỔ CHỨC TẠI<br /></p>
            </div>
          </div>
          <div id="w-oq2hoi54" className="com-text-block p-absolute animation">
            <div className="text-block">
              <p className="text-block-css full-width">431 Hoàng Văn Thụ, Phường 4,<br />Tân Bình, Hồ Chí Minh<br /></p>
            </div>
          </div>
          <div id="w-m1u3o3mx" className="com-text-block p-absolute animation">
            <div className="text-block">
              <p className="text-block-css full-width"><span style={{fontWeight: 700}}>The ADORA Center</span><br /></p>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/PP57rDnyXbgNEVbM8"
            title="Open link https://maps.app.goo.gl/PP57rDnyXbgNEVbM8"
            id="w-prbr1wdj"
            className="com-button p-absolute cursor-pointer animation"
          >
            <div className="button-css full-height full-width">
              <span className="button-loader"></span>
              <div className="button-text full-width u-select-none">Xem Chỉ Đường</div>
            </div>
          </a>
        </div>
      </div>
    </animated.div>
  );
};

export default LocationSection;

