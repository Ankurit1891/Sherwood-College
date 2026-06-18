import styles from './GalleryPreview.module.css';
import { ArrowRight } from 'lucide-react';
import { galleryPreview } from '@/data/galleryPreview';

export default function GalleryPreview() {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.header}>
        <span>GALLERY</span>

        <h2>Moments That Define Sherwood</h2>

        <p>
          Explore the beauty, heritage and spirit of Sherwood College through memorable moments.
        </p>
      </div>

      <div className={styles.grid}>
        {galleryPreview.map(item => (
          <article key={item.title} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} loading="lazy" />

            <div className={styles.overlay}>
              <div className={styles.info}>
                <h3>{item.title}</h3>
                <ArrowRight size={24} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.button}>View Complete Gallery</button>
      </div>
    </section>
  );
}
