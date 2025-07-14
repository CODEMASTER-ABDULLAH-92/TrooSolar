import React, { useContext } from "react";
import SideBar from "../Component/SideBar";
import { Bell, ShoppingCart } from "lucide-react";
import SearchBar from "../Component/SearchBar";
import Items from "../Component/Items";
import Product from "../Component/Product";
import { products } from "../assets/data";
import { Link } from "react-router-dom";
import { ContextApi } from "../Context/AppContext";

const HomePage = () => {
  const {filteredResults} = useContext(ContextApi);
  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-auto">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Navigation Section */}
        <div className="flex bg-[#273e8e] justify-end items-center gap-4 px-6 py-4 shadow-md">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white shadow-md">
            <Bell size={20} />
          </div>
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white shadow-md">
            <ShoppingCart size={20} />
          </div>
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e9e9e9]">
            <p className="text-lg font-bold text-[#909090]">QA</p>
          </div>
          <p className="hidden sm:block text-white text-lg font-semibold">
            Qamardeen AbdulMalik
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="bg-[#273e8e] border-l-2 border-gray-500 px-6 py-6">
          {/* Header and Search */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-white">Solar Store</h1>
              <p className="text-white">Welcome to the dashboard</p>
            </div>
            <SearchBar />
          </div>

          {/* Items Section */}
          <Items />
        </div>

      {/* Products Section */}
<div className="px-6 py-6 w-full overflow-scroll">
  <h1 className="text-2xl font-semibold text-gray-800 mb-4">All Products</h1>
  <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 space-y-4">
    {filteredResults.map((item, index) => (
      <Link key={index} to={`/homePage/product/${item.id}`}>
      <Product 
        key={index}
        image={item.image}
        heading={item.heading}
        price={item.price}
        oldPrice={item.oldPrice}
        discount={item.discount}
        soldText={item.soldText}
        progressBar={item.progressBar}
        rating={item.rating} // use correct rating if available
        />
        </Link>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default HomePage;
