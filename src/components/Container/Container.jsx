import styles from "./Container.module.css";

export default function Container({
  children,
  className = "",
  size = "xl",
}) {
  return (
    <div className={`${styles.container} ${styles[size]} ${className}`}>
      {children}
    </div>
  );
}