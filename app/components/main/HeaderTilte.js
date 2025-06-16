import React from "react";

const HeaderTilte = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4">
      <h1 className="text-4xl font-bold text-[#30374B]">{title}</h1>
      <div className="flex flex-row items-center justify-center gap-1">
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default HeaderTilte;
