import React from "react";
import { IconType } from "react-icons";

export default function PrimaryButton({ text, onClick, icon }: { text: string, onClick: () => void, icon: IconType }) {
  return (
    <div
      className={`inline-flex items-center gap-x-2 rounded-3xl bg-blue-500 font-manrope px-4 py-2 cursor-pointer text-white font-bold hover:bg-blue-400 active:bg-blue-800 ease-in-out duration-200 transform transition-transform hover:scale-105`}
      onClick={onClick}
    >
      {text}
      {React.createElement(icon)}
    </div>
  );
}
