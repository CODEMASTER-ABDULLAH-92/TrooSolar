import React from "react";
import { Bell } from "lucide-react";
import { useLocation, useParams } from "react-router-dom";
const TopNavbar = () => {
  const name = "Qamardeen AbdulMalik";
  const location = useLocation();
  const { category } = useParams();
  const changeBg =
    location.pathname.includes("/tools") ||
    location.pathname.includes("/solar-bundles") ||
    location.pathname.includes("/homePage") ||
    location.pathname.includes(`/product/${category}`);
  return (
    <div>
      <header
        className={`flex gap-3 items-center h-[90px] justify-end px-5 sm:pr-10 py-5 ${
          changeBg ? "bg-[#273e8e]" : "bg-white"
        }`}
      >
        <button
          className={`rounded-lg flex justify-center items-center shadow-md h-10 w-10  transition-colors ${
            changeBg ? "bg-[#ffffff]" : "bg-white"
          }`}
        >
          <Bell size={24} />
        </button>
        <div className="bg-[#e9e9e9] h-12 w-12 rounded-full flex items-center justify-center">
          <p className="text-lg text-[#909090] font-bold">QA</p>
        </div>
        <p
          className={`${
            changeBg ? "text-white" : "text-[#000000]"
          } text-lg hidden sm:block`}
        >
          {name}
        </p>
      </header>
    </div>
  );
};

export default TopNavbar;
