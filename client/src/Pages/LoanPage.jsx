import React, { useState } from "react";
import SideBar from "../Component/SideBar";
import LoanWallet from "../Component/LoanWallet";
import { Bell, X } from "lucide-react";
import { assets } from "../assets/data";
import { useNavigate } from "react-router-dom";

const LoanPage = () => {
  const [showLoan, setShowLoan] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const handleProceed = () => {
    if (!isChecked) {
      setErrorMsg("Please accept the terms before proceeding.");
    } else {
      setErrorMsg("");
      setShowLoan(true);
      navigate("/linkAccount")
    }
  };
  return (
    <div className={`relative flex min-h-screen overflow-hidden ${!showLoan ? "bg-black/40" : "bg-[#F5F7FF]"}`}>
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className={ `${!showLoan ? "bg-black/40" : "bg-white"} flex items-center justify-end gap-3 h-[90px] bg-white px-5 sm:pr-10 py-5 shadow-sm ` }>
          <div className="rounded-lg flex justify-center items-center shadow-md h-10 w-10 bg-white">
            <Bell size={24} />
          </div>
          <div className="bg-[#e9e9e9] h-12 w-12 rounded-full flex items-center justify-center">
            <p className="text-lg text-[#909090] font-bold">QA</p>
          </div>
          <p className="text-[#000000] text-lg font-bold hidden sm:block">
            Qamardeen AbdulMalik
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-6 p-5 flex-1">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full">
            <h1 className="text-2xl font-semibold mb-1">Loans</h1>
            <p className="text-gray-500 mb-4">Welcome to the dashboard</p>
            <LoanWallet />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full rounded-xl p-6 flex flex-col justify-center items-center">
            <img src={assets.LoanBox} alt="LoanBox" className="w-40 h-40 object-contain mb-4" />
            <p className="text-gray-600 mb-4">You have not taken any loan yet</p>
            <button
              onClick={() => setShowLoan(false)}
              className="px-6 py-3 rounded-md bg-[#273e8e] text-white hover:bg-[#1d2f6b] transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {!showLoan && (
        <div className="absolute top-1/2 left-1/2 w-[430px] h-[800px] bg-white rounded-2xl shadow-md transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-hidden">
          <div className="relative">
            <p className="text-center text-xl pt-3 font-semibold">Terms of Use Agreement</p>
            <X
              size={28}
              className="absolute right-4 top-4 cursor-pointer"
              onClick={() => setShowLoan(true)}
            />
            <hr className="my-4" />
            <div className="px-6  text-sm leading-relaxed">
              <h2 className="text-[#273e8e] font-semibold text-[16px] mb-2">
                Read and accept the following terms before proceeding
              </h2>
              <div className="border rounded-2xl max-h-[550px] overflow-y-auto  p-4 space-y-4">
                <h3 className="text-[#273e8e] font-semibold">Terms of Use</h3>
                <p>
                  Welcome to Mono. By accessing or using our loan application platform ("Service"), you agree to be
                  bound by the following Terms of Usage. Please read them carefully before applying for a loan.
                </p>
                <h4 className="font-semibold">1. Eligibility</h4>
                <p>
                  You must be at least 18 years old and legally capable of entering into binding contracts to use this
                  service. By applying, you confirm that all information provided is accurate, complete, and truthful.
                </p>
                <h4 className="font-semibold">2. Loan Application Process</h4>
                <p>
                  Submitting a loan application does not guarantee approval. All applications are subject to evaluation
                  and verification.
                </p>
                <h4 className="font-semibold">3. Accuracy of Information</h4>
                <p>
                  You agree to provide true, current, and complete information. False information may result in
                  disqualification or legal action.
                </p>
                <h4 className="font-semibold">4. Use of Personal Data</h4>
                <p>
                  By using our service, you consent to the collection and use of your data as outlined in our Privacy
                  Policy.
                </p>
                <h4 className="font-semibold">5. Loan Terms and Repayment</h4>
                <p>
                  You must review and agree to the repayment terms before disbursement. Non-compliance may result in
                  fees or legal consequences.
                </p>
                <h4 className="font-semibold">6. Prohibited Activities</h4>
                <ul className="list-disc pl-5">
                  <li>Illegal or fraudulent use</li>
                  <li>Using someone else’s identity</li>
                  <li>Interfering with platform operation</li>
                </ul>
                <h4 className="font-semibold">7. Limitation of Liability</h4>
                <p>
                  We are not liable for any damages or losses arising from use of this service, including application
                  rejections or delays.
                </p>
                <h4 className="font-semibold">8. Modifications</h4>
                <p>
                  We may update these terms at any time. Continued use implies acceptance of updates.
                </p>
                <h4 className="font-semibold">9. Governing Law</h4>
                <p>These terms are governed under the laws of [Insert Jurisdiction].</p>
                <h4 className="font-semibold">10. Contact Us</h4>
                <p>For questions or support, contact us at [Insert Contact Info].</p>
              </div>

              <label htmlFor="accept" className="pt-4 flex justify-center items-center gap-2 font-medium cursor-pointer text-center">
        <input
          type="checkbox"
          id="accept"
          className="h-4 w-4"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        I accept the following terms of data usage
      </label>

      {/* Error message */}
      {errorMsg && (
        <p className="text-center text-red-600 text-sm mt-2">{errorMsg}</p>
      )}

      {/* Proceed button */}
      <div className="flex justify-center">
        <button
          onClick={handleProceed}
          className="mt-2 px-6 py-2 bg-[#273e8e] text-white rounded-md hover:bg-[#1d2f6b] transition"
        >
          Proceed
        </button>
      </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanPage;
