import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProductShowcase from "../components/home/ShopCategories";
import PromoSection from "../components/home/ProductPromoCard";
import WalletSaleBanner from "../components/home/WalletSaleBanner";
import TechnologySection from "../components/home/TechnologySection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProductSlider from "../components/home/ProductSlider";

// Updated import to reflect the new data structure
import { productSections } from "../data/mockData";
// --- 1. Create Cart Context ---
// This will hold the cart's state and functions to modify it.

const HomePage = () => {
  return (
    <>
  
      <HeroSection />
      <ProductShowcase />
      <PromoSection />
      <WalletSaleBanner />
      {/* <TechnologySection /> */}

      {/* Dynamic Map for Product Sections */}
      {productSections.map((section, index) => (
        <ProductSlider
          key={index}
          title={section.title}
          products={section.products}
          categories={section.categories} // Pass the categories for filtering
        />
      ))}

      <FeaturesSection />
    </>
  );
};

export default HomePage;