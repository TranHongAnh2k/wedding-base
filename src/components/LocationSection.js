import React from 'react';
import { animated } from '@react-spring/web';
import { useScrollReveal } from '../utils/useScrollReveal';
import { LOCATION_INFO } from '../constants/weddingInfo';

const LocationSection = () => {
  const { ref, style } = useScrollReveal({ 
    threshold: 0.1, 
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 }
  });

  return (
    <animated.div ref={ref} style={style} className="com-section location-section" data-section="">
      <div className="section-wrapper full-width full-height p-relative">
        <div className="section-background p-absolute full-width full-height"></div>
        <div className="section-container full-height p-relative">
          <div className="com-rectangle p-absolute location-frame">
            <div className="rectangle-css full-mask-size mask-position full-height full-width">
              <div className="rectangle-gradient-border"></div>
            </div>
          </div>
          <div className="com-image-block p-absolute animation location-main-image">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div className="com-image-block p-absolute animation location-pin-icon">
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute" role="img" aria-label=""></div>
              <div className="image-gradient-border"></div>
            </div>
          </div>
          <div className="com-text-block p-absolute animation location-header-text">
            <div className="text-block">
              <p className="text-block-css full-width">{LOCATION_INFO.HEADER}<br /></p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation location-address">
            <div className="text-block">
              <p className="text-block-css full-width">
                {LOCATION_INFO.ADDRESS_LINES.map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
          <div className="com-text-block p-absolute animation location-venue-name">
            <div className="text-block">
              <p className="text-block-css full-width">
                <span style={{fontWeight: 700}}>{LOCATION_INFO.VENUE_NAME}</span>
                <br />
              </p>
            </div>
          </div>
          <a
            href={LOCATION_INFO.MAP_URL}
            title={`Open link ${LOCATION_INFO.MAP_URL}`}
            className="com-button p-absolute cursor-pointer animation location-map-button"
          >
            <div className="button-css full-height full-width">
              <span className="button-loader"></span>
              <div className="button-text full-width u-select-none">{LOCATION_INFO.MAP_CTA}</div>
            </div>
          </a>
        </div>
      </div>
    </animated.div>
  );
};

export default LocationSection;

