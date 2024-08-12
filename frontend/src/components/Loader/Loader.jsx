import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.rotatebleCircle}></div>
      <p className={styles.loaderText}>Loading</p>
    </div>
  );
};

export default Loader;
