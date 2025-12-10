'use client';

import { useEffect, useRef } from 'react';

interface HeroImageProps {
  src: string;
  alt?: string;
}

export default function HeroImage({ src, alt = 'Hero background' }: HeroImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax scrolling effect
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      const heroSection = containerRef.current.closest('section');
      
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroTop = heroRect.top;
        const heroHeight = heroRect.height;
        
        // Only apply parallax when hero section is visible
        if (heroTop < window.innerHeight && heroTop + heroHeight > 0) {
          // Parallax effect: image moves slower than scroll
          const parallaxOffset = scrollY * 0.5;
          containerRef.current.style.transform = `translateY(${parallaxOffset}px)`;
        }
      }
    };

    // Throttle scroll for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        zIndex: 0,
        minWidth: '100%',
        minHeight: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          zIndex: 0,
          backgroundColor: 'transparent'
        }}
        onError={(e) => {
          console.error('Image failed to load:', src, e);
        }}
        onLoad={() => {
          console.log('Hero image loaded successfully:', src);
          if (containerRef.current) {
            console.log('Container dimensions:', {
              width: containerRef.current.offsetWidth,
              height: containerRef.current.offsetHeight
            });
          }
        }}
      />
    </div>
  );
}
