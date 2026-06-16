import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import { useEffect } from 'react';
import { fadeUp } from '@/animations';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import ImageGallery from '@/components/ImageGallery';
import 'swiper/css';
import 'swiper/css/effect-fade';

import styles from './AboutSection.module.css';

export default function AboutSection() {
  useEffect(() => {
    fadeUp('#about');
  }, []);
  return (
    <section className={styles.about} id="about">
      <Container>
        <div className={styles.grid}>
          <div className={styles.left}>
            <SectionHeading
              eyebrow="About Sherwood"
              title="More Than A School"
              subtitle="For over a century and a half, Sherwood College has nurtured generations of leaders by combining academic excellence, character, discipline and a vibrant boarding tradition in the heart of the Himalayas."
            />

            <Button>Discover Our Legacy</Button>
          </div>

          <div className={styles.right}>
            <ImageGallery />
          </div>
        </div>
      </Container>
    </section>
  );
}
