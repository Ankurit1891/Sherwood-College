import styles from './Testimonials.module.css';
import { testimonials } from '@/data/testimonials';
import { useEffect } from 'react';
import { fadeUp } from '@/animations';
export default function Testimonials() {
  useEffect(() => {
    fadeUp('#testimonials');
  }, []);
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.header}>
        <span>TESTIMONIALS</span>

        <h2>Voices of Sherwood</h2>

        <p>
          Generations of students, parents and alumni continue to celebrate the Sherwood experience.
        </p>
      </div>

      <div className={styles.grid}>
        {testimonials.map(item => (
          <article key={item.name} className={styles.card}>
            <div className={styles.quote}>“</div>

            <p>{item.quote}</p>

            <div className={styles.footer}>
              <strong>{item.name}</strong>

              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
