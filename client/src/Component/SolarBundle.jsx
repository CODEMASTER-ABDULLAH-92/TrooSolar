import React from "react";
const SolarBundle = ({ image,
  heading,
  price,
  oldPrice,
  discount,
  soldText,
  progressBar,
  rating,
  borderColor}) => {
  return (
    <div
      className=" sm:min-w-[380px] bg-white rounded-2xl p-4 shadow-sm"
      style={{ border: `2px solid ${borderColor}` }}
    >
      <img src={image} alt="Solar bundle product" className="w-full h-auto rounded-md mb-3" />

      <h2 className="text-[14px] font-[500] mb-2">{heading}</h2>

      <hr className="mb-3" />

      <div className="flex justify-between items-start">
        {/* Left: Pricing */}
        <div>
          <p className="font-bold text-[#273E8E] text-lg">{price}</p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-gray-400 line-through text-sm">{oldPrice}</p>
            <span className="px-2 py-1 rounded-full text-[#FFA500] text-xs bg-[#FFA500]/20">
              {discount}
            </span>
          </div>
        </div>

        {/* Right: Progress & Rating */}
        <div className="space-y-2 text-right">
          <div>
            <p className="text-sm text-gray-400 mb-1">{soldText}</p>
            <img src={progressBar} alt="Progress bar" className="w-[100px] h-2 object-contain" />
          </div>
          <img src={rating} alt="Customer rating" className="w-[100px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default SolarBundle;
