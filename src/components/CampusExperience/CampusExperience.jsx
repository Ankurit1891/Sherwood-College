import styles from './CampusExperience.module.css';
import { ArrowUpRight } from 'lucide-react';
import { campusExperience } from '@/data/campusExperience';
import { useEffect } from 'react';
import { stagger } from '@/animations';
export default function CampusExperience() {
  useEffect(() => {
    stagger('#campus');
  }, []);
  return (
    <section className={styles.section} id="campus">
      <div className={styles.heading}>
        <span>CAMPUS EXPERIENCE</span>

        <h2>
          Discover
          <br />
          Sherwood
        </h2>

        <p>
          Every corner of Sherwood College tells a story of heritage, excellence and lifelong
          memories.
        </p>
      </div>

      <div className={styles.grid}>
        {campusExperience.map(item => (
          <div key={item.title} className={styles.card}>
            <div className={styles.placeholder}>
              <h3>{item.title}</h3>
              <p>
                Replace Later
                <br />
                {item.image}
              </p>
            </div>

            <div className={styles.overlay}>
              <div>
                <h3>{item.title}</h3>

                <span>
                  Explore
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
