import styles from './Achievements.module.css';
import { achievements } from '@/data/achievements';

export default function Achievements() {
  return (
    <section className={styles.section} id="achievements">
      <div className={styles.header}>
        <span>ACHIEVEMENTS</span>

        <h2>A Legacy of Excellence</h2>

        <p>
          More than 150 years of education, leadership and character that continue to inspire
          generations.
        </p>
      </div>

      <div className={styles.timeline}>
        {achievements.map((item, index) => (
          <div key={item.title} className={styles.item}>
            <div className={styles.circle}></div>

            {index !== achievements.length - 1 && <div className={styles.line}></div>}

            <div className={styles.card}>
              <h3>{item.year}</h3>

              <h4>{item.title}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
