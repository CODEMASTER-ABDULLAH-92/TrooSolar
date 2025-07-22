import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, X } from "lucide-react";

const PRICE_OPTIONS = [
  { label: "0 - 300,000", min: 0, max: 300000 },
  { label: "300,000 - 600,000", min: 300000, max: 600000 },
  { label: "600,000 - 900,000", min: 600000, max: 900000 },
].sort((a, b) => a.min - b.min); // Already sorted, but keeping for consistency

const PriceDropDown = ({ onFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("Price");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const dropdownRef = useRef(null);

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleSelect = useCallback(
    (option) => {
      setSelectedLabel(option.label);
      setMinPrice(option.min.toString());
      setMaxPrice(option.max.toString());
      setIsOpen(false);
      onFilter?.(option.min, option.max);
    },
    [onFilter]
  );

  const handleSaveCustom = useCallback(() => {
    const min = parseInt(minPrice, 10) || 0;
    const max = parseInt(maxPrice, 10) || 0;

    if (min < 0 || max < 0 || min > max) {
      alert(
        "Please enter a valid price range (min must be less than or equal to max)."
      );
      return;
    }

    const label = `${min.toLocaleString()} - ${max.toLocaleString()}`;
    setSelectedLabel(label);
    setIsOpen(false);
    onFilter?.(min, max);
  }, [minPrice, maxPrice, onFilter]);

  const handleClear = useCallback(() => {
    setSelectedLabel("Price");
    setMinPrice("");
    setMaxPrice("");
    onFilter?.(null, null);
  }, [onFilter]);

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
    <>
      {/* Desktop View  */}
      <div
        ref={dropdownRef}
        className="relative sm:block hidden w-full max-w-[200px] cursor-pointer"
      >
        <div
          className="px-5 py-5 bg-white border border-black/50 rounded-2xl shadow-sm hover:border-black/70 transition-colors"
          onClick={toggleDropdown}
        >
          <div className="flex items-center justify-between w-full font-medium">
            <span
              className={`text-lg ${
                selectedLabel === "Price" ? "text-gray-500" : "text-gray-900"
              }`}
            >
              {selectedLabel}
            </span>
            <ChevronDown
              size={26}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 z-50 mt-1 w-[400px] bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="relative px-4 py-2 border-b">
              <p className="text-center text-gray-900 py-1 font-medium">
                Select Price Range
              </p>
              <X
                size={20}
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                aria-label="Close dropdown"
              />
            </div>

            <div className="max-h-[300px] overflow-y-auto">
              {PRICE_OPTIONS.map((option) => {
                const isSelected = selectedLabel === option.label;
                return (
                  <button
                    key={`${option.min}-${option.max}`}
                    onClick={() => handleSelect(option)}
                    className={`flex items-center justify-between w-full px-8 py-4 text-sm transition-colors ${
                      isSelected
                        ? "bg-blue-50 font-semibold text-gray-800"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span>{option.label}</span>
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
            </div>

            <div className="p-4 border-t">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) =>
                    setMinPrice(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="Min price"
                  className="border px-3 text-sm outline-none py-3 rounded-xl border-gray-300 focus:border-[#273e8e] focus:ring-1 focus:ring-[#273e8e]"
                  min="0"
                />
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="Max price"
                  className="border px-3 text-sm outline-none py-3 rounded-xl border-gray-300 focus:border-[#273e8e] focus:ring-1 focus:ring-[#273e8e]"
                  min="0"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleClear}
                  className="border text-sm border-[#273e8e] py-3.5 rounded-full text-[#273e8e] hover:bg-[#273e8e]/10 transition duration-150"
                >
                  Clear
                </button>
                <button
                  onClick={handleSaveCustom}
                  disabled={!minPrice || !maxPrice}
                  className="text-sm rounded-full py-3.5 bg-[#273e8e] text-white hover:bg-[#1f2f6e] disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile View  */}
      <div
        ref={dropdownRef}
        className="relative sm:hidden block w-full max-w-[150px] cursor-pointer"
      >
        <div
          className="px-5 py-5 bg-white border border-black/50 rounded-tr-2xl border-l-0 rounded-br-2xl sm:rounded-2xl shadow-sm hover:border-black/70 transition-colors"
          onClick={toggleDropdown}
        >
          <div className="flex items-center justify-between w-full font-medium">
            <span
              className={`text-lg ${
                selectedLabel === "Price" ? "text-gray-500" : "text-gray-900"
              }`}
            >
              {selectedLabel}
            </span>
            <ChevronDown
              size={26}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {isOpen && (
          <>
            {/* Optional Backdrop */}
            <div
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Centered Dropdown */}
            <div className="fixed z-50 top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="relative px-4 py-2 border-b">
                <p className="text-center text-gray-900 py-1 font-medium">
                  Select Price Range
                </p>
                <X
                  size={20}
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                  aria-label="Close dropdown"
                />
              </div>

              <div className="max-h-[300px] overflow-y-auto">
                {PRICE_OPTIONS.map((option) => {
                  const isSelected = selectedLabel === option.label;
                  return (
                    <button
                      key={`${option.min}-${option.max}`}
                      onClick={() => handleSelect(option)}
                      className={`flex items-center justify-between w-full px-8 py-4 text-sm transition-colors ${
                        isSelected
                          ? "bg-blue-50 font-semibold text-gray-800"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <span>{option.label}</span>
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
              </div>

              <div className="p-4 border-t">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) =>
                      setMinPrice(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    placeholder="Min price"
                    className="border px-3 text-sm outline-none py-3 rounded-xl border-gray-300 focus:border-[#273e8e] focus:ring-1 focus:ring-[#273e8e]"
                    min="0"
                  />
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    placeholder="Max price"
                    className="border px-3 text-sm outline-none py-3 rounded-xl border-gray-300 focus:border-[#273e8e] focus:ring-1 focus:ring-[#273e8e]"
                    min="0"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleClear}
                    className="border text-sm border-[#273e8e] py-3.5 rounded-full text-[#273e8e] hover:bg-[#273e8e]/10 transition duration-150"
                  >
                    Clear
                  </button>
                  <button
                    onClick={handleSaveCustom}
                    disabled={!minPrice || !maxPrice}
                    className="text-sm rounded-full py-3.5 bg-[#273e8e] text-white hover:bg-[#1f2f6e] disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PriceDropDown;
