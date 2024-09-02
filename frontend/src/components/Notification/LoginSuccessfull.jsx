import React from "react";
import styles from "./LoginSuccessfull.module.scss";
import { FaUserCheck } from "react-icons/fa";

const LoginSuccessfull = () => {
  return (
    <>
      <div className={styles.notificationWindow}>
        <FaUserCheck size={29} fill="#00c700" />
        <p className={styles.notificationMessage}>Log in Successfuly</p>
      </div>
    </>
  );
};

export default LoginSuccessfull;
