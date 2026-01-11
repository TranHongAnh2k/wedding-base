import React, { useEffect } from 'react';
import MusicToggle from './components/MusicToggle';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import DateSection from './components/DateSection';
import LocationSection from './components/LocationSection';
import FormSection from './components/FormSection';
import GallerySection from './components/GallerySection';
import { initStyles } from './utils/initStyles';
import './App.css';

function App() {
  useEffect(() => {
    try {
      // Initialize styles (viewport, display mode, etc.)
      initStyles();
      
      // Set viewport height
      const windowHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty('--viewport-height', `${window.innerHeight}px`);
      };
      
      window.addEventListener('resize', windowHeight);
      windowHeight();

      return () => {
        window.removeEventListener('resize', windowHeight);
      };
    } catch (error) {
      console.error('Error in App useEffect:', error);
    }
  }, []);

  const params = new URLSearchParams(window.location.search);
  const guestName = params.get('guest') || 'Anh Long123';

  return (
    <div className="App" style={{ width: '100%', minHeight: '100vh' }}>
      <div className="pageview" style={{ width: '100%', position: 'relative' }}>
        <HeroSection guestName={guestName} />
        <CoupleSection />
        <DateSection />
        <LocationSection />
        <FormSection />
        <GallerySection />
        <MusicToggle />
      </div>
    </div>
  );
}

export default App;

