import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarItem, { SidebarItemType } from "./SidebarItem";

type Props = {
  className?: string;
};

const sidebarItems: SidebarItemType[] = [
  { icon: "icon-home", isActive: true, name: "Hotel", to: "#" },
  { icon: "icon-aircraft-take-off", isActive: false, name: "Flight", to: "#" },
  { icon: "icon-key", isActive: false, name: "Car Rental", to: "#" },
  { icon: "icon-map", isActive: false, name: "Tours", to: "#" },
];

const year = new Date().getFullYear();

const Sidebar: React.FC<Props> = (props) => {
  return (
    <nav className={`${props.className} ${styles.sidebar}`}>
      <ul className={styles[`side-nav`]}>
        {sidebarItems.map((item) => (
          <SidebarItem item={item} key={item.name} />
        ))}
      </ul>

      <div className={styles.legal}>
        &copy; <span>{year}</span> by trillo all right reserved.
      </div>
    </nav>
  );
};

export default Sidebar;
