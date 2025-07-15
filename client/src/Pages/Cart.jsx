import React, { useState } from "react";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import CartItems from "../Component/CartItems";
import SideBar from "../Component/SideBar";
import { assets } from "../assets/data";
import { RxCrossCircled } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";
const Cart = () => {
  const [checkout, setCheckOut] = useState(true); // Controls summary vs delivery view
  const [checkoutPayment, setCheckOutPayment] = useState(false); // Controls final modal
  
  const addressDetails = {
    address: "abcd",
    phoneNumber: "074728213993",
  };

  return (
    <div className="flex min-h-screen w-full bg-[#F5F7FF]">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex flex-col w-full">
        {/* Top Bar */}
        <header className="flex items-center justify-end h-[90px] bg-white px-5 sm:pr-10 py-5 gap-3 shadow-sm">
          <button className="h-10 w-10 flex items-center justify-center rounded-lg shadow-md hover:bg-gray-100">
            <Bell size={24} />
          </button>
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e9e9e9]">
            <p className="text-lg text-[#909090] font-bold">QA</p>
          </div>
          <p className="text-[#000] text-lg font-bold hidden sm:block">
            Qamardeen AbdulMalik
          </p>
        </header>

        {/* Page Content */}
        <section className="flex flex-col lg:flex-row justify-between gap-5 px-5 py-5 w-full">
          {/* Cart Items */}
          <div className="w-full lg:w-1/2 space-y-4 p-5">
            <h1 className="text-2xl font-semibold">Shopping Cart</h1>
            <Link to="/product" className="text-blue-500 underline text-sm hover:text-blue-700">
              Go Back
            </Link>
            
            <CartItems
              itemId="item1"
              name="Newman 12200 AGM Solar Inverter"
              price={1500000}
              image={assets.inverter}
              showControls={true}
            />
            <CartItems
              itemId="item2"
              name="Newman 12200 AGM Solar Inverter"
              price={1500000}
              image={assets.inverter}
              showControls={true}
            />
            <CartItems
              itemId="item3"
              name="Newman 12200 AGM Solar Inverter"
              price={1500000}
              image={assets.inverter}
              showControls={true}
            />
          </div>

          {/* Right Side: Order Summary or Delivery Section */}
          {checkout ? (
            // Order Summary View
            <div className="w-full lg:w-1/2 p-5 mt-16 space-y-5">
              <h2 className="text-2xl font-semibold">Order Summary</h2>

              <div className="border rounded-2xl bg-white p-5 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Items</span>
                  <span className="text-gray-900">3</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between font-bold text-[#273e8e]">
                  <span>Total</span>
                  <span>N4,040,000</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="py-4 border border-[#273e8e] text-[#273e8e] rounded-full text-sm hover:bg-[#273e8e]/10 transition">
                  Buy By Loan
                </button>
                <button
                  onClick={() => setCheckOut(false)}
                  className="py-4 bg-[#273e8e] text-white rounded-full text-sm hover:bg-[#1f2f6e] transition"
                >
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            // Delivery & Confirmation View
            <div className="w-full lg:w-1/2 p-5 mt-16 space-y-6">
              <h2 className="text-2xl font-semibold">Delivery Details</h2>

              <div className="bg-white border rounded-2xl p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Delivery Address</span>
                  <Link className="text-sm text-blue-600 hover:underline">
                    Change Address
                  </Link>
                </div>
                <hr className="border-gray-300" />
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full border">
                    <div className="h-3 w-3 rounded-full bg-[#273e8e]"></div>
                  </div>
                  <div className="w-full bg-[#ededed] rounded-xl p-4 space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-sm">{addressDetails.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone Number</p>
                      <p className="text-sm">{addressDetails.phoneNumber}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Estimated Time</span>
                  <span className="text-gray-900 font-medium">
                    July 3, 2025
                  </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-[#273e8e] text-sm">
                  <span>Price</span>
                  <span>N4,040,000</span>
                </div>
              </div>

              <div>
                <h1 className="text-xl py-3 font-semibold text-gray-600">
                  Installation
                </h1>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full border">
                    <div className="h-3 w-3 rounded-full bg-[#273e8e]"></div>
                  </div>
                  <div className="w-full border rounded-xl p-4 space-y-3">
                    <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg py-2 px-2">
                      <p className="text-yellow-600">
                        Installation will be carried out by one of our skilled technicians. 
                        You can choose not to use our installers.
                      </p>
                    </div> 
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>Estimated Time</span>
                      <span className="text-gray-900 font-medium">
                        July 3, 2025
                      </span>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex justify-between text-[#273e8e] text-sm">
                      <span>Price</span>
                      <span>N4,040,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Breakdown */}
              <div className="border p-4 rounded-xl space-y-3 bg-white">
                <div className="flex justify-between">
                  <p>Items</p>
                  <p>3</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>Payment Method</p>
                  <p>Direct</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>Charge</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-[#273e8e]">
                  <p>Total</p>
                  <p>N2,000,000</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setCheckOut(true)}
                  className="py-3 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition"
                >
                  Back
                </button>
                <button
                  onClick={() => setCheckOutPayment(true)}
                  className="py-3 bg-[#273e8e] text-white rounded-full text-sm hover:bg-[#1f2f6e] transition"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}

          {/* Final Confirmation Modal */}
          {checkoutPayment && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
              <div className="w-[90%] max-w-[430px] bg-white rounded-2xl shadow-md p-4">
                <div className="max-h-[450px] overflow-y-auto border rounded-2xl p-4">
                  <div className="flex flex-col items-center gap-5 text-center">
                    <div className={`${checkout ? "bg-red-600 ":"bg-green-600"} rounded-full flex items-center justify-center h-[100px] w-[100px]`}>
              {checkout ?         <RxCrossCircled size={40} color="white" />: <GiCheckMark size={40} color="white"/>}
                    </div>

                    <p className="text-[15px]">
                      {
                        checkout ? <p>Oops! Something went wrong with your order.
                        <br />
                        Please try again or contact support.</p>: <p> <strong>Congratulations</strong> your order has been placed 
successfully, Expect delivery from Mon, 
July 3rd - Wed July 7th</p>
                      }
                    </p>

                    <div className="w-full text-start text-sm max-w-[350px]">
                      <CartItems
                        itemId="item1"
                        name="Newman 12200 AGM Solar Inverter"
                        price={1500000}
                        image={assets.inverter}
                        showControls={false}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <button 
                    onClick={() => setCheckOutPayment(false)}
                    className="border border-[#273e8e] py-4 text-sm rounded-full text-[#273e8e] hover:bg-[#273e8e]/10 transition"
                  >
                    Leave a review
                  </button>
                  <Link
                    to="/homePage"
                    className="py-4 text-sm text-center rounded-full bg-[#273e8e] text-white hover:bg-[#1f2f6e] transition"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Cart;