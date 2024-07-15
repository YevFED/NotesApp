import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, desc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardDesc}>{desc}</p>
        <div className={styles.cardTags}>
          <p className={styles.Tag}>#Tags</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
