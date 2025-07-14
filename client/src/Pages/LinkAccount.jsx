import React, { useState } from "react";
import { Bell } from "lucide-react";
import SideBar from "../Component/SideBar";
import { Input } from "../Component/Input";
import { BankDropdown } from "../Component/DropDown";
import { bankOptions } from "../assets/data";
import { useNavigate } from "react-router-dom";

const LinkAccount = () => {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ accountNumber, bankName, accountName });
navigate("/loanCalculate");
  };

  return (
    <div className="flex min-h-screen w-full">
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
            Link Account
          </h1>
          <p className="text-lg text-gray-500 pb-6">Add your bank details</p>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-1/2 rounded-lg"
            >
              <Input
                id="account"
                label="Account Number"
                placeholder="Enter Your Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
              <BankDropdown
                id="bank"
                label="Bank Name"
                value={bankName}
                placeHolder="Select Bank"
                onChange={(e) => setBankName(e.target.value)}
                options={bankOptions}
              />
              <Input
                id="accountName"
                label="Account Name"
                placeholder="Enter Your Account Name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />

              <button onClick={navigate("/loanCalculate")}
                type="submit"
                className="mt-4 py-4 w-full px-10 bg-[#273e8e] text-white rounded-full hover:bg-[#1f2f6d] transition duration-200"
              >
                Proceed
              </button>
            </form>

            {/* Right Note */}
            <div className="w-full md:w-1/2 flex items-start justify-center">
              <div className="bg-[#273E8E1A] mt-4 md:mt-10 p-4 rounded-lg border-dashed border-2 border-[#273e8e] max-w-md w-full">
                <p className="text-center text-sm text-[#273E8E]">
                  Kindly note that a service charge of <strong>N50</strong> will be
                  deducted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkAccount;
