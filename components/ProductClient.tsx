'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product, getAllProducts } from '@/lib/products';
import { useCart } from './CartContext';
import ToastNotification from './ToastNotification';
import ProductCard from './ProductCard';
import { useState, useEffect, useRef } from 'react';

interface ProductClientProps {
  product: Product;
}

export default function ProductClient({ product }: ProductClientProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const mediaWrapperRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState(0);
  
  // Other products (excluding current product)
  const otherProducts = getAllProducts().filter(p => p.id !== product.id);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate items per view based on screen size
  // Start with 3 (desktop default) to match server-side rendering
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // Set mounted flag and initial items per view after hydration
    setIsMounted(true);
    const getItemsPerView = () => {
      return window.innerWidth < 768 ? 1 : 3;
    };
    setItemsPerView(getItemsPerView());
    
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
      setCurrentIndex(0); // Reset to start when resizing
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = 0;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate maxIndex based on actual items per view (use 3 as default for SSR)
  const currentItemsPerView = isMounted ? itemsPerView : 3;
  const maxIndex = Math.max(0, otherProducts.length - currentItemsPerView);
  
  const scrollToIndex = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
    
    if (carouselRef.current && isMounted) {
      const container = carouselRef.current;
      const scrollContainer = container.querySelector('.product-carousel-scroll') as HTMLElement;
      if (scrollContainer) {
        const firstCard = scrollContainer.querySelector('.flex-shrink-0') as HTMLElement;
        if (firstCard) {
          const cardWidth = firstCard.offsetWidth;
          const gap = 24; // gap-6 = 1.5rem = 24px
          const scrollPosition = clampedIndex * (cardWidth + gap);
          
          scrollContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };
  
  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - currentItemsPerView);
    scrollToIndex(newIndex);
  };
  
  const handleNext = () => {
    const newIndex = Math.min(maxIndex, currentIndex + currentItemsPerView);
    scrollToIndex(newIndex);
  };
  
  // Update current index based on scroll position
  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollContainer = carouselRef.current.querySelector('.product-carousel-scroll') as HTMLElement;
        if (scrollContainer) {
          const firstCard = scrollContainer.querySelector('.flex-shrink-0') as HTMLElement;
          if (firstCard) {
            const cardWidth = firstCard.offsetWidth;
            const gap = 24;
            const scrollLeft = scrollContainer.scrollLeft;
            const newIndex = Math.round(scrollLeft / (cardWidth + gap));
            setCurrentIndex(Math.max(0, Math.min(newIndex, maxIndex)));
          }
        }
      }
    };
    
    const scrollContainer = carouselRef.current?.querySelector('.product-carousel-scroll') as HTMLElement;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [isMounted, maxIndex]);

  const handleAddToCart = () => {
    setIsAdding(true);
    // Small delay for button feedback
    setTimeout(() => {
      addToCart(product, quantity);
      setIsAdding(false);
      setAddedToCart(true);
    }, 150);
  };

  useEffect(() => {
    const updateStickyPosition = () => {
      if (mediaRef.current && whyChooseRef.current) {
        const mediaElement = mediaRef.current;
        const whyChooseElement = whyChooseRef.current;
        const gridContainer = mediaElement.closest('.grid') as HTMLElement;
        
        if (gridContainer) {
          const scrollY = window.scrollY;
          
          // Get positions relative to document
          const gridRect = gridContainer.getBoundingClientRect();
          const gridTop = gridRect.top + scrollY;
          
          const mediaHeight = mediaElement.offsetHeight;
          const stickyTopOffset = 32; // top offset for sticky
          
          const whyChooseRect = whyChooseElement.getBoundingClientRect();
          const whyChooseBottom = whyChooseRect.bottom + scrollY;
          
          // Calculate the maximum scroll position where media bottom aligns with whyChoose bottom
          // When sticky: media top is at scrollY + stickyTopOffset
          // Media bottom is at scrollY + stickyTopOffset + mediaHeight
          // We want: scrollY + stickyTopOffset + mediaHeight = whyChooseBottom
          // So: scrollY = whyChooseBottom - stickyTopOffset - mediaHeight
          const maxScrollPosition = whyChooseBottom - stickyTopOffset - mediaHeight;
          
          // If we're before the grid starts, don't stick
          if (scrollY < gridTop) {
            setStickyTop(0);
          }
          // If we're in the sticky range but before the stop point
          else if (scrollY <= maxScrollPosition) {
            // Normal sticky behavior - stay at top offset
            setStickyTop(0);
          }
          // If we've passed the stop point, adjust to keep bottom aligned
          else {
            // Calculate how much past the stop point we've scrolled
            const pastStop = scrollY - maxScrollPosition;
            // Move the element up by that amount to keep its bottom at whyChoose bottom
            setStickyTop(-pastStop);
          }
        }
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(updateStickyPosition);
    };

    const handleResize = () => {
      requestAnimationFrame(updateStickyPosition);
    };

    // Initial calculation
    updateStickyPosition();
    
    // Also update after layout is complete and images load
    const timeoutId = setTimeout(updateStickyPosition, 100);
    const timeoutId2 = setTimeout(updateStickyPosition, 500);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-gray-600 hover:text-[#DC143C]">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/#products" className="text-gray-600 hover:text-[#DC143C]">
            Products
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8">
          {/* Product Image */}
          <div ref={mediaWrapperRef} className="lg:self-start">
            <div 
              ref={mediaRef}
              className="relative h-[500px] bg-gray-100 rounded-lg overflow-hidden lg:sticky lg:top-8"
              style={{ 
                transform: stickyTop < 0 ? `translateY(${stickyTop}px)` : 'none',
                transition: 'transform 0.1s ease-out'
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-[#DC143C]">${product.price}</span>
                <span className="text-gray-600">•</span>
                <span className="text-lg text-gray-600">{product.netWeight}</span>
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-[#00AA00] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  All Natural
                </span>
                <span className="bg-[#FFD700] text-[#DC143C] px-3 py-1 rounded-full text-sm font-semibold">
                  No Artificial Ingredients
                </span>
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {product.longDescription}
              </p>
              <p className="text-xl font-semibold text-[#DC143C] mb-4">
                One Dash is all you need!
              </p>
            </div>

            {/* Ingredients */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Ingredients</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-start space-x-2 text-gray-700">
                    <span className="text-[#00AA00] mt-1">•</span>
                    <span>{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-4 mb-6">
                <label htmlFor="quantity" className="text-lg font-semibold text-gray-800">
                  Quantity:
                </label>
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-0 focus:ring-0 text-lg font-semibold"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`w-full bg-[#DC143C] hover:bg-[#B8122F] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 ${
                  isAdding
                    ? 'opacity-75 cursor-not-allowed scale-95'
                    : 'hover:scale-105 active:scale-95'
                }`}
              >
                {isAdding ? (
                  <>
                    <svg
                      className="animate-spin h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Adding...</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
              {addedToCart && (
                <ToastNotification
                  message={`Added to cart! ${quantity} ${quantity === 1 ? 'item' : 'items'}`}
                  type="success"
                  duration={3000}
                  onClose={() => setAddedToCart(false)}
                />
              )}
            </div>

            {/* Product Features */}
            <div ref={whyChooseRef} className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Why Choose One Dash?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-[#00AA00] text-xl">✓</span>
                  <span>100% Jamaican-grown ingredients</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#00AA00] text-xl">✓</span>
                  <span>No artificial flavoring, colorings, or preservatives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#00AA00] text-xl">✓</span>
                  <span>Ready to use - no additional ingredients needed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#00AA00] text-xl">✓</span>
                  <span>Longer shelf life than homemade alternatives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#00AA00] text-xl">✓</span>
                  <span>Authentic Jamaican flavor in every dash</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Other Products Section */}
        {otherProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Other <span className="text-[#DC143C]">Products</span>
            </h2>
            
            <div className="relative">
              {/* Carousel Container */}
              <div
                ref={carouselRef}
                className="overflow-x-auto overflow-y-hidden px-2"
                style={{
                  scrollBehavior: 'smooth',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                <style jsx global>{`
                  .product-carousel-scroll::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <div className="flex gap-6 product-carousel-scroll">
                  {otherProducts.map((otherProduct) => (
                    <div
                      key={otherProduct.id}
                      className="flex-shrink-0 w-[calc(100vw-8rem)] md:w-[calc((100%-3rem)/3)] min-w-[280px] md:min-w-[300px]"
                    >
                      <ProductCard product={otherProduct} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
              {currentIndex > 0 && (
                <button
                  onClick={handlePrev}
                  className="hidden md:block absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all hover:scale-110"
                  aria-label="Previous products"
                >
                  <svg
                    className="w-6 h-6 text-[#DC143C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}
              
              {currentIndex < maxIndex && (
                <button
                  onClick={handleNext}
                  className="hidden md:block absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all hover:scale-110"
                  aria-label="Next products"
                >
                  <svg
                    className="w-6 h-6 text-[#DC143C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Back to Products */}
        <div className="mt-12 text-center">
          <Link
            href="/#products"
            className="inline-block text-[#DC143C] hover:text-[#B8122F] font-semibold text-lg transition-colors"
          >
            ← Back to All Products
          </Link>
        </div>
      </div>
    </div>
  );
}

