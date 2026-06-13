import styles from './Hero.module.css';
import Button from '@/components/Button';
// import HeroStats from "./HeroStats";
// import HeroScroll from "./HeroScroll";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.backgroundPlaceholder}>
        <span>Hero Image Placeholder</span>
      </div>

      <div className={styles.content}>
        <span className={styles.tag}>ESTABLISHED 1869</span>

        <h1>
          Where Heritage
          <br />
          Inspires Excellence
        </h1>

        <p>
          A timeless institution nestled in the Himalayas, shaping leaders through academic
          excellence, character and tradition.
        </p>

        <div className={styles.actions}>
          <Button>Explore Campus</Button>

          <Button variant="outline">Admissions</Button>
        </div>
      </div>

      {/* <HeroStats /> */}

      {/* <HeroScroll /> */}
    </section>
  );
}
