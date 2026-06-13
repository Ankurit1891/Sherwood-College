import styles from './StudentLifeStory.module.css';
import { ArrowRight } from 'lucide-react';
import { studentLifeStory } from '@/data/studentLifeStory';

export default function StudentLifeStory() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span>STUDENT LIFE</span>

        <h2>
          Beyond
          <br />
          The Classroom
        </h2>

        <p>
          Sherwood College nurtures leadership, friendships, creativity and lifelong memories
          through an immersive boarding experience.
        </p>
      </div>

      {studentLifeStory.map((item, index) => (
        <div
          key={item.title}
          className={`${styles.story} ${index % 2 !== 0 ? styles.reverse : ''}`}
        >
          <div className={styles.image}>
            <div className={styles.placeholder}>
              <h3>{item.title}</h3>

              <small>{item.image}</small>
            </div>
          </div>

          <div className={styles.content}>
            <span>0{index + 1}</span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <button>
              Learn More
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
