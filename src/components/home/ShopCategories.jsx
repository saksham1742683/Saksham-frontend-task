import React, { useState, useEffect } from "react";
import { productSections } from "../../data/mockData";// Import the unified data
import { iconMap } from "../CategoryIcons";

// Your IoChevronBack and IoChevronForward components can remain here or be moved
const IoChevronBack = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144"></path></svg>
);
const IoChevronForward = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"></path></svg>
);


const ShopCategories = () => {
  // Initialize state with the ID of the 'Technology' section
  const [activeCategoryId, setActiveCategoryId] = useState(2);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const activeCategory = productSections.find(
      (cat) => cat.id === activeCategoryId
    );
    
    if (activeCategory && activeCategory.products) {
      setDisplayedProducts(activeCategory.products);
    } else {
      setDisplayedProducts([]);
    }
  }, [activeCategoryId]);

  return (
    <div className="bg-white text-black p-4 sm:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-3xl font-bold mb-4 sm:mb-0">
            Shop By Categories
          </h2>
          <div className="flex items-center gap-4">
            <a href="#" className="text-green-500 font-semibold text-sm hover:underline">See All</a>
            <IoChevronBack size={20} className="text-gray-400 cursor-pointer" />
            <IoChevronForward size={20} className="text-gray-800 cursor-pointer"/>
          </div>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {productSections.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategoryId(category.id)}
              className={`
                w-full aspect-[4/3] rounded-lg flex flex-col items-center justify-center p-2
                cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1
                ${
                  activeCategoryId === category.id
                    ? "bg-green-50 border-2 border-green-400 text-green-500 shadow-lg"
                    : "bg-white border border-gray-200 text-gray-500 hover:shadow-md hover:border-gray-300"
                }
              `}
            >
              <div className="text-4xl">{iconMap[category.title]}</div>
              <span className="mt-3 text-center font-bold text-sm leading-tight">
                {category.title}
              </span>
            </div>
          ))}
        </div>

        {/* This product grid now works perfectly with the unified data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
          {displayedProducts.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="relative bg-gray-100 rounded-lg aspect-square group overflow-hidden">
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-md z-10 ${product.badge.className}`}
                  >
                    {product.badge.text}
                  </div>
                )}
                <img
                  src={product.imageUrl}
                  alt={`${product.brand} ${product.model}`}
                  className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x400/e2e8f0/94a3b8?text=Image+Error";
                  }}
                />
              </div>
              <div className="mt-3 text-left flex-grow">
                <p className="text-sm text-gray-800 leading-tight font-semibold">
                  {product.brand}
                </p>
                <p className="text-sm text-gray-500">{product.model}</p>
                <div className="mt-auto pt-2">
                  <p className="text-lg font-bold text-black">
                    {product.price}
                  </p>
                  {product.oldPrice && (
                    <p className="text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    <a href="#" className="text-blue-500 hover:underline">
                      {product.author}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;