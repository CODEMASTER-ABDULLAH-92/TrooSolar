import React, { useState } from "react";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import CartItems from "../Component/CartItems";
import SideBar from "../Component/SideBar";
import { assets } from "../assets/data";
const Cart = () => {
  const [checkout,SetCheckOut] = useState(false);
  return (
    <div className="flex min-h-screen w-full bg-[#F5F7FF]">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex flex-col w-full">
        {/* Topbar */}
        <header className="flex items-center justify-end h-[90px] bg-white px-5 sm:pr-10 py-5 gap-3 shadow-sm">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg shadow-md">
            <Bell size={24} />
          </div>
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e9e9e9]">
            <p className="text-lg text-[#909090] font-bold">QA</p>
          </div>
          <p className="text-[#000] text-lg font-bold hidden sm:block">
            Qamardeen AbdulMalik
          </p>
        </header>

        {/* Cart Content */}
        <section className="flex flex-col lg:flex-row justify-between gap-5 px-5 py-5 w-full">
          {/* Cart Items */}
          <div className="w-full lg:w-1/2 space-y-4  p-5 ">
            <h1 className="text-2xl font-semibold">Shopping Cart</h1>
            <Link to="/product" className="text-blue-500 underline text-sm">
               Go Back
            </Link>
            <CartItems
  itemId="item1"
  name="Newman 12200 AGM Solar Inverter"
  price={1500000}
  image={assets.inverter}
/>
<CartItems
  itemId="item1"
  name="Newman 12200 AGM Solar Inverter"
  price={1500000}
  image={assets.inverter}
/>
<CartItems
  itemId="item1"
  name="Newman 12200 AGM Solar Inverter"
  price={1500000}
  image={assets.inverter}
/>

          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/2  p-5 mt-16  space-y-5">
            <h2 className="text-2xl font-semibold">Order Summary</h2>

            <div className="border rounded-2xl bg-white p-5 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Items</span>
                <span className="text-gray-900">3</span>
              </div>
              <hr className="border-t border-gray-300" />
              <div className="flex justify-between font-bold text-[#273e8e]">
                <span>Total</span>
                <span>N4,040,000</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="py-4 border border-[#273e8e] text-[#273e8e] rounded-full text-sm hover:bg-[#273e8e]/10 transition">
                Buy By Loan
              </button>
              <button className="py-4 bg-[#273e8e] text-white rounded-full text-sm hover:bg-[#1f2f6e] transition">
                Checkout
              </button>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Cart;
