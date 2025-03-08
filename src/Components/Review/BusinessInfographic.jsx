import React from "react";
import { Lightbulb, Settings, BarChart3, Search } from "lucide-react";

const InfoCard = ({ title, description, icon, gradient }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-8 flex flex-col ${gradient}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="text-gray-400 text-3xl">{icon}</div>
      </div>
      <h3 className="font-bold text-2xl mb-2">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
};

export default function BusinessInfographic() {
  const cards = [
    {
      title: "LOREM IPSUM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Lightbulb size={40} />, 
      gradient: "border-t-4 border-green-500",
    },
    {
      title: "LOREM IPSUM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Settings size={40} />, 
      gradient: "border-t-4 border-emerald-500",
    },
    {
      title: "LOREM IPSUM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <BarChart3 size={40} />, 
      gradient: "border-t-4 border-cyan-500",
    },
    {
      title: "LOREM IPSUM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Search size={40} />, 
      gradient: "border-t-4 border-blue-500",
    },
  ];

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Central Circle */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
              <div className="text-center">
                <div className="text-xs font-bold">BUSINESS</div>
                <div className="text-xs">INFOGRAPHIC</div>
              </div>
            </div>
            {/* Connecting lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-dashed border-blue-500 animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-gray-200 animate-spin-slow"></div>

            {/* Connection dots */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-500 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-cyan-500 rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Cards */}
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            gradient={card.gradient}
          />
        ))}
      </div>
    </div>
  );
}
