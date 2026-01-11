import React from 'react';
import { useScrollReveal } from '../utils/useScrollReveal';

const GallerySection = () => {
  const galleryRef = useScrollReveal({ threshold: 0.1, rootMargin: '0px' });
  const gallery2Ref = useScrollReveal({ threshold: 0.1, rootMargin: '0px' });

  return (
    <>
      <div ref={galleryRef} id="w-4vfmj0g5" className="com-section" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div id="w-8job6w7j" className="com-text-block p-absolute animation">
              <div className="text-block">
                <p className="text-block-css full-width">Album hình cưới</p>
              </div>
            </div>
            <div id="w-8k7luhft" className="com-image-block p-absolute animation">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div id="w-damsktmr" className="com-image-block p-absolute animation">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div id="w-mibzihv0" className="com-image-block p-absolute animation">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div id="w-ui8sxx6m" className="com-image-block p-absolute animation">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div id="w-grkveilf" className="com-image-block p-absolute animation">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div id="w-y4blj2tv" className="com-image-block p-absolute animation">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={gallery2Ref} id="w-ygrcn8t3" className="com-section" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div id="w-zzn6hpkr" className="com-image-block p-absolute animation">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div id="w-jz70nzjp" className="com-image-block p-absolute animation">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div id="w-05hqo9e4" className="com-image-block p-absolute animation">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
            <div id="w-m5s2x14e" className="com-image-block p-absolute animation">
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute" role="img" aria-label=""></div>
                <div className="image-gradient-border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GallerySection;

