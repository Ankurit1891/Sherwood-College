import { Microscope, BookOpen, Trophy, Palette, ArrowRight } from 'lucide-react';

import styles from './AcademicExcellence.module.css';

const academics = [
  {
    icon: <Microscope size={34} />,
    title: 'Science & Innovation',
    desc: 'Modern laboratories and inquiry-driven education that encourage students to think beyond textbooks.',
  },
  {
    icon: <BookOpen size={34} />,
    title: 'Humanities',
    desc: 'Developing articulate, responsible and globally aware citizens through literature and social sciences.',
  },
  {
    icon: <Palette size={34} />,
    title: 'Creative Arts',
    desc: 'Music, theatre and visual arts help every student discover creativity and confidence.',
  },
  {
    icon: <Trophy size={34} />,
    title: 'Sports Excellence',
    desc: 'Competitive sports, discipline and teamwork are embedded into everyday life at Sherwood.',
  },
];

export default function AcademicExcellence() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <span className={styles.tag}>ACADEMIC EXCELLENCE</span>

        <h2>
          Education
          <br />
          Beyond
          <span> Boundaries</span>
        </h2>

        <p>
          Sherwood College blends academic rigour, leadership, creativity and sports into an
          educational experience that prepares students for the future.
        </p>
      </div>

      <div className={styles.right}>
        {academics.map(item => (
          <article key={item.title} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>

            <div>
              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <button>
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
