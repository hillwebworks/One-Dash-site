'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Start adding some delicious One Dash products to your cart!
            </p>
            <Link
              href="/#products"
              className="inline-block bg-[#DC143C] hover:bg-[#B8122F] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-6"
              >
                <div className="relative w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-contain p-2"
                    sizes="128px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.product.netWeight}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Remove item"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border-2 border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 text-lg font-semibold min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#DC143C]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        ${item.product.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 font-semibold transition-colors"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold">Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-800">
                    <span>Total</span>
                    <span className="text-[#DC143C]">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                disabled
                className="w-full bg-gray-400 text-white font-bold py-4 px-8 rounded-lg text-lg cursor-not-allowed mb-4"
                title="Checkout will be available when Stripe is integrated"
              >
                Proceed to Checkout
              </button>
              <p className="text-sm text-gray-500 text-center mb-4">
                Checkout coming soon with Stripe integration
              </p>

              <Link
                href="/#products"
                className="block text-center text-[#DC143C] hover:text-[#B8122F] font-semibold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

