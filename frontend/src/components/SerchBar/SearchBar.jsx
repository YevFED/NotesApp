import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import { IoSearch } from "react-icons/io5";
import { MdClear } from "react-icons/md";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const clearBar = () => {
    setSearch("");
  };
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search Note :"
        className={styles.barInput}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search ? (
        <MdClear
          size={20}
          className={styles.barClear}
          onClick={clearBar}
          cursor="pointer"
        />
      ) : (
        ""
      )}

      <IoSearch cursor="pointer" size={20} className={styles.barSearch} />
    </div>
  );
};

export default SearchBar;
