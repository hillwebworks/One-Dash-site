'use client';

import Link from 'next/link';
import { useCart } from './CartContext';
import { useState } from 'react';

export default function Header() {
  const { getTotalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-[#DC143C]">ONE</span>
              <span className="text-[#DC143C]"> DASH</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#DC143C] transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#DC143C] transition-colors font-medium">
              About
            </Link>
            <Link href="/products-page" className="text-gray-700 hover:text-[#DC143C] transition-colors font-medium">
              Products
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-[#DC143C] transition-colors font-medium">
              Gallery
            </Link>
            <Link href="/cart" className="relative">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-[#DC143C] transition-colors">
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
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#DC143C] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button and Cart */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Cart Button - Mobile */}
            <Link href="/cart" className="relative">
              <div className="flex items-center text-gray-700 hover:text-[#DC143C] transition-colors">
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
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#DC143C] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
            
            {/* Hamburger Menu Button */}
            <button
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-[#DC143C] transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-[#DC143C] transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products-page"
              className="block text-gray-700 hover:text-[#DC143C] transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/gallery"
              className="block text-gray-700 hover:text-[#DC143C] transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/cart"
              className="block text-gray-700 hover:text-[#DC143C] transition-colors font-medium flex items-center space-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="bg-[#DC143C] text-white text-xs font-bold rounded-full px-2 py-1">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

