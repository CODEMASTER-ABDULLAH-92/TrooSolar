import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LinkComp = ({
  name,
  link,
  sub = [],
  isActiveCheck,
  icon,
  onClick,
  menuStatus,
}) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(isActiveCheck);

  useEffect(() => {
    const currentPath = location.pathname;
    const basePath = currentPath.split("/")[1];
    const baseLink = link.split("/")[1];

    const isActiveNow =
      basePath === baseLink ||
      sub.some(
        (item) =>
          currentPath === item.link || currentPath.split("/")[1] === item.link.split("/")[1]
      );

    setIsActive(isActiveNow);
  }, [location.pathname, link, sub]);

  return (
    <div className="relative">
      {/* Sidebar Link */}
      <Link
        to={link}
        onClick={onClick}
        className={`group flex items-center py-3 rounded-md transition-all duration-200 mx-4 relative ${
          isActive
            ? "bg-white text-[#273E8E]"
            : "text-gray-400 hover:bg-white hover:text-[#273E8E]"
        }`}
      >
        <img
          src={icon}
          alt={`${name || "icon"}`}
          className={`w-10 h-10 ${
            isActive ? "invert" : "group-hover:invert"
          }`}
        />
        {!menuStatus && <span className="ml-3 font-medium">{name}</span>}

        {/* Left Highlight Bar */}
        <div
          className={`absolute right-1 top-1/2 h-[40%] w-1 bg-[#273E8E] rounded transform -translate-y-1/2 ${
            isActive ? "block" : "hidden group-hover:block"
          }`}
        />
      </Link>
    </div>
  );
};

export default LinkComp;
