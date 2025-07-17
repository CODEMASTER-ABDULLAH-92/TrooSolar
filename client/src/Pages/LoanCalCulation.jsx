import React, { useState } from "react";
import { Bell } from "lucide-react";
import SideBar from "../Component/SideBar";
import { Input } from "../Component/Input";

import LoanRepaymentCard from "../Component/LoanRepaymentCard";
import { Link, useNavigate } from "react-router-dom";
import { DurationDropDown } from "../Component/DurationDropDown";

const LoanCalculation = () => {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  
  const durationOption = [
    "3 month",
    "6 month",
    "9 month",
    "12 month",
    "1 Year",
    "2 Year",
  ]
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ accountNumber, bankName, accountName });
    navigate("/creditscore")
  };
  return (
    <div className="flex min-h-screen w-full overflow-clip">
      <SideBar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Topbar */}
        <div className="flex gap-3 items-center h-[90px] bg-white justify-end px-5 sm:pr-10 py-5">
          <div className="rounded-lg flex justify-center items-center shadow-md h-10 w-10">
            <Bell size={24} />
          </div>
          <div className="bg-[#e9e9e9] h-12 w-12 rounded-full flex items-center justify-center">
            <p className="text-lg text-[#909090] font-bold">QA</p>
          </div>
          <p className="text-[#000000] text-lg hidden sm:block">
            Qamardeen AbdulMalik
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-[#F5F7FF] h-full w-full p-6 sm:p-10">
          <h1 className="text-[26px] font-medium tracking-tight">
            Loan Calculation
          </h1>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-1/2 rounded-lg"
            >
              <Input
                id="product"
                label="How much is the product you are purchasing"
                placeholder="Enter Your Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
              <Input
                id="loanAmount"
                label="Loan Amount"
                placeholder="Enter Loan Account"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
              <DurationDropDown
                id="duration"
                label="Repayment Duration"
                value={bankName}
                placeHolder="Select Duration"
                onChange={(e) => setBankName(e.target.value)}
                options={durationOption}
              />

              <div className="flex justify-center items-center gap-4">
                <Link to={"/linkAccount"} className="mt-4 text-center py-4 w-[40%] px-10 bg-white border text-black rounded-full transition duration-200">
                  Back
                </Link>
                <button
                  type="submit" 
                  className="mt-4 py-4 w-full px-10 bg-[#273e8e] text-white rounded-full hover:bg-[#1f2f6d] transition duration-200"
                  >
                  Proceed
                </button>
              </div>
            </form>

            {/* Right Note */}
            <div className="w-full md:w-1/2 h-full flex items-start justify-center">

            <LoanRepaymentCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculation;
