import styles from './Hero.module.css';

import HeroButtons from './HeroButtons';
import HeroStats from './HeroStats';

export default function HeroContent() {
  return (
    <div className={styles.content}>
      <span className={styles.badge}>ESTABLISHED • 1869</span>

      <h1>
        Where Heritage
        <br />
        Meets Excellence
      </h1>

      <p>
        A premium digital experience inspired by over 150 years of tradition, leadership and
        academic excellence.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}
