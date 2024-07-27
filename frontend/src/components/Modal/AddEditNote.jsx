import React from "react";
import styles from "./AddEditNote.module.scss";
import { MdClose } from "react-icons/md";

const AddEditNote = ({ closeModal }) => {
  return (
    <div>
      <div className={styles.titleInput}>
        <div className={styles.topBar}>
          <label>Title</label>
          <MdClose
            cursor="pointer"
            onClick={closeModal}
            size={30}
            className={styles.closeButton}
            fill="#aaaaaa"
          />
        </div>

        <input type="text" placeholder="Title" />
      </div>

      <div className={styles.descInput}>
        <label htmlFor="">Descriprion</label>
        <textarea type="text" placeholder="Description" rows={10} />
      </div>

      <div className={styles.tagInput}>
        <label htmlFor="">Tags</label>
      </div>

      <button className={styles.formButton}>Add</button>
    </div>
  );
};

export default AddEditNote;
