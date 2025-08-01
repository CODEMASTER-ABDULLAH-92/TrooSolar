import React from "react";
import { ChevronRight } from "lucide-react";

const SidebarOption = ({ icon: Icon, label, image, colorBg }) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl px-4 py-3 mb-3 shadow-sm hover:border-[#273e8e] hover:border border border-gray-300 cursor-pointer">
      <div className="flex items-center gap-3">
        {image && (
          <img
            src={image}
            alt={label}
            className={`w-8 p-1.5 rounded-md h-8 text-white ${colorBg}`}
          />
        )}
        {Icon && (
          <Icon className={`w-8 h-8 rounded-md ${colorBg} p-1.5 text-white`} />
        )}
        <span className=" text-gray-800">{label}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-400" />
    </div>
  );
};

export default SidebarOption;