import journey from '@/data/journey';
import styles from './Journey.module.css';

export default function JourneyMilestones() {
  return (
    <>
      {journey.map(item => (
        <div
          key={item.id}
          data-target={item.id}
          className={`journey-dot ${styles.dot} ${styles[item.id]}`}
        >
          <span>{item.label}</span>
        </div>
      ))}
    </>
  );
}
