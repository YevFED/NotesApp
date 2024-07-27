import React, { useState } from "react";
import Header from "../../../components/Header/Header";

import styles from "./SignUp.module.scss";
import PasswordInput from "../../../components/Inputs/PasswordInput/PasswordInput";
import { Link } from "react-router-dom";
import { validationEmail } from "../../../utils/helper";

const SignUp = () => {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [nickname, setNickname] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!nickname) {
      setError("Plese enter valid nickname");
      return;
    }

    if(nickname.length < 3){
      setError("Nickname may be minimum 3 sybmols ")
      return;
    }

    if (!validationEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    if (password.length < 8) {
      setError("Password may be minimum 8 sybmols");
      return;
    }

    setError("");
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form action="" onSubmit={handleSignup} className={styles.signUpForm}>
          <p className={styles.formTitle}>Sign Up</p>
          <input
            type="text"
            placeholder="Nickname :"
            className={styles.formInput}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email :"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            password={password}
            setPassword={setPassword}
            setError={setError}
          />

          <p className={styles.formError}>{error}</p>

          <button type="submit" className={styles.formButton}>
            Sign Up
          </button>

          <p className={styles.formLink}>
            Already have an account ?{" "}
            <Link to="/login" className={styles.Link}>
              Log in
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
