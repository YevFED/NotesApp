import React from "react";
import styles from "./Card.module.scss";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlinePushPin } from "react-icons/md";

const Card = ({
  title,
  content,
  date,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={styles.cardTop}>
          <p className={styles.cardTitle}>
            {title.length > 20 ? title.slice(0, 20) + "..." : title}
          </p>

          <MdOutlinePushPin
            cursor="pointer"
            size={25}
            className={isPinned ? styles.cardPinned : ""}
            onClick={onPinNote}
          />
        </div>
        <span className={styles.cardDate}>{date}</span>

        <p className={styles.cardDesc}>
          {content.length > 10 ? content.slice(0, 20) + "..." : content}
        </p>
        <div className={styles.cardTags}>
          <p className={styles.Tag}>{tags.map((item) => `#${item} `)}</p>
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
