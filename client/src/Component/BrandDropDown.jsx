import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, Minus, X } from "lucide-react";
import { useParams } from "react-router-dom";
import { products } from "../assets/data";

const BRAND_OPTIONS = [
  "All",
  "SunTech",
  "PowerCell",
  "Voltas",
  "CoolBreeze",
  "BrightLite",
  "ChargeMate",
  "WireX",
  "SafeSurge",
];

const BrandDropDown = ({ onFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const dropdownRef = useRef(null);
  const { category } = useParams();

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

  useEffect(() => {
    let filtered = products.filter((item) => item.category === category);

    if (selected !== "All") {
      filtered = filtered.filter((item) => item.brandName === selected);
    }

    onFilter?.(filtered); // safe optional chaining
  }, [category, selected]); // ✅ removed `onFilter`

  return (
    <>
      {/* Desktop View  */}
      <div
        ref={dropdownRef}
        className="relative sm:block hidden w-full max-w-[200px] cursor-pointer"
      >
        <div className="px-5 py-5 bg-white border border-black/50 rounded-2xl shadow-sm">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full font-medium"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span className="text-lg text-gray-500">{selected}</span>
            <ChevronDown
              size={26}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

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
                    <span className="h-4 w-4 p-0 flex items-center justify-center border border-[#273e8e]">
                      {isSelected && (
                        <span
                          className="h-4 w-4 bg-[#273e8e]"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </button>
                );
              })}

              <div className="grid grid-cols-2 gap-3 py-4 px-2">
                <button
                  onClick={() => setSelected("All")}
                  className="border text-sm border-[#273e8e] py-3.5 rounded-full text-[#273e8e] hover:bg-[#273e8e]/10 transition duration-150"
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-sm rounded-full py-3.5 bg-[#273e8e] text-white hover:bg-[#1f2f6e] transition duration-150"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile View  */}

      <div
        ref={dropdownRef}
        className="relative block sm:hidden w-full max-w-[160px] cursor-pointer"
      >
        <div className="px-5 py-5 bg-white border border-r-0 border-black/50 sm:rounded-2xl rounded-tl-2xl rounded-bl-2xl shadow-sm">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full font-medium"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span className="text-lg text-gray-500">{selected}</span>
            <div className="flex items-center">
            <ChevronDown
              size={26}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              />
            </div>
          </button>

          {/* Backdrop */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          {/* Centered Dropdown */}
          {isOpen && (
            <div
              className="fixed z-50 top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white border border-gray-200 rounded-md shadow-lg max-h-[400px] overflow-y-auto"
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
                    <span className="h-4 w-4 p-0 flex items-center justify-center border border-[#273e8e]">
                      {isSelected && (
                        <span
                          className="h-4 w-4 bg-[#273e8e]"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </button>
                );
              })}

              <div className="grid grid-cols-2 gap-3 py-4 px-2">
                <button
                  onClick={() => setSelected("All")}
                  className="border text-sm border-[#273e8e] py-3.5 rounded-full text-[#273e8e] hover:bg-[#273e8e]/10 transition duration-150"
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-sm rounded-full py-3.5 bg-[#273e8e] text-white hover:bg-[#1f2f6e] transition duration-150"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BrandDropDown;
