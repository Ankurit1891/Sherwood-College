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
            <div className={styles.placeholder}>
              <h3>{item.title}</h3>

              <small>{item.image}</small>
            </div>

            <div className={styles.overlay}>
              <ArrowRight size={22} />
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
