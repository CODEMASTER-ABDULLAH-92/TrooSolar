import React from "react";
import { assets } from "../assets/data";
import {Bell} from 'lucide-react'
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
    <>
    <div className="flex items-start justify-start min-w-full">
{/* right  */}
    <div className="hidden sm:flex sm:w-[250px] xl:w-[300px] h-screen bg-[#273e8e] text-white flex-col justify-between p-4">
      
      {/* Top Section (Logo + Menu) */}
      <div className="flex flex-col gap-4">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={assets.smLogo}
            alt="App Logo"
            className="w-36 h-auto object-contain"
          />
        </div>

        {/* Section Title */}
        <p className="text-sm font-semibold text-gray-300 pl-2 uppercase tracking-wide">
          General
        </p>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const isActive = index === 0;
            const isLogout = index === menuItems.length - 1;

            return (
              <div
                key={index}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all cursor-pointer 
                  ${isActive ? "bg-white/90 text-[#273e8e] border-r-4 border-[#273e8e] font-semibold" : "hover:bg-white/20"}
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

      {/* Bottom Image */}
      <div className="flex justify-center">
        <img
          src={assets.sidebar}
          alt="Sidebar Illustration"
          className=" sm sm:w-52 sm:h-52 xl:min-w-full xl:h-auto max-h-0px] object-contain"
        />
      </div>
    </div>

{/* left  */}
<div className="w-[90%]">
<div className="flex gap-3 items-center h-[90px] bg-[#ffffff] justify-end pr-10 py-5">
  <div className="rounded-lg flex justify-center items-center shadow-md h-10 w-10">
<Bell size={30}  />
  </div>
  <div className="bg-[#e9e9e9] h-14 w-14 rounded-full">

  <p className="text-2xl text-[#909090] text-center pt-2.5  font-bold">QA</p>
  </div>
  <p className="text-[#000000] text-lg font-bold">Qamardeen AbdulMalik</p>
</div>




<div className="p-5">

  <h1>Hi, Qamardeen</h1>
  <p>Wellcome to your dashboard</p>
</div>
</div>
    </div>

    </>

  );
};

export default Home;
