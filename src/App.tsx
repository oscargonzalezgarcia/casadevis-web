import { useState } from "react";
import { Footer } from "flowbite-react";
import TopNavbar from "./components/TopNavbar";
import React from "react";
import Tab from "./components/Tab";
import PrimaryButton from "./components/PrimaryButton";
import FloatingIconLabel from "./components/FloatingIconLabel";
import { FaArrowRight, FaEnvelope, FaHome, FaPhone, FaUser } from "react-icons/fa";
import SecondaryButton from "./components/SecondaryButton";
import clsx from "clsx";

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [name, setName] = useState("");

  function nextTab() {
    setTabIndex((prevState) => (prevState < 2 ? prevState + 1 : 0));
  }

  function prevTab() {
    setTabIndex((prevState) => prevState - 1);
  }

  return (
    <>
      <div className="flex flex-col h-screen bg-house bg-no-repeat bg-cover">
        <TopNavbar />
        <div className="flex-grow flex items-center justify-center font-manrope">
          <div className="bg-green-50 rounded-xl shadow-md w-8/12">
            <div className="rounded-t-xl bg-gradient-to-r from-blue-800 from-30% via-blue-600 via-60% to-blue-500 to-90% p-6">
              <h1 className="text-3xl font-semibold text-white">
                Tasa tu inmueble
              </h1>
            </div>
            <div className="flex flex-col space-y-8 p-6">
              <Tab selectedTab={tabIndex} />
              {tabIndex == 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FloatingIconLabel
                    label={"Nombre"}
                    value={name}
                    icon={FaUser}
                  />
                  <FloatingIconLabel
                    label={"Apellidos"}
                    value={name}
                    icon={FaUser}
                  />
                  <FloatingIconLabel
                    label={"Correo"}
                    value={name}
                    icon={FaEnvelope}
                  />
                  <FloatingIconLabel
                    label={"Teléfono"}
                    value={name}
                    icon={FaPhone}
                  />
                </div>
              )}
              {tabIndex == 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FloatingIconLabel
                    label={"Tipo de Inmueble"}
                    value={name}
                    icon={FaUser}
                  />
                  <FloatingIconLabel
                    label={"Localización"}
                    value={name}
                    icon={FaUser}
                  />
                  <FloatingIconLabel
                    label={"Correo"}
                    value={name}
                    icon={FaEnvelope}
                  />
                  <FloatingIconLabel
                    label={"Teléfono"}
                    value={name}
                    icon={FaPhone}
                  />
                </div>
              )}
              {tabIndex == 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FloatingIconLabel
                    label={"Tipo de Inmueble"}
                    value={name}
                    icon={FaUser}
                  />
                  <FloatingIconLabel
                    label={"Localización"}
                    value={name}
                    icon={FaUser}
                  />
                  <FloatingIconLabel
                    label={"Correo"}
                    value={name}
                    icon={FaEnvelope}
                  />
                  <FloatingIconLabel
                    label={"Teléfono"}
                    value={name}
                    icon={FaPhone}
                  />
                </div>
              )}
              <div
                className={clsx(
                  "flex",
                  { "justify-between": tabIndex > 0 },
                  { "self-end": tabIndex == 0 }
                )}
              >
                {tabIndex > 0 && (
                  <SecondaryButton text={"Atrás"} onClick={prevTab} />
                )}
                <PrimaryButton text={tabIndex < 2 ? "Siguiente" : "Tasar"} icon={tabIndex < 2 ? FaArrowRight : FaHome} onClick={nextTab} />
              </div>
            </div>
          </div>
        </div>
        <Footer container className="bg-gray-900 font-manrope rounded-none">
          <Footer.Copyright
            href="#"
            by="Devosoft"
            year={2024}
            className="text-white font-semibold"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/devo-logo.png"}
            width={24}
            height={24}
          />
        </Footer>
      </div>
    </>
  );
}
