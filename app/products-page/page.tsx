'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { getAllProducts, Product } from '@/lib/products';

export default function ProductsPage() {
  const allProducts = getAllProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(allProducts.map(p => p.category)));
    return ['all', ...cats];
  }, [allProducts]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Filter by search query (name, description, ingredients)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.longDescription.toLowerCase().includes(query) ||
        product.ingredients.some(ing => ing.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [allProducts, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <nav className="mb-4 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#DC143C]">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800 font-medium">Products</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            All <span className="text-[#DC143C]">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Browse and search through our complete collection of authentic Jamaican marinades, seasonings, and sauces
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">
                Search Products
              </label>
              <div className="relative">
                <input
                  id="search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, description, or ingredients..."
                  className="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:border-[#DC143C] focus:ring-2 focus:ring-[#DC143C]/20 outline-none transition-colors"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#DC143C] transition-colors"
                    aria-label="Clear search"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#DC143C] focus:ring-2 focus:ring-[#DC143C]/20 outline-none transition-colors bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort By */}
          <div className="mt-4 flex items-center space-x-4">
            <label className="text-sm font-semibold text-gray-700">Sort by:</label>
            <div className="flex space-x-2">
              {(['name', 'price', 'category'] as const).map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    sortBy === option
                      ? 'bg-[#DC143C] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing <span className="font-semibold text-[#DC143C]">{filteredProducts.length}</span> of{' '}
            <span className="font-semibold">{allProducts.length}</span> products
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">No products found</h2>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="inline-block bg-[#DC143C] hover:bg-[#B8122F] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

