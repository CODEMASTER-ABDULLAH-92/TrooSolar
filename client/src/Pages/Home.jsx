import React from "react";
import { assets, solarBundleData } from "../assets/data";
import LoanWallet from "../Component/LoanWallet";
import SmallBoxes from "../Component/SmallBoxes";
import ShoppingWallet from "../Component/ShoppingWallet";
import SideBar from "../Component/SideBar";
import SolarBundle from "../Component/SolarBundle";
import TopNavbar from "../Component/TopNavbar";
const Home = ({}) => {
  return (
    <div className="flex min-h-screen w-full">
      <SideBar/>
      {/* Main Content */}
      <div className="w-full sm:w-[calc(100%-250px)]">
        {/* Topbar */}
<TopNavbar/>
        <div className="bg-[#F5F7FF] p-5">
          <div>
            <h1 className=" text-2xl">Hi, <span className="text-[#273e8e] font-bold"> Qamardeen</span></h1>
            <p className="mt-1">Welcome to Your Dashboard</p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-3 mt-4">
            <LoanWallet/>
            <ShoppingWallet/>
            <img src={assets.sale} className="hidden lg:block min-w-full min-h-full rounded-lg" alt="Sale banner" />
          </div>
          
          <div className="mt-4">
            <SmallBoxes/>
          </div>
          
          <div className="mt-6">
            <h1 className="text-xl font-[500]">Solar Bundles</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              You can select from one of our custom bundles tailored towards various 
              homes and uses, or you can build your custom builder from custom builder
            </p>
          </div>

          <div className="my-4 flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {solarBundleData.map((item, index) => (
              <SolarBundle 
                key={index}
                heading={item.heading}
                price={item.price}
                image={item.image}
                oldPrice={item.oldPrice}
                discount={item.discount}
                soldText={item.soldText}
                progressBar={item.progressBar}
                rating={item.rating}
                borderColor={item.borderColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;