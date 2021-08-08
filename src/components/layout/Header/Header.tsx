import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/img/logo.png";
import user from "../../../assets/img/user.jpg";
import Svg from "../../ui/Svg/Svg";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <div className={styles.header}>
      {/*Logo*/}
      <img src={logo} alt="Trillo Logo" className={styles.logo} />

      {/*Search*/}
      <form action="#" className={styles.search}>
        <input
          type="text"
          className={styles.search__input}
          placeholder={"Search Hotels"}
        />
        <button className={styles.search__button}>
          <Svg className={styles.search__icon} name={"icon-magnifying-glass"} />
        </button>
      </form>

      {/*Navigation*/}
      <nav className={styles["user-nav"]}>
        <div className={styles[`user-nav__icon-box`]}>
          <Svg className={styles[`user-nav__icon`]} name={"icon-bookmark"} />
          <span className={styles[`user-nav__notification`]}>7</span>
        </div>
        <div className={styles[`user-nav__icon-box`]}>
          <Svg className={styles[`user-nav__icon`]} name={"icon-chat"} />
          <span className={styles[`user-nav__notification`]}>13</span>
        </div>
        <div>
          <img
            src={user}
            alt="User"
            className={styles[`user-nav__user-photo`]}
          />
          <span className={styles[`user-nav__user-name`]}>Jonas</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
