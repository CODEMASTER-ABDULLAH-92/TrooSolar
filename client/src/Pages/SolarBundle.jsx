// SolarBundle.jsx (Page Component)
import React, { useContext } from 'react'
import SideBar from '../Component/SideBar'
import TopNavbar from '../Component/TopNavbar'
import SearchBar from '../Component/SearchBar'
import { Link } from 'react-router-dom'
import { ContextApi } from '../Context/AppContext'
import SolarBundleComponent from "../Component/SolarBundleComponent"

const SolarBundle = () => {
  const { solarBundleData } = useContext(ContextApi)

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-auto">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Navigation Section */}
        <TopNavbar />

        {/* Header and Search Section */}
        <div className="bg-[#273e8e] border-l-2 border-gray-500 px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-white">Solar Bundles</h1>
              <p className="text-white">Welcome to the dashboard</p>
            </div>
            <SearchBar />
          </div>
        </div>

        {/* Products Section */}
        <div className="px-6 py-6 w-full overflow-scroll">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">All Products</h1>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-52">
            {solarBundleData.map((item, index) => (
              <Link key={index} to={`/productBundle/details/${item.id}`}>
                <SolarBundleComponent
                  id={item.id}
                  image={item.image}
                  heading={item.heading}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  discount={item.discount}
                  borderColor={item.borderColor}
                  rating={item.rating}
                  bundleTitle={item.bundleTitle}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolarBundle
