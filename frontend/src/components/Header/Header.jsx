import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SerchBar/SearchBar";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/dashboard" className={styles.headerLogo}>
        NotesApp
      </Link>
      <SearchBar />
      <div className={styles.headerLinks}>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
