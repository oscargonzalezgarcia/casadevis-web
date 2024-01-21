import React from "react";
import { FaHome, FaAddressBook, FaEuroSign } from "react-icons/fa";
import { clsx } from "clsx";

export default function Tab({ selectedTab }: { selectedTab: number }) {
  return (
    <div className="flex gap-x-10">
      <div
        className={clsx("flex items-center gap-x-2 p-2 transition ease-in-out duration-200", {
          "border-b-2 border-blue-500 text-blue-500": selectedTab == 0,
          "text-slate-300": selectedTab !== 0,
        })}
      >
        <FaAddressBook />
        Datos de contacto
      </div>
      <div
        className={clsx("flex items-center gap-x-2 p-2 transition ease-in-out duration-200", {
          "border-b-2 border-blue-500 text-blue-500": selectedTab == 1,
          "text-slate-300": selectedTab !== 1,
        })}
      >
        <FaHome />
        Datos del inmueble
      </div>
      <div
        className={clsx("flex items-center gap-x-2 p-2 transition ease-in-out duration-200", {
          "border-b-2 border-blue-500 text-blue-500": selectedTab == 2,
          "text-slate-300": selectedTab !== 2,
        })}
      >
        <FaEuroSign />
        Tasación
      </div>
    </div>
  );
}
