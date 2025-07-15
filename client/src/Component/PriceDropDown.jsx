import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, X } from "lucide-react";

const BRAND_OPTIONS = ["0 - 300,000", "300,000 - 600,000", "600,000 - 900,000"]; // Made unique and added "All"

const PriceDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Price");
  const dropdownRef = useRef(null);

  const handleSelect = useCallback((option) => {
    setSelected(option);
    setIsOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="cursor-pointer relative w-full max-w-[200px]"
    >
      <div className="px-5 py-5 bg-white border border-black/50 rounded-2xl shadow-sm">
        {/* Toggle Button */}
        <button
          onClick={toggleDropdown}
          className="flex items-center cursor-pointer justify-between w-full  rounded-md font-medium"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="text-lg text-gray-500 -tracking-tighter">
            {selected}
          </span>
          <ChevronDown
            size={26}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown List */}
        {isOpen && (
          <div
            className="absolute left-0 z-50 mt-1 w-[400px] bg-white border border-gray-200 rounded-md shadow-lg max-h-[400px] overflow-y-auto"
            role="listbox"
          >
            <div className="relative px-4 py-2 border-b">
              <p className="text-center text-gray-900 py-1">Brand</p>
              <X
                size={20}
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                aria-label="Close dropdown"
              />
            </div>

            {BRAND_OPTIONS.map((option, index) => {
              const isSelected = selected === option;
              return (
                <button
                  key={`${option}-${index}`}
                  onClick={() => handleSelect(option)}
                  className={`flex items-center justify-between w-full px-8 py-4 text-sm transition-colors ${
                    isSelected
                      ? "bg-blue-50 font-semibold text-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  role="option"
                  aria-selected={isSelected}
                >
                  <span>{option}</span>
                  <span className="h-4 w-4 p-0 rounded-full flex items-center justify-center border border-[#273e8e]">
                    {isSelected && (
                      <span
                        className="h-3 w-3 rounded-full bg-[#273e8e]"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </button>
              );
            })}

            <div className="grid grid-cols-2 gap-3 py-3 px-2">
              <input
                placeholder="Min"
                className="border -tracking-tighter  px-2 text-sm outline-none py-4 rounded-xl border-gray-300"
              />
              <input
                placeholder="Max"
                className=" px-3 text-sm -tracking-tighter outline-none rounded-xl py-4
         border-gray-300 border  "
              />
            </div>

            <div className="grid grid-cols-2 gap-3 py-4 px-2">
              <button className="border  text-sm border-[#273e8e] py-3.5 rounded-full text-[#273e8e] hover:bg-[#273e8e]/10 transition duration-150">
                Clear
              </button>
              <button
                className=" text-sm rounded-full py-3.5
         bg-[#273e8e] text-white hover:bg-[#1f2f6e] transition duration-150"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceDropDown;
