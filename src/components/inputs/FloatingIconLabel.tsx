import { FloatingLabel } from 'flowbite-react';
import React from 'react';
import { IconType } from 'react-icons';

export default function FloatingIconLabel({ label, onChange, icon }: {label: string, onChange: (value: string) => void, icon: IconType}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="relative">
      <FloatingLabel variant="standard" label={label} onChange={handleChange} />
      <div className="absolute right-2 md:right-3 lg:right-4 top-1/2 transform -translate-y-1/2 text-gray-300">
        {React.createElement(icon)}
      </div>
    </div>
  );
};
