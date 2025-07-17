import React, { useState } from "react";
import SideBar from "../Component/SideBar";
import TopNavbar from "../Component/TopNavbar";
import LoanWallet from "../Component/LoanWallet";
import LoanCard from "../Component/LoanCard";
import LoanStatusCard from "../Component/LoanStatusCard";
import MainLoanCard from "../Component/MainLoanCard";
import RepaymentHistorySection from "../Component/RepaymentHistorySection";

const OverdueLoan = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className={`relative flex min-h-screen overflow-hidden bg-[#F5F7FF]`}>
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
            <div className="lg:w-1/2 w-full mt-10">
              <p>Recen Loan</p>
              <div className="mt-2">
                {toggle ? (
                  <div>
                    <LoanStatusCard 
                      amount="N200,200" 
                      amountColor="text-[#008000]" 
                      status="Repaid" 
                      statusTextColor="text-[#0000FF]" 
                      statusBgColor="bg-[#0000FF33]" 
                      date="June 23, 2025" 
                      showBtn="false"
                    />
                    <p 
                      onClick={() => setToggle(!toggle)} 
                      className="cursor-pointer mt-2 text-[#273e8e] font-medium"
                    >
                      Next
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h1 className="text-lg font-semibold">Loan History</h1>
                      <p 
                        onClick={() => setToggle(!toggle)} 
                        className="cursor-pointer text-[#273e8e] font-medium"
                      >
                        Back
                      </p>
                    </div>
                    <MainLoanCard 
                      loanStatus="Repaid" 
                      intersetRate="5%" 
                      duration="12 month" 
                      loanAmount="N200,000" 
                      date="22 June, 2025" 
                      statusTextColor="text-[#0000FF]" 
                      statusBgColor="bg-[#0000FF33]" 
                    />
                    <div className="mt-4">
                    <p>Repayment History</p>
                    <RepaymentHistorySection />
                    <button className="w-full py-4 px-4 bg-[#273e8e] text-white text-sm text-center mt-5 rounded-full">Repay All</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverdueLoan;