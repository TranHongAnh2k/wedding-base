import React, { useState, useEffect, useRef } from 'react';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;

    const startOnce = () => {
      if (!hasStarted) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            setHasStarted(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    document.body.addEventListener('click', startOnce, { once: true });
    document.body.addEventListener('touchstart', startOnce, { once: true, passive: true });
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      document.body.removeEventListener('click', startOnce);
      document.body.removeEventListener('touchstart', startOnce);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [hasStarted]);

  const handleToggle = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        className="background-music"
        src="https://statics.pancake.vn/web-media/5e/ee/bf/4a/afa10d3bdf98ca17ec3191ebbfd3c829d135d06939ee1f1b712d731d-w:0-h:0-l:2938934-t:audio/mpeg.mp3"
        preload="none"
        loop
      />
      <div
        className={`music-toggle ${isPlaying ? 'vibrating' : ''}`}
        title="Bật / Tắt nhạc"
        aria-label="Bật / Tắt nhạc"
        onClick={handleToggle}
      >
        <img
          className="play-icon"
          src={`${process.env.PUBLIC_URL}/images/play-icon.png`}
          alt="Play"
          width="44"
          height="44"
          style={{ display: isPlaying ? 'none' : 'block' }}
        />
        <img
          className="pause-icon"
          src={`${process.env.PUBLIC_URL}/images/pause-icon.gif`}
          alt="Pause"
          width="44"
          height="44"
          style={{ display: isPlaying ? 'block' : 'none' }}
        />
      </div>
    </>
  );
};

export default MusicToggle;

