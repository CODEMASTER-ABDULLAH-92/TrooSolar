import React, { useContext } from "react";
import { assets } from "../assets/data";
import { Trash } from "lucide-react";
import { ContextApi } from "../Context/AppContext";

const CartItems = () => {
  const { quantity, setQuantity } = useContext(ContextApi);

  const incrementCount = () => setQuantity(prev => prev + 1);

  const decrementCount = () => {
    if (quantity > 0) setQuantity(prev => prev - 1);
  };
  return (
    <div className="min-h-[150px] w-[40%] bg-white rounded-2xl border p-4">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="w-1/4 bg-[#f3f3f3] flex justify-center items-center rounded-2xl">
          <img src={assets.inverter} alt="Newman Inverter" className="h-full w-full object-contain rounded-2xl" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-xl font-semibold">Newman 12200 AGM Solar Inverter</h2>
            <p className="text-[23px] font-bold -tracking-tighter">N1,500,000</p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-4">
            <button className="flex items-center justify-center h-10 w-10 rounded-lg shadow-md bg-white hover:bg-gray-100">
              <Trash color="red" size={18} />
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={decrementCount}
                className="h-10 w-10 bg-[#273e8e] rounded-md text-white text-lg font-semibold"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={incrementCount}
                className="h-10 w-10 bg-[#273e8e] rounded-md text-white text-lg font-semibold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
