import React from "react";
import styles from "./Body.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import HotelView from "../../views/HotelView";
import DUMMY_HOTEL from "../../data/Hotel";

type Props = {};

const Body: React.FC<Props> = () => {
  return (
    <div className={styles.content}>
      <Sidebar className={styles.sidebar} />
      <HotelView className={styles.view} hotel={DUMMY_HOTEL} />
    </div>
  );
};

export default Body;
