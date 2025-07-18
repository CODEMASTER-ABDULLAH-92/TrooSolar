import React, { useState } from "react";
import { X } from "lucide-react";
import { TbPassword } from "react-icons/tb";

import SideBar from "../Component/SideBar";
import TopNavbar from "../Component/TopNavbar";
import { Input } from "../Component/Input";
import { LifeBuoy, ChevronRight } from "lucide-react";
import { LuUserRound } from "react-icons/lu";
import {
  PiShoppingCartSimple,
  PiNotepadBold,
  PiUsersBold,
} from "react-icons/pi";
import { assets } from "../assets/data";
import { Link, useNavigate } from "react-router-dom";

const SidebarOption = ({ icon: Icon, label, image, colorBg }) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl px-4 py-3 mb-3 shadow-sm hover:border-[#273e8e] hover:border border border-gray-300 cursor-pointer">
      <div className="flex items-center gap-3">
        {image && (
          <img
            src={image}
            alt={label}
            className={`w-8 p-1.5 rounded-md h-8 text-white ${colorBg}`}
          />
        )}
        {Icon && (
          <Icon className={`w-8 h-8 rounded-md ${colorBg} p-1.5 text-white`} />
        )}
        <span className="font-medium text-gray-800">{label}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-400" />
    </div>
  );
};

//  OTP Verification Popup Component
const OtpVerificationPopup = ({ email, onVerify, onClose, onResend }) => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP submitted:", otp);
    onVerify(otp);
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center  bg-opacity-50">
      <div className="w-[350px] rounded-2xl bg-white shadow-lg relative p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            OTP Verification
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        <hr className="border-gray-300 mb-4" />

        {/* Instructions */}
        <p className="text-sm text-gray-600 mb-4">
          We've sent a 6-digit OTP to{" "}
          <span className="font-medium">{email}</span>
        </p>

        {/* OTP Form */}
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
            className="w-full py-3 bg-[#273e8e] rounded-full text-white hover:bg-[#1e327a] transition-colors"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

//  New Password Popup Component
const NewPasswordPopup = ({ onSave, onClose }) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New password form submitted:", formData);

    if (validateForm()) {
      onSave(formData.newPassword);
    }
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center  bg-opacity-50">
      <div className="w-[350px] rounded-2xl bg-white shadow-lg relative p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Set New Password
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        <hr className="border-gray-300 mb-4" />

        {/* Password Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-sm text-gray-700 mb-2"
            >
              New Password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="Enter new password"
              className={`w-full px-4 py-3 border ${
                errors.newPassword ? "border-red-500" : "border-gray-300"
              } rounded-xl outline-none focus:ring-2 focus:ring-blue-500`}
              required
              value={formData.newPassword}
              onChange={handleChange}
            />
            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.newPassword}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-700 mb-2"
            >
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter new password"
              className={`w-full px-4 py-3 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-xl outline-none focus:ring-2 focus:ring-blue-500`}
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#273e8e] rounded-full text-white hover:bg-[#1e327a] transition-colors"
          >
            Save New Password
          </button>
        </form>
      </div>
    </div>
  );
};

//  Updated ChangePasswordPopUp Component
const ChangePasswordPopUp = ({ onClose, onEmailSubmit }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted for password change:", email);

    //  Simple email validation
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
    <div className="fixed inset-0 z-20 flex items-center justify-center  bg-opacity-50">
      <div className="w-[350px] rounded-2xl bg-white shadow-lg relative p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Change Password
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        <hr className="border-gray-300 mb-4" />

        {/* Email Form */}
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
            className="w-full py-3 bg-[#273e8e] rounded-full text-white hover:bg-[#1e327a] transition-colors"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

const More = () => {
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [showNewPasswordPopup, setShowNewPasswordPopup] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  //  Handler for email submission (first step)
  const handleEmailSubmit = (email) => {
    console.log("Email submitted for password change:", email);
    setUserEmail(email);
    setShowPasswordPopup(false);
    setShowOtpPopup(true);

    //  In a real app, you would send the email to your backend here
    //  and the backend would send the OTP to the user's email
  };

  //  Handler for OTP verification
  const handleOtpVerify = (otp) => {
    console.log("OTP verified:", otp);
    setShowOtpPopup(false);
    setShowNewPasswordPopup(true);

    //  In a real app, you would verify the OTP with your backend here
  };

  //  Handler for OTP resend
  const handleResendOtp = () => {
    console.log("Resending OTP to:", userEmail);
    //  In a real app, you would call your backend to resend the OTP
  };

  //  Handler for new password submission
  const handleSaveNewPassword = (newPassword) => {
    console.log("New password saved:", newPassword);
    setShowNewPasswordPopup(false);

    //  In a real app, you would send the new password to your backend
    //  to update the user's password
    alert("Password changed successfully!");
  };
  return (
    <div className="flex min-h-screen w-full">
      <SideBar />
      {/* Main Content */}
      <div className="w-full sm:w-[calc(100%-250px)]">
        <TopNavbar />
        <div className="bg-[#F5F7FF] p-5">
          <div className="min-h-screen bg-[#f5f6ff] flex flex-col md:flex-row px-4 md:px-8 py-6 gap-6 md:gap-8">
            {/* Left Panel */}
            <div className="w-full md:w-[40%]">
              <h2 className="text-lg font-semibold text-gray-700 mb-1">More</h2>{" "}
              <p className="text-sm text-gray-500 mb-6">
                Welcome to your dashboard
              </p>
              {/* Profile Card */}{" "}
              <div className="bg-[#273e8e] text-white rounded-2xl p-4 mb-6 shadow-md flex py-7 justify-start items-center gap-3">
                {" "}
                <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-lg font-semibold mb-2">
                  QA{" "}
                </div>{" "}
                <div>
                  <p className="font-semibold text-sm">Qamardeen Abdul malik</p>
                  <p className="text-xs">qamardeenoladimeji@gmail.com</p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-white p-4 rounded-2xl border-[2px] border-gray-300">
                {" "}
                <SidebarOption
                  colorBg={"bg-[#273E8E]"}
                  icon={LuUserRound}
                  label="Profile Settings"
                />{" "}
                <SidebarOption
                  colorBg={"bg-[#8E2778]"}
                  icon={PiShoppingCartSimple}
                  label="My Orders"
                />{" "}
                <SidebarOption
                  colorBg={"bg-[#8E2727]"}
                  icon={PiNotepadBold}
                  label="Transaction History"
                />{" "}
                <SidebarOption
                  colorBg={"bg-[#278E5B]"}
                  image={assets.kwc}
                  label="KYC Details"
                />{" "}
                <SidebarOption
                  colorBg={"bg-[#5C278E]"}
                  icon={PiUsersBold}
                  label="Referrals"
                />{" "}
                <SidebarOption
                  colorBg={"bg-[#27608E]"}
                  image={assets.support}
                  label="Support"
                />{" "}
                <Link onClick={() => setShowPasswordPopup(true)}>
                  <SidebarOption
                    colorBg={"bg-[#8E2778]"}
                    icon={TbPassword}
                    label="Change Password"
                  />
                </Link>{" "}
              </div>{" "}
            </div>

            {/* Edit Profile Form */}
            <div className="w-full md:w-[60%]">
              <div className="w-full bg-white rounded-2xl p-6 shadow-md border border-blue-500">
                {" "}
                <h2 className="text-xl text-center text-gray-800 mb-6">
                  Edit Profile
                </h2>{" "}
                <div className="flex flex-col items-center mb-6">
                  {" "}
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-400">
                    QA{" "}
                  </div>{" "}
                </div>{" "}
                <form className="space-y-4">
                  {" "}
                  <Input
                    id="firstName"
                    label="First Name"
                    placeholder="First Name"
                    //  value={formData.firstName}
                    //  onChange={handleChange}
                  />
                  <Input
                    id="surname"
                    label="Surname"
                    placeholder="Surname"
                    //  value={formData.surname}
                    //  onChange={handleChange}
                  />
                  <Input
                    id="Email"
                    label="Email Address"
                    placeholder="Enter Email Address"
                    //  value={formData.firstName}
                    //  onChange={handleChange}
                  />
                  <Input
                    id="phone"
                    label="Phone Number"
                    placeholder="Enter Phone Number"
                    //  value={formData.surname}
                    //  onChange={handleChange}
                  />
                  <Input
                    id="password"
                    label="Password"
                    placeholder="Enter Password"
                    //  value={formData.surname}
                    //  onChange={handleChange}
                    icon={<ChevronRight size={24} color="black" />}
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#273e8e] text-white text-sm py-4 rounded-full mt-4 "
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
            {/* Popups */}
            {showPasswordPopup && (
              <ChangePasswordPopUp
                onClose={() => setShowPasswordPopup(false)}
                onEmailSubmit={handleEmailSubmit}
              />
            )}
            {showOtpPopup && (
              <OtpVerificationPopup
                email={userEmail}
                onVerify={handleOtpVerify}
                onClose={() => setShowOtpPopup(false)}
                onResend={handleResendOtp}
              />
            )}
            {showNewPasswordPopup && (
              <NewPasswordPopup
                onSave={handleSaveNewPassword}
                onClose={() => setShowNewPasswordPopup(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default More;