import React, { useState, useEffect } from 'react';
import { animated } from '@react-spring/web';
import { useSpring } from '@react-spring/web';

const ChooseSideModal = ({ onSelect, initialName = '', preselectedSide = null }) => {
  const [guestName, setGuestName] = useState(initialName);
  const [error, setError] = useState('');

  // Update guestName when initialName changes
  useEffect(() => {
    if (initialName) {
      setGuestName(initialName);
    }
  }, [initialName]);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
  });

  const slideUp = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: { duration: 400 },
    delay: 100,
  });

  const handleSelect = (side) => {
    // Validate tên không được để trống
    const trimmedName = guestName.trim();
    if (!trimmedName) {
      setError('Vui lòng nhập tên của bạn');
      return;
    }

    // Update URL with path and guest name param
    const newPath = side === 'groom' ? '/groom' : '/bride';
    const params = new URLSearchParams();
    params.set('guest', encodeURIComponent(trimmedName));
    const newUrl = `${newPath}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
    onSelect(side, trimmedName);
  };

  const handleNameChange = (e) => {
    setGuestName(e.target.value);
    if (error) {
      setError('');
    }
  };

  return (
    <animated.div
      style={fadeIn}
      className="choose-side-modal-backdrop"
      onClick={(e) => {
        // Prevent closing on backdrop click - user must choose
        e.stopPropagation();
      }}
    >
      <animated.div
        style={slideUp}
        className="choose-side-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="choose-side-modal-header">
          <h2>Thông tin khách mời</h2>
          <p>Vui lòng nhập tên và chọn phía mời</p>
        </div>
        <div className="choose-side-modal-name-input">
          <input
            type="text"
            className="guest-name-input"
            placeholder="Nhập tên của bạn"
            value={guestName}
            onChange={handleNameChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && guestName.trim()) {
                // Allow Enter to submit if name is filled
              }
            }}
            autoFocus
          />
          {error && <div className="input-error">{error}</div>}
        </div>
        <div className="choose-side-modal-buttons">
          <button
            className="choose-side-button groom-button"
            onClick={() => handleSelect('groom')}
          >
            <div className="button-icon">👨</div>
            <div className="button-text">
              <h3>Chú Rể</h3>
              <p>Nhà Trai</p>
            </div>
          </button>
          <button
            className="choose-side-button bride-button"
            onClick={() => handleSelect('bride')}
          >
            <div className="button-icon">👩</div>
            <div className="button-text">
              <h3>Cô Dâu</h3>
              <p>Nhà Gái</p>
            </div>
          </button>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default ChooseSideModal;

