import React, { useContext } from "react";
import { ContextApi } from "../Context/AppContext";
const Product = ({
  image,
  heading,
  price,
  oldPrice,
  discount,
  soldText,
  progressBar,
  rating,
  id,
}) => {
  const { addToCart, removeToCart } = useContext(ContextApi);
  return (
    <div className="max-w-[340px] w-full bg-white rounded-2xl p-4 shadow-sm space-y-4">
      {/* Image Section */}
      <div className="border-l-[4px] border-[#e8a91d] rounded-xl overflow-hidden">
        <img
          src={image}
          alt="Solar bundle product"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-[15px] font-semibold text-gray-800">{heading}</h2>

      <hr />

      {/* Price and Progress Section */}
      <div className="flex justify-between items-start">
        {/* Left: Price Info */}
        <div>
          <p className="font-bold text-[#273E8E] text-lg">{price}</p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-gray-400 line-through text-sm">{oldPrice}</p>
            <span className="px-2 py-[2px] rounded-full text-[#FFA500] text-xs bg-[#FFA500]/20">
              {discount}
            </span>
          </div>
        </div>

        {/* Right: Progress and Rating */}
        <div className="text-right space-y-1">
          <p className="text-sm text-gray-400">{soldText}</p>
          <img
            src={progressBar}
            alt="Progress bar"
            className="w-[100px] h-2 object-contain"
          />
          <img
            src={rating}
            alt="Customer rating"
            className="w-[100px] object-contain"
          />
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <button className="border border-[#273e8e] py-2 rounded-full text-[#273e8e] hover:bg-[#273e8e]/10 transition duration-150">
          Learn More
        </button>
        <button onClick={()=>addToCart(id)} className="py-2 rounded-full bg-[#273e8e] text-white hover:bg-[#1f2f6e] transition duration-150">
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default Product;
