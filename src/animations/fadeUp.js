import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function fadeUp(selector) {
  gsap.utils.toArray(selector).forEach(element => {
    gsap.from(element, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}
