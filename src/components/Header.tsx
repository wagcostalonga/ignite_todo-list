import styles from "./Header.module.css";

import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo ToDo List" />
        <div className={styles.logoText}>
          <span>to</span>do
        </div>
      </div>
    </header>
  );
}
