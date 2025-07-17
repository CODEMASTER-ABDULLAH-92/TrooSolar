import React from "react";
import { assets } from "../assets/data";
const LoanStatusCard = ({amount,amountColor,status,statusTextColor,statusBgColor,date ,showBtn}) => {
  return (
    <div className="h-[150px] min-w-full border rounded-2xl p-4 bg-white  border-gray-400">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h1 className={`text-2xl font-semibold ${amountColor}`}>{amount}</h1>
          <p className="text-gray-400 pb-2 text-sm">{date}</p>
        </div>
        <button className={` py-1 px-2 text-sm rounded-lg  ${statusBgColor} ${statusTextColor}`}>
        {status}
        </button>
      </div>
      <hr />
      <div className="flex justify-between items-center pt-2">
        <div className="space-y-1">
          <p className="text-sm  text-gray-400">Next Repayment Date</p>
          <p className="text-black pb-2 text-sm">{date}</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="py-2 rounded-md shadow-2xl border-gray-400 border px-2 ">
            <img src={assets.rePayIcon} alt="" />
          </div>
          <button className="bg-[#273e8e] py-3.5 px-6 text-sm rounded-full text-[#ffffff]">
            Repay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanStatusCard;
