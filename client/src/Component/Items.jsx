import React from 'react';
import { assets } from "../assets/data";

const Items = () => {
  const items = [
    { image: assets.solar, text: "Solar Panels" },
    { image: assets.battery, text: "Solar Batteries" },
    { image: assets.inverter, text: "Inverters" },
    { image: assets.mttp, text: "MTTP Chargers" },
    { image: assets.bulb, text: "LED Bulbs" },
    { image: assets.solarfan, text: "Solar Fan" },
    { image: assets.surge, text: "Surge Arrestor" },
    { image: assets.connector, text: "Connectors" },
  ];

  return (
    <div className="w-full mt-4 overflow-x-auto">
      <div className="flex gap-4 px-4 py-4  min-w-fit">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-[160px] h-[180px] bg-white rounded-2xl shadow-sm shrink-0"
          >
            <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[#0000ff]/20">
              <img
                src={item.image}
                alt={item.text}
                className="h-[80px] w-[80px] object-contain"
              />
            </div>
            <h1 className="mt-2 text-center text-blue-700 text-sm font-medium">
              {item.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
