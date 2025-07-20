import { createContext, useState } from "react";
import { products } from "../assets/data";
import { solarBundleData } from "../assets/data";

import toast from "react-hot-toast";

export const ContextApi = createContext();

export const ContextProvider = (props) => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    const cartData = structuredClone(cartItems);
    try {
      cartData[itemId] = (cartData[itemId] || 0) + 1;
      setCartItems(cartData);
      toast.success("Added to Cart");
    } catch (error) {
      toast.error("Error adding to Cart");
    }
  };

  const removeToCart = (itemId) => {
    const cartData = structuredClone(cartItems);
    try {
      if (!cartData[itemId]) {
        toast.error("Item not in cart");
        return;
      }
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
      setCartItems(cartData);
      toast.success("Removed from Cart");
    } catch (error) {
      toast.error("Error removing from Cart");
    }
  };

  const getCartTotal = () => {
    let total = 0;
    for(let cart in cartItems){
      total +=cartItems[cart];
    }
    return total;
  }
  
  const value = {
    products,solarBundleData,
    cartItems,
    addToCart,
    removeToCart,
    filteredResults,
    setFilteredResults,
    getCartTotal,
  };

  return (
    <ContextApi.Provider value={value}>{props.children}</ContextApi.Provider>
  );
};
