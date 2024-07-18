import React from "react";
import styles from "./Card.module.scss";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlinePushPin } from "react-icons/md";

const Card = ({ title, desc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={styles.cardTop}>
          <p className={styles.cardTitle}>{title}</p>
          <MdOutlinePushPin
            cursor="pointer"
            size={25}
            className={styles.buttonPin}
          />
        </div>

        <p className={styles.cardDesc}>{desc.slice(0, 60)}</p>
        <div className={styles.cardTags}>
          <p className={styles.Tag}>#Tags</p>
          <div className={styles.cardButtons}>
            <MdModeEditOutline
              cursor="pointer"
              size={25}
              className={styles.buttonEdit}
            />
            <MdDelete
              cursor="pointer"
              size={25}
              className={styles.buttonDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
