import React, { useState } from "react";
import { TbPassword } from "react-icons/tb";
import { LuUserRound } from "react-icons/lu";
import {
  PiShoppingCartSimple,
  PiNotepadBold,
  PiUsersBold,
} from "react-icons/pi";
import { assets } from "../assets/data";

import SideBar from "../Component/SideBar";
import TopNavbar from "../Component/TopNavbar";
import SidebarOption from "../Component/MoreSectionComponent/SidebarOption";
import ChangePasswordPopUp from "../Component/MoreSectionComponent/ChangePasswordPopUp";
import OtpVerificationPopup from "../Component/MoreSectionComponent/OtpVerificationPopup";
import NewPasswordPopup from "../Component/MoreSectionComponent/NewPasswordPopup";
import TransactionHistory from "../Component/MoreSectionComponent/TransctionHistroy";
import Referrals from "../Component/MoreSectionComponent/Referrals";
import EditProfile from "../Component/MoreSectionComponent/EditProfileSection";
import KycDetails from "../Component/MoreSectionComponent/KycDetails";
import Support from "../Component/MoreSectionComponent/Support";
import { ChevronLeft } from "lucide-react";

const More = () => {
  const [activeSection, setActiveSection] = useState("editProfile");
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [showNewPasswordPopup, setShowNewPasswordPopup] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleEmailSubmit = (email) => {
    setUserEmail(email);
    setShowPasswordPopup(false);
    setShowOtpPopup(true);
  };

  const handleOtpVerify = () => {
    setShowOtpPopup(false);
    setShowNewPasswordPopup(true);
  };

  const handleResendOtp = () => {
    console.log("Resending OTP to:", userEmail);
  };

  const handleSaveNewPassword = (newPassword) => {
    setShowNewPasswordPopup(false);
    alert("Password changed successfully!");
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "transactionHistory":
        return <TransactionHistory />;
      case "referrals":
        return <Referrals />;
      case "kycDetails":
        return <KycDetails />;
      case "support":
        return <Support />;
      case "editProfile":
      default:
        return <EditProfile />;
    }
  };
  const [mobileViewSection, setMobileViewSection] = useState("sidebar");
  const handleMobileSectionChange = (section) => {
    setActiveSection(section);
    setMobileViewSection("content");
  };
  return (
    <>
      {/* Desktop View  */}
      <div className="sm:flex hidden min-h-screen w-full">
        <SideBar />
        <div className="w-full sm:w-[calc(100%-250px)]">
          <TopNavbar />
          <div className="bg-[#F5F7FF] p-5">
            <div className="min-h-screen bg-[#f5f6ff] flex flex-col md:flex-row px-4 md:px-8 py-6 gap-6 md:gap-8">
              {/* Sidebar Section */}
              <div className="w-full md:w-[40%]">
                <h2 className="text-2xl font-medium text-gray-700 mb-1">
                  More
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Welcome to your dashboard
                </p>

                <div className="bg-[#273e8e] shadow-2xl h-[150px] text-white rounded-2xl p-4 mb-6  flex py-7 justify-start items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#e9e9e9] text-[#909090] flex items-center justify-center text-lg font-semibold mb-2">
                    QA
                  </div>
                  <div>
                    <p className=" text-[15px] mb-2">Qamardeen Abdul malik</p>
                    <p className="text-xs text-gray-400">
                      qamardeenoladimeji@gmail.com
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border-[2px] border-gray-300">
                  <div onClick={() => setActiveSection("editProfile")}>
                    <SidebarOption
                      colorBg="bg-[#273E8E]"
                      icon={LuUserRound}
                      label="Profile Settings"
                    />
                  </div>

                  <div>
                    <SidebarOption
                      colorBg="bg-[#8E2778]"
                      icon={PiShoppingCartSimple}
                      label="My Orders"
                    />
                  </div>

                  <div onClick={() => setActiveSection("transactionHistory")}>
                    <SidebarOption
                      colorBg="bg-[#8E2727]"
                      icon={PiNotepadBold}
                      label="Transaction History"
                    />
                  </div>
                  <div onClick={() => setActiveSection("kycDetails")}>
                    <SidebarOption
                      colorBg="bg-[#278E5B]"
                      image={assets.kwc}
                      label="KYC Details"
                    />
                  </div>

                  <div onClick={() => setActiveSection("referrals")}>
                    <SidebarOption
                      colorBg="bg-[#5C278E]"
                      icon={PiUsersBold}
                      label="Referrals"
                    />
                  </div>

                  <div onClick={() => setActiveSection("support")}>
                    <SidebarOption
                      colorBg="bg-[#27608E]"
                      image={assets.support}
                      label="Support"
                    />
                  </div>

                  <div onClick={() => setShowPasswordPopup(true)}>
                    <SidebarOption
                      colorBg="bg-[#8E2778]"
                      icon={TbPassword}
                      label="Change Password"
                    />
                  </div>
                </div>
              </div>

              {/* Active Section Display */}
              <div className="w-full md:w-[60%]">{renderActiveSection()}</div>

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

      <div className="flex sm:hidden min-h-screen w-full bg-[#F5F7FF]">
        {mobileViewSection === "sidebar" ? (
          <div className="w-full">
            {/* Header + User Info */}
            <div className="bg-[#273e8e] h-[300px] text-white p-4 px-5">
              <div className="flex items-center gap-2 mb-8">
                <ChevronLeft />
                <h2 className="text-lg font-medium absolute left-56 text-white">
                  More
                </h2>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src={assets.userImage}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold">
                    Qamardeen Abdul malik
                  </p>
                  <p className="text-xs text-gray-300">
                    qamardeenoladimeji@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Options */}
            <div className="bg-white p-4 -mt-20 rounded-2xl border-[2px] border-gray-300 space-y-2">
              <div onClick={() => handleMobileSectionChange("editProfile")}>
                <SidebarOption
                  colorBg="bg-[#273E8E]"
                  icon={LuUserRound}
                  label="Profile Settings"
                />
              </div>
              <SidebarOption
                colorBg="bg-[#8E2778]"
                icon={PiShoppingCartSimple}
                label="My Orders"
              />
              <div
                onClick={() => handleMobileSectionChange("transactionHistory")}
              >
                <SidebarOption
                  colorBg="bg-[#8E2727]"
                  icon={PiNotepadBold}
                  label="Transaction History"
                />
              </div>
              <div onClick={() => handleMobileSectionChange("kycDetails")}>
                <SidebarOption
                  colorBg="bg-[#278E5B]"
                  image={assets.kwc}
                  label="KYC Details"
                />
              </div>
              <div onClick={() => handleMobileSectionChange("referrals")}>
                <SidebarOption
                  colorBg="bg-[#5C278E]"
                  icon={PiUsersBold}
                  label="Referrals"
                />
              </div>
              <div onClick={() => handleMobileSectionChange("support")}>
                <SidebarOption
                  colorBg="bg-[#27608E]"
                  image={assets.support}
                  label="Support"
                />
              </div>
              <div
                onClick={() => {
                  setShowPasswordPopup(true);
                  setMobileViewSection("content");
                }}
              >
                <SidebarOption
                  colorBg="bg-[#8E2778]"
                  icon={TbPassword}
                  label="Change Password"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full p-4">
            {/* Back Button */}
            <div
              className="flex items-center gap-2 mb-4 text-[#273E8E]"
              onClick={() => setMobileViewSection("sidebar")}
            >
              <ChevronLeft />
              <span className="text-sm font-medium">Back</span>
            </div>

            {/* Active Section Content */}
            {renderActiveSection()}

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
        )}
      </div>
    </>
  );
};

export default More;
