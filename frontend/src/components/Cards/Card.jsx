import React from "react";
import styles from "./Card.module.scss";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlinePushPin } from "react-icons/md";

const Card = ({
  key,
  title,
  desc,
  date,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className={styles.card} key={key}>
      <div className={styles.cardInfo}>
        <div className={styles.cardTop}>
          <p className={styles.cardTitle}>{title}</p>

          <MdOutlinePushPin
            cursor="pointer"
            size={25}
            className={isPinned ? styles.cardPinned : ""}
            onClick={onPinNote}
          />
        </div>
        <span>{date}</span>

        <p className={styles.cardDesc}>{desc.slice(0, 50) + "..."}</p>
        <div className={styles.cardTags}>
          <p className={styles.Tag}>{`${"#" + tags}`}</p>
          <div className={styles.cardButtons}>
            <MdModeEditOutline
              cursor="pointer"
              size={25}
              className={styles.buttonEdit}
              onClick={onEdit}
            />
            <MdDelete
              cursor="pointer"
              size={25}
              className={styles.buttonDelete}
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
