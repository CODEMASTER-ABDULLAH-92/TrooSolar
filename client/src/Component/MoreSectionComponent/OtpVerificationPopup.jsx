import React, { useState } from "react";
import { X, ChevronRight } from "lucide-react";

const OtpVerificationPopup = ({ email, onVerify, onClose, onResend }) => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(otp);
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-opacity-50">
      <div className="w-[350px] rounded-2xl bg-white shadow-lg relative p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">OTP Verification</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={22} />
          </button>
        </div>

        <hr className="border-gray-300 mb-4" />

        <p className="text-sm text-gray-600 mb-4">
          We've sent a 6-digit OTP to <span className="font-medium">{email}</span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm text-gray-700 mb-2">
              Enter OTP
            </label>
            <input
              id="otp"
              type="text"
              placeholder="Enter 6-digit code"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              maxLength="6"
              pattern="\d{6}"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <button
              type="button"
              onClick={onResend}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Resend OTP
            </button>
            <span className="text-sm text-gray-500">Valid for 5 minutes</span>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#273e8e] rounded-full text-white hover:bg-[#1e327a]"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerificationPopup;