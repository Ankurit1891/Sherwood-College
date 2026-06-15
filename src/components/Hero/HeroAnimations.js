import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimation(hero) {
  if (!hero) return;

  const badge = hero.querySelector('[data-badge]');
  const title = hero.querySelector('[data-title]');
  const description = hero.querySelector('[data-description]');
  const buttons = hero.querySelector('[data-buttons]');
  const stats = hero.querySelector('[data-stats]');

  const content = hero.querySelector('[data-content]');
  const scroll = hero.querySelector('[data-scroll]');

  const background = hero.querySelector('img');

  // ==========================
  // Intro Animation
  // ==========================

  const tl = gsap.timeline({
    defaults: {
      duration: 0.9,
      ease: 'power3.out',
    },
  });

  if (badge) {
    tl.from(badge, {
      y: 40,
      opacity: 0,
    });
  }

  if (title) {
    tl.from(
      title,
      {
        y: 80,
        opacity: 0,
      },
      '-=0.5'
    );
  }

  if (description) {
    tl.from(
      description,
      {
        y: 40,
        opacity: 0,
      },
      '-=0.5'
    );
  }

  if (buttons) {
    tl.from(
      buttons,
      {
        y: 30,
        opacity: 0,
      },
      '-=0.45'
    );
  }

  if (stats) {
    tl.from(
      stats,
      {
        y: 40,
        opacity: 0,
      },
      '-=0.4'
    );
  }

  // ==========================
  // Background Parallax
  // ==========================

  if (background) {
    gsap.to(background, {
      yPercent: 18,

      ease: 'none',

      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // ==========================
  // Fade Hero Content
  // ==========================

  if (content) {
    gsap.to(content, {
      y: -120,
      opacity: 0,

      ease: 'none',

      scrollTrigger: {
        trigger: hero,
        start: '40% top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // ==========================
  // Fade Scroll Indicator
  // ==========================

  if (scroll) {
    gsap.to(scroll, {
      opacity: 0,

      y: 40,

      ease: 'none',

      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '40% top',
        scrub: true,
      },
    });
  }
}
