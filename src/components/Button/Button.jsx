import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}