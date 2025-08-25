import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProductShowcase from "../components/home/ShopCategories";
import PromoSection from "../components/home/ProductPromoCard";
import WalletSaleBanner from "../components/home/WalletSaleBanner";
import TechnologySection from "../components/home/TechnologySection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProductSlider from "../components/home/ProductSlider";

import { productSections } from "../data/mockData";


const HomePage = () => {
  return (
    <>
  
      <HeroSection />
      <ProductShowcase />
      <PromoSection />
      <WalletSaleBanner />
      
      {productSections.map((section, index) => (
        <ProductSlider
          key={index}
          title={section.title}
          products={section.products}
          categories={section.categories} 
        />
      ))}

      <FeaturesSection />
    </>
  );
};

export default HomePage;