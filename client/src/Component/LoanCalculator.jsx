import { ChevronDown , ChevronLeft} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import LoanRepaymentCard from './LoanRepaymentCard';
const LoanCalculator = () => {
  return (
    <>
    {/* Desktop View  */}
    <div className="min-h-screen sm:block hidden bg-[#f5f6ff] px-6 py-10">
      <h1 className="text-2xl mb-6">Loan Calculator</h1>
      <Link to="/" className="text-[#273e8e] underline  text-left">Go Back</Link>

      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {/* Left: Loan Input Form */}
        <div className="space-y-6 w-full lg:w-1/2">
          {/* Product Price */}
          <div>
            <label className="block text-[17px] mb-2 text-gray-700">
              How much is the product you are purchasing
            </label>
            <input
              type="number"
              placeholder="Enter Product Price"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-white text-[15px] outline-none focus:ring-2 focus:ring-[#273e8e]"
            />
          </div>

          {/* Loan Amount */}
          <div>
            <label className="block text-[17px] mb-2 text-gray-700">Loan Amount</label>
            <input
              type="number"
              placeholder="Enter Loan Amount"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-white text-[15px] outline-none focus:ring-2 focus:ring-[#273e8e]"
            />
          </div>

          {/* Duration Dropdown */}
          <div className="relative">
            <label className="block  text-sm mb-2 text-[17px] text-gray-700">Loan Duration</label>
            <select
              id="duration"
              name="duration"
              className="appearance-none w-full py-3 px-4 border border-gray-300 rounded-lg bg-white text-[15px] text-gray-700 outline-none"
            >
              <option value="">Select Duration</option>
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="9">9 months</option>
              <option value="11">11 months</option>
              <option value="12">1 Year</option>
              <option value="24">2 Years</option>
            </select>
            <ChevronDown className="absolute right-4 top-[55px] transform -translate-y-1/2 text-gray-500 pointer-events-none" size={22} />
          </div>
        </div>

        {/* Right: Result Card */}
        <div className="w-full lg:w-1/2">
          <LoanRepaymentCard />
        </div>
      </div>
    </div>
    {/* Mobile View   */}
    <div className="min-h-screen sm:hidden block bg-[#f5f6ff] px-6 py-10">

    <div className="flex py-4
          ">
            <ChevronLeft/>
            <p className="absolute left-40">Loan Calculator</p>
          </div> 

      <h1 className="text-xl  mb-2">What is a loan calculator ?</h1>
      <p className='text-gray-500 mb-2 text-sm'>A loan calculator is a tool that helps you estimate your monthly payments, total interest, and repayment schedule based on the loan amount, interest rate, and term.</p>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Loan Input Form */}
        <div className="space-y-6 w-full lg:w-1/2">
          {/* Product Price */}
          <div>
            <label className="block text-sm mb-1 text-gray-700">
              How much is the product you are purchasing
            </label>
            <input
              type="number"
              placeholder="Enter Product Price"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-white text-base outline-none focus:ring-2 focus:ring-[#273e8e]"
            />
          </div>

          {/* Loan Amount */}
          <div>
            <label className="block text-sm mb-1 text-gray-700">Loan Amount</label>
            <input
              type="number"
              placeholder="Enter Loan Amount"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-white text-base outline-none focus:ring-2 focus:ring-[#273e8e]"
            />
          </div>

          {/* Duration Dropdown */}
          <div className="relative">
            <label className="block text-sm mb-1 text-gray-700">Loan Duration</label>
            <select
              id="duration"
              name="duration"
              className="appearance-none w-full py-3 px-4 border border-gray-300 rounded-lg bg-white text-base text-gray-700 outline-none"
            >
              <option value="">Select Duration</option>
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="9">9 months</option>
              <option value="11">11 months</option>
              <option value="12">1 Year</option>
              <option value="24">2 Years</option>
            </select>
            <ChevronDown className="absolute right-4 top-12 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={22} />
          </div>
        </div>
<div className='p-2 rounded-lg border-dashed border-[#E8A91D] border-[2px] text-[#E8A91D] bg-[#FFFF001A]'>
Kindly note that loan amount is <strong className='font-semibold'>70%</strong>  of product amount, you
are required to pay the remaining <strong className='font-semibold'>30%</strong>, complete the <strong className='font-semibold'>30%</strong>
payment by funding your wallet directly with <strong className='font-semibold'>300,000</strong>
</div>
        {/* Right: Result Card */}
        <div className="w-full lg:w-1/2">
          <LoanRepaymentCard />
        </div>
      </div>
    </div>
    </>

  );
};

export default LoanCalculator;