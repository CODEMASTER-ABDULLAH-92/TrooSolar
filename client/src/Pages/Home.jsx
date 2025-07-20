import React, { useState } from "react";
import { assets, products, solarBundleData } from "../assets/data";
import LoanWallet from "../Component/LoanWallet";
import SmallBoxes from "../Component/SmallBoxes";
import ShoppingWallet from "../Component/ShoppingWallet";
import SideBar from "../Component/SideBar";
import SolarBundle from "../Component/SolarBundleComponent";
import TopNavbar from "../Component/TopNavbar";
import { Bell } from "lucide-react";
import Product from "../Component/Product";
import { Link } from "react-router-dom";
import SolarBundleComponent from "../Component/SolarBundleComponent";
const Home = ({}) => {
  const [showWallet, setShowWallet] = useState(true);
  return (
    <div className="flex min-h-screen w-full">
      <SideBar />
      {/* Main Content */}
      <div className="w-full sm:w-[calc(100%-250px)]">
        {/* Topbar */}
        <div className="sm:block hidden">
          <TopNavbar />
        </div>
        <div className="bg-[#F5F7FF] p-5">
          <div className=" flex justify-between items-center  ">
            <div className="flex justify-start gap-2 items-center">
              <img className=" sm:hidden block" src={assets.userImage} alt="" />
              <div>
                <div>
                  <h1 className=" text-2xl">
                    Hi,{" "}
                    <span className="sm:text-[#273e8e] text-black">
                      {" "}
                      Qamardeen
                    </span>
                  </h1>
                  <p className="mt-1">Welcome to Your Dashboard</p>
                </div>
              </div>
            </div>

            <button
              className={`rounded-lg sm:hidden  flex justify-center items-center shadow-md h-10 w-10  transition-colors bg-white`}
            >
              <Bell size={24} />
            </button>
          </div>

          <div className="grid   md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-3 mt-4">
            <div className="flex justify-start items-center sm:hidden gap-3 pt-2">
              <button
                onClick={() => setShowWallet(!showWallet)}
                className={`border text-sm w-[40%] border-[#273e8e] py-4 rounded-full text-[#273e8e] ${
                  showWallet
                    ? "text-[#fff] bg-[#273e8e]"
                    : "text-[#273e8e] bg-white"
                }`}
              >
                Loan Wallet
              </button>
              <button
                onClick={() => setShowWallet(!showWallet)}
                className={`border w-[40%] border-[#273e8e] py-4 rounded-full text-sm text-[#273e8e] ${
                  showWallet
                    ? " text-[#273e8e] bg-white"
                    : "text-[#fff] bg-[#273e8e]"
                }`}
              >
                Shopping Wallet
              </button>
            </div>

            <div className="block sm:hidden">
              {showWallet ? <LoanWallet /> : <ShoppingWallet />}
            </div>

            <div className="sm:block hidden">
              <LoanWallet />
            </div>
            <div className="sm:block hidden">
              <ShoppingWallet />
            </div>
            <img
              src={assets.sale}
              className="hidden lg:block min-w-full min-h-full rounded-lg"
              alt="Sale banner"
            />
          </div>

          <div className="mt-4">
            <SmallBoxes />
          </div>
          <img src={assets.sale} className="sm:hidden block my-4" alt="" />

          <div className="mt-6">
            <h1 className="text-xl sm:block hidden font-[500]">
              Solar Bundles
            </h1>
            <p className="text-gray-500 text-sm sm:block hidden sm:text-base">
              You can select from one of our custom bundles tailored towards
              various homes and uses, or you can build your custom builder from
              custom builder
            </p>
            <div className="flex items-center gap-2">
              <h1 className="text-xl block sm:hidden font-medium">
                Hottest Deals
              </h1>
              <div className="flex-1 h-px sm:hidden bg-gray-400/40" />
            </div>
          </div>
          <div className="my-4 hidden sm:flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {solarBundleData.slice(0,4).map((item, index) => (
              <Link to={`/productBundle/details/${item.id}`}>
              <SolarBundleComponent
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
              </Link>
            ))}
          </div>


          <div className="my-4 sm:hidden grid grid-cols-1 gap-5 place-items-center ">
            {products.map((item, index) => (
            <Link to={`/homePage/product/${item.id}`}>
                <Product
                key={index} 
                image={item.image}
                heading={item.heading}
                price={item.price}
                oldPrice={item.oldPrice}
                discount={item.discount}
                soldText={item.soldText}
                progressBar={item.progressBar}
                rating={item.rating}
              />
            </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
