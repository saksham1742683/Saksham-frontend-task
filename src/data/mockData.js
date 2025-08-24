// src/data/mockData.js

// Using placeholder images from placehold.co
// In a real project, you would have your actual image URLs here.

export const categories = [
  { id: 1, name: "All Categories" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Home & Lifestyle" },
  { id: 4, name: "Men Fashion" },
  { id: 5, name: "Women Fashion" },
];

export const topNavLinks = [
  { id: 1, title: "Introduce", url: "#" },
  { id: 2, title: "Partner Incentives", url: "#" },
  { id: 3, title: "Promotion", url: "#" },
  { id: 4, title: "Contact", url: "#" },
  { id: 5, title: "Frequently asked questions", url: "#" },
];

export const mainNavLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "New Product", url: "/products" },
  { id: 3, title: "Promotion", url: "/promotions", isHot: true },
];

export const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 99.0,
    originalPrice: 120.0,
    rating: 4.5,
    reviewCount: 88,
    image: "https://placehold.co/300x300/e2e8f0/4a5568?text=Headphones",
    category: "Electronics",
    isNew: true,
    discount: 20,
  },
  {
    id: 2,
    name: "Modern Leather Sofa",
    price: 699.0,
    originalPrice: 850.0,
    rating: 4.8,
    reviewCount: 120,
    image: "https://placehold.co/300x300/e2e8f0/4a5568?text=Sofa",
    category: "Home & Lifestyle",
    isNew: false,
    discount: 18,
  },
  {
    id: 3,
    name: "Classic Men's Watch",
    price: 250.0,
    originalPrice: 300.0,
    rating: 4.7,
    reviewCount: 95,
    image: "https://placehold.co/300x300/e2e8f0/4a5568?text=Watch",
    category: "Men Fashion",
    isNew: false,
    discount: 0,
  },
  {
    id: 4,
    name: "Elegant Women's Dress",
    price: 150.0,
    originalPrice: 180.0,
    rating: 4.6,
    reviewCount: 75,
    image: "https://placehold.co/300x300/e2e8f0/4a5568?text=Dress",
    category: "Women Fashion",
    isNew: true,
    discount: 15,
  },
  {
    id: 5,
    name: "Smart Home Assistant",
    price: 49.99,
    originalPrice: 60.0,
    rating: 4.9,
    reviewCount: 250,
    image: "https://placehold.co/300x300/e2e8f0/4a5568?text=Smart+Home",
    category: "Electronics",
    isNew: false,
    discount: 10,
  },
  {
    id: 6,
    name: "Cozy Throw Blanket",
    price: 39.99,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 150,
    image: "https://placehold.co/300x300/e2e8f0/4a5568?text=Blanket",
    category: "Home & Lifestyle",
    isNew: true,
    discount: 0,
  },
  {
    id: 7,
    name: "Men's Running Shoes",
    price: 85.0,
    originalPrice: 100.0,
    rating: 4.7,
    reviewCount: 180,
    image: "https://placehold.co/300x300/e2e8f0/4a5568?text=Shoes",
    category: "Men Fashion",
    isNew: false,
    discount: 15,
  },
  {
    id: 8,
    name: "Stylish Women's Handbag",
    price: 120.0,
    originalPrice: 150.0,
    rating: 4.9,
    reviewCount: 200,
    image: "https://placehold.co/300x300/e2e8f0/4a5568?text=Handbag",
    category: "Women Fashion",
    isNew: true,
    discount: 20,
  },
];

export const heroCarouselSlides = [
  {
    id: 1,
    preTitle: "Hot Deal In This Week",
    title: "Smart Headphone",
    image: "https://placehold.co/600x400/d1d5db/4a5568?text=Smart+Headphone",
  },
  {
    id: 2,
    preTitle: "New Arrival",
    title: "Modern Furniture",
    image: "https://placehold.co/600x400/d1d5db/4a5568?text=Modern+Furniture",
  },
  {
    id: 3,
    preTitle: "Top Rated",
    title: "Fashion Collection",
    image: "https://placehold.co/600x400/d1d5db/4a5568?text=Fashion+Collection",
  },
];

// src/data/products.js
// Note: Image URLs are sourced from Unsplash. You might want to download them
// and host them locally for better performance and stability.

export const categoriesData = [
  {
    title: "Watch",
    products: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop",
        badge: { text: "-49%", className: "bg-orange-500 text-white" },
        title: "Apple Watch Series 5",
        price: "$514.51",
        oldPrice: "$253.24",
        author: "by Co., Ltd Minie Li",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&auto=format&fit=crop",
        badge: { text: "-12%", className: "bg-orange-500 text-white" },
        title: "Hand Watch Rossini – 1328WQ1A",
        price: "$146.71",
        oldPrice: "$94.32",
        author: "by Co., Ltd SMART MARKETING",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop",
        badge: { text: "New", className: "bg-green-500 text-white" },
        title: "Classic Leather Strap Watch",
        price: "$250.00",
        author: "by Timeless Pieces Inc.",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1590922492137-32946a86c297?w=500&auto=format&fit=crop",
        badge: { text: "Hot", className: "bg-red-500 text-white" },
        title: "Deep Sea Diver's Chronograph",
        price: "$780.90",
        author: "by Oceanic Instruments",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1508057198894-247b232521e4?w=500&auto=format&fit=crop",
        badge: { text: "-20%", className: "bg-orange-500 text-white" },
        title: "Minimalist Digital Sports Watch",
        price: "$89.99",
        oldPrice: "$112.50",
        author: "by Modern Time",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1614703418052-d5b893d6cf28?w=500&auto=format&fit=crop",
        badge: { text: "Luxury", className: "bg-purple-500 text-white" },
        title: "Gold & Diamond Evening Watch",
        price: "$1250.00",
        author: "by Elegance United",
      },
    ],
  },
  {
    title: "Real Estate",
    products: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop",
        badge: { text: "Hot", className: "bg-red-500 text-white" },
        title: "Luxury Villa in Bali",
        price: "$2,250,000",
        author: "by Smart Developers",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop",
        badge: { text: "New Listing", className: "bg-blue-500 text-white" },
        title: "Modern Downtown Loft",
        price: "$850,000",
        author: "by Urban Properties",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=500&auto=format&fit=crop",
        badge: { text: "Reduced", className: "bg-yellow-500 text-black" },
        title: "Cozy Suburban Family Home",
        price: "$475,000",
        oldPrice: "$510,000",
        author: "by Community Realtors",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&auto=format&fit=crop",
        badge: { text: "Open House", className: "bg-green-500 text-white" },
        title: "Spacious Countryside Estate",
        price: "$1,500,000",
        author: "by Greenfield Realty",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&auto=format&fit=crop",
        badge: { text: "Hot", className: "bg-red-500 text-white" },
        title: "Sunny Beachfront Condo",
        price: "$1,100,000",
        author: "by Seaside Homes",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&auto=format&fit=crop",
        badge: { text: "Just Sold", className: "bg-gray-500 text-white" },
        title: "Chic Urban Apartment",
        price: "$620,000",
        author: "by Metro Living",
      },
    ],
  },
  {
    title: "Cosmetics",
    products: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop",
        badge: { text: "New", className: "bg-green-500 text-white" },
        title: "Organic Face Cream",
        price: "$25.50",
        author: "by Beauty World",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop",
        badge: { text: "Best Seller", className: "bg-red-500 text-white" },
        title: "Matte Finish Liquid Lipstick",
        price: "$18.00",
        author: "by Velvet Kiss",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1631739133293-83c385b6141a?w=500&auto=format&fit=crop",
        badge: { text: "Vegan", className: "bg-green-600 text-white" },
        title: "Hydrating Hyaluronic Acid Serum",
        price: "$32.75",
        author: "by Pure Glow",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1607642739333-5a7d643f8369?w=500&auto=format&fit=crop",
        badge: { text: "-15%", className: "bg-orange-500 text-white" },
        title: "Full Coverage Foundation",
        price: "$28.90",
        oldPrice: "$34.00",
        author: "by Flawless Co.",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop",
        badge: { text: "New Scent", className: "bg-pink-400 text-white" },
        title: "Eau De Parfum - Floral Notes",
        price: "$85.00",
        author: "by Aroma & Eve",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1599900428382-d6486b25febb?w=500&auto=format&fit=crop",
        badge: { text: "Waterproof", className: "bg-blue-500 text-white" },
        title: "Volumizing & Lengthening Mascara",
        price: "$21.50",
        author: "by Lash Envy",
      },
    ],
  },
  {
    title: "Luxury Foods",
    products: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1606734335391-9c6a10503b4a?w=500&auto=format&fit=crop",
        badge: { text: "-10%", className: "bg-orange-500 text-white" },
        title: "Premium Belgian Chocolate",
        price: "$15.00",
        oldPrice: "$18.00",
        author: "by Sweet Life",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1594041724339-3245b5514bc2?w=500&auto=format&fit=crop",
        badge: { text: "Organic", className: "bg-green-600 text-white" },
        title: "Italian White Truffle Oil",
        price: "$45.00",
        author: "by Gourmet Pantry",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1618164436245-4b7b3238d3f3?w=500&auto=format&fit=crop",
        badge: { text: "Imported", className: "bg-blue-500 text-white" },
        title: "Aged Parmesan Cheese Wheel",
        price: "$250.00",
        author: "by Formaggio Delights",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1597076231481-061a87a21591?w=500&auto=format&fit=crop",
        badge: { text: "Limited", className: "bg-purple-500 text-white" },
        title: "Wild Caught Beluga Caviar",
        price: "$300.00",
        author: "by The Caviar Co.",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1551884831-bbf3cdc64343?w=500&auto=format&fit=crop",
        badge: { text: "Single Origin", className: "bg-yellow-600 text-white" },
        title: "Ethiopian Yirgacheffe Coffee Beans",
        price: "$28.50",
        author: "by The Daily Grind",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1571572771031-4a638c12604b?w=500&auto=format&fit=crop",
        badge: { text: "Artisanal", className: "bg-teal-500 text-white" },
        title: "Manuka Honey UMF 20+",
        price: "$65.00",
        author: "by Nature's Nectar",
      },
    ],
  },
];
