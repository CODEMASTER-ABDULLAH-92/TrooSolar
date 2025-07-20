import React, { useContext, useEffect, useState } from "react";
import { ContextApi } from "../Context/AppContext";
import { Link, useParams } from "react-router-dom";
import SideBar from "../Component/SideBar";
import TopNavbar from "../Component/TopNavbar";
import { assets } from "../assets/data";

const ProductBundle = () => {
  const { solarBundleData } = useContext(ContextApi);
  const { id } = useParams();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const findProduct = solarBundleData.find((item) => item.id === id);
    if (findProduct) {
      setProductData(findProduct);
    }
  }, [id, solarBundleData]);

  if (!productData || !productData.id) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen w-full relative">
      <SideBar />
      <div className="w-full sm:w-[calc(100%-250px)]">
        {/* Top Navbar */}
        <div className="sm:block hidden">
          <TopNavbar />
        </div>

        <div className="bg-[#F5F7FF] p-5 relative">
          <div className="p-6 bg-[#F6F8FF] min-h-screen gap-6 rounded-lg">
            <h1 className="text-2xl font-semibold mb-2">Recommended Bundle</h1>
            <Link to="/" className="text-blue-500 underline mb-3 block">
              Back
            </Link>

            <div className="flex justify-between items-start gap-4">
              {/* Left Column */}
              <div className="min-w-[66%]">
                <div className="bg-white w-full border border-[#800080] rounded-lg mt-3">
                  {/* Image Section */}
                  <div className="relative h-[350px] bg-[#F3F3F3] m-2 rounded-lg flex justify-center items-center">
                    {/* Label */}
                    {productData.label && (
                      <div className="absolute top-4 right-4 bg-[#800080] text-white text-xs px-3 py-1 rounded-full shadow">
                        {productData.label}
                      </div>
                    )}

                    <img
                      className="w-[160px] h-[160px]"
                      src={assets.inverter}
                      alt="Inverter"
                    />
                    <img
                      src={assets.solar}
                      className="w-[171px] h-[171px] absolute right-40 bottom-24"
                      alt="Solar"
                    />
                  </div>

                  {/* Title, Price, Backup Info */}
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">
                      {productData.bundleTitle}
                    </h2>
                    <p className="text-sm text-gray-500 pt-1">
                      {productData.backupInfo}
                    </p>

                    <hr className="my-3 text-gray-300" />

                    <div className="flex justify-between items-start">
                      {/* Left */}
                      <div className="flex flex-col items-start">
                        <p className="text-xl font-bold text-[#273E8E]">
                          {productData.price}
                        </p>
                        <div className="flex gap-2 mt-1">
                          <span className="text-sm text-gray-500 line-through">
                            {productData.oldPrice}
                          </span>
                          <span className="text-xs px-2 py-[2px] bg-[#FFA500]/20 text-[#FFA500] rounded-full">
                            {productData.discount}
                          </span>
                        </div>
                      </div>

                      {/* Stars */}
                      <img
                        src={assets.stars}
                        alt="Rating"
                        className="w-20 h-auto"
                      />
                    </div>
                  </div>

                  <hr className="my-2 text-gray-300" />

                  {/* What's in the Bundle */}
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-3">
                      What is inside the bundle?
                    </h3>
                    <div className="space-y-2">
                      {productData.itemsIncluded.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center bg-gray-100 h-[80px] px-3 py-2 rounded-md"
                        >
                          <div className="flex items-center gap-3">
                            <div className="bg-[#B0B7D0] rounded-md w-[60px] h-[60px] flex items-center justify-center">
                              <img
                                src={item.icon}
                                alt={item.title}
                                className="w-[60%] h-[60%]"
                              />
                            </div>
                            <div>
                              <div className="text-[#273E8E] text-base font-semibold">
                                {item.title}
                              </div>
                              <div className="text-sm text-[#273E8E]">
                                N{item.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6 px-2">
                  <button className="flex-1 text-sm border border-[#273E8E] text-[#273E8E] py-4 rounded-full">
                    Edit Bundle
                  </button>
                  <button className="flex-1 text-sm bg-[#273E8E] text-white py-4 rounded-full">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-[34%]">
                <div className="flex flex-col gap-3 rounded-2xl">
                  {/* Total Load & Inverter Rating */}
                  <div className="grid grid-cols-2 h-[110px] rounded-2xl overflow-hidden">
                    <div className="bg-[#273E8E] text-white px-4 py-2 flex flex-col justify-between">
                      <div className="text-sm text-left">Total Load</div>
                      <div className="text-3xl bg-white text-[#273E8E] font-semibold rounded-lg flex justify-center items-center h-[60%] mt-1">
                        {productData.totalLoad}
                        <span className="text-xs ml-1 mt-2">Watt</span>
                      </div>
                    </div>

                    <div className="bg-[#273E8E] text-white px-4 py-2 flex flex-col justify-between">
                      <div className="text-sm text-left">Inverter Rating</div>
                      <div className="text-3xl bg-white text-[#273E8E] font-semibold rounded-lg flex justify-center items-center h-[60%] mt-1">
                        {productData.inverterRating}
                        <span className="text-xs ml-1 mt-2">VA</span>
                      </div>
                    </div>
                  </div>

                  {/* Total Output */}
                  <div className="bg-[#273E8E] text-white px-4 py-3 h-[110px] rounded-2xl flex justify-between items-center">
                    <div className="text-lg font-bold">Total Output</div>
                    <div className="text-3xl bg-white text-[#273E8E] font-semibold rounded-lg flex justify-center items-center w-[50%] h-[60%] mt-1">
                      {productData.totalOutput}
                      <span className="text-xs ml-1 mt-2">Watt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default ProductBundle;
