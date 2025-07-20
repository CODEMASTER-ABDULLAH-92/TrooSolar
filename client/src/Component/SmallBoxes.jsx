import React from "react";
import { assets } from "../assets/data";
import { Link } from "react-router-dom";

const SmallBoxes = () => {
  const boxItems = [
    {
      id: 1,
      title: "Solar Bundles",
      color: "#0000ff",
      icon: assets.vec1,
      link: "/solar-bundles"
    },
    {
      id: 2,
      title: "Solar Builder",
      color: "#ff0000",
      icon: assets.vec2,
      link: "/solar-builder" 
    },
    {
      id: 3,
      title: "Solar Store",
      color: "#800080",
      icon: assets.vec3,
      link: "/homePage" 
    },
    {
      id: 4,
      title: "Saving Calculator",
      color: "#008000",
      icon: assets.vec4,
      link: "/tools"
    }
  ];

  return (
    <div className="gap-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
      {boxItems.map((item) => (
        <Link
          to={item.link}
          key={item.id}
          className="flex sm:flex-row flex-col rounded-xl items-center py-4 px-2 shadow-xl bg-white hover:shadow-lg transition-shadow duration-300 justify-center gap-6"
        >
          <div 
            className={`bg-[${item.color}]/20 h-[70px] w-[70px] rounded-full flex justify-center items-center`}
            style={{ backgroundColor: `${item.color}20` }} // Fallback for Tailwind dynamic colors
          >
            <img src={item.icon} className="h-[40px] w-[40px]" alt={item.title} />
          </div>
          <p className={`text-[${item.color}]`} style={{ color: item.color }}>
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default SmallBoxes;