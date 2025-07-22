import React, { useState } from "react";
import { Bell, ChevronLeft } from "lucide-react";
import SideBar from "../Component/SideBar";
import { Link } from "react-router-dom";
import { assets } from "../assets/data";
import Terms from "../Component/Terms";
import LoanCard from "../Component/LoanCard";
import LoanRepaymentCard from "../Component/LoanRepaymentCard";
import TopNavbar from "../Component/TopNavbar";
const CreditScore = () => {
  const [afterTerm, setAfterTerm] = useState(true);

  const [showTerm, setShowTerm] = useState(true);

  return (
    <>
    {/* Desktop View  */}
    <div className="sm:flex hidden min-h-full w-full overflow-clip">
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <TopNavbar />
        <main className="bg-[#F5F7FF] flex-1 p-6 sm:p-10">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-[26px] font-medium tracking-tight">
              Credit Score
            </h1>
            <Link
              to="/loanCalculate"
              className="text-[#273e8e] underline hover:text-[#1e2f6b] transition-colors"
            >
              Go Back
            </Link>
          </div>

          <div className="flex flex-row gap-6">
            {/* Left Section */}
            <div className="bg-[#273e8e] flex justify-center items-center rounded-2xl w-full lg:w-1/2 aspect-square max-h-[100%]">
              <img
                src={assets.creditNeedle}
                className="h-[281px] w-[281px] object-contain"
                alt="Credit Score Meter"
              />
            </div>

            {/* Right Section */}
            {afterTerm ? (
              <div className="w-1/2">
                <Terms />
                <div className="space-y-4 mt-4 pt-4  flex-shrink-0">
                  <label
                    htmlFor="accept-terms"
                    className=" flex justify-start items-center gap-2 font-medium cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="accept-terms"
                      className="h-4 w-4 text-start text-[#273e8e] focus:ring-[#273e8e] border-gray-300 rounded"
                    />
                    I accept the following terms of data usage
                  </label>

                  <div className="w-full">
                    <button
                      onClick={() => setAfterTerm(!afterTerm)}
                      className="px-6 py-5 text-sm  w-full rounded-full bg-[#273e8e] text-white"
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-1/2 space-y-3">
                <LoanCard />

                <div className="p-4 border rounded-2xl">
                  <LoanRepaymentCard />
                </div>

                <div className="grid grid-cols-2 pb-10 gap-3 pt-2">
                  <button className="border text-sm border-[#273e8e] py-4 rounded-full text-[#273e8e]">
                    Edit Details
                  </button>
                  <Link to="/uploadDocument" className="py-4 text-center text-sm rounded-full bg-[#273e8e] text-white">
                    Accept Offer
                  </Link>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>

    {/* Mobile View  */}

    <div className="flex sm:hidden min-h-full w-full overflow-clip">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="bg-[#F5F7FF] flex-1 p-6 sm:p-10">
          <div className="mb-6">
            <Link
              to="/loanCalculate"
              className="text-[#273e8e] underline hover:text-[#1e2f6b] transition-colors"
            >
              <ChevronLeft/>
            </Link>
          </div>
          <p className="text-white">Credit Score</p>
          <div className="flex flex-col gap-6">
            {/* Left Section */}
            <div className="bg-[#273e8e] flex justify-center items-center rounded-2xl w-full lg:w-1/2 aspect-square max-h-[100%]">
              <img
                src={assets.creditNeedle}
                className="h-[281px] w-[281px] object-contain"
                alt="Credit Score Meter"
              />
            </div>

            {/* Right Section */}
            {afterTerm ? (
              <div className="w-1/2">
                <Terms />
                <div className="space-y-4 mt-4 pt-4  flex-shrink-0">
                  <label
                    htmlFor="accept-terms"
                    className=" flex justify-start items-center gap-2 font-medium cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="accept-terms"
                      className="h-4 w-4 text-start text-[#273e8e] focus:ring-[#273e8e] border-gray-300 rounded"
                    />
                    I accept the following terms of data usage
                  </label>

                  <div className="w-full">
                    <button
                      onClick={() => setAfterTerm(!afterTerm)}
                      className="px-6 py-5 text-sm  w-full rounded-full bg-[#273e8e] text-white"
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-1/2 space-y-3">
                <LoanCard />

                <div className="p-4 border rounded-2xl">
                  <LoanRepaymentCard />
                </div>

                <div className="grid grid-cols-2 pb-10 gap-3 pt-2">
                  <button className="border text-sm border-[#273e8e] py-4 rounded-full text-[#273e8e]">
                    Edit Details
                  </button>
                  <Link to="/uploadDocument" className="py-4 text-center text-sm rounded-full bg-[#273e8e] text-white">
                    Accept Offer
                  </Link>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
    </>
  );
};

export default React.memo(CreditScore);
