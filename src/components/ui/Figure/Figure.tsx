import React from "react";
import styles from "./Figure.module.scss";

type Props = {
  figure: FigureType;
} & React.HTMLAttributes<HTMLDivElement>;

const Figure: React.FC<Props> = ({ figure, ...props }) => {
  return (
    <figure className={props.className}>
      <img src={figure.src} alt={figure.description} className={styles.photo} />
    </figure>
  );
};

export type FigureType = {
  id: string;
  src: string;
  description: string;
};

export default Figure;
