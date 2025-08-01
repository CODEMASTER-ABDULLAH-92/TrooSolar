import React, { useContext } from "react";
import { ContextApi } from "../Context/AppContext";
import { FaUserTie } from "react-icons/fa"; // Investor icon
import { assets } from "../assets/data";

const Product = ({
  image,
  heading,
  price,
  oldPrice,
  discount,
  soldText,
  rating,
  id,
}) => {
  const { addToCart } = useContext(ContextApi);

  return (
    <div className="max-w-[380px] w-full max-h-[460px] bg-white border border-gray-300 rounded-2xl p-2 space-y-5">
      {/* Image Section */}
      <div className="bg-gray-100 border-l-3 border-amber-400 h-[180px] flex justify-center items-center rounded-xl overflow-hidden">
        <img
          src={image}
          alt="Solar bundle product"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="text-[14px] font-normal text-gray-800">
        {heading.slice(0, 24)}
      </h2>

      <hr className="mt-2 mb-2 border-gray-300" />

      {/* Price and Investor Section */}
      <div className="flex justify-between items-center">
        {/* Left: Price Info */}
        <div>
          <p className="font-medium text-[#273E8E] text-lg">{price}</p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-gray-400 line-through text-[10px]">{oldPrice}</p>
            <span className="px-2 py-[2px] rounded-full text-[#FFA500] text-[9px] bg-[#FFA500]/20">
              {discount}
            </span>
          </div>
        </div>

        {/* Right: Investor + Rating */}
        <div className="text-right space-y-2">
          <div className="flex items-center justify-end gap-1 text-sm text-gray-600">
            {/* <FaUserTie className="text-[#273E8E]" /> */}
            <img className="h-4 w-4" src={assets.solarProject} alt="" />
            <span>Investor</span>
          </div>
          <img
            src={rating}
            alt="Customer rating"
            className="w-[70px] object-contain"
          />
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className="border border-[#273e8e]  text-xs rounded-full text-[#273e8e] ">
          Learn More
        </button>
        <button
          onClick={() => addToCart(id)}
          className="py-1.5 text-xs rounded-full bg-[#273e8e] text-white "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
