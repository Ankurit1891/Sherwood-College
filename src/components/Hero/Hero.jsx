import styles from './Hero.module.css';
import Button from '@/components/Button';
// import HeroStats from "./HeroStats";
// import HeroScroll from "./HeroScroll";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <img
        src="/images/drone-shot/DroneShotImage.jpg"
        alt="Sherwood College Campus"
        className={styles.background}
      />

      <div className={styles.content}>
        <span className={styles.tag}>ESTABLISHED • NAINITAL • 1869</span>

        <h1>
          Where Heritage
          <br />
          Meets <span>Excellence</span>
        </h1>

        <p>
          Nestled in the heart of Nainital, Sherwood College has inspired generations through
          academic excellence, character, leadership, and a timeless boarding tradition since 1869.
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
