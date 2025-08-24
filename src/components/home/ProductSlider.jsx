import React from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// --- Default Data (with placeholder images) ---
const defaultProducts = [
  {
    id: 1,
    badge: { text: "-49%", className: "bg-orange-500 text-white" },
    image: "https://placehold.co/400x400/orange/white?text=Watch",
    title: "Apple Watch Series 5 MWV62VN/A",
    price: "$514.51",
    oldPrice: "$253.24",
    author: "by Co., Ltd Minie Li",
  },
  {
    id: 2,
    badge: { text: "-12%", className: "bg-orange-500 text-white" },
    image: "https://placehold.co/400x400/gray/white?text=Watch",
    title: "Hand Watch Rossini – 1328WQ1A",
    price: "$146.71",
    oldPrice: "$94.32",
    author: "by Co., Ltd SMART MARKETING",
  },
  {
    id: 3,
    badge: { text: "-5%", className: "bg-orange-500 text-white" },
    image: "https://placehold.co/400x400/black/white?text=Watch",
    title: "Hand Watch Rossini – 5395T01G",
    price: "$183.64",
    oldPrice: "$193.31",
    author: "by Co., Ltd Minie Li",
  },
  {
    id: 4,
    badge: { text: "New", className: "bg-[#68D237] text-black" },
    image: "https://placehold.co/400x400/blue/white?text=Watch",
    title: "Hand Watch Swiss Alpine Military – 3293153T",
    price: "$215.31",
    author: "by Co., Ltd SMART MARKETING",
  },
  {
    id: 5,
    badge: { text: "New", className: "bg-[#68D237] text-black" },
    image: "https://placehold.co/400x400/green/white?text=Watch",
    title: "Watch For Man Larmes LM-TF004.0740G.211.4NB – Optimus Prime",
    price: "$73.01",
    author: "by Mobile World",
  },
  {
    id: 6,
    title: "Hand Watch For Man Citizen BI5000-87L",
    image: "https://placehold.co/400x400/red/white?text=Watch",
    price: "$66.79",
    author: "by Co., Ltd Minie Li",
  },
];

// --- Main Component ---
const ProductSlider = ({ title = "Watch", products = defaultProducts }) => {
  return (
    <div className="flex justify-center py-10">
      <div className="bg-white text-black font-sans w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 rounded-lg">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8">
          {/* Responsive title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-left">{title}</h2>
          
          {/* Responsive and wrapping navigation */}
          <nav className="flex  items-center md:gap-x-6 gap-y-2 gap-x-2 text-sm font-semibold text-gray-500">
            <a
              href="#"
              className="text-green-500 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-green-500"
            >
              All
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              Men's watch
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              Women's Watches
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              Smart watch
            </a>
            <div className="flex items-center gap-2 md:ml-4">
              <IoChevronBack size={20} className="text-gray-400 cursor-pointer hover:text-gray-800" />
              <IoChevronForward size={20} className="text-gray-800 cursor-pointer hover:text-black" />
            </div>
          </nav>
        </header>

        {/* Responsive Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <div key={product.id} className="text-left">
              {/* Image Container */}
              <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-md z-10 ${product.badge.className}`}
                  >
                    {product.badge.text}
                  </div>
                )}
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  src={product.image}
                  alt={product.title}
                />
              </div>

              {/* Product Details */}
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 leading-tight text-sm h-10">
                  {product.title}
                </h3>
                <div className="flex items-end gap-2 my-1">
                  <p className="text-lg font-bold text-black">{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-sm text-gray-400 line-through">{product.oldPrice}</p>
                  )}
                </div>
                <a href="#" className="text-xs text-blue-500 hover:underline">
                  {product.author}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;