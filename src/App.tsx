import { useState } from "react";
import { Footer } from "flowbite-react";
import TopNavbar from "./components/menus/TopNavbar";
import React from "react";
import Tab from "./components/menus/Tab";
import PrimaryButton from "./components/buttons/PrimaryButton";
import FloatingIconLabel from "./components/inputs/FloatingIconLabel";
import {
  FaArrowRight,
  FaEnvelope,
  FaHome,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import SecondaryButton from "./components/buttons/SecondaryButton";
import clsx from "clsx";
import ContactDetails from "./components/forms/ContactDetails";
import EstateDetails from "./components/forms/EstateDetails";
import {
  validateEmail,
  validateName,
  validatePhone,
  validateSurname,
} from "./utils/commonUtils";

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function validateContactDetails() {
    let isValid = false;

    if (!name) setError("El nombre es obligatorio");
    else if (!validateName(name)) setError("El nombre no es válido");
    else if (!surname) setError("El apellido es obligatorio");
    else if (!validateSurname(surname)) setError("El apellido no es válido");
    else if (!email) setError("El correo electrónico es obligatorio");
    else if (!validateEmail(email))
      setError("El correo electrónico no es válido");
    else if (!phone) setError("El teléfono es obligatorio");
    else if (!validatePhone(phone)) setError("El teléfono no es válido");
    else {
      isValid = true;
      setError("");
    }

    return isValid;
  }

  function nextTab() {
    let isValid = true;
    if (tabIndex == 0) isValid = validateContactDetails();

    if (isValid)
      setTabIndex((prevState) => (prevState < 2 ? prevState + 1 : 0));
  }

  function prevTab() {
    setTabIndex((prevState) => prevState - 1);
  }

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-700">
        <TopNavbar />
        <div className="flex-grow flex items-center justify-center font-manrope h-full">
          <div className="bg-slate-50 rounded-xl shadow-md w-8/12">
            <div className="rounded-t-xl bg-gradient-to-r from-blue-800 from-30% via-blue-600 via-60% to-blue-500 to-90% p-6">
              <h1 className="text-3xl font-semibold text-white">
                Tasa tu inmueble
              </h1>
            </div>
            <div className="flex flex-col space-y-10 p-6">
              <Tab selectedTab={tabIndex} />
              <p
                className={clsx("text-red-500 text-sm font-extrabold h-1", {
                  invisible: !error,
                })}
              >
                {error}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tabIndex == 0 && (
                  <ContactDetails
                    name={name}
                    surname={surname}
                    email={email}
                    phone={phone}
                    onNameChange={(value) => setName(value)}
                    onSurnameChange={(value) => setSurname(value)}
                    onEmailChange={(value) => setEmail(value)}
                    onPhoneChange={(value) => setPhone(value)}
                  />
                )}
                {tabIndex == 1 && (
                  <EstateDetails
                    name={name}
                    surname={surname}
                    email={email}
                    phone={phone}
                    onNameChange={(value) => setName(value)}
                    onSurnameChange={(value) => setSurname(value)}
                    onEmailChange={(value) => setEmail(value)}
                    onPhoneChange={(value) => setPhone(value)}
                  />
                )}
                {tabIndex == 2 && (
                  <ContactDetails
                    name={name}
                    surname={surname}
                    email={email}
                    phone={phone}
                    onNameChange={(value) => setName(value)}
                    onSurnameChange={(value) => setSurname(value)}
                    onEmailChange={(value) => setEmail(value)}
                    onPhoneChange={(value) => setPhone(value)}
                  />
                )}
              </div>
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
                <PrimaryButton
                  text={tabIndex < 2 ? "Siguiente" : "Tasar"}
                  icon={tabIndex < 2 ? FaArrowRight : FaHome}
                  onClick={nextTab}
                />
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
