import React, { useState } from 'react';

interface InputProps {
  id?: string; // Propriété id optionnelle
  type?: string; // Propriété type optionnelle
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ id, type = "text", placeholder, onChange }) => {
  const [value, setValue] = useState('');

  // Gestion de l'événement onInput
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (onChange) {
      onChange(e.target.value); // Appel de la fonction onChange si elle est passée en prop
    }
  };

  return (
    <input
      id={id}
      type={type} // Ajout de la prop type ici
      value={value}
      onInput={handleInputChange}
      placeholder={placeholder}
      className="border p-2 rounded"
    />
  );
};

export default Input;
