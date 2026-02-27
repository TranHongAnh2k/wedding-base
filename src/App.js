import { useEffect, useState } from 'react';
import './App.css';
import ChooseSideModal from './components/ChooseSideModal';
import CoupleSection from './components/CoupleSection';
import DateSection from './components/DateSection';
import FormSection from './components/FormSection';
import GallerySection from './components/GallerySection';
import HeroSection from './components/HeroSection';
import LocationSection from './components/LocationSection';
import MusicToggle from './components/MusicToggle';
import ThankYouSection from './components/ThankYouSection';
import { initStyles } from './utils/initStyles';

function App() {
  const [selectedSide, setSelectedSide] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [guestName, setGuestName] = useState('');

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

  const checkPathAndSetSide = () => {
    // Check pathname to determine side
    const pathname = window.location.pathname.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const urlGuestName = params.get('guest');
    
    // Check for groom paths: /groom, /chu-re, /groom/, /chu-re/
    if (pathname.includes('groom') || pathname.includes('chu-re')) {
      setSelectedSide('groom');
      // If đã có path thì không show modal, lấy tên từ params hoặc dùng default
      if (urlGuestName) {
        setGuestName(decodeURIComponent(urlGuestName));
      } else {
        // Nếu không có tên trong params, dùng default
        setGuestName('Quý khách');
      }
      setShowModal(false);
      return;
    }
    
    // Check for bride paths: /bride, /co-dau, /bride/, /co-dau/
    if (pathname.includes('bride') || pathname.includes('co-dau')) {
      setSelectedSide('bride');
      // If đã có path thì không show modal, lấy tên từ params hoặc dùng default
      if (urlGuestName) {
        setGuestName(decodeURIComponent(urlGuestName));
      } else {
        // Nếu không có tên trong params, dùng default
        setGuestName('Quý khách');
      }
      setShowModal(false);
      return;
    }
    
    // If no path or root path, show modal
    if (pathname === '/' || pathname === '') {
      setShowModal(true);
      setSelectedSide(null);
      // If guest name exists in URL params, use it
      if (urlGuestName) {
        setGuestName(decodeURIComponent(urlGuestName));
      }
    } else {
      // If path exists but doesn't match, default to showing modal
      setShowModal(true);
      setSelectedSide(null);
      if (urlGuestName) {
        setGuestName(decodeURIComponent(urlGuestName));
      }
    }
  };

  useEffect(() => {
    // Check path on mount
    checkPathAndSetSide();

    // Listen for browser back/forward navigation
    const handlePopState = () => {
      checkPathAndSetSide();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleSideSelect = (side, name) => {
    setSelectedSide(side);
    setGuestName(name);
    setShowModal(false);
  };

  return (
    <div className="App" style={{ width: '100%', minHeight: '100vh' }}>
      {showModal && (
        <ChooseSideModal 
          onSelect={handleSideSelect} 
          initialName={guestName}
          preselectedSide={selectedSide}
        />
      )}
      {selectedSide && (
        <div className="pageview" style={{ width: '100%', position: 'relative' }}>
          <HeroSection guestName={guestName} side={selectedSide} />
          <CoupleSection side={selectedSide} />
          <DateSection side={selectedSide} />
          <LocationSection side={selectedSide} />
          <FormSection side={selectedSide} />
          {/* <MessagesSection side={selectedSide} /> */}
          <GallerySection />
          {/* <ThankYouSection guestName={guestName} /> */}
          <MusicToggle />
        </div>
      )}
    </div>
  );
}

export default App;

