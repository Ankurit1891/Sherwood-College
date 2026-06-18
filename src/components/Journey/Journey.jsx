import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './Journey.module.css';
import JourneySVG from './JourneySVG';
import JourneyMilestones from './JourneyMilestones';

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  useEffect(() => {
    const path = document.querySelector('#journey-path');
    const orb = document.querySelector('#journey-orb');
    const svg = document.querySelector(`.${styles.svg}`);

    if (!path || !orb || !svg) return;

    // Measure the REAL page height instead of a hardcoded 5000px guess
    const pageHeight = document.body.scrollHeight;
    svg.setAttribute('viewBox', `0 0 300 ${pageHeight}`);
    svg.style.height = `${pageHeight}px`;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Draw path
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',

      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    // Moving orb
    gsap.to(
      {},
      {
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },

        onUpdate(self) {
          const point = path.getPointAtLength(length * self.progress);

          gsap.set(orb, {
            attr: {
              cx: point.x,
              cy: point.y,
            },
          });
        },
      }
    );

    // Active milestones — position each dot at its real section's offset
    const dots = gsap.utils.toArray('.journey-dot');

    dots.forEach(dot => {
      const target = document.getElementById(dot.dataset.target);
      if (!target) return; // id doesn't exist on the page — this dot would silently misbehave

      // Place the dot at the section's real top, not a guessed CSS value
      gsap.set(dot, { top: target.offsetTop });

      ScrollTrigger.create({
        trigger: target,

        start: 'top center',
        end: 'bottom center',

        onEnter: () => dot.classList.add(styles.active),
        onEnterBack: () => dot.classList.add(styles.active),

        onLeave: () => dot.classList.remove(styles.active),
        onLeaveBack: () => dot.classList.remove(styles.active),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <JourneySVG />
      <JourneyMilestones />
    </div>
  );
}
