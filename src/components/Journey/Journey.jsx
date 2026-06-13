import styles from './Journey.module.css';

export default function Journey() {
  return (
    <div className={styles.wrapper}>
      <svg className={styles.path} viewBox="0 0 250 3500" preserveAspectRatio="none">
        <path
          d="
            M120 0

            C120 220 40 300 90 520

            S200 820 110 1080

            S30 1450 120 1750

            S210 2150 100 2550

            S40 3000 120 3500
          "
        />
      </svg>
    </div>
  );
}
