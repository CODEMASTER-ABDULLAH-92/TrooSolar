import React, { useState } from "react";
import { Minus, Plus, Search } from "lucide-react";
import { assets } from "../assets/data";
import { Link } from "react-router-dom";
const InverterLoadCalculator = () => {
  // Sample appliance data
  const applianceList = [
    { name: "Ceiling Fan", power: 70 },
    { name: "LED Bulb", power: 10 },
    { name: "TV", power: 120 },
    { name: "Refrigerator", power: 200 },
    { name: "AC", power: 1500 },
    { name: "Laptop", power: 50 },
    { name: "Router", power: 15 },
  ];

  // State for appliances with quantity
  const [appliances, setAppliances] = useState(
    applianceList.map(appliance => ({ ...appliance, quantity: 0, hours: 0 }))
  );
  const [searchTerm, setSearchTerm] = useState("");

  // House types
  const houseData = [
    { id: "1", name: "1 Bedroom", image: assets.house1 },
    { id: "2", name: "2 Bedroom", image: assets.house2 },
    { id: "3", name: "3 Bedroom", image: assets.house3 },
    { id: "4", name: "4 Bedroom", image: assets.house4 },
  ];

  // Filter appliances based on search term
  const filteredAppliances = appliances.filter(appliance =>
    appliance.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total power
  const totalOutput = appliances.reduce(
    (total, appliance) => total + (appliance.power * appliance.quantity * (appliance.hours || 1)),
    0
  );

  // Update quantity for an appliance
  const updateQuantity = (index, newQuantity) => {
    const updatedAppliances = [...appliances];
    // Find the actual index in the original array
    const originalIndex = appliances.findIndex(
      item => item.name === filteredAppliances[index].name
    );
    updatedAppliances[originalIndex].quantity = Math.max(0, newQuantity);
    setAppliances(updatedAppliances);
  };

  // Update usage hours for an appliance
  const updateHours = (index, hours) => {
    const updatedAppliances = [...appliances];
    // Find the actual index in the original array
    const originalIndex = appliances.findIndex(
      item => item.name === filteredAppliances[index].name
    );
    updatedAppliances[originalIndex].hours = Math.max(0, hours);
    setAppliances(updatedAppliances);
  };

  return (
    <>
    {/* Desktop View  */}
    <div className="min-h-screen sm:block hidden bg-[#f5f6ff] px-10 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium]">Inverter Load Calculator</h1>
        <p className="text-gray-500 mt-2 max-w-2xl text-base">
          Estimate total power needs to select a suitable inverter and battery size for efficient backup.
        </p>
      </div>

      {/* Main Grid */}
      <Link to="/" className="text-[#273e8e] underline text-left">Go Back</Link>
      <div className="grid grid-cols-12 gap-6 w-full mt-4">
        {/* Room Options */}
        <div className="col-span-2 flex flex-col gap-4">
          {houseData.map((house) => (
            <div
              key={house.id}
              className="bg-white p-4 flex flex-col justify-center items-center h-[110px] w-[110px] rounded-2xl border-2 border-[#273e8e] shadow-2xl cursor-pointer transition"
            >
              <img src={house.image} alt={house.name} className="w-8 h-8 object-contain" />
              <p className="mt-2 text-xs font-medium text-gray-700">{house.name}</p>
            </div>
          ))}
        </div>

        {/* Appliance Table */}
        <div className="col-span-6 space-y-4">
          {/* Search */}
          <div className="flex items-center w-full border-2 border-gray-300 rounded-xl bg-white px-4 py-3">
            <Search className="text-gray-400 w-6 h-6 mr-3" />
            <input
              type="text"
              className="w-full outline-none text-[16px] bg-transparent placeholder:text-gray-400"
              placeholder="Search appliances"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Table Headers */}
          <div className="grid grid-cols-5 text-[13px] text-gray-700 text-center">
            <p>Appliance</p>
            <p>Power (W)</p>
            <p>Quantity</p>
            <p>Total (W)</p>
            <p>Usage (hrs)</p>
          </div>

          {/* Appliance List */}
          <div className="rounded-2xl border bg-white p-4 divide-y">
            {filteredAppliances.map((item, index) => {
              const totalPower = item.power * item.quantity;
              
              return (
                <div
                  key={index}
                  className="grid grid-cols-5 items-center text-center py-3 text-sm"
                >
                  <p className="font-normal">{item.name}</p>
                  <p className="font-medium">{item.power}</p>

                  <div className="flex justify-center items-center gap-2">
                    <button 
                      className="bg-[#273e8e] text-white rounded p-1.5 cursor-pointer"
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button 
                      className="bg-[#273e8e] text-white rounded p-1.5 cursor-pointer"
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <p className="font-medium">{totalPower}</p>

                  <input
                    type="number"
                    value={item.hours}
                    onChange={(e) => updateHours(index, parseInt(e.target.value) || 0)}
                    placeholder="Hours"
                    className="w-16 mx-auto px-2 py-1 text-center outline-none rounded bg-gray-100 text-gray-500"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Box */}
        <div className="col-span-4">
          <div className="bg-[#273e8e] text-white rounded-2xl px-1 py-2 flex justify-center items-center  gap-4 shadow-lg">
            <h2 className="text-xl font-medium w-[50%] text-center">Total Output</h2>
            <div className="bg-white h-[60px] w-[50%] rounded-xl px-1 flex justify-center items-center gap-2 text-[#273e8e]">
              <span className="text-2xl font-medium">{totalOutput}</span>
              <span className="text-lg">Watt</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile View  */}
    <div className="min-h-screen bg-[#f5f6ff] sm:hidden block  py-6">
      {/* Header */}
      <div className="mb-8 px-10">
      </div>

      {/* Main Grid */}
      <div className="flex flex-col gap-6 w-full">
        {/* Room Options */}
        <div className="flex-row flex px-10 gap-4">
          {houseData.map((house) => (
            <div
              key={house.id}
              className="bg-white p-4 flex flex-col justify-center items-center h-[130px] rounded-2xl border-2 border-[#273e8e] hover:shadow-md cursor-pointer transition"
            >
              <img src={house.image} alt={house.name} className="w-8 h-8 object-contain" />
              <p className="mt-2 text-sm font-medium text-gray-700">{house.name}</p>
            </div>
          ))}
        </div>
        <p className="text-xl px-10 font-medium">
        Inverter Load Calculator for 1 bedroom Apartment
        </p>
        <p className="text-gray-500 mt-2 px-10 max-w-2xl text-base">An inverter load calculator helps estimate the total power needed to run selected appliances. It guides you in choosing the right inverter and battery size for efficient backup.
        </p>
        {/* Appliance Table */}
        <div className="px-10">
          {/* Search */}
          <div className="flex items-center w-full border-2 border-gray-300 rounded-xl bg-white px-4 py-3">
            <Search className="text-gray-400 w-6 h-6 mr-3" />
            <input
              type="text"
              className="w-full outline-none text-xl bg-transparent placeholder:text-gray-400"
              placeholder="Search appliances"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Table Headers */}
          <div className="grid grid-cols-5 font-medium text-gray-700 text-center">
            <p>Appliance</p>
            <p>Power (W)</p>
            <p>Quantity</p>
            <p>Total (W)</p>
            <p>Usage (hrs)</p>
          </div>

          {/* Appliance List */}
          <div className="rounded-2xl border bg-white p-4 divide-y">
            {filteredAppliances.map((item, index) => {
              const totalPower = item.power * item.quantity;
              
              return (
                <div
                  key={index}
                  className="grid grid-cols-5 items-center text-center py-3 text-sm"
                >
                  <p className="font-normal">{item.name}</p>
                  <p className="font-medium">{item.power}</p>

                  <div className="flex justify-center items-center gap-2">
                    <button 
                      className="bg-[#273e8e] text-white rounded p-1.5 cursor-pointer"
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button 
                      className="bg-[#273e8e] text-white rounded p-1.5 cursor-pointer"
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <p className="font-medium">{totalPower}</p>

                  <input
                    type="number"
                    value={item.hours}
                    onChange={(e) => updateHours(index, parseInt(e.target.value) || 0)}
                    className="w-16 mx-auto px-2 py-1 text-center border rounded bg-gray-100"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Box */}
        <div className="">
          <div className="bg-[#273e8e] text-white px-2 py-6 flex  gap-4 shadow-lg">
            <h2 className="text-xl font-semibold w-[40%] text-center">Total Output</h2>
            <div className="bg-white h-[80px] w-[60%] rounded-xl px-1 flex justify-center items-center gap-2 text-[#273e8e] shadow-inner">
              <span className="text-4xl font-bold">{totalOutput}</span>
              <span className="text-lg">Watt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default InverterLoadCalculator;