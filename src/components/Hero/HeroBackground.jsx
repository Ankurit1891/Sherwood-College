import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function HeroBackground() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const move = e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `scale(1.08) translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', move);

    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={backgroundRef} className={styles.background}>
        <img src="/images/hero/drone.jpg" alt="Sherwood College" />
      </div>

      <div className={styles.overlay} />

      <div className={styles.gradient} />

      <div className={styles.noise}></div>
    </>
  );
}
