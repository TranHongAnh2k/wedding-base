import React from 'react';
import { COUPLE_INFO, EVENT_INFO } from '../constants/weddingInfo';

const HeroSection = ({ guestName = 'Anh Long123' }) => {
  return (
    <div className="com-section hero-section" data-section="">
      <div className="full-width full-height">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div className="com-image-block p-absolute hero-decorative-image-1">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div className="com-text-block p-absolute animation hero-title-name">
              <div className="full-width full-height">
                <div className="text-block">
                  <h1 className="text-block-css full-width">{COUPLE_INFO.DISPLAY_NAME}</h1>
                </div>
              </div>
            </div>
            <div className="com-text-block p-absolute animation hero-date">
              <div className="text-block">
                  <h2 className="text-block-css full-width">{EVENT_INFO.HERO_DATE_DISPLAY}</h2>
              </div>
            </div>
            <div className="com-text-block p-absolute animation hero-subtitle">
              <div className="text-block">
                <h2 className="text-block-css full-width">THIỆP MỜI</h2>
              </div>
            </div>
            <div className="com-image-block p-absolute hero-main-image">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div className="com-text-block p-absolute animation hero-time">
              <div className="text-block">
                <h2 className="text-block-css full-width">{EVENT_INFO.HERO_TIME_DISPLAY}<br /></h2>
              </div>
            </div>
            <div className="com-image-block p-absolute animation hero-decorative-image-2">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div className="com-image-block p-absolute animation hero-decorative-image-3">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div className="com-image-block p-absolute animation hero-decorative-image-4">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div className="com-text-block p-absolute animation hero-invitation-label">
              <div className="text-block">
                <h2 className="text-block-css full-width">Trân Trọng Kính Mời:<br /></h2>
              </div>
            </div>
            <div className="p-absolute animation hero-decorative-line">
              <div className="line-css full-width">
                <div className="line-container"></div>
              </div>
            </div>
            <div className="com-text-block p-absolute animation hero-guest-name">
              <div className="text-block">
                <h2 className="text-block-css full-width">{guestName}</h2>
              </div>
            </div>
            <div className="com-image-block p-absolute animation hero-background-image-right">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div className="com-image-block p-absolute animation hero-background-image-left">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

