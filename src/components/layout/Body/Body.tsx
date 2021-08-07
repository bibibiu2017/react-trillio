import React from "react";
import styles from "./Body.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import HotelView from "../../views/HotelView";

type Props = {};

const Body: React.FC<Props> = (props) => {
  return (
    <div className={styles.content}>
      <Sidebar className={styles.sidebar} />
      <HotelView className={styles.view} />
    </div>
  );
};

export default Body;
