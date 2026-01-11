import React from 'react';
import { animated } from '@react-spring/web';
import { useGalleryImageAnimation } from '../utils/useGalleryImageAnimation';

/**
 * Component cho một gallery image với animation
 */
const GalleryImage = ({ className, imageUrl, animationType, delay, triggerOnce = false }) => {
  const { ref, style } = useGalleryImageAnimation({ 
    animationType, 
    delay, 
    triggerOnce 
  });

  // Override background image nếu có imageUrl từ config
  const backgroundStyle = imageUrl ? {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  } : {};

  // Combine base classes with custom className
  const combinedClassName = className 
    ? `com-image-block p-absolute ${className}`
    : 'com-image-block p-absolute';

  return (
    <animated.div ref={ref} style={style} className={combinedClassName}>
      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
        <div className="image-background p-absolute" style={backgroundStyle} role="img" aria-label=""></div>
        <div className="image-gradient-border"></div>
      </div>
    </animated.div>
  );
};

export default GalleryImage;

