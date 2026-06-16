import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function HeroBackground() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMove = e => {
      if (!backgroundRef.current) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      backgroundRef.current.style.transform = `
        translate3d(${x}px, ${y}px, 0)
        scale(1.12)
      `;
    };

    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <>
      <img
        ref={backgroundRef}
        src="/images/drone-shot/DroneShotImage.jpg"
        alt="Sherwood College"
        className={styles.background}
      />

      <div className={styles.overlay}></div>
    </>
  );
}
