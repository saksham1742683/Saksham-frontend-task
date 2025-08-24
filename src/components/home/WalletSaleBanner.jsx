import React from "react";

const WalletSaleBanner = () => {
  return (
    // Main container with Unsplash background image
    <div 
      className="min-h-screen flex items-center justify-end md:pr-32 font-sans bg-cover px-4 bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content container with text aligned to the right */}
      <div className="text-center md:text-right relative z-10">
        {/* Subheading for "New Product" - now white for better contrast */}
        <p className="text-sm font-medium text-white text-opacity-80">New Product</p>

        {/* Main headings with white text and drop shadows for visibility */}
        <h1 className="text-3xl md:text-5xl font-light text-white tracking-widest my-4 drop-shadow-lg">
          FASHIONABLE WALLETS
        </h1>
        <h1 className=" text-3xl md:text-5xl font-light text-white tracking-widest drop-shadow-lg">
          BIG GOOD SALE FOR HER
        </h1>

        {/* "Order Now" button with the same green color and added shadow */}
        <button className="mt-8 bg-[#68D237] text-black font-semibold py-3 px-8 rounded-md hover:bg-lime-600 transition-colors shadow-lg">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default WalletSaleBanner;