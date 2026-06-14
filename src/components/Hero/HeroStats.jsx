import styles from './Hero.module.css';

export default function HeroStats() {
  return (
    <div className={styles.stats}>
      <div>
        <h3>150+</h3>
        <span>Years</span>
      </div>

      <div>
        <h3>45</h3>
        <span>Acres</span>
      </div>

      <div>
        <h3>100%</h3>
        <span>Holistic Education</span>
      </div>
    </div>
  );
}
