import React from "react";
// Make sure to install react-icons: npm install react-icons
import {
  IoChevronBack,
  IoChevronForward,
  IoHeartOutline,
  IoEyeOutline,
} from "react-icons/io5";

// --- Data for the Product Cards ---
const products = [
  {
    id: 1,
    badge: { text: "New", className: "bg-[#68D237] text-black" },
    title: "Apple Macbook Pro 2019 MWP42SA/A",
    price: "$2,013.54",
    author: "by Co., Ltd Minie Li",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    badge: { text: "Favorite", className: "bg-yellow-400 text-black" },
    title: "Apple Watch Series 5 MWV62VN/A",
    price: "$517.79",
    author: "by 247 Store",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    badge: { text: "-15%", className: "bg-orange-500 text-white" },
    title: "Apple Macbook Air MWTJ2SA/A Space Grey (2020)",
    price: "$1,099",
    oldPrice: "$1193.71",
    author: "by Kimpine Calculator",
    imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    badge: { text: "Sold Out", className: "bg-gray-200 text-gray-500" },
    title: "Apple Watch Series 5 MWV62VN/A",
    price: "$193.31",
    author: "by Kimpine Calculator",
    imageUrl: "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Logitech BITS wireless office mouse",
    price: "$15.86",
    author: "by Co., Ltd Minie Li",
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Apple Macbook Pro MWP42SA/A",
    price: "$2,013.54",
    author: "by Co., Ltd Flower In",
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
  },
];

// --- Reusable Product Card Component ---
const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
      {/* Image Container with Hover Effect */}
      <div className="relative w-full sm:w-40 h-40 flex-shrink-0 group">
        {product.badge && (
          <div
            className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-md z-20 ${product.badge.className}`}
          >
            {product.badge.text}
          </div>
        )}

        {/* Product Image */}
        <div
          className="w-full h-full rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: `url('${product.imageUrl}')`,
          }}
        ></div>

        {/* Hover Overlay - Now on every card */}
        <div className="absolute inset-0 bg-black/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-3 p-4">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-md hover:bg-gray-100 transition-colors">
                <IoHeartOutline size={20} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-md hover:bg-gray-100 transition-colors">
                <IoEyeOutline size={20} />
              </button>
            </div>
            <button className="w-full h-10 bg-[#68D237] text-black font-semibold rounded-md hover:bg-lime-600 transition-colors px-2">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-grow">
        <h3 className="font-semibold leading-tight text-gray-800">
          {product.title}
        </h3>
        <p className="text-lg font-bold text-black my-1">{product.price}</p>
        {product.oldPrice && (
          <p className="text-sm text-gray-400 line-through -mt-1">
            {product.oldPrice}
          </p>
        )}
        <a
          href="#"
          className="text-xs text-blue-500 hover:underline mt-2 inline-block"
        >
          {product.author}
        </a>
      </div>
    </div>
  );
};
        

// --- Main Section Component ---
const TechnologySection = () => {
  return (
    <div className="flex justify-center p-4 mt-10">
      <div className="bg-white text-black font-sans w-full max-w-6xl">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">Technology</h2>
          <nav className="flex items-center flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-gray-500">
            <a href="#" className="text-green-500">
              All
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              Smart Watch
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              Laptop
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              Tablet
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              Desktop
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              Accessories
            </a>
            <div className="flex items-center gap-2 md:ml-4">
              <IoChevronBack
                size={20}
                className="text-gray-400 cursor-pointer"
              />
              <IoChevronForward
                size={20}
                className="text-gray-800 cursor-pointer"
              />
            </div>
          </nav>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;