import React, { useState } from "react";
import Header from "../../../components/Header/Header";

import styles from "./SignUp.module.scss";
import PasswordInput from "../../../components/Inputs/PasswordInput/PasswordInput";

const SignUp = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form action="" className={styles.signUpForm}>
          <p>Sign Up</p>
          <input type="text" className={styles.formInput} />
          <input type="text" className={styles.formInput} />
          <PasswordInput />
          <button type="">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
