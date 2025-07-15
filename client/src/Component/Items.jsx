import React from 'react';
import { assets } from "../assets/data";
import { Link } from 'react-router-dom';

const Items = () => {
  const items = [
    { category:"SolarPanels", image: assets.solar, text: "Solar Panels" },
    { category:"Batteries", image: assets.battery, text: "Solar Batteries" },
    { category:"Inverters", image: assets.inverter, text: "Inverters" },
    { category:"mttp", image: assets.mttp, text: "MTTP Chargers" },
    { category:"LEDBulbs", image: assets.bulb, text: "LED Bulbs" },
    { category:"SolarFans", image: assets.solarfan, text: "Solar Fan" },
    { category:"SurgeArrestor", image: assets.surge, text: "Surge Arrestor" },
    { category:"Connectors", image: assets.connector, text: "Connectors" },
  ];

  return (
    <div className="w-full mt-4 overflow-x-auto">
      <div className="flex gap-4 px-4 py-4  min-w-fit">

        {items.map((item, index) => (
         <Link to={`/product/${item.category}`}>
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
         </Link>
        ))}
      </div>
    </div>
  );
};

export default Items;
