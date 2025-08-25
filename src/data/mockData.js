
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

export const productSections = [
  {
    id: 1,
    title: "Real Estate",
    categories: ["All", "House", "Land", "House for rent", "Project"],
    products: [
      {
        id: 101,
        badge: {
          text: "Hot",
          className: "bg-red-500 text-white",
        },
        brand: "Modern Downtown Loft",
        model: "2 Bed, 2 Bath",
        price: "$2,500/mo",
        author: "by Urban Dwellings",
        imageUrl:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=400&fit=crop&crop=center",
        category: "House for rent",
      },
      {
        id: 102,
        brand: "Suburban Family Home",
        model: "4 Bed, 3 Bath, Large Yard",
        price: "$750,000",
        author: "by Homestead Realty",
        imageUrl:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=400&fit=crop&crop=center",
        category: "House",
      },
      {
        id: 103,
        badge: {
          text: "New Listing",
          className: "bg-green-500 text-white",
        },
        brand: "Luxury Beachfront Villa",
        model: "5 Bed, 6 Bath, Pool",
        price: "$3,200,000",
        author: "by Seaside Properties",
        imageUrl:
          "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=400&h=400&fit=crop&crop=center",
        category: "House",
      },
      {
        id: 104,
        brand: "City Penthouse",
        model: "3 Bed, 3 Bath, Terrace",
        price: "$4,200/mo",
        author: "by Elite Properties",
        imageUrl:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop&crop=center",
        category: "House for rent",
      },
      {
        id: 105,
        badge: {
          text: "Price Drop",
          className: "bg-orange-500 text-white",
        },
        brand: "Cozy Studio Apartment",
        model: "1 Bed, 1 Bath, Downtown",
        price: "$1,800/mo",
        oldPrice: "$2,100/mo",
        author: "by City Living",
        imageUrl:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=400&fit=crop&crop=center",
        category: "Project",
      },
      {
        id: 106,
        badge: {
          text: "For Sale",
          className: "bg-blue-500 text-white",
        },
        brand: "Scenic Mountain Acreage",
        model: "10 Acres, Zoned Residential",
        price: "$250,000",
        author: "by Greenfield Realty",
        imageUrl:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop&crop=center",
        category: "Land",
      },
      {
        id: 107,
        brand: "Historic Victorian Home",
        model: "6 Bed, 4 Bath, Original Woodwork",
        price: "$980,000",
        author: "by Heritage Properties",
        imageUrl:
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=400&fit=crop&crop=center",
        category: "House",
      },
      {
        id: 108,
        badge: {
          text: "Furnished",
          className: "bg-purple-500 text-white",
        },
        brand: "Lakeside Cabin Retreat",
        model: "2 Bed, 1 Bath, Dock Access",
        price: "$1,500/mo",
        author: "by Lakeside Rentals",
        imageUrl:
          "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop&crop=center",
        category: "House for rent",
      },
      {
        id: 109,
        brand: "Eco Tower Residences",
        model: "LEED Certified, Smart Homes",
        price: "Starting at $650,000",
        author: "by Future Living Inc.",
        imageUrl:
          "https://images.unsplash.com/photo-1515263487990-61b07816b525?w=400&h=400&fit=crop&crop=center",
        category: "Project",
      },
      {
        id: 110,
        badge: {
          text: "Auction",
          className: "bg-red-700 text-white",
        },
        brand: "Commercial Development Plot",
        model: "5 Acres, Prime Location",
        price: "Contact for Price",
        author: "by Apex Commercial",
        imageUrl:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop&crop=center",
        category: "Land",
      },
    ],
  },
  {
    id: 2,
    title: "Technology",
    categories: [
      "All",
      "Smart Watch",
      "Laptop",
      "Tablet",
      "Desktop",
      "Accessories",
    ],
    products: [
      {
        id: 201,
        badge: { text: "New", className: "bg-green-500 text-white" },
        brand: "Apple MacBook Pro",
        model: "M3 Chip, 16GB RAM",
        price: "$2,013.54",
        author: "by Apple Official",
        imageUrl:
          "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
        category: "Laptop",
      },
      {
        id: 202,
        badge: { text: "Favorite", className: "bg-yellow-500 text-white" },
        brand: "Apple Watch Series 9",
        model: "GPS + Cellular",
        price: "$517.79",
        author: "by 247 Store",
        imageUrl:
          "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop",
        category: "Smart Watch",
      },
      {
        id: 203,
        badge: { text: "-15%", className: "bg-red-500 text-white" },
        brand: "Dell XPS 15",
        model: "OLED, 32GB RAM",
        price: "$1,899",
        oldPrice: "$2,234.12",
        author: "by Dell Official",
        imageUrl:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        category: "Laptop",
      },
      {
        id: 204,
        brand: "Sony WH-1000XM5",
        model: "Noise Cancelling",
        price: "$399.99",
        author: "by Sony Official",
        imageUrl:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
        category: "Accessories",
      },
      {
        id: 205,
        badge: { text: "Gaming", className: "bg-purple-500 text-white" },
        brand: "NVIDIA RTX 4080",
        model: "Super Graphics Card",
        price: "$1,199.99",
        author: "by NVIDIA",
        imageUrl:
          "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop",
        category: "Desktop",
      },
      {
        id: 206,
        brand: "Samsung Galaxy Tab S9",
        model: "11-inch, 256GB",
        price: "$799.00",
        author: "by Samsung",
        imageUrl:
          "https://images.unsplash.com/photo-1612442433549-3a2b7537b962?w=400&h=400&fit=crop",
        category: "Tablet",
      },
      {
        id: 207,
        badge: { text: "Top Rated", className: "bg-blue-500 text-white" },
        brand: "Logitech MX Master 3S",
        model: "Wireless Performance Mouse",
        price: "$99.99",
        author: "by Logitech",
        imageUrl:
          "https://images.unsplash.com/photo-1615664109556-43c1b7df1534?w=400&h=400&fit=crop",
        category: "Accessories",
      },
      {
        id: 208,
        brand: "Google Pixel Watch 2",
        model: "GPS, Wear OS",
        price: "$349.99",
        author: "by Google Store",
        imageUrl:
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
        category: "Smart Watch",
      },
      {
        id: 209,
        badge: { text: "Value", className: "bg-teal-500 text-white" },
        brand: "Lenovo IdeaPad Slim 3",
        model: "Ryzen 5, 8GB RAM",
        price: "$449.00",
        author: "by Lenovo",
        imageUrl:
          "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=400&fit=crop",
        category: "Laptop",
      },
      {
        id: 210,
        brand: "Apple iMac 24-inch",
        model: "M3 Chip, 8-core GPU",
        price: "$1,299.00",
        author: "by Apple Official",
        imageUrl:
          "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=400&h=400&fit=crop",
        category: "Desktop",
      },
    ],
  },
  {
    id: 3,
    title: "Watch",
    categories: ["All", "Men's watch", "Women's Watches", "Smart watch"],
    products: [
      {
        id: 301,
        badge: { text: "Sold Out", className: "bg-gray-400 text-white" },
        brand: "Rolex Submariner",
        model: "Stainless Steel",
        price: "$8,550.00",
        author: "by Rolex Official",
        imageUrl:
          "https://images.unsplash.com/photo-1523170335258-f5c6c6bd44bd?w=400&h=400&fit=crop",
        category: "Men's watch",
      },
      {
        id: 302,
        brand: "Seiko Prospex",
        model: "Automatic Diver's Watch",
        price: "$450.00",
        author: "by Timepiece Emporium",
        imageUrl:
          "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=400&fit=crop",
        category: "Men's watch",
      },
      {
        id: 303,
        badge: {
          text: "Limited",
          className: "bg-gold-500 text-white bg-yellow-600",
        },
        brand: "Omega Speedmaster",
        model: "Moonwatch Professional",
        price: "$6,350.00",
        author: "by Omega",
        imageUrl:
          "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop",
        category: "Men's watch",
      },
      {
        id: 304,
        brand: "Tag Heuer Formula 1",
        model: "Chronograph",
        price: "$1,200.00",
        author: "by Tag Heuer",
        imageUrl:
          "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=400&fit=crop",
        category: "Men's watch",
      },
      {
        id: 305,
        badge: { text: "Vintage", className: "bg-amber-600 text-white" },
        brand: "Casio G-Shock",
        model: "Digital Sports Watch",
        price: "$89.99",
        author: "by Casio",
        imageUrl:
          "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
        category: "Smart watch",
      },
      {
        id: 306,
        brand: "Michael Kors Parker",
        model: "Rose Gold-Tone",
        price: "$275.00",
        author: "by Michael Kors",
        imageUrl:
          "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=400&h=400&fit=crop",
        category: "Women's Watches",
      },
      {
        id: 307,
        badge: { text: "Fitness", className: "bg-lime-500 text-white" },
        brand: "Fitbit Charge 6",
        model: "Health & Fitness Tracker",
        price: "$159.95",
        author: "by Fitbit",
        imageUrl:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        category: "Smart watch",
      },
      {
        id: 308,
        brand: "Tissot Le Locle",
        model: "Automatic, Leather Strap",
        price: "$575.00",
        author: "by Tissot",
        imageUrl:
          "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&h=400&fit=crop",
        category: "Men's watch",
      },
      {
        id: 309,
        badge: { text: "Elegant", className: "bg-fuchsia-500 text-white" },
        brand: "Cartier Ballon Bleu",
        model: "33mm, Stainless Steel",
        price: "$6,000.00",
        author: "by Cartier",
        imageUrl:
          "https://images.unsplash.com/photo-1620625515032-6ed2a143c1e2?w=400&h=400&fit=crop",
        category: "Women's Watches",
      },
      {
        id: 310,
        brand: "Citizen Eco-Drive",
        model: "Promaster Nighthawk",
        price: "$297.00",
        author: "by Citizen",
        imageUrl:
          "https://images.unsplash.com/photo-1590922492137-32946a86c297?w=400&h=400&fit=crop",
        category: "Men's watch",
      },
    ],
  },
  {
    id: 4,
    title: "Glasses",
    categories: ["All", "Sunglasses", "Eyeglasses"],
    products: [
      {
        id: 401,
        brand: "Ray-Ban Aviator",
        model: "Classic Gold Frame",
        price: "$154.00",
        author: "by Sunglass Hut",
        imageUrl:
          "https://images.unsplash.com/photo-1572635196184-84e35138cf62?w=400&h=400&fit=crop&crop=center",
        category: "Sunglasses",
      },
      {
        id: 402,
        badge: {
          text: "Bestseller",
          className: "bg-blue-500 text-white",
        },
        brand: "Warby Parker",
        model: "Wilkie Eyeglasses",
        price: "$95.00",
        author: "by WP Official",
        imageUrl:
          "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop&crop=center",
        category: "Eyeglasses",
      },
      {
        id: 403,
        brand: "Oakley Holbrook",
        model: "Polarized Sunglasses",
        price: "$178.00",
        author: "by Oakley",
        imageUrl:
          "https://images.unsplash.com/photo-1553942499-4b8f28c157fc?w=400&h=400&fit=crop&crop=center",
        category: "Sunglasses",
      },
      {
        id: 404,
        badge: {
          text: "Designer",
          className: "bg-purple-500 text-white",
        },
        brand: "Gucci Cat Eye",
        model: "Tortoiseshell Frame",
        price: "$320.00",
        author: "by Gucci",
        imageUrl:
          "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=400&fit=crop&crop=center",
        category: "Sunglasses",
      },
      {
        id: 405,
        brand: "Tom Ford",
        model: "Square Frame Glasses",
        price: "$425.00",
        author: "by Tom Ford",
        imageUrl:
          "https://images.unsplash.com/photo-1596900779725-91eff1ad02f8?w=400&h=400&fit=crop&crop=center",
        category: "Eyeglasses",
      },
      {
        id: 406,
        badge: {
          text: "Sport",
          className: "bg-orange-500 text-white",
        },
        brand: "Costa Del Mar",
        model: "Fantail PRO",
        price: "$269.00",
        author: "by Costa",
        imageUrl:
          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&crop=center",
        category: "Sunglasses",
      },
      {
        id: 407,
        brand: "Prada",
        model: "Minimalist Eyeglasses",
        price: "$350.00",
        author: "by Prada",
        imageUrl:
          "https://images.unsplash.com/photo-1628723024085-7e5e3a78b9df?w=400&h=400&fit=crop&crop=center",
        category: "Eyeglasses",
      },
      {
        id: 408,
        brand: "Ray-Ban Wayfarer",
        model: "Classic Black Frame",
        price: "$161.00",
        author: "by Sunglass Hut",
        imageUrl:
          "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop&crop=center",
        category: "Sunglasses",
      },
      {
        id: 409,
        brand: "Persol",
        model: "Folding Sunglasses",
        price: "$260.00",
        author: "by Persol Official",
        imageUrl:
          "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&h=400&fit=crop&crop=center",
        category: "Sunglasses",
      },
      {
        id: 410,
        badge: {
          text: "Blue Light",
          className: "bg-sky-500 text-white",
        },
        brand: "Zenni Optical",
        model: "Browline Glasses",
        price: "$29.95",
        author: "by Zenni",
        imageUrl:
          "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop&crop=center",
        category: "Eyeglasses",
      },
    ],
  },
  {
    id: 5,
    title: "Cosmetic",
    categories: ["All", "Lotion", "Mask", "Perfume"],
    products: [
      {
        id: 501,
        brand: "Fenty Beauty Foundation",
        model: "Pro Filt'r Soft Matte",
        price: "$39.00",
        author: "by Sephora",
        imageUrl:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
        category: "Mask",
      },
      {
        id: 502,
        badge: {
          text: "New",
          className: "bg-pink-500 text-white",
        },
        brand: "Dior Lip Glow Oil",
        model: "Cherry Oil",
        price: "$40.00",
        author: "by Dior Cosmetics",
        imageUrl:
          "https://images.unsplash.com/photo-1631730486887-4d5348e42f75?w=400&h=400&fit=crop&crop=center",
        category: "Perfume",
      },
      {
        id: 503,
        badge: {
          text: "Bestseller",
          className: "bg-green-500 text-white",
        },
        brand: "The Ordinary Serum",
        model: "Niacinamide 10%",
        price: "$6.50",
        author: "by DECIEM",
        imageUrl:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&crop=center",
        category: "Lotion",
      },
      {
        id: 504,
        brand: "Charlotte Tilbury",
        model: "Magic Cream Moisturizer",
        price: "$100.00",
        author: "by CT Beauty",
        imageUrl:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
        category: "Lotion",
      },
      {
        id: 505,
        badge: {
          text: "Vegan",
          className: "bg-green-600 text-white",
        },
        brand: "Rare Beauty Blush",
        model: "Soft Pinch Liquid Blush",
        price: "$23.00",
        author: "by Rare Beauty",
        imageUrl:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&crop=center",
        category: "Mask",
      },
      {
        id: 506,
        brand: "Chanel No. 5",
        model: "Eau de Parfum",
        price: "$146.00",
        author: "by Chanel",
        imageUrl:
          "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center",
        category: "Perfume",
      },
      {
        id: 507,
        badge: {
          text: "Hydrating",
          className: "bg-cyan-500 text-white",
        },
        brand: "Laneige Water Sleeping Mask",
        model: "Overnight Face Mask",
        price: "$29.00",
        author: "by Laneige",
        imageUrl:
          "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center",
        category: "Mask",
      },
      {
        id: 508,
        brand: "Kiehl's Ultra Facial Cream",
        model: "24-Hour Hydration",
        price: "$32.00",
        author: "by Kiehl's",
        imageUrl:
          "https://images.unsplash.com/photo-1631739133293-83c385b6141a?w=400&h=400&fit=crop&crop=center",
        category: "Lotion",
      },
      {
        id: 509,
        brand: "Tom Ford Oud Wood",
        model: "Eau de Parfum",
        price: "$270.00",
        author: "by Tom Ford",
        imageUrl:
          "https://images.unsplash.com/photo-1594035918239-f22a3e707e15?w=400&h=400&fit=crop&crop=center",
        category: "Perfume",
      },
      {
        id: 510,
        badge: {
          text: "Exfoliating",
          className: "bg-indigo-500 text-white",
        },
        brand: "Drunk Elephant",
        model: "T.L.C. Framboos Glycolic Night Serum",
        price: "$90.00",
        author: "by Drunk Elephant",
        imageUrl:
          "https://images.unsplash.com/photo-1556947992-29f1b0a8d6d6?w=400&h=400&fit=crop&crop=center",
        category: "Lotion",
      },
    ],
  },
  {
    id: 6,
    title: "Food High Grade",
    categories: [
      "All",
      "Drinks - Preparation",
      "Cereals",
      "Drink",
      "Resources",
    ],
    products: [
      {
        id: 601,
        badge: {
          text: "Premium",
          className: "bg-gold-500 text-white bg-yellow-600",
        },
        brand: "A5 Wagyu Steak",
        model: "Japanese Ribeye",
        price: "$150.00/lb",
        author: "by Gourmet Meats",
        imageUrl:
          "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop&crop=center",
        category: "Resources",
      },
      {
        id: 602,
        badge: {
          text: "Organic",
          className: "bg-green-600 text-white",
        },
        brand: "Truffle Oil",
        model: "Italian White Truffle",
        price: "$29.99",
        author: "by Fine Foods Co.",
        imageUrl:
          "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop&crop=center",
        category: "Resources",
      },
      {
        id: 603,
        brand: "Beluga Caviar",
        model: "Imperial Grade",
        price: "$200.00/oz",
        author: "by Caviar House",
        imageUrl:
          "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&h=400&fit=crop&crop=center",
        category: "Resources",
      },
      {
        id: 604,
        badge: {
          text: "Rare",
          className: "bg-purple-600 text-white",
        },
        brand: "Matsutake Mushrooms",
        model: "Fresh Japanese",
        price: "$80.00/lb",
        author: "by Forest Delicacies",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center",
        category: "Resources",
      },
      {
        id: 605,
        brand: "Aged Balsamic Vinegar",
        model: "25 Year Modena DOP",
        price: "$125.00",
        author: "by Italian Imports",
        imageUrl:
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=400&h=400&fit=crop&crop=center",
        category: "Drink",
      },
      {
        id: 606,
        badge: {
          text: "Single Origin",
          className: "bg-yellow-800 text-white",
        },
        brand: "Kona Coffee Beans",
        model: "Hawaiian Extra Fancy",
        price: "$55.00/lb",
        author: "by Aloha Coffee Co.",
        imageUrl:
          "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400&h=400&fit=crop&crop=center",
        category: "Drinks - Preparation",
      },
      {
        id: 607,
        brand: "Dom Pérignon",
        model: "Vintage 2012 Champagne",
        price: "$250.00",
        author: "by Moët & Chandon",
        imageUrl:
          "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=400&h=400&fit=crop&crop=center",
        category: "Drink",
      },
      {
        id: 608,
        badge: {
          text: "Artisanal",
          className: "bg-cyan-700 text-white",
        },
        brand: "Sourdough Bread",
        model: "Organic Whole Wheat",
        price: "$9.00/loaf",
        author: "by The Local Loaf",
        imageUrl:
          "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop&crop=center",
        category: "Cereals",
      },
      {
        id: 609,
        brand: "Iberico Ham",
        model: "Pata Negra, Acorn-fed",
        price: "$96.00/lb",
        author: "by Spanish Delights",
        imageUrl:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop&crop=center",
        category: "Resources",
      },
      {
        id: 610,
        badge: {
          text: "Matcha",
          className: "bg-emerald-500 text-white",
        },
        brand: "Ceremonial Grade Matcha",
        model: "Uji, Japan",
        price: "$40.00",
        author: "by Jade Leaf",
        imageUrl:
          "https://images.unsplash.com/photo-1581006910098-7048462c85f6?w=400&h=400&fit=crop&crop=center",
        category: "Drinks - Preparation",
      },
    ],
  },
];
