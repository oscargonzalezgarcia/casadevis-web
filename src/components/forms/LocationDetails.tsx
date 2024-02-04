import React, { useState } from "react";
import FloatingIconLabel from "../inputs/FloatingIconLabel";
import {
  FaAt,
  FaBuilding,
  FaCity,
  FaDoorClosed,
  FaMap,
  FaMapMarkedAlt,
  FaMapPin,
  FaMarker,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { Label, Select } from "flowbite-react";

export default function LocationDetails({
  address,
  zipCode,
  city,
  province,
  onAddressChange,
  onZipCodeChange,
  onCityChange,
  onProvinceChange,
}: {
  address: string;
  zipCode: string;
  city: string;
  province: string;
  onAddressChange: (value: string) => void;
  onZipCodeChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onProvinceChange: (value: string) => void;
}) {
  const [selectedEstate, setSelectedEstate] = useState(0);

  return (
    <>
      <div className="col-span-2 flex flex-col space-y-2 font-manrope">
        <div>
          <Label htmlFor="estates" value="Tipo de inmueble" />
        </div>
        <Select
          id="estates"
          required
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedEstate(Number(event.target.value))
          }
        >
          <option value={0}>Casa</option>
          <option value={1}>Chalet</option>
          <option value={2}>Piso</option>
        </Select>
      </div>
      <FloatingIconLabel
        label={"Dirección"}
        onChange={onAddressChange}
        icon={FaMapMarkedAlt}
        value={address}
      />
      <FloatingIconLabel
        label={"Código postal"}
        onChange={onZipCodeChange}
        icon={FaMapPin}
        value={zipCode}
      />
      <FloatingIconLabel
        label={"Localidad"}
        onChange={onCityChange}
        icon={FaCity}
        value={city}
      />
      <FloatingIconLabel
        label={"Provincia"}
        onChange={onProvinceChange}
        icon={FaMap}
        value={province}
      />
      {selectedEstate == 2 && (
        <>
          <FloatingIconLabel
            label={"Planta"}
            onChange={onProvinceChange}
            icon={FaBuilding}
            value={province}
          />
          <FloatingIconLabel
            label={"Puerta"}
            onChange={onProvinceChange}
            icon={FaDoorClosed}
            value={province}
          />
        </>
      )}
    </>
  );
}
