
import { Navbar } from "flowbite-react";
import React from "react";

export default function TopNavbar() {
  return (
    <Navbar fluid className="bg-gray-900">
      <Navbar.Brand href="https://flowbite-react.com" className="gap-x-4">
        <img src={process.env.PUBLIC_URL + "/images/devo-logo.png"} width={24} height={24} />
        <span className="font-manrope self-center whitespace-nowrap text-2xl font-bold text-white">
          Casa de Vis
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar>
  );
}
