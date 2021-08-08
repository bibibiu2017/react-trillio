import React from "react";
import styles from "./SidebarItem.module.scss";
import sprite from "../../../assets/img/sprite.svg";

type Props = { item: SidebarItemType };
const SidebarItem: React.FC<Props> = ({ item }) => {
  const activeStyle = item.isActive ? styles[`item--active`] : "";
  return (
    <li className={`${styles.item} ${activeStyle}`}>
      <a href={item.to} className={styles.link}>
        <svg className={styles.icon}>
          <use xlinkHref={`${sprite}#${item.icon}`} />
        </svg>
        <span>{item.name}</span>
      </a>
    </li>
  );
};

export type SidebarItemType = {
  isActive: boolean;
  icon: string;
  to: string;
  name: string;
};

export default SidebarItem;
