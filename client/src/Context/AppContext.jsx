import { createContext, useState } from "react";
import { products } from "../assets/data";

export const ContextApi = createContext();

export const ContextProvider = (props) => {
  const [quantity, setQuantity] = useState({});
  const [filteredResults, setFilteredResults] = useState([]);

  const addToCart = (itemId) => {
    const cartData = structuredClone(quantity);

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] = cartData[itemId] + 1;
    }

    setQuantity(cartData);
  };

  const value = {
    products, // ✅ Add this line
    quantity,
    setQuantity,
    addToCart,
    setFilteredResults,
    filteredResults,
  };

  return (
    <ContextApi.Provider value={value}>
      {props.children}
    </ContextApi.Provider>
  );
};
