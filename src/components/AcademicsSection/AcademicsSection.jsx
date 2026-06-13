import { GraduationCap, Microscope, Trophy, Palette } from 'lucide-react';
import styles from './AcademicsSection.module.css';

const cards = [
  {
    icon: <Microscope size={42} />,
    title: 'Science',
    desc: 'Modern laboratories and research-driven education.',
  },
  {
    icon: <GraduationCap size={42} />,
    title: 'Humanities',
    desc: 'Literature, history and social sciences that build leaders.',
  },
  {
    icon: <Palette size={42} />,
    title: 'Arts',
    desc: 'Creativity through music, theatre and visual arts.',
  },
  {
    icon: <Trophy size={42} />,
    title: 'Sports',
    desc: 'Competitive sports with world-class facilities.',
  },
];

export default function AcademicsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <span>ACADEMICS</span>

        <h2>Learning Beyond Classrooms</h2>

        <p>
          Sherwood College provides a balanced curriculum that combines academics, creativity,
          leadership and sports.
        </p>
      </div>

      <div className={styles.grid}>
        {cards.map(item => (
          <article key={item.title} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
