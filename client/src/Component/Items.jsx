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
    <>
    {/* Desktop view  */}
    <div className="w-full sm:block hidden mt-4 overflow-x-auto">
      <div className="flex gap-4 px-4 py-4  min-w-fit">

        {items.map((item, index) => (
         <Link to={`/product/${item.category}`}>
         <div
            key={index}
            className="flex flex-col items-center justify-center w-[120px] h-[120px] bg-white rounded-2xl shadow-sm shrink-0"
          >
            <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#0000ff]/20">
              <img
                src={item.image}
                alt={item.text}
                className="h-[40px] w-[40px] object-contain"
              />
            </div>
            <h1 className="mt-2 text-center text-blue-700 text-sm">
              {item.text}
            </h1>
          </div>
         </Link>
        ))}
      </div>
    </div>

    {/* Mobile view  */}
  <div className="w-full sm:hidden block mt-4 px-4">
  <div className="grid grid-cols-4 gap-4">
    {items.map((item, index) => (
      <Link to={`/product/${item.category}`} key={index}>
        <div className="flex flex-col items-center justify-center w-full h-[140px] bg-white rounded-2xl shadow-sm">
          <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#0000ff]/20">
            <img
              src={item.image}
              alt={item.text}
              className="h-[50px] w-[50px] object-contain"
            />
          </div>
          <h1 className="mt-2 text-center text-blue-700 text-xs font-medium">
            {item.text}
          </h1>
        </div>
      </Link>
    ))}
  </div>
</div>

    </>
  );
};

export default Items;
