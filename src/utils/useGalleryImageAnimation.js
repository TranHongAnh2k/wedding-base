import { useEffect, useRef, useState } from 'react';
import { useSpring } from '@react-spring/web';

/**
 * Hook để tạo animation đa dạng cho gallery images
 * Hỗ trợ nhiều loại animation: fade, slide, scale, rotate
 * 
 * React-spring tự động xử lý transform từ các giá trị x, y, scale, rotate
 */
export const useGalleryImageAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true,
    delay = 0,
    animationType = 'fadeUp', // fadeUp, fadeLeft, fadeRight, fadeDown, scale, rotate, zoom
    config = { tension: 280, friction: 60 },
  } = options;

  // Định nghĩa các animation variants
  const animationVariants = {
    fadeUp: {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
    },
    fadeDown: {
      from: { opacity: 0, y: -50 },
      to: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, x: 0 },
    },
    fadeRight: {
      from: { opacity: 0, x: 50 },
      to: { opacity: 1, x: 0 },
    },
    scale: {
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1 },
    },
    rotate: {
      from: { opacity: 0, rotate: -10, scale: 0.9 },
      to: { opacity: 1, rotate: 0, scale: 1 },
    },
    zoom: {
      from: { opacity: 0, scale: 1.2 },
      to: { opacity: 1, scale: 1 },
    },
    fadeScale: {
      from: { opacity: 0, scale: 0.5, y: 30 },
      to: { opacity: 1, scale: 1, y: 0 },
    },
  };

  const variant = animationVariants[animationType] || animationVariants.fadeUp;

  const style = useSpring({
    from: variant.from,
    to: isVisible ? variant.to : variant.from,
    config,
    delay,
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return { ref: elementRef, style };
};
