import React, { useEffect, useState } from "react";
import { Checkbox, Label } from "flowbite-react";

export default function FeaturesDetails({
  onSelectedFeaturesChange,
}: {
  onSelectedFeaturesChange: (
    features: { name: string; checked: boolean }[]
  ) => void;
}) {
  const initialFeatures = [
    { name: "Aire acondicionado", checked: false },
    { name: "Balcón", checked: false },
    { name: "Trastero", checked: false },
    { name: "Ventanas de doble cristal", checked: false },
    { name: "Ascensor", checked: false },
    { name: "Jardín", checked: false },
    { name: "Gas", checked: false },
    { name: "Calefacción", checked: false },
    { name: "Piscina", checked: false },
    { name: "Paneles solares", checked: false },
    { name: "Licencia turística", checked: false },
    { name: "Esquina", checked: false },
    { name: "Garaje", checked: false },
  ];

  const [features, setFeatures] = useState<any[]>([]);

  useEffect(() => {
    setFeatures(initialFeatures);
  }, []);

  const handleCheckboxChange = (featureName: string) => {
    setFeatures((prevFeatures) => {
      const updatedFeatures = prevFeatures.map((feature) =>
        feature.name === featureName
          ? { ...feature, checked: !feature.checked }
          : feature
      );  
      onSelectedFeaturesChange(updatedFeatures);
      return updatedFeatures;
    });
  };

  return (
    <div className="grid grid-cols-2 justify-center gap-2">
      {features.map((feature) => (
        <div key={feature.name} className="flex items-center gap-2">
          <Checkbox
            id={feature.name}
            name="features"
            value={feature.name}
            defaultChecked={feature.checked}
            onChange={() => handleCheckboxChange(feature.name)}
          />

          <Label htmlFor={feature.name}>{feature.name}</Label>
        </div>
      ))}
    </div>
  );
}
