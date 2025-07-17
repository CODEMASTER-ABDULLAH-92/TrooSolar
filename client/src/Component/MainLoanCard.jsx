import React from "react";

const MainLoanCard = ({ loanStatus, intersetRate, duration, loanAmount, date , statusTextColor, statusBgColor }) => {
  return (
    <div className="w-full max-h-full rounded-[10px] bg-[#ffff00]/10 border-[2px] border-[#cdcdcd] p-5 flex flex-col gap-4">
      <div className="flex flex-col gap-3 text-sm">

        {/* Loan Status */}
        <div className="flex justify-between text-[16px]">
          <span className={`text-gray-600`}>Loan Status</span>
          <span className={`${statusBgColor} ${statusTextColor} py-1 px-2 rounded-[5px]`}>{loanStatus}</span>
        </div>
        <hr className="text-gray-400" />

        {/* Loan Amount */}
        <div className="flex justify-between text-[16px]">
          <span className="text-gray-600">Loan Amount</span>
          <span className="text-[#273e8e] font-medium" >{loanAmount}</span>
        </div>
        <hr className="text-gray-400" />

        {/* Interest Rate */}
        <div className="flex justify-between text-[16px]">
          <span className="text-gray-600">Interset Rate</span>
          <span className="text-[#273e8e] font-medium">{intersetRate}</span>
        </div>
        <hr className="text-gray-400" />

        {/* Loan Period */}
        <div className="flex justify-between text-[16px]">
          <span className="text-gray-600">Loan Period</span>
          <span className="">{duration}</span>
        </div>

        <hr className="text-gray-400" />

        {/* Distribution Date */}
        <div className="flex justify-between text-[16px]">
          <span className="text-gray-600">Distribution Date</span>
          <span className="">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default MainLoanCard;
