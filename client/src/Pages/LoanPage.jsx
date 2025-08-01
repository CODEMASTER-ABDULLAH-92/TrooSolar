import React, { useState } from "react";
import SideBar from "../Component/SideBar";
import LoanWallet from "../Component/LoanWallet";
import { Bell, X } from "lucide-react";
import { assets } from "../assets/data";
import { Link, useNavigate } from "react-router-dom";
import Terms from "../Component/Terms";
import TopNavbar from "../Component/TopNavbar"

const LoanPage = () => {
  const [showLoan, setShowLoan] = useState(true);
  return (
    <>
    {/* Desktop View  */}
    <div className={`relative flex min-h-screen overflow-hidden ${!showLoan ? "bg-black/40" : "bg-[#F5F7FF]"}`}>
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <TopNavbar/>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-6 p-5 flex-1">
          {/* Left Section */}
          <div className="lg:w-1/2 py-2 w-full">
            <h1 className="text-2xl py-1">Loans</h1>
            <p className="text-[#00000080] mb-4">Welcome to the dashboard</p>
            <LoanWallet />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full rounded-xl p-6 flex flex-col justify-center items-center">
            <img src={assets.LoanBox} alt="LoanBox" className="w-40 h-40 object-contain mb-4" />
            <p className="text-gray-600 mb-4">You have not taken any loan yet</p>
            <button
              onClick={() => setShowLoan(false)}
              className="px-6 py-3 rounded-md bg-[#273e8e] text-white hover:bg-[#1d2f6b] transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {!showLoan && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Terms link="/linkAccount" />
        </div>
      )}
    </div>
    </>
  );
};

export default LoanPage;
