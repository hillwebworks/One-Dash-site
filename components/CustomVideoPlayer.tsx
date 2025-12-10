'use client';

import { useState, useRef, useEffect } from 'react';

interface CustomVideoPlayerProps {
  src: string;
  title?: string;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
}

export default function CustomVideoPlayer({ 
  src, 
  title, 
  className = '',
  autoplay = true,
  muted = true 
}: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(muted);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Load thumbnail (first frame) only once
    const handleLoadedMetadata = () => {
      if (!thumbnailLoaded) {
        // Only seek to get thumbnail if video hasn't been played yet
        if (video.currentTime === 0) {
          video.currentTime = 0.1;
        }
        setThumbnailLoaded(true);
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // If autoplay is enabled, start playing
    if (autoplay && isPlaying) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay might fail, that's okay
        });
      }
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [autoplay, thumbnailLoaded]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      // Don't reset currentTime - let it stay where it is
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    
    if (newVolume > 0 && isMuted) {
      video.muted = false;
      setIsMuted(false);
    } else if (newVolume === 0) {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    } else if ((video as any).msRequestFullscreen) {
      (video as any).msRequestFullscreen();
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="relative bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover rounded-lg"
          loop
          playsInline
          muted={isMuted}
          autoPlay={autoplay}
          controls={false}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Custom Controls Overlay - Bottom Right */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute bottom-3 right-3 flex items-center space-x-2 pointer-events-auto">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="bg-[#DC143C] hover:bg-[#B8122F] text-white rounded-full p-2 transition-colors shadow-lg"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Volume Control */}
            <div 
              className="relative"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <button
                onClick={toggleMute}
                className="bg-[#FFD700] hover:bg-[#FFC700] text-[#DC143C] rounded-full p-2 transition-colors shadow-lg"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : volume < 0.5 ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>
              {showVolumeSlider && (
                <div className="absolute bottom-full right-0 mb-2 bg-black/90 rounded-lg p-2">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-[#FFD700]"
                    style={{
                      background: `linear-gradient(to right, #FFD700 0%, #FFD700 ${volume * 100}%, #666 ${volume * 100}%, #666 100%)`
                    }}
                  />
                </div>
              )}
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="bg-[#00AA00] hover:bg-[#008800] text-white rounded-full p-2 transition-colors shadow-lg"
              aria-label="Fullscreen"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {title && (
        <p className="mt-2 text-sm text-gray-600 text-center font-medium">{title}</p>
      )}
    </div>
  );
}
