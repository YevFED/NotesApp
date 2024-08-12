import React from "react";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SerchBar/SearchBar";
import ProfileCard from "../Cards/ProfileCard";
const Header = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };
  return (
    <header className={styles.header}>
      <Link to="/dashboard" className={styles.headerLogo}>
        NotesApp
      </Link>
      <SearchBar />
      <ProfileCard onLogOut={onLogout} />
      {/* <div className={styles.headerLinks}>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign Up</Link>
      </div> */}
    </header>
  );
};

export default Header;
