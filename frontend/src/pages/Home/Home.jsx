import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Cards/Card";
import styles from "./Home.module.scss";
import AddEditNote from "../../components/Modal/AddEditNote";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const openAddModal = () => {
    setOpenAddEditModal({ isShown: true, type: "add", data: null });
  };

  const closeModal = () => {
    setOpenAddEditModal({ isShown: false, type: "add", data: null });
  };

  //Styles for Modal Window

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "auto",
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "50px",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  };

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <h1 className={styles.cardTableTitle}>Notes List</h1>
        <div className={styles.cardTable}>
          <Card
            title="adasd"
            date="3rd April"
            desc="Desc"
            tags="Hello"
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
        <div className={styles.modalWrapper}>
          <Modal
            isOpen={openAddEditModal.isShown}
            onRequestClose={() => {}}
            style={modalStyles}
            contentLabel=""
          >
            <AddEditNote
              closeModal={closeModal}
              type={openAddEditModal.type}
              noteData={openAddEditModal.type}
            />
          </Modal>
        </div>

        <button className={styles.addEditButton} onClick={openAddModal}>
          <MdAdd fill="white" size={30} />
        </button>
      </div>
    </>
  );
};

export default Home;
