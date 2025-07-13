import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { assets, products, starsArr } from "../assets/data";
import SideBar from "../Component/SideBar";
import { Bell, ShoppingCart } from "lucide-react";
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  console.log(product);


  const [showReview,setShowReview] = useState(true);
  return (
    <div>
      <div className="flex min-h-screen w-full">
        <SideBar />
        {/* Main Content */}
        <div className="w-full">
          {/* Topbar */}
          <div className="flex gap-3 items-center h-[90px] bg-white justify-end px-5 sm:pr-10 py-5">
            <div className="rounded-lg flex justify-center items-center shadow-md h-10 w-10">
              <Bell size={24} />
            </div>
            <div className="rounded-lg flex justify-center items-center shadow-md h-10 w-10">
              <ShoppingCart size={24} />
            </div>
            <div className="bg-[#e9e9e9] h-12 w-12 rounded-full flex items-center justify-center">
              <p className="text-lg text-[#909090] font-bold">QA</p>
            </div>
            <p className="text-[#000000] text-lg hidden sm:block">
              Qamardeen AbdulMalik
            </p>
          </div>

          <div className="bg-[#F5F7FF] p-5">
            <h1 className="text-2xl font-[400]">{product.category}</h1>
            <Link to="/homepage" className="underline text-blue-600">
              Go Back
            </Link>

            <div className="flex justify-between items-start gap-5">
              {/* left  */}
              <div className="w-[50%]">
                <div className="h-[500px] mt-4 w-[100%] border-black/20 border flex justify-center items-center bg-white rounded-xl ">
                  <img
                    src={product.image}
                    className="h-[400px] w-[400px]"
                    alt=""
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <button className="py-5 px-3 border-[#273e8e] border rounded-full">
                    Add To Cart{" "}
                  </button>
                  <button className="py-5 px-3 bg-[#273e8e]  text-[#ffffff] rounded-full">
                    Buy Now{" "}
                  </button>
                </div>

                <div className="h-auto p-3 mt-4 bg-[#ffff00]/20">
                  <p className="text-[#E8A91D]">
                    Don’t have the finances to proceed ? Take a loan and repay
                    at your convenience
                  </p>
                  <button className="bg-[#E8A91D] py-3 text-white px-7 rounded-full mt-3">
                    Apply
                  </button>
                </div>
              </div>
              {/* Right  */}

              <div className="w-[50%]">
                <div className="border-[2px] p-2 border-[#273e8e] rounded-xl">
                  <h1 className="text-[20px] font-[500]">{product.heading}</h1>
                  <div>
                    <h1 className="text-2xl text-[#273e8e] font-bold mt-2">
                      {product.price}
                    </h1>

                    <p className="text-gray-400 line-through text-sm flex items-center gap-4 mt-2">
                      {product.oldPrice}{" "}
                      <span className="px-2 py-[2px] rounded-full text-[#FFA500] text-xs bg-[#FFA500]/20">
                        {product.discount}
                      </span>
                    </p>

                    <div className="flex justify-between items-center">
                      <div className=" flex justify-start mt-2 items-center ">
                        <img
                          src={product.progressBar}
                          alt="Progress bar"
                          className="w-[100px] h-2 object-contain"
                        />
                        <p className="text-sm  text-gray-400">
                          {product.soldText}
                        </p>
                      </div>
                      <img
                        src={product.rating}
                        alt="Customer rating"
                        className="w-[100px] object-contain"
                      />
                    </div>
                  </div>
                </div>


<div className="bg-[#ffffff] border py-2 px-3 space-x-2 mt-4 rounded-full w-[38%]">
<button onClick={()=>setShowReview(!showReview)} className={`${showReview ? "bg-[#273e8e] text-white":" bg-white text-gray-500"} transition-opacity  py-3 rounded-full px-4`}>
  Details
</button>
<button onClick={()=>setShowReview(!showReview)} className={`${!showReview ? "bg-[#273e8e] text-white":" bg-white text-gray-500"}  transition-opacity  py-3 rounded-full px-4`}>
  Reviews
</button>
</div>

<p className="text-xl font-[500] mt-4 text-[#000000]">{showReview ? "Product Details" : "Reviews"}</p>



<div className="mt-4">
{
  showReview ? <div className="border p-3 rounded-3xl ">
  <div className="flex py-1 justify-start items-center gap-3">
    <img src={assets.light} className="h-6 w-6" alt="" />
    <p>Longer Life</p>
  </div>
  <hr className="my-5 bg-gray-400" />
  <div className="flex py-1 justify-start items-center gap-3">
    <img src={assets.light} className="h-6 w-6" alt="" />
    <p>Longer Life</p>
  </div>
    <hr className="my-2" />
  <div className="flex py-1 justify-start items-center gap-3">
    <img src={assets.light} className="h-6 w-6" alt="" />
    <p>Longer Life</p>
  </div>
    <hr className="my-2" />
  <div className="flex py-1 justify-start items-center gap-3">
    <img src={assets.light} className="h-6 w-6" alt="" />
    <p>Longer Life</p>
  </div>
    <hr className="my-2" />
  <div className="flex py-1 justify-start items-center gap-3">
    <img src={assets.light} className="h-6 w-6" alt="" />
    <p>Longer Life</p>
  </div>
    <hr className="my-2" />
  <div className="flex py-1 justify-start items-center gap-3">
    <img src={assets.light} className="h-6 w-6" alt="" />
    <p>Longer Life</p>
  </div>

</div>: <div>



<div className="p-3 border-gray-400 border rounded-2xl">
<div className="flex items-center justify-start gap-2">
  {
    starsArr.map((item,index) => {
      return <img src={item} key={index} alt="" />
    })
  }
</div>

<div className="flex mt-2  justify-between items-center">
    <span>4.8</span>
    <span>32 Reviews</span>

  </div>

</div>



<div className="mt-10 border border-gray-500 rounded-2xl">

<div className="flex justify-between items-center pr-5">
  <div className="flex justify-start p-2 gap-3 items-start">
    <div className="h-14 w-14 flex justify-center items-center rounded-full bg-[#D9D9D9] text-[#000000]/50">AD</div>
    <div className="flex justify-between  items-start flex-col">
      <p>AdeWala</p>
      <div className="flex items-center justify-start gap-1">
  {
    starsArr.map((item,index) => {
      return <img src={item} className="h-4 w-4" key={index} alt="" />
    })
  }
</div>
    </div>
  </div>
<p>03-04-25</p>
</div>

<p className="pl-3">The product is very good and i enjoyed using it</p>

</div>


</div>
}


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
