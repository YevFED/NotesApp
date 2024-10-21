import React from "react";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SerchBar/SearchBar";
import ProfileCard from "../Cards/ProfileCard";
const Header = ({ userInfo }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
    console.log("Loged out");
    localStorage.clear();
  };
  return (
    <header
      className={
        localStorage.getItem("token") ? styles.authHeader : styles.header
      }
    >
      <div className={styles.headerLeftSide}>
        <p className={styles.headerLogo}>NotesApp</p>
      </div>

      {localStorage.getItem("token") && (
        <>
          <SearchBar />
          <ProfileCard userInfo={userInfo} onLogout={onLogout} />
        </>
      )}
    </header>
  );
};

export default Header;
