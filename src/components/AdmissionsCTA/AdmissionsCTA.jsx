import styles from './AdmissionsCTA.module.css';
import Button from '@/components/Button';

export default function AdmissionsCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span>ADMISSIONS OPEN</span>

        <h2>
          Begin Your
          <br />
          Sherwood Journey
        </h2>

        <p>
          Join one of India's most prestigious residential schools and become part of a legacy built
          on excellence, leadership and character.
        </p>

        <div className={styles.actions}>
          <Button>Apply Now</Button>

          <Button variant="secondary">Download Prospectus</Button>
        </div>
      </div>
    </section>
  );
}
