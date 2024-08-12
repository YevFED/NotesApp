import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import styles from "./Login.module.scss";
import PasswordInput from "../../../components/Inputs/PasswordInput/PasswordInput";
import { validationEmail } from "../../../utils/helper";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import axiosIntance from "../../../utils/axiosInstance";

const Login = () => {
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validationEmail(email)) {
      setError("Please enter the valid email");
      return;
    }

    if (password.length == 0) {
      setError("Please enter your password");
      return;
    }

    setError("");

    // Login API Call
    try {
      const response = await axiosIntance.post("/login", {
        email: email,
        password: password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Wrong Email or Password");
      }
    }
  };
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form action="" onSubmit={handleLogin} className={styles.loginForm}>
          <p className={styles.formTitle}>Log in</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Email :"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput password={password} setPassword={setPassword} />
          <p className={styles.formError}>{error}</p>
          <button type="submit" className={styles.formButton}>
            Log in
          </button>
          <p className={styles.formLink}>
            Don't have account ?{" "}
            <Link to="/signup" className={styles.Link}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
