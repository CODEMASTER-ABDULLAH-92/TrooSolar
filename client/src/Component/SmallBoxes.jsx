import React from "react";
import { assets } from "../assets/data";

const SmallBoxes = () => {
  return (
    <div className="gap-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
      <div className="flex rounded-xl items-center py-4 px-2 shadow-xl bg-[#ffffff] justify-center gap-6">
        <div className="bg-[#0000ff]/20 h-[70px] w-[70px] rounded-full flex justify-center items-center">
          <img src={assets.vec1} className="h-[40px] w-[40px]" alt="" />
        </div>
        <p className="text-[#0000ff]">Solar Bundles</p>
      </div>

      <div className="flex rounded-xl items-center py-4 px-2 shadow-2xl bg-[#ffffff] justify-center gap-6">
        <div className="bg-[#ff0000]/20 h-[70px] w-[70px] rounded-full flex justify-center items-center">
          <img src={assets.vec2} className="h-[40px] w-[40px]" alt="" />
        </div>
        <p className="text-[#ff0000]">Solar Builder</p>
      </div>

      <div className="flex rounded-xl items-center py-4 px-2 shadow-2xl bg-[#ffffff] justify-center gap-6">
        <div className="bg-[#800080]/20 h-[70px] w-[70px] rounded-full flex justify-center items-center">
          <img src={assets.vec3} className="h-[40px] w-[40px]" alt="" />
        </div>
        <p className="text-[#800080]">Solar Store</p>
      </div>
      <div className="flex rounded-xl items-center py-4 px-2 shadow-2xl bg-[#ffffff] justify-center gap-6">
        <div className="bg-[#008000]/20 h-[70px] w-[70px] rounded-full flex justify-center items-center">
          <img src={assets.vec4} className="h-[40px] w-[40px]" alt="" />
        </div>
        <p className="text-[#008000]">Saving Calculator</p>
      </div>
    </div>
  );
};

export default SmallBoxes;
