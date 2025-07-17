import React from "react";

export const BankDropdown = ({
  id,
  label = "",
  value,
  placeHolder="",
  onChange,
  options = [],
  isMobile = false,
}) => {
  return (
    <div className={isMobile ? "" : "mb-4"}>
      <label
        htmlFor={id}
        className="block mb-3 text-[16px] text-gray-700"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 "
      >
        <option value="" disabled>
          {placeHolder}
        </option>
        {options.map((bank, index) => (
          <option key={index} value={bank}>
            {bank}
          </option>
        ))}
      </select>
    </div>
  );
};