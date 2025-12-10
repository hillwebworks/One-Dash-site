# One Dash E-commerce Website

Authentic Jamaican Marinade & Seasoning Co. - E-commerce website built with Next.js.

## Features

- 🏠 **Home Page** - Hero section with video, product showcase, and about section
- 🛍️ **Product Pages** - Individual pages for all 7 products with details and add-to-cart
- 🛒 **Shopping Cart** - Full cart UI with quantity controls (Stripe integration coming soon)
- 🎥 **Video Gallery** - All 10 videos in a responsive grid layout
- 📄 **Legal Pages** - Terms of Service and Privacy Policy
- 🇯🇲 **Jamaican Theme** - Authentic branding with red, yellow, and green colors

## Products

1. Hot & Spicy Marinade
2. Jerk Seasoning
3. Brown Stew Marinade
4. All-Purpose Seasoning
5. Curry Seasoning
6. Dipping Sauce
7. Hot Sauce

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── products/          # Product pages
│   ├── cart/              # Shopping cart
│   ├── gallery/           # Video gallery
│   ├── terms/             # Terms of Service
│   └── privacy/           # Privacy Policy
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── VideoPlayer.tsx
│   └── CartContext.tsx
├── lib/                   # Utilities
│   └── products.ts       # Product data
└── public/                # Static assets
    ├── images/           # Product images
    └── videos/           # Video files
```

## Next Steps

- [ ] Integrate Stripe for payment processing
- [ ] Add user authentication
- [ ] Implement order management
- [ ] Add product reviews
- [ ] Set up email notifications
- [ ] Add analytics tracking

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Context** - State management

## Contact

One Dash Enterprises
Main Street, Bog Walk
St. Catherine, Jamaica
Tel: (876) 254-4622
