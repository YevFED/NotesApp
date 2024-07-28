import React, { useState } from "react";

import styles from "./TagInput.module.scss";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTag();
    }
  };

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

      <div className={styles.tagInput}>
        <input
          type="text"
          placeholder="#Tag"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
