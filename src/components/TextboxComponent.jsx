import React, { useState } from 'react';
import logo2 from './images/logo3.png';
import './TextboxComponent.css';

const TextBox = ({ label, type, name, value, onChange }) => {
  const [hasInput, setHasInput] = useState(false);

  const handleInputChange = (e) => {
    onChange(e);
    setHasInput(e.target.value !== ""); // Update state based on whether there's input
  };

  return (
    <div className="text-box">
      <label htmlFor={name}>{label}</label>
      <div className="text-box-inner">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleInputChange}
          required
        />
        <img
          src={logo2}
          className={`logo2 ${hasInput ? "active" : ""}`} // Add "active" class if input is not empty
          alt="Icon"
        />
      </div>
    </div>
  );
};

export default TextBox;
