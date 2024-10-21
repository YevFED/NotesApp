import { Link } from "react-router-dom";
import styles from "./Welcome.module.scss";
import React from "react";

const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.title}>Notes App</p>
        {/* <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          necessitatibus facilis illum voluptatum, voluptatibus ullam? Delectus
          <br />
          odit, nihil, nam est ullam beatae quia, nemo sit nesciunt sed dolorem
          incidunt ea odio fuga! Quasi dignissimos excepturi ipsa omnis animi
          <br />
          accusantium numquam possimus explicabo, vel fugiat impedit? Sit
          expedita sint illum illo!
        </p> */}
      </div>
      <Link to="/login" onClick={localStorage.clear} className={styles.button}>
        Get Started
      </Link>
    </div>
  );
};

export default Welcome;
