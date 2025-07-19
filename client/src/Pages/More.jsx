// import React, { useState } from "react";
// import { TbPassword } from "react-icons/tb";
// import { LuUserRound } from "react-icons/lu";
// import {
//   PiShoppingCartSimple,
//   PiNotepadBold,
//   PiUsersBold,
// } from "react-icons/pi";
// import { assets } from "../assets/data";
// import { Link } from "react-router-dom";

// import SideBar from "../Component/SideBar";
// import TopNavbar from "../Component/TopNavbar";
// import SidebarOption from "../Component/MoreSectionComponent/SidebarOption";
// import ChangePasswordPopUp from "../Component/MoreSectionComponent/ChangePasswordPopUp";
// import OtpVerificationPopup from "../Component/MoreSectionComponent/OtpVerificationPopup";
// import NewPasswordPopup from "../Component/MoreSectionComponent/NewPasswordPopup";
// import TransactionHistory from "../Component/MoreSectionComponent/TransctionHistroy";
// import Referrals from "../Component/MoreSectionComponent/Referrals";
// import EditProfile from "../Component/MoreSectionComponent/EditProfileSection";
// import KycDetails from "../Component/MoreSectionComponent/KycDetails";

// const More = () => {
//   const [activeSection, setActiveSection] = useState("editProfile");
//   const [showPasswordPopup, setShowPasswordPopup] = useState(false);
//   const [showOtpPopup, setShowOtpPopup] = useState(false);
//   const [showNewPasswordPopup, setShowNewPasswordPopup] = useState(false);
//   // const [showKyc, setShowKyc] = useState(false);
//   const [userEmail, setUserEmail] = useState("");

//   const handleEmailSubmit = (email) => {
//     setUserEmail(email);
//     setShowPasswordPopup(false);
//     setShowOtpPopup(true);
//   };

//   const handleOtpVerify = (otp) => {
//     setShowOtpPopup(false);
//     setShowNewPasswordPopup(true);
//   };

//   const handleResendOtp = () => {
//     console.log("Resending OTP to:", userEmail);
//   };

//   const handleSaveNewPassword = (newPassword) => {
//     setShowNewPasswordPopup(false);
//     alert("Password changed successfully!");
//   };

//   const renderActiveSection = () => {
//     switch (activeSection) {
//       case "transactionHistory":
//         return <TransactionHistory />;
//       case "referrals":
//         return <Referrals />;
//       case "kycDetails":
//         return <KycDetails />;
//       case "editProfile":
//       default:
//         return <EditProfile />;
//     }
//   };

//   return (
//     <div className="flex min-h-screen w-full">
//       <SideBar />
//       <div className="w-full sm:w-[calc(100%-250px)]">
//         <TopNavbar />
//         <div className="bg-[#F5F7FF] p-5">
//           <div className="min-h-screen bg-[#f5f6ff] flex flex-col md:flex-row px-4 md:px-8 py-6 gap-6 md:gap-8">
//             <div className="w-full md:w-[40%]">
//               <h2 className="text-lg font-semibold text-gray-700 mb-1">More</h2>
//               <p className="text-sm text-gray-500 mb-6">
//                 Welcome to your dashboard
//               </p>

//               <div className="bg-[#273e8e] text-white rounded-2xl p-4 mb-6 shadow-md flex py-7 justify-start items-center gap-3">
//                 <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-lg font-semibold mb-2">
//                   QA
//                 </div>
//                 <div>
//                   <p className="font-semibold text-sm">Qamardeen Abdul malik</p>
//                   <p className="text-xs">qamardeenoladimeji@gmail.com</p>
//                 </div>
//               </div>

//               <div className="bg-white p-4 rounded-2xl border-[2px] border-gray-300">
//                 <div onClick={() => setActiveSection("editProfile")}>
//                   <SidebarOption
//                     colorBg="bg-[#273E8E]"
//                     icon={LuUserRound}
//                     label="Profile Settings"
//                   />
//                 </div>
//                 <SidebarOption
//                   colorBg="bg-[#8E2778]"
//                   icon={PiShoppingCartSimple}
//                   label="My Orders"
//                 />
//                 <div onClick={() => setActiveSection("transactionHistory")}>
//                   <SidebarOption
//                     colorBg="bg-[#8E2727]"
//                     icon={PiNotepadBold}
//                     label="Transaction History"
//                   />
//                 </div>
//                 <SidebarOption
//                   colorBg="bg-[#278E5B]"
//                   image={assets.kwc}
//                   label="KYC Details"
//                 />
//                 <div onClick={() => setActiveSection("referrals")}>
//                   <SidebarOption
//                     colorBg="bg-[#5C278E]"
//                     icon={PiUsersBold}
//                     label="Referrals"
//                   />
//                 </div>
//                 <SidebarOption
//                   colorBg="bg-[#27608E]"
//                   image={assets.support}
//                   label="Support"
//                 />
//                 <Link onClick={() => setShowPasswordPopup(true)}>
//                   <SidebarOption
//                     colorBg="bg-[#8E2778]"
//                     icon={TbPassword}
//                     label="Change Password"
//                   />
//                 </Link>
//               </div>
//             </div>

//             <div className="w-full md:w-[60%]">{renderActiveSection()}</div>

//             {showPasswordPopup && (
//               <ChangePasswordPopUp
//                 onClose={() => setShowPasswordPopup(false)}
//                 onEmailSubmit={handleEmailSubmit}
//               />
//             )}
//             {showOtpPopup && (
//               <OtpVerificationPopup
//                 email={userEmail}
//                 onVerify={handleOtpVerify}
//                 onClose={() => setShowOtpPopup(false)}
//                 onResend={handleResendOtp}
//               />
//             )}
//             {showNewPasswordPopup && (
//               <NewPasswordPopup
//                 onSave={handleSaveNewPassword}
//                 onClose={() => setShowNewPasswordPopup(false)}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default More;

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

  return (
    <div className="flex min-h-screen w-full">
      <SideBar />
      <div className="w-full sm:w-[calc(100%-250px)]">
        <TopNavbar />
        <div className="bg-[#F5F7FF] p-5">
          <div className="min-h-screen bg-[#f5f6ff] flex flex-col md:flex-row px-4 md:px-8 py-6 gap-6 md:gap-8">
            {/* Sidebar Section */}
            <div className="w-full md:w-[40%]">
              <h2 className="text-lg font-semibold text-gray-700 mb-1">More</h2>
              <p className="text-sm text-gray-500 mb-6">
                Welcome to your dashboard
              </p>

              <div className="bg-[#273e8e] text-white rounded-2xl p-4 mb-6 shadow-md flex py-7 justify-start items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-lg font-semibold mb-2">
                  QA
                </div>
                <div>
                  <p className="font-semibold text-sm">Qamardeen Abdul malik</p>
                  <p className="text-xs">qamardeenoladimeji@gmail.com</p>
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

                <div onClick={()=>setActiveSection("support")}>
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
  );
};

export default More;
