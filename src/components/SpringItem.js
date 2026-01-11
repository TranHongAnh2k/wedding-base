import React from 'react';
import { animated } from '@react-spring/web';
import { useScrollReveal } from '../utils/useScrollReveal';

const animatedTags = {
  div: animated.div,
  a: animated.a,
  section: animated.section,
  span: animated.span,
};

const SpringItem = ({
  as = 'div',
  preset = 'fadeInUp',
  delay = 0,
  duration = 800,
  config,
  from,
  to,
  className = '',
  style: styleProp,
  children,
  triggerOnce = true,
  threshold,
  rootMargin,
  ...rest
}) => {
  const AnimatedTag = animatedTags[as] || animated.div;
  const { ref, style } = useScrollReveal({
    preset,
    delay,
    duration,
    config,
    from,
    to,
    triggerOnce,
    threshold,
    rootMargin,
  });

  const mergedStyle = styleProp ? { ...style, ...styleProp } : style;

  return (
    <AnimatedTag ref={ref} style={mergedStyle} className={className} {...rest}>
      {children}
    </AnimatedTag>
  );
};

export default SpringItem;

