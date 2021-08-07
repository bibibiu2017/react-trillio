import React from "react";
import styles from "./HotelView.module.scss";

type Props = {
  className?: string;
};

const HotelView: React.FC<Props> = (props) => {
  return (
    <main className={`${styles.hotel} ${props.className}`}>Hotel View</main>
  );
};

export default HotelView;
