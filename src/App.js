import { useState } from "react";
import logo from "./logo.svg";

export default function App() {
  const [step, setStep] = useState(1);
  const steps = Array.from({ length: 4 }, (_, index) => index + 1);

  function nextStep() {
    setStep((prevStep) => prevStep == 4 ? 1 : prevStep + 1);
  }

  return (
    <div className="font-manrope bg-green-100">
      <div className="bg-gray-200 p-6 rounded-lg w-full text-center">
        <div className="grid grid-cols-4 gap-x-4 w-[15%] mx-auto">
          {steps.map((currentStep) => (
            <div
              key={currentStep}
              className={`rounded-full p-4 mb-4 ${
                step === currentStep
                  ? "bg-white text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              <h1 className="text-2xl font-bold">{currentStep}</h1>
            </div>
          ))}
        </div>
        <h1 className="text-4xl font-bold mb-4">Casa de Vis</h1>
        <h2 className="text-2xl mb-4">Tasa tu inmueble</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Correo
          </label>
          <input
            className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={nextStep}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
