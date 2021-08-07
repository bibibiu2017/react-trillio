import React from "react";
import styles from "./Sidebar.module.scss";

type Props = {
  className?: string;
};

const Sidebar: React.FC<Props> = (props) => {
  return (
    <nav className={`${props.className} ${styles.sidebar}`}>Navigation</nav>
  );
};

export default Sidebar;
