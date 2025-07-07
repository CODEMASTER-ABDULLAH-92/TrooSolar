import React from "react";

import { assets } from "../assets/data";


const Otp = () => {
  return (
    <>
      {/* Large Screen Layout */}
      <div className="w-full h-screen sm:flex hidden overflow-clip">
        {/* Image Section */}
        <div className="relative w-1/2 overflow-hidden">
          <img
            src={assets.loginImage}
            alt="Login Visual"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-24 left-12 text-white w-[80%]">
            <p className="text-lg font-medium leading-relaxed">
              Providing affordable, sustainable and reliable <br />
              solar energy solutions for millions <br />
              of Nigerians
            </p>
          </div>
          <div className="absolute bottom-6 left-12 flex gap-4">
            <img src={assets.insta} alt="Instagram" className="h-10 w-10" />
            <img src={assets.whatsApp} alt="WhatsApp" className="h-10 w-10" />
            <img src={assets.twitter} alt="Twitter" className="h-10 w-10" />
            <img src={assets.yt} alt="YouTube" className="h-10 w-10" />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-1/2 bg-[#f5f7ff] flex justify-center items-center">
          <div className="w-[90%] max-w-[600px] p-6 h-[700px] flex flex-col justify-start items-center bg-white rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div className="text-center">
                <img
                  src={assets.logo}
                  alt="Logo"
                  className="w-[200px] mx-auto mb-6"
                  loading="lazy"
                />
                <h2 className="text-3xl font-bold">Phone Verification</h2>
                <p className="text-sm text-gray-600 mt-2">
                Verify your phone number to continue
                </p>
              </div>

              {/* Desktop Fields */}
              <div className="space-y-4">

              <div class="flex justify-center items-center gap-2 mb-6">
      <input type="text" maxlength="1" class="lg:w-20 lg:h-20 w-14 h-14 text-center text-4xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="text" maxlength="1" class="lg:w-20 lg:h-20 w-14 h-14 text-center text-4xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="text" maxlength="1" class="lg:w-20 lg:h-20 w-14 h-14 text-center text-4xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="text" maxlength="1" class="lg:w-20 lg:h-20 w-14 h-14 text-center text-4xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="text" maxlength="1" class="lg:w-20 lg:h-20 w-14 h-14 text-center text-4xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
              </div>
<p>Request new code in <span className="text-[#273e8e] font-bold">00:59s</span></p>
              <button
                type="submit"
                className="w-full bg-[#273e8e] text-white py-3 rounded-lg transition duration-200"
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="w-full min-h-screen sm:hidden block relative">
        <img
          src={assets.loginImageForSm}
          className="w-full h-[40vh] object-cover"
          alt="Mobile Background"
        />

        <div className="bg-[#273e8e] absolute top-[31vh] w-full rounded-t-4xl shadow-md p-6 text-center mb-6">
          <img src={assets.smLogo} alt="Logo" className="mx-auto mb-2 w-28" />
          <h1 className="text-2xl font-bold text-white">Phone Verification</h1>
          <p className="text-xs text-white">
            Verify your Phone Number
          </p>
        </div>
        <form className="space-y-4 p-4 mt-24">
        <p className="">Input Verification Code</p>
        <div className="space-y-4">

<div class="flex justify-center items-center gap-2 mb-6">
<input type="text" maxlength="1" class="sm:w-20 w-14 sm:h-20 h-14 text-center text-4xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
<input type="text" maxlength="1" class="sm:w-20 w-14 sm:h-20 h-14 text-center text-4xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
<input type="text" maxlength="1" class="sm:w-20 w-14 sm:h-20 h-14 text-center text-4xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
<input type="text" maxlength="1" class="sm:w-20 w-14 sm:h-20 h-14 text-center text-4xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
<input type="text" maxlength="1" class="sm:w-20 w-14 sm:h-20 h-14 text-center text-4xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
</div>
</div>
<p>Request new code in <span className="text-[#273e8e] font-bold">00:59s</span></p>
<button
  type="submit"
  className="w-full bg-[#273e8e] text-white py-3 rounded-full transition duration-200"
>
  Proceed
</button>
        </form>
      </div>

    </>
  );
};

export default Otp;
