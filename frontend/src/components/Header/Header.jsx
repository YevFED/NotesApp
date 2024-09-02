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
    <header className={styles.header}>
      <div className={styles.headerLeftSide}>
        <Link to="/dashboard" className={styles.headerLogo}>
          NotesApp
        </Link>
      </div>

      {localStorage.getItem("token") ? (
        <>
          <SearchBar />
          <ProfileCard userInfo={userInfo} onLogout={onLogout} />
        </>
      ) : (
        <div className={styles.headerLinks}>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
