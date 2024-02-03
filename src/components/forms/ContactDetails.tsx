import React from "react";
import FloatingIconLabel from "../inputs/FloatingIconLabel";
import { FaAt, FaPhone, FaUser } from "react-icons/fa";

export default function ContactDetails({
  name,
  surname,
  email,
  phone,
  onNameChange,
  onSurnameChange,
  onEmailChange,
  onPhoneChange,
}: {
  name: string;
  surname: string;
  email: string;
  phone: string;
  onNameChange: (value: string) => void;
  onSurnameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}) {
  return (
    <>
      <FloatingIconLabel
        label={"Nombre"}
        onChange={onNameChange}
        icon={FaUser}
        value={name}
      />
      <FloatingIconLabel
        label={"Apellidos"}
        onChange={onSurnameChange}
        icon={FaUser}
        value={surname}
      />
      <FloatingIconLabel
        label={"Correo"}
        onChange={onEmailChange}
        icon={FaAt}
        value={email}
      />
      <FloatingIconLabel
        label={"Teléfono"}
        onChange={onPhoneChange}
        icon={FaPhone}
        value={phone}
      />
    </>
  );
}
