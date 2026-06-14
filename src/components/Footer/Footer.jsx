import { ArrowUp } from 'lucide-react';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import { MdEmail } from 'react-icons/md';

import styles from './Footer.module.css';

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  return (
    <footer className={styles.footer}>
      <div className={styles.glow}></div>

      <div className={styles.container}>
        <img src="/logos/sherwood-logo.png" alt="Sherwood College" className={styles.logo} />

        <h2>SHERWOOD COLLEGE</h2>

        <p className={styles.tagline}>Mereat Quisque Palmam</p>

        <div className={styles.line}></div>

        <nav className={styles.links}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/academics">Academics</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className={styles.socials}>
          <a href="#">
            <FaFacebookF size={18} />
          </a>

          <a href="#">
            <FaInstagram size={18} />
          </a>

          <a href="#">
            <FaLinkedinIn size={18} />
          </a>

          <a href="#">
            <MdEmail size={18} />
          </a>
        </div>

        <button className={styles.top} onClick={scrollTop}>
          <ArrowUp size={20} />
        </button>

        <div className={styles.signature}>
          <p>© {new Date().getFullYear()} Sherwood College. All Rights Reserved.</p>

          <p>
            Website crafted with care by{' '}
            <a href="https://github.com/Ankurit1891" target="_blank" rel="noreferrer">
              Ankurit Bhakta
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
