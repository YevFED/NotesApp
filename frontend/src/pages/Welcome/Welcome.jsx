import { Link } from "react-router-dom";
import styles from "./Welcome.module.scss";
import React from "react";
import image from "./image.png";
import Circle from "../../components/Circle/Circle";

const Welcome = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.title}>Notes App</p>
          <p className={styles.desc}>A good web-app for creating notes!</p>
          <img src={image} alt="" className={styles.image} />
        </div>
        <Link
          to="/login"
          onClick={localStorage.clear}
          className={styles.button}
        >
          Get Started
        </Link>{" "}
        <Circle />
      </div>
    </>
  );
};

export default Welcome;
