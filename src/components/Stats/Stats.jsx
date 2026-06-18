import styles from './Stats.module.css';

import { useEffect } from 'react';
import { stagger } from '@/animations';

const stats = [
  {
    value: '1869',
    label: 'Founded',
  },
  {
    value: '45',
    suffix: ' Acres',
    label: 'Campus',
  },
  {
    value: '850+',
    label: 'Students',
  },
  {
    value: '10,000+',
    label: 'Alumni',
  },
];

export default function Stats() {
  useEffect(() => {
    stagger(`.${styles.grid}`);
  }, []);
  return (
    <section className={styles.wrapper} id="stats">
      <div className={styles.container}>
        {stats.map(item => (
          <div key={item.label} className={styles.card}>
            <h2>
              {item.value}
              {item.suffix || ''}
            </h2>

            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
