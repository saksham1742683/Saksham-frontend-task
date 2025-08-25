// src/components/layout/Header.js
import React from "react";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import BottomNav from "./BottomNav"; // Renamed for clarity

const Header = () => {
  return (
    <header className="  w-full fixed top-0 left-0 z-[100]">
      <div className=" bg-black">
        <TopBar />
        <MainHeader />
      </div>
      <BottomNav />
    </header>
  );
};

export default Header;
