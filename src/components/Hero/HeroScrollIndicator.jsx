import styles from './Hero.module.css';

export default function HeroScrollIndicator() {
  return (
    <div className={styles.scroll}>
      <span></span>

      <small>Scroll</small>
    </div>
  );
}
