import styles from './HeritageTimeline.module.css';

const timeline = [
  {
    year: '1869',
    title: 'Sherwood Founded',
    desc: 'Sherwood College was established in Nainital with the vision of providing world-class education.',
  },
  {
    year: '1900',
    title: 'Expansion',
    desc: 'Academic buildings and boarding facilities expanded to accommodate growing student strength.',
  },
  {
    year: '1950',
    title: 'National Recognition',
    desc: "Sherwood emerged as one of India's most respected residential schools.",
  },
  {
    year: 'Today',
    title: 'A Legacy Continues',
    desc: 'More than 150 years of excellence, shaping leaders with knowledge, discipline and character.',
  },
];

export default function HeritageTimeline() {
  return (
    <section className={styles.timelineSection} id="heritage">
      <div className={styles.heading}>
        <span>OUR HERITAGE</span>
        <h2>A Journey Through Time</h2>
      </div>

      <div className={styles.timeline}>
        {timeline.map(item => (
          <div key={item.year} className={styles.card}>
            <div className={styles.year}>{item.year}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
