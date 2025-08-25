// src/App.js
import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import toast, { Toaster } from "react-hot-toast";
import {createContext, useContext,useState} from 'react'
const CartContext = createContext();

// Custom hook to easily use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
    const [wishListItems, setWishListItems] = useState([]);

  const addToCart = (product) => {
    toast.success('Product added to cart')
    setCartItems((prevItems) => {
   
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {

        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
   
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  
  };
    const addToWishList = (product) => {
         toast.success('Product added to WishList')
    setWishListItems((prevItems) => {
      // Check if the item is already in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
       
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it's a new item, add it to the cart with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    console.log("Added to cart:", product.model);

  };

  const value = {
    cartItems,
    wishListItems,
    addToCart,
    addToWishList
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
function App() {
  return (
    <div className="font-sans">
      <Toaster/>
      <CartProvider>
      <Header />
      <HomePage />
      <Footer/>
      </CartProvider>
    </div>
  );
}

export default App;
