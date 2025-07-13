import { createContext, useState } from "react";

export const ContextApi = createContext();

export const ContextProvider = (props) => {
    let [quantity,setQuantity] = useState({});
    const value = {
        quantity,setQuantity,
    }

    const addToCart = (itemId) => {
        let cartData = structuredClone(quantity);
    
        if (!cartData[itemId]) {
            cartData[itemId] = 1;
        } else {
            cartData[itemId] = cartData[itemId] + 1;
        }
    
        setQuantity(cartData);
    };
    return (
        <ContextApi.Provider value={value}>
            {props.children}
        </ContextApi.Provider>
    )
}