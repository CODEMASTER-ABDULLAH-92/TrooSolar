import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Cross, CrosshairIcon, CrossIcon, Search,X } from "lucide-react";

const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownOptions = [
    "All",
    "Solar Panels",
    "Batteries",
    "MTTP Chargers",
    "LED Bulbs",
    "Solar Fans",
    "Surge Arrestor",
    "Connectors",
    "Wire Cables",
    "Extension Cords",
  ];
  const [selectedOption, setSelectedOption] = useState(dropdownOptions[0]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 w-full max-w-2xl relative">
      {/* Dropdown */}
      <div className="relative"  ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          <span className="mr-2 whitespace-nowrap">{selectedOption}</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute left-0 top-full mt-1 max-h-[500px] z-50 w-[300px] bg-white rounded-md shadow-lg border border-gray-200">
            <div>
              <p className="text-center flex justify-evenly items-center">{selectedOption} 
              <div className="flex place-content-end">
              <X className="absolute right-3"/>
              </div></p>
            </div>
            {dropdownOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedOption(option);
                  setIsDropdownOpen(false);
                }}
                className={`flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-gray-100 ${
                  selectedOption === option
                    ? "bg-blue-50 font-semibold"
                    : "text-gray-700"
                }`}
              >
                <span>{option}</span>
                {selectedOption === option && (
                  <span className="flex items-center justify-center h-4 w-4 rounded-full border border-[#273e8e]">
                    <span className="h-2 w-2 bg-[#273e8e] rounded-full" />
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-300 mx-2"></div>

      {/* Input Field */}
      <div className="flex-1 flex items-center px-2">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-2 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
