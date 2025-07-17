import React, { useState } from 'react';
import {Minus, Plus} from "lucide-react"
const InverterCalculator = () => {
  const [appliances, setAppliances] = useState(
    Array(7).fill({
      name: "Ceiling Fan",
      power: 70,
      quantity: 2,
    })
  );
  return (
    <div className="min-h-screen bg-[#f5f6ff] flex flex-col items-center p-4">
      <input
        type="text"
        placeholder="Search appliance"
        className="w-full max-w-2xl p-3 mb-6 rounded-md border border-gray-300 shadow-sm"
      />

      <div className="w-full max-w-2xl">
        <div className="grid grid-cols-5 font-light text-gray-600 text-center border-b pb-2">
          <p>Appliance</p>
          <p>Power</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Usage(hrs)</p>
        </div>
<div className='rounded-2xl border bg-white p-4'>
        {appliances.map((item, index) => {
          const totalPower = item.power * item.quantity;
          return (
            <div
              key={index}
              className="grid grid-cols-5  items-center text-center py-3 border-b"
            >
              <p className='font-light'>{item.name}</p>
              <p className="font-medium">{item.power}w</p>
              <div className="flex justify-center items-center gap-2">
                <button

                  className="bg-blue-900 text-white rounded p-1 px-2"
                >
                    <Minus/>
                </button>
                <span>{item.quantity}</span>
                <button

                  className="bg-blue-900 text-white rounded p-1 px-2"
                >
                    <Plus/>
                </button>
              </div>

              <p className="font-medium">{totalPower}w</p>

              <input
                type="text"
                placeholder="Hrs"
                className="w-16 mx-auto px-2 py-1 text-center border rounded bg-gray-200"
                disabled
              />
            </div>
          );
        })}
</div>
      </div>

      <button className="mt-6 w-full px-12 py-3 bg-blue-900 text-white text-lg rounded-full shadow">
        Proceed
      </button>
    </div>
  );
};

export default InverterCalculator;
