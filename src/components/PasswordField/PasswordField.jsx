import React, { useState } from "react";

function PasswordInput({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-input">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        required
      />
      <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordInput;
