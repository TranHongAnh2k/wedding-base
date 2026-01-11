export const animationPresets = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  fadeInUp: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    from: { opacity: 0, y: -30 },
    to: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    from: { opacity: 0, x: -40 },
    to: { opacity: 1, x: 0 },
  },
  slideInRight: {
    from: { opacity: 0, x: 40 },
    to: { opacity: 1, x: 0 },
  },
  zoomIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
  },
};

export const resolvePreset = (preset, fallback = animationPresets.fadeInUp) =>
  animationPresets[preset] || fallback;

