'use client';

import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import CustomVideoPlayer from '@/components/CustomVideoPlayer';
import { getAllProducts } from '@/lib/products';
import { useEffect, useRef } from 'react';

export default function Home() {
  const products = getAllProducts();
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  // Hero section video - showcasing One Dash product
  const heroVideo = '/videos/VIDEO-2025-12-09-18-20-47.mp4';
  
  // Sample videos for gallery preview (first 3)
  const galleryVideos = [
    '/videos/VIDEO-2025-12-09-18-20-47.mp4',
    '/videos/VIDEO-2025-12-09-18-39-19.mp4',
    '/videos/VIDEO-2025-12-09-18-43-42.mp4',
  ];

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) {
      console.error('Video ref is null!');
      return;
    }

    console.log('Video element found:', {
      src: video.src,
      width: video.offsetWidth,
      height: video.offsetHeight,
      style: window.getComputedStyle(video),
    });

    video.muted = true;
    video.volume = 0;
    
    const playVideo = async () => {
      try {
        await video.play();
        console.log('Hero video playing - dimensions:', video.videoWidth, 'x', video.videoHeight);
        console.log('Video element computed style:', {
          display: window.getComputedStyle(video).display,
          visibility: window.getComputedStyle(video).visibility,
          opacity: window.getComputedStyle(video).opacity,
          zIndex: window.getComputedStyle(video).zIndex,
          position: window.getComputedStyle(video).position,
        });
      } catch (error) {
        console.warn('Autoplay prevented', error);
        const handleInteraction = () => {
          video.play().catch(console.error);
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('touchstart', handleInteraction);
        };
        document.addEventListener('click', handleInteraction, { once: true });
        document.addEventListener('touchstart', handleInteraction, { once: true });
      }
    };

    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded:', {
        videoWidth: video.videoWidth,
        videoHeight: video.videoHeight,
        duration: video.duration,
      });
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener('canplay', playVideo, { once: true });
      video.addEventListener('loadeddata', playVideo, { once: true });
    }

    return () => {
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('loadeddata', playVideo);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-screen w-full overflow-hidden" style={{ position: 'relative', height: '100vh', width: '100%' }}>
        {/* Video Background - NO className, pure inline styles */}
        <video
          ref={heroVideoRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 1,
            display: 'block',
            visibility: 'visible',
            opacity: 1,
            backgroundColor: '#000',
          }}
        />
        
        {/* Dark overlay - reduced opacity to test */}
        <div 
          className="pointer-events-none"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
        
        {/* Content */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 20,
            width: '100%',
            maxWidth: '56rem',
            padding: '0 1rem',
            textAlign: 'center',
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold italic mb-6">
            <span className="text-[#FFD700]">ONE</span>{' '}
            <span className="text-[#DC143C]">DASH</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold text-white">
            Authentic Jamaican Flavor in Every Dash
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            All-Natural Marinades & Seasonings • Made in Jamaica
          </p>
          <Link
            href="#products"
            className="inline-block bg-[#DC143C] hover:bg-[#B8122F] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* About/Story Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              <span className="text-[#DC143C]">Authentic</span>{' '}
              <span className="text-[#FFD700]">Jamaican</span>{' '}
              <span className="text-[#00AA00]">Flavor</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                <strong className="text-[#DC143C]">One Dash</strong> brings authentic Jamaican 
                flavor to households worldwide using natural, locally sourced ingredients that 
                deliver convenience, health, and cultural pride in every dash.
              </p>
              <p>
                Our mission is to make authentic Jamaican cooking accessible to everyone. 
                With <strong>100% Jamaican-grown ingredients</strong> and no artificial 
                flavoring, colorings, or preservatives, One Dash is the all-in-one seasoning 
                solution you need.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#FFD700]">
                  <div className="text-4xl mb-4">🌿</div>
                  <h3 className="font-bold text-xl mb-2 text-[#00AA00]">All Natural</h3>
                  <p className="text-gray-600">No artificial ingredients, just pure Jamaican flavor</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#DC143C]">
                  <div className="text-4xl mb-4">🇯🇲</div>
                  <h3 className="font-bold text-xl mb-2 text-[#DC143C]">Authentic</h3>
                  <p className="text-gray-600">Made with locally sourced Jamaican ingredients</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#00AA00]">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="font-bold text-xl mb-2 text-[#00AA00]">Convenient</h3>
                  <p className="text-gray-600">One Dash is all you need - ready to use</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Preview Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              See <span className="font-bold italic text-[#00AA00]">One Dash</span> in Action
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Watch our videos to see how <span className="font-bold italic text-[#DC143C]">One Dash</span> brings authentic Jamaican flavor to your kitchen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {galleryVideos.map((video, index) => (
              <CustomVideoPlayer 
                key={index} 
                src={video} 
                autoplay={true}
                muted={true}
                className="aspect-video"
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block bg-[#DC143C] hover:bg-[#B8122F] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
            >
              View All Videos
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Our <span className="text-[#DC143C]">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of authentic Jamaican marinades, seasonings, and sauces. 
              Each product is crafted with care using traditional recipes and all-natural ingredients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products-page"
              className="inline-block bg-[#DC143C] hover:bg-[#B8122F] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
            >
              View All Products with Search & Filters
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-[#DC143C] to-[#B8122F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Authentic Jamaican Flavor?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Shop our collection of all-natural marinades and seasonings today
          </p>
          <Link
            href="#products"
            className="inline-block bg-[#FFD700] hover:bg-[#FFC700] text-[#DC143C] font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
}
