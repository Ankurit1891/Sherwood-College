import styles from './Hero.module.css';

export default function HeroScroll() {
  return (
    <div className={styles.scroll} data-scroll>
      <span className={styles.mouse}>
        <span className={styles.wheel}></span>
      </span>

      <p>Scroll</p>
    </div>
  );
}
