import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { assets } from "../assets/data";

const ShoppingWallet = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-[#273e8e] rounded-[16px] px-4 pt-4 pb-3 text-white shadow-md">
      {/* Header: Label & Icon */}
      <div className="flex justify-between items-center mb-2">
        <p className="text-white/70 text-sm">Shopping Wallet</p>
        <div className="bg-[#1d3073] h-7 w-7 rounded-md flex items-center justify-center">
          {open ? (
            <Eye
              onClick={() => setOpen(!open)}
              size={18}
              className="text-white/70 cursor-pointer"
            />
          ) : (
            <EyeOff
              onClick={() => setOpen(!open)}
              size={18}
              className="text-white/70 cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Balance */}
      <h1 className="text-xl font-bold -tracking-tighter mb-2">
        {open ? "******" : "N1,000,000"}
      </h1>

      <div className="flex  min-h-[70px] flex-row justify-between items-start sm:items-center bg-[#1d3073] py-3 px-3 rounded-md gap-3">
        {/* Loan Info */}
        <div className="flex flex-col gap-2 text-sm leading-tight">
          <p className="text-white/80 text-xs">Last Transaction</p>
          <p className="text-white">{open ? "******" : "N1,000,000"}</p>
        </div>
        <div className="h-10 w-10 bg-white flex justify-center  items-center rounded-full">
          <img src={assets.greenTick} className="h-4 w-4 rotate-12" alt="" />
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-white text-[#000]  text-sm rounded-full py-3 mt-2 w-full">
        Fund Wallet
      </button>
    </div>
  );
};

export default ShoppingWallet;
