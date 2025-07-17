import React, { useState } from "react";
import SideBar from "../Component/SideBar";
import LoanWallet from "../Component/LoanWallet";
import { assets } from "../assets/data";
import Terms from "../Component/Terms";
import TopNavbar from "../Component/TopNavbar";
import LoanCard from "../Component/LoanCard";
import ActiveLoan from "./ActiveLoan";
import OverdueLoan from "./Overdue";
import CompletedLoan from "./CompletedLoan";
import PendingLoan from "./PendingLoan";

const LoanDashBoard = () => {
  const [showLoanTerms, setShowLoanTerms] = useState(true);
//Here when we make anyone of true that's page is render on the UI if we make activeLoan true the only active only page is only rendered

  const [activeLoan, setActiveLoan] = useState(false); 
  const [overDueLoan, setOverDueLoan] = useState(false);
  const [completedLoan, setCompletedLoan] = useState(false);
  const [pendingLoan, setPendingLoan] = useState(true);

  // Conditional rendering for loan components
  if (activeLoan) return <ActiveLoan />;
  if (overDueLoan) return <OverdueLoan />;
  if (completedLoan) return <CompletedLoan />;
  if (pendingLoan) return <PendingLoan/>
  return (
    <div
      className={`relative flex min-h-screen overflow-hidden ${
        !showLoanTerms ? "bg-black/40" : "bg-[#F5F7FF]"
      }`}
    >
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <TopNavbar />

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-6 p-5 flex-1">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full">
            <h1 className="text-2xl font-semibold mb-1">Loans</h1>
            <p className="text-gray-500 mb-4">Welcome to the dashboard</p>
            <LoanWallet />
            <div className="mt-5">
              <LoanCard />
            </div>
            <p className="bg-gray-300 text-[#273e8e] p-3 rounded-xl border-dashed border mt-4">
              Your loan application is pending
            </p>
          </div>

          {/* Right Section */}
          {activeLoan  &&
            overDueLoan  &&
            completedLoan  &&
            pendingLoan  && (
              <div className="lg:w-1/2 w-full rounded-xl p-6 flex flex-col justify-center items-center">
                <img
                  src={assets.LoanBox}
                  alt="LoanBox"
                  className="w-40 h-40 object-contain mb-4"
                />
                <p className="text-gray-600 mb-4">
                  You have not taken any loan yet
                </p>
                <button
                  onClick={() => setShowLoanTerms(false)}
                  className="px-6 py-3 rounded-md bg-[#273e8e] text-white hover:bg-[#1d2f6b] transition"
                >
                  Apply Now
                </button>
              </div>
            )}
        </div>
      </div>

      {/* Modal */}
      {!showLoanTerms && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Terms link="/linkAccount" />
        </div>
      )}
    </div>
  );
};

export default LoanDashBoard;
