import React from "react";
// Make sure to install react-icons: npm install react-icons
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// --- Reusable Components ---

const TimeBox = ({ value, label }) => (
  <div className="text-center">
    <div className="bg-neutral-100 text-black text-xl font-bold rounded-md py-2 px-3">
      {String(value).padStart(2, "0")}
    </div>
    <span className="text-xs text-gray-500 mt-1">{label}</span>
  </div>
);

const ProductPromoCard = ({ product }) => {
  const totalStock = product.sold + product.stock;
  const soldPercentage = Math.round((product.sold / totalStock) * 100);

  return (
    <div className="rounded-lg md:flex-row flex-col flex gap-6">
      {/* Image Section */}
      <div className="md:w-1/2 aspect-square relative flex-shrink-0">
        <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
          {product.badge}
        </div>
        <div 
          className="w-full h-full rounded-md bg-cover bg-center"
          style={{
            backgroundImage: `url('${product.imageUrl}')`
          }}
        ></div>
      </div>

      {/* Details Section */}
      <div className="flex-grow flex flex-col">
        <h3 className="text-base font-medium text-gray-800">{product.title}</h3>

        <div className="my-3 flex items-end gap-3">
          <span className="text-2xl font-bold text-black">{product.price}</span>
          <span className="text-base text-gray-400 line-through">
            {product.oldPrice}
          </span>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between text-xs font-medium text-gray-600 mb-1">
            <span>Sold: {product.sold}</span>
            <span>In Stock: {product.stock}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#68D237] h-2 rounded-full"
              style={{ width: `${soldPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="my-4 flex items-center gap-3">
          <TimeBox value={product.countdown.days} label="Day" />
          <TimeBox value={product.countdown.hours} label="Hour" />
          <TimeBox value={product.countdown.minutes} label="Min" />
          <TimeBox value={product.countdown.seconds} label="Sec" />
        </div>

        <button className="mt-auto w-full bg-[#68D237] text-black font-semibold py-3 rounded-md hover:bg-lime-600 transition-colors">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

// --- Data for Promo Products ---

const promoProductsData = [
  {
    id: 1,
    badge: "-15%",
    title: "Apple Macbook Air MWTJ2SA/A Space Grey (2020)",
    price: "$1,099",
    oldPrice: "$1193.71",
    sold: 700,
    stock: 300,
    countdown: { days: 123, hours: 42, minutes: 0, seconds: 8 },
    imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    badge: "-12%",
    title: "Apple Watch Series 5 MWV62VN/A",
    price: "$514.51",
    oldPrice: "$530.06",
    sold: 700,
    stock: 300,
    countdown: { days: 123, hours: 42, minutes: 0, seconds: 8 },
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
  },
];

// --- Main Component ---

const PromoSection = () => {
  return (
    <div className="bg-white text-black p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Banner Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="rounded-lg p-8 bg-cover bg-center relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=400&fit=crop')`
            }}
          >
            <div className="relative z-10">
              <p className="text-sm font-medium text-gray-200">Hot Deal</p>
              <h2 className="text-2xl font-bold my-2 text-white">TOURS SAFE</h2>
              <h2 className="text-2xl font-bold text-white">TRUE DISCOUNT</h2>
              <button className="mt-6 bg-[#68D237] text-black font-semibold py-2 px-6 rounded-md hover:bg-lime-600 transition-colors">
                Order Now
              </button>
            </div>
          </div>
          <div 
            className="rounded-lg p-8 bg-cover bg-center relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=400&fit=crop')`
            }}
          >
            <div className="relative z-10">
              <p className="text-sm font-medium text-gray-200">New Product</p>
              <h2 className="text-2xl font-bold my-2 text-white">EXPERIENCE TECHNOLOGY</h2>
              <h2 className="text-2xl font-bold text-white">RELAX HIGHTLY</h2>
              <button className="mt-6 bg-[#68D237] text-black font-semibold py-2 px-6 rounded-md hover:bg-lime-600 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Promo Product Section */}
        <div className="mt-16">
          <header className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Promo Product</h2>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-green-500 font-semibold text-sm hover:underline"
              >
                See All
              </a>
              <IoChevronBack
                size={20}
                className="text-gray-400 cursor-pointer"
              />
              <IoChevronForward
                size={20}
                className="text-gray-800 cursor-pointer"
              />
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promoProductsData.map((product) => (
              <ProductPromoCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;