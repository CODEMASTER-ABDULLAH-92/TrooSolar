import React from "react";
import { Eye, EyeOff } from "lucide-react";
export const Input = ({
  type = "text",
  id,
  label,
  placeholder,
  value,
  onChange,
  isPassword = false,
  hidePassword,
  setHidePassword,
  isMobile = false
}) => {
  return (
    <div className={isMobile ? "" : "mb-4"}>
      <label 
        htmlFor={id} 
        className="block mb-1 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={isPassword ? (hidePassword ? "password" : "text") : type}
          id={id}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={onChange}
        />
        {isPassword && (
          <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
            {hidePassword ? (
              <EyeOff onClick={() => setHidePassword(!hidePassword)} size={24} />
            ) : (
              <Eye onClick={() => setHidePassword(!hidePassword)} size={24} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};