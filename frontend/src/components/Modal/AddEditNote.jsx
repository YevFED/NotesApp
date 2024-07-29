import React, { useState } from "react";
import styles from "./AddEditNote.module.scss";
import { MdClose } from "react-icons/md";
import TagInput from "../Inputs/TagInput/TagInput";

const AddEditNote = ({ closeModal }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState([]);

  const [error, setError] = useState("");

  const handleAddNote = () => {
    if (!title) {
      setError("Please write the title");
      return;
    }

    if (!desc) {
      setError("Please write a description");
      return;
    }

    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  const addNewNote = async () => {};
  const editNote = async () => {};

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
        <TagInput tags={tags} setTags={setTags} />
      </div>

      <p className={styles.formError}>{error}</p>

      <button className={styles.formButton} onClick={handleAddNote}>
        Add
      </button>
    </div>
  );
};

export default AddEditNote;
