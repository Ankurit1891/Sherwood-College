import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <span>SHERWOOD</span>
      <small>COLLEGE • EST. 1869</small>
    </Link>
  );
}