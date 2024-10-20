import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Cards/Card";
import styles from "./Home.module.scss";
import AddEditNote from "../../components/Modal/AddEditNote";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import axiosIntance from "../../utils/axiosInstance";
import moment from "moment";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  const [userInfo, setUserInfo] = useState(null);

  const [Notes, setNotes] = useState([]);

  const openAddModal = () => {
    setOpenAddEditModal({ isShown: true, type: "add", data: null });
  };

  const closeModal = () => {
    setOpenAddEditModal({ isShown: false, type: "add", data: null });
  };

  // Get User Info

  const navigate = useNavigate();

  const getUserInfo = async () => {
    try {
      const response = await axiosIntance.get("/get-user");

      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (isAxiosError(error) && error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
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

  // Geting all notes

  const getAllNotes = async () => {
    try {
      const response = await axiosIntance.get("/get-all-notes");

      if (response.data && response.data.notes) {
        setNotes(response.data.notes);
      }
    } catch (error) {
      console.log("An unexepted error on the server");
    }
  };

  // Delete Note

  const deleteNote = async (data) => {
    const noteId = data._id;
    try {
      const response = await axiosIntance.delete("/delete-note/" + noteId);
      if (response.data && !response.data.error) {
        getAllNotes();
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

  useEffect(() => {
    getUserInfo();
    getAllNotes();
    return () => {};
  }, []);

  return (
    <>
      <Header userInfo={userInfo} />
      <div className={styles.wrapper}>
        {Notes.length > 0 ? (
          <>
            <h1 className={styles.cardTableTitle}>Notes List</h1>
            <div className={styles.cardTable}>
              {Notes.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  date={moment(item.createdOn).format("Do MMM YYYY")}
                  content={item.content}
                  tags={item.tags}
                  isPinned={item.isPinned}
                  onEdit={() =>
                    setOpenAddEditModal({
                      isShown: true,
                      type: "edit",
                      data: item,
                    })
                  }
                  onDelete={() => deleteNote(item)}
                  onPinNote={() => {}}
                />
              ))}
            </div>
          </>
        ) : (
          <p className={styles.tableEmpty}>
            Your dashboard is empty , let`s just add your first Note!
          </p>
        )}

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
              noteData={openAddEditModal.data}
              getAllNotes={getAllNotes}
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
