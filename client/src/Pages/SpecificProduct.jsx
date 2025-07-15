import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Bell, ShoppingCart } from "lucide-react"
import { products } from '../assets/data'
import SideBar from "../Component/SideBar"
import SearchBar from "../Component/SearchBar"
import Product from "../Component/Product"
import { ContextApi } from "../Context/AppContext"
import BrandDropDown from '../Component/BrandDropDown'
import PriceDropDown from '../Component/PriceDropDown'

const formatCategoryName = (category) => {
  // Convert camelCase to space separated words
  const formatted = category.replace(/([A-Z])/g, ' $1').trim()
  // Capitalize first letter of each word
  return formatted.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}

const SpecificProduct = () => {
  const { category } = useParams()
  const [specificProduct, setSpecificProduct] = useState([])



  const handlePriceFilter = (min, max) => {
    if (min == null && max == null) {
      setFilteredProducts(products);
    } else {
      const result = products.filter((product) => {
        const numericPrice = parseInt(product.price.replace(/[^\d]/g, ""));
        return numericPrice >= min && numericPrice <= max;
      });
      setFilteredProducts(result);
    }
  };


  useEffect(() => {
    const filteredProducts = products.filter(item => item.category === category)
    setSpecificProduct(filteredProducts)
  }, [category]) // Added category as dependency

  const displayCategory = formatCategoryName(category)

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-auto">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation Section */}
        <div className="flex bg-[#273e8e] justify-end items-center gap-4 px-6 py-4 shadow-md">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white shadow-md cursor-pointer">
            <Bell size={20} />
          </div>
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white shadow-md cursor-pointer">
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
              <h1 className="text-2xl font-semibold text-white">{displayCategory}</h1>
              <p className="text-white">Shop for {displayCategory}</p>
            </div>
            <SearchBar />
          </div>
        </div>

        {/* Products Section */}
        <div className="px-6 py-6 flex-1 overflow-auto">
          <div className="flex justify-start items-center gap-4 mb-4">
          <BrandDropDown onFilter={(data) => setSpecificProduct(data)} />
            <PriceDropDown onFilter={handlePriceFilter} />
          </div>

          <h1 className="text-2xl text-gray-800 my-4">{displayCategory}</h1>
          
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {specificProduct.map((item) => (
              <Link 
                key={item.id} 
                to={`/homePage/product/${item.id}`}
              >
                <Product 
                  image={item.image}
                  heading={item.heading}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  discount={item.discount}
                  soldText={item.soldText}
                  progressBar={item.progressBar}
                  rating={item.rating}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecificProduct