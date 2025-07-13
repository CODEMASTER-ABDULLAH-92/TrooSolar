import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { assets, products, starsArr } from "../assets/data";
import SideBar from "../Component/SideBar";
import { Bell, ShoppingCart } from "lucide-react";
import { ContextApi } from "../Context/AppContext";

const ProductDetails = () => {
  const {quantity,setQuantity} = useContext(ContextApi);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [showReview, setShowReview] = useState(true);
  
  const incrementCount = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementCount = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1)
    }
  }
  return (
    <div className="flex min-h-screen w-full bg-[#F5F7FF]">
      <SideBar />
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Topbar */}
        <div className="flex gap-3 items-center h-[90px] bg-white justify-end px-5 sm:px-10 py-5">
          <div className="rounded-lg flex justify-center items-center shadow-md h-10 w-10 cursor-pointer hover:bg-gray-100 transition">
            <Bell size={20} />
          </div>
          <div className="rounded-lg flex justify-center items-center shadow-md h-10 w-10 cursor-pointer hover:bg-gray-100 transition">
            <ShoppingCart size={20} />
          </div>
          <div className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center">
            <p className="text-sm text-gray-500 font-medium">QA</p>
          </div>
          <p className="text-gray-700 text-sm hidden sm:block">
            Qamardeen AbdulMalik
          </p>
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl sm:text-2xl font-medium">{product.category}</h1>
            <Link to="/homepage" className="text-blue-600 hover:underline text-sm sm:text-base">
              Go Back
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Section */}
            <div className="w-full lg:w-1/2">
              <div className="h-[400px] sm:h-[500px] w-full border border-gray-200 flex justify-center items-center bg-white rounded-xl p-4">
                <img
                  src={product.image}
                  className="h-full w-full object-contain"
                  alt={product.heading}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="py-3 px-4 border border-[#273e8e] rounded-full hover:bg-[#273e8e]/10 transition">
                  Add To Cart
                </button>
                <button className="py-3 px-4 bg-[#273e8e] text-white rounded-full hover:bg-[#273e8e]/90 transition">
                  Buy Now
                </button>
              </div>

              <div className="p-4 mt-6 bg-yellow-50 rounded-lg">
                <p className="text-yellow-600 text-sm sm:text-base">
                  Don't have the finances to proceed? Take a loan and repay at your convenience
                </p>
                <button className="bg-[#E8A91D] py-2 px-6 text-white rounded-full mt-3 text-sm hover:bg-[#E8A91D]/90 transition">
                  Apply
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2">
              <div className="border-2 border-[#273e8e] p-4 rounded-xl">
                <h1 className="text-lg sm:text-xl font-medium">{product.heading}</h1>
                <div className="mt-3">
                  <h1 className="text-xl sm:text-2xl text-[#273e8e] font-bold">
                    {product.price}
                  </h1>

                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-gray-400 line-through text-sm">
                      {product.oldPrice}
                    </p>
                    <span className="px-2 py-1 rounded-full text-orange-500 text-xs bg-orange-100">
                      {product.discount}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center">
                      <img
                        src={product.progressBar}
                        alt="Progress bar"
                        className="w-20 h-2 object-contain"
                      />
                      <p className="text-xs text-gray-500 ml-2">
                        {product.soldText}
                      </p>
                    </div>
                    <img
                      src={product.rating}
                      alt="Customer rating"
                      className="w-20 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white border py-1 px-1 flex mt-4 rounded-full w-full sm:w-[60%]">
                <button 
                  onClick={() => setShowReview(true)}
                  className={`flex-1 py-2 rounded-full text-sm ${showReview ? "bg-[#273e8e] text-white" : "text-gray-500"}`}
                >
                  Details
                </button>
                <button 
                  onClick={() => setShowReview(false)}
                  className={`flex-1 py-2 rounded-full text-sm ${!showReview ? "bg-[#273e8e] text-white" : "text-gray-500"}`}
                >
                  Reviews
                </button>
              </div>

              <h2 className="text-lg font-medium mt-4 text-gray-800">
                {showReview ? "Product Details" : "Reviews"}
              </h2>

              <div className="mt-4">
                {showReview ? (
                  <div className="border p-4 rounded-xl space-y-3">
                    {[...Array(6)].map((_, i) => (
                      <React.Fragment key={i}>
                        <div className="flex items-center gap-3">
                          <img src={assets.light} className="h-5 w-5" alt="" />
                          <p className="text-sm sm:text-base">Longer Life</p>
                        </div>
                        {i < 5 && <hr className="border-gray-200" />}
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center gap-2">
                        {starsArr.map((item, index) => (
                          <img src={item} key={index} alt="" className="h-4 w-4" />
                        ))}
                      </div>
                      <div className="flex justify-between items-center mt-2 text-sm">
                        <span>4.8</span>
                        <span>32 Reviews</span>
                      </div>
                    </div>

                    <div className="border border-gray-300 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 flex justify-center items-center rounded-full bg-gray-100 text-gray-500 text-sm">
                            AD
                          </div>
                          <div>
                            <p className="font-medium">AdeWala</p>
                            <div className="flex items-center gap-1">
                              {starsArr.map((item, index) => (
                                <img src={item} className="h-3 w-3" key={index} alt="" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">03-04-25</p>
                      </div>
                      <p className="mt-3 text-sm sm:text-base">
                        The product is very good and I enjoyed using it
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {/* quantity  */}
 
              <div className="h-[70px] p-4 border mt-4 rounded-2xl flex justify-between items-center">
                Quantity 
                <div className="flex justify-center items-center gap-4">
<button onClick={decrementCount} className="h-10 w-10 bg-[#273e8e] rounded-md text-white text-center">-</button>
{quantity}
<button onClick={incrementCount} className="h-10 w-10 bg-[#273e8e] rounded-md text-white text-center">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;