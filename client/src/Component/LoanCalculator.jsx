import { ChevronDown } from 'lucide-react';
import React from 'react';
import LoanRepaymentCard from './LoanRepaymentCard';

const LoanCalculator = () => {
  return (
    <div className="min-h-screen bg-[#f5f6ff] px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Loan Calculator</h1>

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

        {/* Right: Result Card */}
        <div className="w-full lg:w-1/2">
          <LoanRepaymentCard />
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
