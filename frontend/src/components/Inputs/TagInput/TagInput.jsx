import React, { useState } from "react";

import styles from "./TagInput.module.scss";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  //Changing input value
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Adding new Note

  const handleAddTag = () => {
    // Checking if we have the same tag in array?

    // Without this checker , every tag who have the same tagName will delete together so..

    tags.map((tags) => {
      if (inputValue.trim() == tags) {
        setError("This tag already added");
        !handleAddTag();
      }
    });

    // Adding

    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }

    setError("");
  };

  // Addding by Key

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTag();
    }
  };

  // Delete Tag

  const handleTagDelete = (tagToRemove) => {
    setTags(tags.filter((tag) => tag != tagToRemove));
  };
  return (
    <>
      <div>
        {tags?.length > 0 && (
          <div className={styles.tagTable}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                # {tag}
                <button
                  className={styles.tagRemove}
                  onClick={() => handleTagDelete(tag)}
                >
                  <MdClose size={25} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
      {error && <p className={styles.tagAddError}>{error}</p>}
      <div className={styles.tagInput}>
        <input
          type="text"
          placeholder="#Tag"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <button className={styles.tagButton} onClick={handleAddTag}>
          <MdAdd size={30} fill="black" cursor="pointer" />
        </button>
      </div>
    </>
  );
};

export default TagInput;
