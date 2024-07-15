import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Cards/Card";
import styles from "./Home.module.scss";

const Home = () => {
  const title = "Title";
  const desc = "desc";
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <h1 className={styles.cardTableTitle}>Notes List</h1>
        <div className={styles.cardTable}>
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
          <Card title={title} desc={desc} />
        </div>
      </div>
    </>
  );
};

export default Home;
