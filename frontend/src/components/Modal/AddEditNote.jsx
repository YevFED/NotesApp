import { useState } from "react";
import styles from "./AddEditNote.module.scss";
import { MdClose } from "react-icons/md";
import TagInput from "../Inputs/TagInput/TagInput";
import axiosIntance from "../../utils/axiosInstance";

const AddEditNote = ({ noteData, type, closeModal, getAllNotes }) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);

  const [error, setError] = useState("");

  // Add new note
  const addNewNote = async () => {
    try {
      const response = await axiosIntance.post("/add-note", {
        title,
        content,
        tags,
      });
      console.log(response);
      if (response.data && response.data.note) {
        getAllNotes();
        closeModal();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handleAddNote = () => {
    if (!title) {
      setError("Please write the title");
      return;
    }

    if (!content) {
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

  const editNote = async () => {
    const noteId = noteData._id;
    try {
      const response = await axiosIntance.put("/edit-note/" + noteId, {
        title,
        content,
        tags,
      });
      console.log(response);
      if (response.data && response.data.note) {
        getAllNotes();
        closeModal();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

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
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className={styles.tagInput}>
        <label htmlFor="">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      <p className={styles.formError}>{error}</p>

      <button
        className={styles.formButton}
        onClick={type === "add" ? handleAddNote : editNote}
      >
        {type === "add" ? "Add" : "Update"}
      </button>
    </div>
  );
};

export default AddEditNote;
