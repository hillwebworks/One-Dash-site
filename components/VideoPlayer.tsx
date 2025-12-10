'use client';

import { useState } from 'react';

interface VideoPlayerProps {
  src: string;
  title?: string;
  className?: string;
}

export default function VideoPlayer({ src, title, className = '' }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!isPlaying ? (
        <div
          className="relative cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <video
            src={src}
            className="w-full h-full object-cover rounded-lg"
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all rounded-lg">
            <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-12 h-12 text-[#DC143C]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <video
          src={src}
          className="w-full h-full object-cover rounded-lg"
          controls
          autoPlay
          playsInline
        />
      )}
      {title && (
        <p className="mt-2 text-sm text-gray-600 text-center">{title}</p>
      )}
    </div>
  );
}

