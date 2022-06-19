import styles from "./Header.module.css";
import logoImg from "../assets/Ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Logo Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
