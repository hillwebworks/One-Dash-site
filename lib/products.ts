export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  netWeight: string;
  ingredients: string[];
  image: string;
  category: 'marinade' | 'seasoning' | 'sauce';
}

export const products: Product[] = [
  {
    id: 'hot-spicy-marinade',
    slug: 'hot-spicy-marinade',
    name: 'Hot & Spicy Marinade',
    description: 'Bold, fiery flavor that brings authentic Jamaican heat to your dishes.',
    longDescription: 'Our Hot & Spicy Marinade delivers authentic Jamaican flavor with a perfect balance of heat and spice. Made with all-natural ingredients including scotch bonnet peppers, this marinade is ready to use - just one dash is all you need!',
    price: 8,
    netWeight: '250ml',
    ingredients: ['Escallion', 'Garlic', 'Thyme', 'Pimento', 'Scotch Peppers', 'Sweet Pepper', 'Caramel', 'Sea Salt', 'Spices'],
    image: '/images/OneDashProduct.png',
    category: 'marinade'
  },
  {
    id: 'jerk-seasoning',
    slug: 'jerk-seasoning',
    name: 'Jerk Seasoning',
    description: 'Traditional Jamaican jerk flavor with aromatic spices and herbs.',
    longDescription: 'Experience the authentic taste of Jamaica with our Jerk Seasoning. This all-natural blend combines traditional spices and herbs to create the perfect jerk flavor profile. Perfect for chicken, pork, fish, and vegetables.',
    price: 8,
    netWeight: '250ml',
    ingredients: ['Escallion', 'Garlic', 'Thyme', 'Pimento', 'Scotch Peppers', 'Allspice', 'Cinnamon', 'Nutmeg', 'Sea Salt', 'Spices'],
    image: '/images/3_oneDash.png',
    category: 'seasoning'
  },
  {
    id: 'brown-stew-marinade',
    slug: 'brown-stew-marinade',
    name: 'Brown Stew Marinade',
    description: 'Rich, savory marinade perfect for creating traditional Jamaican brown stew.',
    longDescription: 'Our Brown Stew Marinade captures the essence of traditional Jamaican brown stew. This rich, savory blend creates deep, complex flavors that make your stews unforgettable. All-natural ingredients, ready to use.',
    price: 8,
    netWeight: '250ml',
    ingredients: ['Escallion', 'Garlic', 'Thyme', 'Pimento', 'Brown Sugar', 'Soy Sauce', 'Sea Salt', 'Spices'],
    image: '/images/5_oneDash.png',
    category: 'marinade'
  },
  {
    id: 'all-purpose-seasoning',
    slug: 'all-purpose-seasoning',
    name: 'All-Purpose Seasoning',
    description: 'Versatile seasoning blend perfect for any dish - your kitchen essential.',
    longDescription: 'The perfect all-in-one seasoning for every meal. Our All-Purpose Seasoning brings authentic Jamaican flavor to any dish. Whether you\'re cooking meat, vegetables, or rice, this versatile blend enhances everything with natural, bold flavors.',
    price: 8,
    netWeight: '250ml',
    ingredients: ['Escallion', 'Garlic', 'Thyme', 'Pimento', 'Onion', 'Sea Salt', 'Black Pepper', 'Spices'],
    image: '/images/OneDashProduct.png',
    category: 'seasoning'
  },
  {
    id: 'curry-seasoning',
    slug: 'curry-seasoning',
    name: 'Curry Seasoning',
    description: 'Aromatic curry blend with authentic Jamaican curry flavors.',
    longDescription: 'Our Curry Seasoning brings the warmth and depth of traditional Jamaican curry to your kitchen. Made with premium spices and all-natural ingredients, this seasoning creates rich, aromatic curries that are full of flavor.',
    price: 8,
    netWeight: '250ml',
    ingredients: ['Curry Powder', 'Turmeric', 'Garlic', 'Ginger', 'Thyme', 'Onion', 'Sea Salt', 'Spices'],
    image: '/images/3_oneDash.png',
    category: 'seasoning'
  },
  {
    id: 'dipping-sauce',
    slug: 'dipping-sauce',
    name: 'Dipping Sauce',
    description: 'Perfect condiment for adding authentic Jamaican flavor to any meal.',
    longDescription: 'Our Dipping Sauce is the perfect accompaniment to any dish. This all-natural sauce brings authentic Jamaican flavor to your table. Great for dipping, drizzling, or as a finishing touch to your favorite meals.',
    price: 8,
    netWeight: '250ml',
    ingredients: ['Escallion', 'Garlic', 'Thyme', 'Pimento', 'Vinegar', 'Sea Salt', 'Spices'],
    image: '/images/5_oneDash.png',
    category: 'sauce'
  },
  {
    id: 'hot-sauce',
    slug: 'hot-sauce',
    name: 'Hot Sauce',
    description: 'Fiery hot sauce with authentic Jamaican scotch bonnet pepper heat.',
    longDescription: 'For those who love heat! Our Hot Sauce is made with authentic Jamaican scotch bonnet peppers and all-natural ingredients. This fiery condiment adds the perfect kick to any dish. Use sparingly - it packs a punch!',
    price: 8,
    netWeight: '250ml',
    ingredients: ['Scotch Bonnet Peppers', 'Vinegar', 'Garlic', 'Thyme', 'Sea Salt', 'Spices'],
    image: '/images/OneDashProduct.png',
    category: 'sauce'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}

