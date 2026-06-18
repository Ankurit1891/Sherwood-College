import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeUp = selector => {
  gsap.utils.toArray(selector).forEach(el => {
    gsap.from(el, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  });
};
