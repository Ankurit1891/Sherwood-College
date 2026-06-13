import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img
        src="/logos/sherwood-logo.png"
        alt="Sherwood College Logo"
        className={styles.logoImage}
      />

      <div className={styles.logoText}>
        <span>SHERWOOD</span>

        <small>COLLEGE • EST. 1869</small>
      </div>
    </Link>
  );
}
