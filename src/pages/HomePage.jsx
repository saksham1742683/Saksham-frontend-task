// src/pages/HomePage.js
import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProductShowcase from "../components/home/Categories";
import PromoSection from "../components/home/ProductPromoCard";
import WalletSaleBanner from "../components/home/WalletSaleBanner";
import TechnologySection from "../components/home/TechnologySection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProductSlider from "../components/home/ProductSlider";

import {categoriesData as categories } from "../data/mockData";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <PromoSection />
      <WalletSaleBanner />
      <TechnologySection />

      {/* 🔥 Dynamic Map for Categories */}
      {categories.map((category, index) => (
        <ProductSlider
          key={index}
          title={category.title}
          products={category.products}
        />
      ))}

      <FeaturesSection />
    </>
  );
};

export default HomePage;
