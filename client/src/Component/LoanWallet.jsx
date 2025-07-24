import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const LoanWallet = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const path = location.pathname.includes("loanDetails/loanDashboard");
  return (
    <div className="bg-[#273e8e] rounded-[16px] px-4 pt-4 pb-3 text-white shadow-md">
      {/* Header: Label & Icon */}
      <div className="flex justify-between items-center mb-2">
        <p className="text-white/70 text-sm">Loan Wallet</p>
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
      <h1 className="text-xl font-bold mb-2">
        {open ? "******" : "N1,000,000"}
      </h1>

      {/* Loan Info + Countdown */}
      <div className="flex  min-h-[70px] flex-row justify-between items-start sm:items-center bg-[#1d3073] py-3 px-3 rounded-md gap-3">
        {/* Loan Info */}
        <div className="flex flex-col text-sm leading-tight">
          <p className="text-white/80 text-xs">You have no loans</p>
          <p className="text-white">-</p>
        </div>

        {/* Countdown Timer */}
        <div className="flex items-center h-[20px] gap-4">
          {/* Days */}
          <div className="w-[50px] h-[50px] flex flex-col items-center justify-center border border-[#ccc] rounded-[12px] shadow-[0_2px_0_#ccc]">
            <p className="text-[20px] font-bold leading-none">00</p>
            <p className="text-xs">Days</p>
          </div>

          {/* Colon */}
          <div className="text-[24px] font-extrabold">:</div>

          {/* Hours */}
          <div className="w-[50px] h-[50px] flex flex-col items-center justify-center border border-[#ccc] rounded-[12px] shadow-[0_2px_0_#ccc]">
            <p className="text-[20px] font-bold leading-none">00</p>
            <p className="text-xs">Hours</p>
          </div>

        </div>
      </div>

      {/* CTA Button */}
      <button

        className="bg-white text-[#000]  text-sm rounded-full py-3 mt-2 w-full"
      >
        {path ? "Transfer to Wallet":"Apply for Loan"}
      </button>
    </div>
  );
};

export default LoanWallet;
