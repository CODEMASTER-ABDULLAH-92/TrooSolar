import React, { useState, useEffect, useRef, useContext } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { ContextApi } from "../Context/AppContext";

const dropdownOptions = [
    "SolarPanels",
    "Batteries",
    "Inverters",
    "SolarFans",
    "LEDBulbs",
    "mttp",
    "Connectors",
    "SurgeArrestor",
];

const SearchBar = () => {
  const { products, setFilteredResults } = useContext(ContextApi);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [selectedOption, setSelectedOption] = useState("All");
  const [query, setQuery] = useState("");

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

  // Filter logic (with debounce)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      let results = products;

      if (selectedOption !== "All") {
        results = results.filter(
          (item) =>
            item.category?.toLowerCase() === selectedOption.toLowerCase()
        );
      }

      if (query.trim()) {
        results = results.filter((item) =>
          item.heading.toLowerCase().includes(query.trim().toLowerCase())
        );
      }

      setFilteredResults(results);
    }, 300); // 300ms debounce

    return () => clearTimeout(delayDebounce);
  }, [query, selectedOption, products, setFilteredResults]);

  return (
    <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 w-full max-w-2xl relative">
      {/* Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="flex items-center gap-8 pl-4 py-3 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          <span className="mr-2 whitespace-nowrap">{selectedOption}</span>
          <ChevronDown
            size={26}
            className={`transition-transform text-gray-400 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute left-0 top-full mt-1 max-h-[400px] z-50 w-[280px] bg-white rounded-md shadow-lg border border-gray-200 overflow-y-auto">
            <div className="px-4 py-2 border-b">
               <p className="text-center text-gray-500">Select Category</p> 
              <X
                size={20}
                onClick={() => setIsDropdownOpen(false)}
                className="cursor-pointer absolute top-2.5 right-2 text-gray-500 hover:text-gray-800"
              />
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
                <span className="h-4 w-4 rounded-full border border-[#273e8e] flex items-center justify-center">
                {selectedOption === option && (
                <span className="h-2 w-2 bg-[#273e8e] rounded-full" />
                )}
                  </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-300 mx-2"></div>

      {/* Input Field */}
      <div className="flex-1 flex items-center px-2">
        <Search size={18} className="text-gray-400 mr-2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full px-2 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
