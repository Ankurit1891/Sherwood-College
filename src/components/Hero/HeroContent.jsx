import styles from './Hero.module.css';
import HeroButtons from './HeroButtons';

export default function HeroContent() {
  return (
    <div className={styles.content} data-content>
      <span className={styles.tag} data-badge>
        ESTABLISHED • NAINITAL • 1869
      </span>

      <h1 data-title>
        Where Heritage
        <br />
        Meets <span>Excellence</span>
      </h1>

      <p data-description>
        Nestled in the heart of Nainital, Sherwood College has inspired generations through academic
        excellence, leadership and character since 1869.
      </p>

      <div data-buttons>
        <HeroButtons />
      </div>
    </div>
  );
}
