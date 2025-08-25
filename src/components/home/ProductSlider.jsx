import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useCart } from "../../App";


const IoCartOutline = (props) => (
    <svg stroke="currentColor" fill="none" strokeWidth="32" viewBox="0 0 512 512" {...props}>
        <circle cx="176" cy="416" r="16" strokeLinecap="round" strokeLinejoin="round"></circle>
        <circle cx="400" cy="416" r="16" strokeLinecap="round" strokeLinejoin="round"></circle>
        <path d="M48 80h64l48 272h256" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const IoHeartOutline = (props) => (
    <svg stroke="currentColor" fill="none" strokeWidth="32" viewBox="0 0 512 512" {...props}>
        <path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const IoEyeOutline = (props) => (
    <svg stroke="currentColor" fill="none" strokeWidth="32" viewBox="0 0 512 512" {...props}>
        <path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 385.61 255.66 385.61s172.73-44.81 220.83-135.33a16 16 0 00.27-17.77C413.55 157.11 333.6 112 255.66 112z" strokeLinecap="round" strokeLinejoin="round"></path>
        <circle cx="256" cy="256" r="80" strokeLinecap="round" strokeLinejoin="round"></circle>
    </svg>
)
const ProductSlider = ({ title, products, categories }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const { addToCart ,addToWishList} = useCart();

  const handleCategoryClick = (category) => setActiveCategory(category);

  const handleNextCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    if (currentIndex < categories.length - 1) {
      setActiveCategory(categories[currentIndex + 1]);
    }
  };

  const handlePrevCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    if (currentIndex > 0) {
      setActiveCategory(categories[currentIndex - 1]);
    }
  };

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const isFirstCategory = categories.indexOf(activeCategory) === 0;
  const isLastCategory =
    categories.indexOf(activeCategory) === categories.length - 1;

  return (
    <div className="flex justify-center py-10">
      <div className="bg-white text-black font-sans w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 rounded-lg">
        <header className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-left">{title}</h2>
          <nav className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-sm font-semibold text-gray-500">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(category);
                }}
                className={`whitespace-nowrap ${
                  activeCategory === category
                    ? "text-green-500 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-green-500"
                    : "hover:text-green-500 transition-colors"
                }`}
              >
                {category}
              </a>
            ))}
            <div className="flex items-center gap-2 md:ml-4">
              <IoChevronBack
                size={20}
                onClick={handlePrevCategory}
                className={
                  isFirstCategory
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-800 cursor-pointer hover:text-black"
                }
              />
              <IoChevronForward
                size={20}
                onClick={handleNextCategory}
                className={
                  isLastCategory
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-800 cursor-pointer hover:text-black"
                }
              />
            </div>
          </nav>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 min-h-[300px]">
          {filteredProducts.map((product) => (
            <div key={product.id} className="text-left group">
              <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-md z-10 ${product.badge.className}`}
                  >
                    {product.badge.text}
                  </div>
                )}
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  src={product.imageUrl}
                  alt={`${product.brand} ${product.model}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/300x300/e2e8f0/334155?text=Image+Error";
                  }}
                />
                {/* --- New Hover Overlay --- */}
                <div className="absolute inset-0 bg-black/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <div className="flex flex-col items-center gap-3 p-4 w-full">
                    <div className="flex items-center gap-2">
                      <button onClick={()=>addToWishList(product)} className="w-10 h-10 flex items-center justify-center bg-black text-[#68D237] rounded-md hover:bg-gray-100 transition-colors">
                        <IoHeartOutline size={16} />
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center bg-black text-[#68D237]  rounded-md hover:bg-gray-100 transition-colors">
                        <IoEyeOutline size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full h-10 bg-[#68D237] text-black font-semibold rounded-md hover:bg-lime-600 transition-colors px-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 leading-tight text-sm h-10">
                  {`${product.brand} ${product.model}`}
                </h3>
                <div className="flex items-end gap-2 my-1">
                  <p className="text-lg font-bold text-black">
                    {product.price}
                  </p>
                  {product.oldPrice && (
                    <p className="text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </p>
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
