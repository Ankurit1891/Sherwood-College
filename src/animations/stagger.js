import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const stagger = (selector, childSelector = null) => {
  gsap.utils.toArray(selector).forEach(el => {
    // Target a specific child selector if given, otherwise fall back to direct children
    const targets = childSelector ? el.querySelectorAll(childSelector) : el.children;

    gsap.from(targets, {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,

      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
    });
  });

  // Recalculate trigger positions once layout (images, fonts, dynamic heights) has settled.
  // Without this, ScrollTrigger can compute start/end points too early and never fire,
  // leaving elements stuck at opacity: 0.
  requestAnimationFrame(() => ScrollTrigger.refresh());
};
