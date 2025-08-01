import { ChevronDown, ChevronLeft } from "lucide-react";
import React from "react";
import HrLine from "../Component/MobileSectionResponsive/HrLine";
const SolarSavingCalculator = () => {
  return (
    <>
      {/* Desktop View  */}
      <div>
        <div className="min-h-screen hidden sm:block bg-[#f5f6ff] px-8 py-10">
          <h1 className="text-2xl font-medium mb-2">
            Solar Savings Calculator
          </h1>
          <p className="text-sm text-gray-500 mt-6 w-[56%] mb-6">
            A solar savings calculator estimates how much money you can save by
            switching to solar energy. It helps you understand long-term cost
            benefits based on electricity bills, location, and system size.
          </p>

          <div className="grid grid-cols-12 gap-6">
            {/* Left Form Section */}
            <div className="col-span-7 space-y-8">
              {/* Generator Details */}
              <div className="">
                <h2 className="text-lg font-medium text-[#273e8e] mb-4">
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl block font-medium">
                      Generator Details
                    </h1>
                    <div className="flex-1 h-px  bg-gray-400/40" />
                  </div>
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-[17px] ">
                      What is your current generator size?
                    </label>
                    <select className="w-full border bg-white py-4 outline-none text-lg border-gray-300 rounded-lg px-4 placeholder:text-gray-200">
                      <option>Select answer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-[17px]">
                      Hours you run your gen/day
                    </label>
                    <input
                      type="text"
                      placeholder="Type answer"
                      className="w-full  border border-gray-300 rounded-lg px-4 py-4  bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-[17px]">
                      Gen maintenance cost/month (in Naira)
                    </label>
                    <input
                      type="text"
                      placeholder="Type answer (in naira)"
                      className="w-full border border-gray-300 rounded-lg px-4 py-4  bg-white outline-none "
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-[17px] ">
                      Monthly Spend on grid in Naira (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Type answer (in naira)"
                      className="w-full border border-gray-300 rounded-lg px-4  py-4  bg-white outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Plan Details */}



              <h2 className="text-lg font-medium text-[#273e8e] mb-4">
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl block font-medium">
                    Troosolar Payment Plan Details

                    </h1>
                    <div className="flex-1 h-px  bg-gray-400/40" />
                  </div>
                </h2>




              <div>
                <label className="block mb-1 text-lg">
                  What is your solar budget
                </label>
                <input
                  type="text"
                  placeholder="Type answer (in naira)"
                  className="w-full border border-gray-300 rounded-lg px-4  py-4  bg-white outline-none my-2"
                />
              </div>

              <button className="bg-[#273e8e] text-white rounded-full px-6 text-sm w-full py-5 mt-4">
                View how much you will be saving
              </button>
            </div>

            {/* Right Result Box */}
            <div className="col-span-5">
              <div className="relative w-[130px] mb-4">
                <select
                  className="appearance-none w-full py-4 px-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 outline-none"
                  name="duration"
                  id="duration"
                >
                  <option value="">Select Duration</option>
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="9">9 months</option>
                  <option value="11">11 months</option>
                  <option value="12">1 Year</option>
                  <option value="24">2 Years</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={22}
                />
              </div>

              <div className="bg-yellow-100 border-dashed border-2 border-yellow-400 py-2 px-3 font-medium rounded-xl shadow">
                <p className="text-sm py-2 text-gray-600 mb-1">
                  By going solar with Troosolar, you save
                </p>
                <h2 className="text-3xl font-bold py-2 text-center text-white rounded-xl bg-[#E8A91D] mb-4">
                  N1,500,000
                </h2>

                <ul className="space-y-4 px-2 text-sm">
                  <li className="flex justify-between">
                    <span className=" text-[15px] font-light">
                      Total Duration
                    </span>
                    <span className="text-[15px] font-light">12 months</span>
                  </li>
                  <hr className="text-gray-300" />
                  <li className="flex justify-between">
                    <span className="text-[15px] font-light">
                      Gen spend over 12 months
                    </span>
                    <span className="font-semibold text-[#E8A91D]">
                      N1,700,000
                    </span>
                  </li>
                  <hr className="text-gray-300" />

                  <li className="flex justify-between">
                    <span className="text-[15px] font-light">
                      Solar spend over 12 months
                    </span>
                    <span className="font-semibold text-[#E8A91D]">
                      N200,000
                    </span>
                  </li>
                  <hr className="text-gray-300" />

                  <li className="flex justify-between">
                    <span className="text-[15px] font-light">
                      Break even period
                    </span>
                    <span className="text-[15px] font-light">2 months</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View  */}
      <div>
        <div className="min-h-screen sm:hidden block bg-[#f5f6ff] px-8">
          <div
            className="flex py-4
          "
          >
            <ChevronLeft />
            <p className="absolute left-32">Solar Savings Calculator</p>
          </div>
          <h1 className="text-xl mb-2">What is a solar savings calculator ?</h1>
          <p className="text-sm text-gray-500 max-w-xl mb-6">
            A solar savings calculator estimates how much money you can save by
            switching to solar energy. It helps you understand long-term cost
            benefits based on electricity bills, location, and system size.
          </p>

          <div className=" gap-6">
            {/* Left Form Section */}
            <div className="col-span-7 space-y-8">
              {/* Generator Details */}
              <div className="">
                <h2 className="text-lg font-medium text-[#273e8e] mb-4">
                  <HrLine text={"Generator Details"} />
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 ">
                      What is your current generator size?
                    </label>
                    <select className="w-full border bg-white py-4 outline-none text-lg border-gray-300 rounded-lg px-4 placeholder:text-gray-200">
                      <option>Select answer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1 text-lg">
                      Hours you run your gen/day
                    </label>
                    <input
                      type="text"
                      placeholder="Type answer"
                      className="w-full  border border-gray-300 rounded-lg px-4 py-4  bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Gen maintenance cost/month (in Naira)
                    </label>
                    <input
                      type="text"
                      placeholder="Type answer (in naira)"
                      className="w-full border border-gray-300 rounded-lg px-4 py-4  bg-white outline-none "
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Monthly Spend on grid in Naira (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Type answer (in naira)"
                      className="w-full border border-gray-300 rounded-lg px-4  py-4  bg-white outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Plan Details */}

              <h2 className="text-lg text-[#273e8e] mb-4">
                <HrLine text={"Troosolar Payment Plan Details"} />
              </h2>
              <div>
                <label className="block mb-1 text-lg">
                  What is your solar budget
                </label>
                <input
                  type="text"
                  placeholder="Type answer (in naira)"
                  className="w-full border border-gray-300 rounded-lg px-4  py-4  bg-white outline-none my-2"
                />
              </div>
            </div>

            {/* Right Result Box */}
            <div className="col-span-5 pt-5">
              <div className="relative w-[200px] mb-4">
                <select
                  className="appearance-none w-full py-4 px-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 outline-none"
                  name="duration"
                  id="duration"
                >
                  <option value="">Select Duration</option>
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="9">9 months</option>
                  <option value="11">11 months</option>
                  <option value="12">1 Year</option>
                  <option value="24">2 Years</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={18}
                />
              </div>

              <div className="bg-yellow-100 border-dashed border-2 border-yellow-400 py-2 px-3 font-medium rounded-xl shadow">
                <p className="text-lg text-gray-600 mb-1">
                  By going solar with Troosolar, you save
                </p>
                <h2 className="text-3xl font-bold py-2 text-center text-white rounded-xl bg-[#E8A91D] mb-4">
                  N1,500,000
                </h2>

                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className=" text-[15px] font-light">
                      Total Duration
                    </span>
                    <span className="text-[15px] font-light">12 months</span>
                  </li>
                  <hr className="text-gray-300" />
                  <li className="flex justify-between">
                    <span className="text-[15px] font-light">
                      Gen spend over 12 months
                    </span>
                    <span className="font-semibold text-[#E8A91D]">
                      N1,700,000
                    </span>
                  </li>
                  <hr className="text-gray-300" />

                  <li className="flex justify-between">
                    <span className="text-[15px] font-light">
                      Solar spend over 12 months
                    </span>
                    <span className="font-semibold text-[#E8A91D]">
                      N200,000
                    </span>
                  </li>
                  <hr className="text-gray-300" />

                  <li className="flex justify-between">
                    <span className="text-[15px] font-light">
                      Break even period
                    </span>
                    <span className="text-[15px] font-light">2 months</span>
                  </li>
                </ul>
              </div>
              <button className="bg-[#273e8e] text-white rounded-full px-6 text-sm w-full py-5 mt-4">
                View how much you will be saving
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolarSavingCalculator;
