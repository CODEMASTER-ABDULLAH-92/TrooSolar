import React, { useState } from 'react';
import SideBar from '../Component/SideBar';
import TopNavbar from '../Component/TopNavbar';
import { assets } from '../assets/data';
import InvertedLoadCalculator from '../Component/InverterLoadCalculator';
import SolarPanelCalculator from '../Component/SolarPanelCalculator';
import SolarSavingCalculator from '../Component/SolarSavingCalculator';
import LoanCalculator from '../Component/LoanCalculator';
import SmallBoxes from "../Component/SmallBoxes"
const toolsData = [
  {
    id: 'inverter',
    label: 'Inverter Load Calculator',
    icon: assets.solarInverted,
    component: <InvertedLoadCalculator />,
  },
  {
    id: 'solarPanel',
    label: 'Solar Panel Calculator',
    icon: assets.solar1,
    component: <SolarPanelCalculator />,
  },
  {
    id: 'solarSaving',
    label: 'Solar Saving Calculator',
    icon: assets.solarInverted,
    component: <SolarSavingCalculator />,
  },
  {
    id: 'loan',
    label: 'Loan Calculator',
    icon: assets.solarInverted,
    component: <LoanCalculator />,
  },
];

const Navbar = ({ activeTool, setActiveTool }) => {
  return (
    <div className="bg-[#273e8e] border-l-2 text-white h-[100px] w-full grid grid-cols-4 items-end pb-1 text-sm px-10">
      {toolsData.map((tool) => (
        <div
          key={tool.id}
          onClick={() => setActiveTool(tool.id)}
          className="cursor-pointer  flex flex-col justify-center items-center gap-2"
        >
          <div className="flex justify-center items-center gap-2">
            <img src={tool.icon} alt={tool.label} />
            <p className="text-end mt-1 text-[15px]">{tool.label}</p>
          </div>
          <div
            className={`w-[100px] h-2 rounded-full ${
              activeTool === tool.id ? 'bg-white' : ''
            }`}
          />
        </div>
      ))}
    </div>
  );
};

const Tools = () => {
  const [activeTool, setActiveTool] = useState('inverter'); // Default tool
  const selectedTool = toolsData.find((tool) => tool.id === activeTool);

  return (
    <>
    {/* Desktop View  */}
    <div className="relative flex min-h-screen overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <TopNavbar />
        <div className="flex flex-col  flex-1">
          <Navbar activeTool={activeTool} setActiveTool={setActiveTool} />
          {selectedTool?.component}
        </div>
      </div>
    </div>
    </>
  );
};

export default Tools;
