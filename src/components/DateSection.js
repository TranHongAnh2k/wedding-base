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
    <animated.div ref={ref} style={style} id="w-0k5qs9kr" className="com-section" data-section="">
      <div className="section-wrapper full-width full-height p-relative">
        <div className="section-background p-absolute full-width full-height"></div>
        <div className="section-container full-height p-relative">
          <div id="w-qube8kir" className="com-text-block p-absolute animation">
            <div className="text-block">
              <p className="text-block-css full-width">15<br /></p>
            </div>
          </div>
          <div id="w-dyyqc44u" className="com-image-block p-absolute animation">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div id="w-p5zt0rep" className="com-image-block p-absolute animation">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div id="w-to8ewwrh" className="com-image-block p-absolute animation">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div id="w-6rllui0l" className="com-text-block p-absolute animation">
            <div className="text-block">
              <h2 className="text-block-css full-width">Trân Trọng Kính Mời<br /></h2>
            </div>
          </div>
          <div id="w-20spjy25" className="com-image-block p-absolute animation">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div id="w-8txukiew" className="com-text-block p-absolute animation">
            <div className="text-block">
              <p className="text-block-css full-width">THAM DỰ TIỆC MỪNG LỄ THÀNH HÔN<br />Vào Lúc<br /></p>
            </div>
          </div>
          <div id="w-qkyo9emq" className="com-text-block p-absolute animation">
            <div className="text-block">
              <p className="text-block-css full-width">10 giờ 00<br /></p>
            </div>
          </div>
          <div id="w-atv2737b" className="com-text-block p-absolute animation">
            <div className="text-block">
              <p className="text-block-css full-width"><span style={{fontWeight: 'normal'}}>Năm 2025</span><br /></p>
            </div>
          </div>
          <div id="w-s8t0kmal" className="com-text-block p-absolute animation">
            <div className="text-block">
              <p className="text-block-css full-width">(Tức Ngày 18 Tháng 01 Năm Ất Tỵ)<br /></p>
            </div>
          </div>
          <div id="w-14ongvqg" className="com-text-block p-absolute animation">
            <div className="text-block">
              <p className="text-block-css full-width">Thứ 5<br /></p>
            </div>
          </div>
          <div id="w-tfi5tzev" className="com-text-block p-absolute animation">
            <div className="text-block">
              <p className="text-block-css full-width">Tháng 2<br /></p>
            </div>
          </div>
          <div id="w-1qh07suv" className="p-absolute animation">
            <div className="full-width full-height">
              <div className="line-css full-width">
                <div className="line-container"></div>
              </div>
            </div>
          </div>
          <div id="w-26ax6ike" className="p-absolute animation">
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

