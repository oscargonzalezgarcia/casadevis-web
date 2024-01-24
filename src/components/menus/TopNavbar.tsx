import React from "react";

export default function TopNavbar() {
  return (
    <div className="flex items-center justify-center py-4 gap-x-4 bg-gray-900">
      <img
        src={process.env.PUBLIC_URL + "/images/devo-logo.png"}
        width={30}
        height={30}
      />
      <h1 className="font-manrope self-center whitespace-nowrap text-3xl font-bold text-white">
        Casa de Vis
      </h1>
    </div>
  );
}
