import React from "react";
import styles from "./ProfileCard.module.scss";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../../utils/helper";

const ProfileCard = ({ userInfo, onLogout }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.initialsCircle}>
        {getInitials(userInfo?.fullName)}
      </div>
      <div className={styles.cardBox}>
        <p className={styles.cardName}>{userInfo?.fullName}</p>
        <button className={styles.logoutButton} onClick={onLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
