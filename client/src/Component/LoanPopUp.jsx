import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";
import { Link } from "react-router-dom";

const LoanPopUp = () => {
  return (
    <div className="fixed flex items-center justify-center inset-0">
      <div className="w-[430px] rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex flex-col items-center space-y-6 rounded-2xl border border-gray-300 p-6 shadow-2xl">
          {/* Icon */}
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#FFA500]">
            <BsExclamationTriangle size={22} color="white" />
          </div>

          {/* Message */}
          <p className="text-sm text-center">
            Your loan balance is low, kindly apply for one to proceed.
          </p>

          {/* Buttons */}
          <div className="flex w-full gap-4">
            <Link
              to="/homePage"
              className="flex-1 rounded-full border border-[#273e8e] py-3 text-center text-sm text-[#273e8e]"
            >
              Back
            </Link>
            <Link className="flex-1 rounded-full bg-[#273e8e] py-3 text-center text-sm text-white">
              Apply For Loan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanPopUp;