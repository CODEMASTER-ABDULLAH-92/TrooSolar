import { Eye, EyeOff, X } from "lucide-react";
import React, { useState } from "react";

const Referrals = () => {
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (!amount) {
      setError("Amount is required");
    } else {
      setError("");
      // handle OTP or withdraw logic here
      console.log("Withdraw amount:", amount);
      setShowModal(false);
      setAmount(""); // reset
    }
  };

  return (
    <main className="bg-[#ffffff] h-full rounded-2xl border border-gray-400 w-full p-5">
      <h1 className="text-center text-lg font-medium pb-5">Referral Details</h1>

      <div className="bg-[#273e8e] rounded-2xl px-4 py-5 text-white shadow-md">
        {/* Header: Label & Icon */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-white/70 text-sm">Referral Wallet</p>
          <div className="bg-[#1d3073] h-7 w-7 rounded-md flex items-center justify-center">
            {open ? (
              <Eye
                onClick={() => setOpen(!open)}
                size={18}
                className="text-white/70 cursor-pointer"
              />
            ) : (
              <EyeOff
                onClick={() => setOpen(!open)}
                size={18}
                className="text-white/70 cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Balance */}
        <h1 className="text-xl font-extrabold mb-3">
          {open ? "******" : "N1,000,000"}
        </h1>

        {/* Loan Info + Referral */}
        <div className="flex  flex-col min-h-[80px] sm:flex-row justify-between items-start sm:items-center bg-[#1d3073] py-3 px-5 border-gray-500 rounded-xl border gap-3">
          <div className="flex flex-col text-sm leading-tight">
            <p className="text-white/50 pb-3">Referral Code</p>
            <p className="text-white">XD123KC</p>
          </div>
          <div className="flex flex-col text-sm leading-tight">
            <p className="text-white/50 pb-3">My Referrals</p>
            <p className="text-white text-end">3</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-[#000] text-sm rounded-full py-4 mt-4 w-full"
        >
          Withdraw
        </button>
      </div>

      <div className="py-4 px-4 w-full border-dashed border-[#273e8e] border-[2px] rounded-2xl mt-4 bg-[#e9ebf3] text-center text-sm text-[#273e8e]">
        <p>Earn 30% referral bonus from the people you refer</p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-opacity-50">
          <div className="w-[350px] rounded-2xl bg-white shadow-lg relative py-2">
            <div className="">
              <h2 className="text-lg text-center text-gray-800">
                Transfer
              </h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 absolute top-2.5 right-2.5 hover:text-gray-700">
                <X size={22} />
              </button>
            </div>

            <hr className="border-gray-300 mb-4" />

            <form onSubmit={handleWithdraw} className="px-6">
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm text-gray-700 mb-2">
                  Amount
                </label>
                <input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  className={`w-full px-4 py-3 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded-xl outline-none focus:ring-2 focus:ring-blue-500`}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full  py-3 bg-[#273e8e] rounded-full text-white hover:bg-[#1e327a]"
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Referrals;
