import React, { useState } from "react";
import styles from "./PasswordInput.module.scss";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(true);

  function passwordHandler() {
    setShowPassword(!showPassword);
  }
  return (
    <div className={styles.passwordInput}>
      <input type={showPassword ? "password" : "text"} name="" id="" />
      {showPassword ? (
        <FaEyeSlash opacity="0.7" size={20} onClick={passwordHandler} />
      ) : (
        <FaEye fill="blue" opacity="0.7" size={20} onClick={passwordHandler} />
      )}
    </div>
  );
};

export default PasswordInput;
