import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import styles from "./SignUp.module.scss";
import PasswordInput from "../../../components/Inputs/PasswordInput/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validationEmail } from "../../../utils/helper";
import axiosIntance from "../../../utils/axiosInstance";

const SignUp = () => {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!nickname) {
      setError("Plese enter valid fullname");
      return;
    }

    if (nickname.length < 3) {
      setError("Nickname may be minimum 3 sybmols ");
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

    try {
      const response = await axiosIntance.post("/signUp", {
        fullName: nickname,
        email: email,
        password: password,
      });

      if (response.data && response.data.error) {
        setError(response.data.message);
        return;
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
        console.log("User has created Succesfull");
        console.log(localStorage.getItem("token"));
      }
      console.log(nickname, email, password);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexepted error on server");
      }
    }
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form action="" onSubmit={handleSignup} className={styles.signUpForm}>
          <p className={styles.formTitle}>Sign Up</p>
          <input
            type="text"
            placeholder="Fullname :"
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

          <button
            type="submit"
            className={styles.formButton}
            onClick={handleSignup}
          >
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
