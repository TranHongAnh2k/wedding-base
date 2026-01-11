// Initialize styles similar to app.js from original HTML
// This script applies dynamic styles to elements based on their IDs

export const initStyles = () => {
  // Set viewport meta tag for mobile
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    const isMobile = width < 768;
    const mobileWidth = 420;
    
    let viewportContent;
    if (isMobile) {
      const scale = width !== mobileWidth ? width / mobileWidth : 1;
      viewportContent = `width=${mobileWidth}, user-scalable=no, initial-scale=${scale}, minimum-scale=${scale}, maximum-scale=${scale}`;
    } else {
      viewportContent = 'width=960, user-scalable=no, initial-scale=1.0';
    }
    
    // Update or create viewport meta tag
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', viewportContent);
    
    // Set display mode
    window.DISPLAY = isMobile ? 'mobile' : 'desktop';
  }
};

