import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}) {
  return (
    <div
      className={`${styles.wrapper} ${center ? styles.center : ""}`}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}

      <h2 className={styles.title}>{title}</h2>

      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </div>
  );
}