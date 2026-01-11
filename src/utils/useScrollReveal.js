import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

/**
 * Hook để tạo scroll reveal animation sử dụng react-spring
 * Khi element vào viewport, sẽ trigger animation
 * 
 * React-spring tự động xử lý transform từ các giá trị x, y, scale, rotate
 */
export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    from = { opacity: 0, y: 30 },
    to = { opacity: 1, y: 0 },
    config = { tension: 280, friction: 60 },
  } = options;

  const style = useSpring({
    from,
    to: isVisible ? to : from,
    config,
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
  }, [threshold, rootMargin, triggerOnce]);

  return { ref: elementRef, style };
};

/**
 * Animated component wrapper với scroll reveal
 */
export const ScrollReveal = ({ children, className = '', ...options }) => {
  const { ref, style } = useScrollReveal(options);
  
  return (
    <animated.div ref={ref} style={style} className={className}>
      {children}
    </animated.div>
  );
};
