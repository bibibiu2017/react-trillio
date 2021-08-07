import React from "react";
import styles from "./Coniner.module.scss";

type Props = {};

const Container: React.FC<Props> = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
