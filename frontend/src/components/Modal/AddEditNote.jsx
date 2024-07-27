import React, { useState } from "react";
import styles from "./AddEditNote.module.scss";
import { MdClose } from "react-icons/md";

const AddEditNote = ({ closeModal }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState([]);

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

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.descInput}>
        <label htmlFor="">Descriprion</label>
        <textarea
          type="text"
          placeholder="Description"
          rows={10}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      <div className={styles.tagInput}>
        <label htmlFor="">Tags</label>
      </div>

      <button className={styles.formButton}>Add</button>
    </div>
  );
};

export default AddEditNote;
