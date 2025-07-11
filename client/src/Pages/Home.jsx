import React from "react";
import { assets } from "../assets/data";
import { Bell } from "lucide-react";
import LoanWallet from "../Component/LoanWallet";

const menuItems = [
  { icon: assets.window, label: "Home" },
  { icon: assets.store, label: "Store" },
  { icon: assets.loans, label: "Loans" },
  { icon: assets.GearSix, label: "Tools" },
  { icon: assets.shopping, label: "Cart" },
  { icon: assets.userGear, label: "More" },
  { icon: assets.logout, label: "Logout" },
];

const Home = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <div className="hidden sm:flex sm:w-[250px] xl:w-[300px] bg-[#273e8e] text-white flex-col justify-between p-4">
        {/* Top Section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <img
              src={assets.smLogo}
              alt="App Logo"
              className="w-36 h-auto object-contain"
            />
          </div>

          <p className="text-sm font-semibold text-gray-300 pl-2 uppercase tracking-wide">
            General
          </p>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {menuItems.map((item, index) => {
              const isActive = index === 0;
              const isLogout = index === menuItems.length - 1;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer transition-all 
                    ${isActive ? "bg-white text-[#273e8e] border-r-4 border-[#273e8e] font-semibold" : "hover:bg-white/20"}
                    ${isLogout ? "border-y border-[#4b61ac] rounded-[3px]" : ""}`}
                >
                  <img
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className="w-5 h-5 object-contain"
                  />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom Sidebar Illustration */}
        <div className="flex justify-center">
          <img
            src={assets.sidebar}
            alt="Sidebar Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full sm:w-[calc(100%-250px)] xl:w-[calc(100%-300px)]">
        {/* Topbar */}
        <div className="flex gap-3 items-center h-[90px] bg-white justify-end pr-10 py-5">
          <div className="rounded-lg flex justify-center items-center shadow-md h-10 w-10">
            <Bell size={24} />
          </div>
          <div className="bg-[#e9e9e9] h-12 w-12 rounded-full flex items-center justify-center">
            <p className="text-lg text-[#909090] font-bold">QA</p>
          </div>
          <p className="text-[#000000] text-lg font-bold">
            Qamardeen AbdulMalik
          </p>
        </div>

        {/* Dashboard Content */}
        <div className="p-5 bg-[#f5f7ff] min-h-[calc(100vh-90px)]">
          <h1 className="text-xl font-semibold mb-1">Hi, Qamardeen</h1>
          <p className="text-sm text-gray-700 mb-4">
            Welcome to your dashboard
          </p>

          {/* Wallet Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 h-[150px]">
            <LoanWallet />
            <LoanWallet />
            <img
              src={assets.sale}
              alt="Sale"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div>
        <div>
          <img src={assets} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
