import React from "react";
import SideBar from "../Component/SideBar";
import TopNavbar from "../Component/TopNavbar";
import { Link } from "react-router-dom";
import { CgAddR } from "react-icons/cg";
import CartItems from "../Component/CartItems";
import { assets } from "../assets/data";
const SolarBuilder = () => {
  return (
    <div>
      <div className="flex min-h-screen w-full">
        <SideBar />
        {/* Main Content */}
        <div className="w-full sm:w-[calc(100%-250px)]">
          {/* Topbar */}
          <div className="sm:block hidden">
            <TopNavbar />
          </div>
          <div className="bg-[#F5F7FF] p-5 flex justify-between items-start gap-5">

            {/* left section */}
            <div className="w-1/2">
                <h1 className="text-2xl font-medium">Product Builder</h1>
                <Link to="/" className="text-blue-500 underline">Go Back</Link>
                <div className="mt-5 bg-[#273E8E1A] w-full h-[70px] rounded-xl border-dashed border-[#273e8e] border-[2px] p-1 px-3">
                With product builder, you can order custom solar products
                to fully suit your needs
                </div>
                <Link to="/homePage" className="mt-5 bg-[#ffffff] w-full h-[70px] rounded-xl border-gray-400 border-[2px] p-1 px-3 flex justify-between items-center">
                    Add a Product
                    <CgAddR color="black" size={26}/>
                </Link>
                <div className="mt-4">
                <CartItems
              itemId="item1"
              name="Newman 12200 AGM Solar Inverter"
              price={1500000}
              image={assets.inverter}
              showControls={true}
            />
            <CartItems
              itemId="item2"
              name="Newman 12200 AGM Solar Inverter"
              price={1500000}
              image={assets.inverter}
              showControls={true}
            />
                </div>
            </div>
            {/* Right section */}
            <div className="w-1/2">
            <h1 className="mt-12">Order Summary</h1>

            <div className="bg-white rounded-2xl border-[2px] mt-2 border-gray-400/40 w-full p-2 max-h-[200px]">

            <div className="flex justify-between items-center p-2">
                <span className="text-gray-500/70">Items</span>
                <span className="text-gray-800 text-lg">3 - Mini Bundle</span>
            </div>
            <hr className="text-gray-400/40 p-2" />

            <div className="flex justify-between items-center p-2">
                <span className="text-gray-500/70">Total</span>
                <span className="text-[#273e8e] font-semibold text-lg ">N400,000</span>
            </div>
            </div>
              {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <Link to="/loan" className="border text-center border-[#273e8e] py-4 rounded-full text-[#273e8e] text-sm">
        Buy With Loan
        </Link>
        <Link  to="/cart" className="py-4 text-center rounded-full bg-[#273e8e] text-white ">
            Checkout
        </Link>
      </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarBuilder;
