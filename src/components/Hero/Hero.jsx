import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { initHeroAnimation } from './HeroAnimations';
import HeroScroll from './HeroScroll';

import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroStats from './HeroStats';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    initHeroAnimation(heroRef.current);
  }, []);

  return (
    <section ref={heroRef} id="hero" className={styles.hero}>
      <HeroBackground />

      <HeroContent />

      <div data-stats>
        <HeroStats />
      </div>

      <HeroScroll />
    </section>
  );
}
