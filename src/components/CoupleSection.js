import React, { useState } from 'react';
import { animated } from '@react-spring/web';
import { useScrollReveal } from '../utils/useScrollReveal';
import { COUPLE_INFO } from '../constants/weddingInfo';

const COUPLE_IMAGE_URL = 'https://static-ai-lab.edupia.vn/test-image/image10.jpg';

const CoupleSection = () => {
  const { ref, style } = useScrollReveal({ 
    threshold: 0.1, 
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 }
  });

  const [isCoupleImageOpen, setIsCoupleImageOpen] = useState(false);

  return (
    <animated.div ref={ref} style={style} className="com-section couple-section" data-section="">
      <div className="section-wrapper full-width full-height p-relative">
        <div className="section-background p-absolute full-width full-height"></div>
        <div className="section-container full-height p-relative">
          <div className="com-text-block p-absolute animation couple-header-text">
            <div className="text-block">
              <h2 className="text-block-css full-width">{COUPLE_INFO.HEADER}<br /></h2>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-groom-name">
            <div className="full-width full-height">
              <div className="text-block">
                <h1 className="text-block-css full-width">{COUPLE_INFO.GROOM_NAME}</h1>
              </div>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-bride-name">
            <div className="full-width full-height">
              <div className="text-block">
                <h1 className="text-block-css full-width">{COUPLE_INFO.BRIDE_NAME}</h1>
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
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position" style={{position: 'relative'}}>
              {/* <div className="image-background p-absolute" role="img" aria-label=""></div> */}
               <img
                 src={COUPLE_IMAGE_URL}
                 alt="Ảnh thiệp cưới"
                 className="hero-main-image-clickable"
                 style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'pointer'}}
                 onClick={() => setIsCoupleImageOpen(true)}
               />
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-groom-side-label">
            <div className="text-block">
              <p className="text-block-css full-width">&nbsp;{COUPLE_INFO.HOUSE_GROOM_LABEL}<br /><br /></p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-bride-side-label">
            <div className="text-block">
              <p className="text-block-css full-width">&nbsp;{COUPLE_INFO.HOUSE_BRIDE_LABEL}<br /><br /></p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-groom-location">
            <div className="text-block">
              <p className="text-block-css full-width">{COUPLE_INFO.BRIDE_LOCATION}</p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-bride-location">
            <div className="text-block">
              <p className="text-block-css full-width">{COUPLE_INFO.GROOM_LOCATION}</p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-groom-parents">
            <div className="text-block">
              <p className="text-block-css full-width">
                {COUPLE_INFO.GROOM_PARENTS.map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation couple-bride-parents">
            <div className="text-block">
              <p className="text-block-css full-width">
                {COUPLE_INFO.BRIDE_PARENTS.map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
          {isCoupleImageOpen && (
            <div className="image-modal-backdrop" onClick={() => setIsCoupleImageOpen(false)}>
              <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="image-modal-close"
                  onClick={() => setIsCoupleImageOpen(false)}
                >
                  ×
                </button>
                <img src={COUPLE_IMAGE_URL} alt="Ảnh cô dâu chú rể phóng to" className="image-modal-img" />
              </div>
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
};

export default CoupleSection;

