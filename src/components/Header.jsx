import { useState } from "react";
import styles from "../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  /// states ///
  const [isOpen, setIsOpen] = useState(false);

  /// functions //

  const menuHandler = () => {
    setIsOpen((prev) => !prev);
  };

  //////////////

  return (
    <div className={styles.header}>
      <h3 className={styles.nav_name}> Mohammad Riyahi</h3>
      <nav className={`${isOpen ? styles.nav_menu_active : styles.nav_menu}`}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </nav>
      <button className={styles.ham_menu} onClick={menuHandler}>
        <FontAwesomeIcon icon={faBars} size="2xl" className={styles.ham_icon} />
      </button>
    </div>
  );
}

export default Header;
