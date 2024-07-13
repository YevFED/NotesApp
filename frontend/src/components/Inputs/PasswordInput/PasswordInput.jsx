import React, { useState } from "react";
import styles from "./PasswordInput.module.scss";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ password, setPassword }) => {
  const [showPassword, setShowPassword] = useState(true);

  function passwordHandler() {
    setShowPassword(!showPassword);
  }

  return (
    <div className={styles.passwordInput}>
      <input
        placeholder="Password :"
        type={showPassword ? "password" : "text"}
        name=""
        id=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {showPassword ? (
        <FaEyeSlash
          cursor="pointer"
          opacity="0.7"
          size={20}
          onClick={passwordHandler}
        />
      ) : (
        <FaEye
          cursor="pointer"
          fill="blue"
          opacity="0.7"
          size={20}
          onClick={passwordHandler}
        />
      )}
    </div>
  );
};

export default PasswordInput;
