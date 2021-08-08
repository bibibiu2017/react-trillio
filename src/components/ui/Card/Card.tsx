import React from "react";
import styles from "./Card.module.scss";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {props.children}
    </div>
  );
};

export default Card;
