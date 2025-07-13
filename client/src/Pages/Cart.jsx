import React from "react";
import CartItems from "../Component/CartItems";
import SideBar from "../Component/SideBar";
import { Bell } from "lucide-react";
const Cart = () => {
  return (
    <div>
      <div className="flex min-h-screen w-full">
        <SideBar />

        {/* main content  */}

        <div className="w-full">
          {/* Topbar */}
          <div className="flex gap-3 items-center h-[90px] bg-white justify-end px-5 sm:pr-10 py-5">
            <div className="rounded-lg flex justify-center items-center shadow-md h-10 w-10">
              <Bell size={24} />
            </div>
            <div className="bg-[#e9e9e9] h-12 w-12 rounded-full flex items-center justify-center">
              <p className="text-lg text-[#909090] font-bold">QA</p>
            </div>
            <p className="text-[#000000] text-lg font-bold hidden sm:block">
              Qamardeen AbdulMalik
            </p>
          </div>

          <div className="bg-[#F5F7FF] p-5 w-full">
      <CartItems/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
