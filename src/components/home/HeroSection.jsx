import React from "react";

// You can replace these with actual icons from a library like 'react-icons'
const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);
const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 font-sans">
  
      <div className="max-w-[90rem] w-full mx-auto flex flex-col-reverse lg:flex-row gap-6 h-auto lg:h-[85vh]">
 
        <div 
          className="rounded-lg w-full lg:w-2/12 p-8 flex flex-col justify-between text-center bg-cover bg-center relative min-h-[300px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=800&fit=crop')`
          }}
        >
          <div className="relative z-10 text-white">
            <p className="text-sm">Asus</p>
            <h2 className="text-xl  mt-2 leading-tight">
              Super Sale
            </h2>
            <h2 className="text-xl  leading-tight">Laptop Gaming</h2>
          </div>
          <button className="bg-lime-400 text-black  py-3 px-6 rounded-md w-full hover:bg-[#68D237] transition-colors relative z-10">
            Order Now
          </button>
        </div>

        <div className="w-full lg:w-7/12 flex flex-col gap-6">
          {/* Top Banner Card */}
          <div 
            className="rounded-lg flex-grow p-8 md:p-12 flex flex-col justify-center relative bg-cover bg-center min-h-[400px]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop')`
            }}
          >
            <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
              <button className="p-1 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 transition-colors text-white">
                <ChevronLeftIcon />
              </button>
              <button className="p-1 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 transition-colors text-white">
                <ChevronRightIcon />
              </button>
            </div>
            <div className="relative z-10 text-white">
              <p className="text-sm">New Product</p>
              {/* - Font size is smaller on mobile (text-5xl) and larger on medium screens and up (md:text-7xl).
              */}
              <h1 className="text-5xl md:text-7xl font-medium tracking-tighter">
                HAND WATCH
              </h1>
              <h1 className="text-5xl md:text-7xl font-medium tracking-tighter">
                ROSSINI
              </h1>
              <button className="bg-lime-400 text-black font-semibold py-3 px-8 rounded-md mt-6 hover:bg-[#68D237] transition-colors">
                Buy Now
              </button>
            </div>
            <div className="absolute bottom-6 right-6 flex items-center gap-2 z-10">
              <div className="w-5 h-2 rounded-full bg-lime-400"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>
    
          <div className="h-auto lg:h-[35%] flex flex-col md:flex-row gap-6">
            {/* Each card is full width on mobile and 1/3 width on medium screens up */}
            <div 
              className="rounded-lg w-full md:w-1/3 p-6 flex flex-col justify-center bg-cover bg-center relative min-h-[150px]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=300&fit=crop')`
              }}
            >
              <div className="relative z-10 text-white">
                <p className="text-sm">Wine</p>
                <h3 className="text-xl font-bold">Drunkenness</h3>
                <h3 className="text-xl font-bold">Deep Flavor</h3>
              </div>
            </div>
            <div 
              className="rounded-lg w-full md:w-1/3 p-6 flex flex-col justify-center bg-cover bg-center relative min-h-[150px]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop')`
              }}
            >
              <div className="relative z-10 text-white">
                <p className="text-sm">Cosmetic</p>
                <h3 className="text-xl font-bold">MAXIMI</h3>
                <h3 className="text-xl font-bold">Sale 50%</h3>
              </div>
            </div>
            <div 
              className="rounded-lg w-full md:w-1/3 p-6 flex flex-col justify-center bg-cover bg-center relative min-h-[150px]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop')`
              }}
            >
              <div className="relative z-10 text-white">
                <p className="text-sm">Sunglasses</p>
                <h3 className="text-xl font-bold">Authentic</h3>
                <h3 className="text-xl font-bold">Sale off 50%</h3>
              </div>
            </div>
          </div>
        </div>

  
        <div className="w-full lg:w-3/12 flex flex-col gap-6">
          <div 
            className="rounded-lg p-6 flex flex-col justify-center flex-grow-[2] bg-cover bg-center relative min-h-[150px]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400&h=200&fit=crop')`
            }}
          >
            <div className="relative z-10 text-white">
              <p className="text-sm">Big deal</p>
              <h3 className="text-xl font-bold">Black Friday</h3>
              <h3 className="text-xl font-bold">Buy 1 Get 1</h3>
            </div>
          </div>
          <div 
            className="rounded-lg p-6 flex flex-col justify-center flex-grow-[3] bg-cover bg-center relative min-h-[200px]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop')`
            }}
          >
            <div className="relative z-10 text-white">
              <p className="text-sm">Fujiwa</p>
              <h3 className="text-xl font-bold">ION Alkaline</h3>
              <h3 className="text-xl font-bold">Micronutrient</h3>
              <h3 className="text-xl font-bold">Supplements</h3>
            </div>
          </div>
     
          <div className="h-auto lg:h-[35%] flex flex-col sm:flex-row gap-6">
            {/* Each card is full width on mobile and 1/2 width on small screens up */}
            <div 
              className="rounded-lg w-full sm:w-1/2 p-4 flex flex-col justify-center bg-cover bg-center relative min-h-[150px]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop')`
              }}
            >
              <div className="relative z-10 text-white">
                <p className="text-sm">Hand Wash</p>
                <h3 className="text-lg font-bold">Clean hands</h3>
                <h3 className="text-lg font-bold">Clean bacteria</h3>
              </div>
            </div>
            <div 
              className="rounded-lg w-full sm:w-1/2 p-4 flex flex-col justify-center bg-cover bg-center relative min-h-[150px]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop')`
              }}
            >
              <div className="relative z-10 text-white">
                <p className="text-sm">Fashion</p>
                <h3 className="text-lg font-bold">Nice bag</h3>
                <h3 className="text-lg font-bold">Nice style</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
