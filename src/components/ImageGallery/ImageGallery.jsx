import { useEffect, useState } from 'react';
import styles from './ImageGallery.module.css';

const images = [
  {
    src: '/images/about/about-1.jpg',
    title: 'Main Building',
  },
  {
    src: '/images/about/about-2.jpg',
    title: 'Front Quad',
  },
  {
    src: '/images/about/about-3.jpg',
    title: 'Winter Campus',
  },
  {
    src: '/images/about/about-4.jpg',
    title: 'Swimming Pool',
  },
];

export default function ImageGallery() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        <img src={images[active].src} alt={images[active].title} />

        <div className={styles.overlay}>
          <h3>{images[active].title}</h3>
        </div>
      </div>

      <div className={styles.preview}>
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setActive(index)}
            className={`${styles.card} ${active === index ? styles.active : ''}`}
          >
            <img src={image.src} alt={image.title} />

            <span>{image.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
