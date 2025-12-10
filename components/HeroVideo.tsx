'use client';

import { useEffect, useRef } from 'react';

interface HeroVideoProps {
  src: string;
}

export default function HeroVideo({ src }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is muted and set to play
    video.muted = true;
    video.volume = 0;
    
    // Try to play the video
    const playVideo = async () => {
      try {
        await video.play();
        console.log('Video playing successfully');
      } catch (error) {
        console.warn('Autoplay prevented:', error);
        // Play on user interaction
        const handleInteraction = () => {
          video.play().catch(console.error);
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('touchstart', handleInteraction);
        };
        document.addEventListener('click', handleInteraction, { once: true });
        document.addEventListener('touchstart', handleInteraction, { once: true });
      }
    };

    // Play when video is ready
    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener('canplay', playVideo, { once: true });
      video.addEventListener('loadeddata', playVideo, { once: true });
    }

    return () => {
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('loadeddata', playVideo);
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-black">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        onError={(e) => {
          console.error('Video error:', e);
          const target = e.target as HTMLVideoElement;
          console.error('Video error details:', target.error);
        }}
        onLoadedMetadata={() => {
          console.log('Video metadata loaded:', src);
        }}
        onPlaying={() => {
          console.log('Video is playing');
        }}
      />
    </div>
  );
}
