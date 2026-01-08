import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <h1 className={styles.title}>Dummy E-Commerce Admin</h1>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Lista de Produtos
          </Link>
          <Link to="/novo" className={styles.link}>
            Novo Produto
          </Link>
        </nav>
      </div>
      <h3 className={styles.subtitle}>
        Sistema de Catálogo e Gestão de Produtos
      </h3>
    </header>
  );
}
