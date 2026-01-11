import React from 'react';
import { animated } from '@react-spring/web';
import { useScrollReveal } from '../utils/useScrollReveal';
import GalleryImage from './GalleryImage';
import { gallery1Images, gallery2Images } from '../config/galleryConfig';

const GallerySection = () => {
  const { ref: galleryRef, style: galleryStyle } = useScrollReveal({ 
    threshold: 0.1, 
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 }
  });
  const { ref: gallery2Ref, style: gallery2Style } = useScrollReveal({ 
    threshold: 0.1, 
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 }
  });

  return (
    <>
      <animated.div ref={galleryRef} style={galleryStyle} className="com-section gallery-section-1" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div className="com-text-block p-absolute animation gallery-title">
              <div className="text-block">
                <p className="text-block-css full-width">Album hình cưới</p>
              </div>
            </div>
            {gallery1Images.map((image) => (
              <GalleryImage
                key={image.className}
                className={image.className}
                imageUrl={image.imageUrl}
                animationType={image.animationType}
                delay={image.delay}
                triggerOnce={false}
              />
            ))}
          </div>
        </div>
      </animated.div>
      <animated.div ref={gallery2Ref} style={gallery2Style} className="com-section gallery-section-2" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            {gallery2Images.map((image) => (
              <GalleryImage
                key={image.className}
                className={image.className}
                imageUrl={image.imageUrl}
                animationType={image.animationType}
                delay={image.delay}
                triggerOnce={false}
              />
            ))}
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default GallerySection;

