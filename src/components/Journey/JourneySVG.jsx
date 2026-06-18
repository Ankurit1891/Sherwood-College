import styles from './Journey.module.css';

export default function JourneySVG() {
  return (
    <svg className={styles.svg} viewBox="0 0 300 5000" preserveAspectRatio="none">
      <path
        id="journey-path"
        className={styles.path}
        d="
          M150 0

          C150 300 60 500 150 850

          S240 1450 90 1900

          S220 2600 140 3200

          S80 3900 170 4700

          S140 4900 150 5000
        "
      />

      <circle id="journey-orb" r="8" fill="#C8A96A" />
    </svg>
  );
}
