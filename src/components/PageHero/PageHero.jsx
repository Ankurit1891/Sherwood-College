import styles from './PageHero.module.css';

export default function PageHero({ title, subtitle, image = '/images/hero/drone.jpg' }) {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `
          linear-gradient(rgba(7,19,14,.72), rgba(7,19,14,.72)),
          url(${image})
        `,
      }}
    >
      <div className={styles.content}>
        <span>SHERWOOD COLLEGE</span>

        <h1>{title}</h1>

        <p>{subtitle}</p>
      </div>
    </section>
  );
}
