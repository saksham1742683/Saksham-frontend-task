// src/App.js
import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HomePage />
      <Footer/>
    </div>
  );
}

export default App;
