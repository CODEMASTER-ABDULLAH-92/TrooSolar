import React, { useState } from "react";
import { X } from "lucide-react";

const ChangePasswordPopUp = ({ onClose, onEmailSubmit }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    onEmailSubmit(email);
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-opacity-50">
      <div className="w-[350px] rounded-2xl bg-white shadow-lg relative p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Change Password</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={22} />
          </button>
        </div>

        <hr className="border-gray-300 mb-4" />

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-3 border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-xl outline-none focus:ring-2 focus:ring-blue-500`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#273e8e] rounded-full text-white hover:bg-[#1e327a]"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPopUp;