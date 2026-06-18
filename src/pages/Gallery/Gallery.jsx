import { useEffect } from 'react';
import { stagger } from '@/animations';

export default function Gallery() {
  useEffect(() => {
    stagger('#gallery');
  }, []);
  return (
    <main style={{ padding: '120px 6%' }} id="gallery">
      <h1>Gallery</h1>
    </main>
  );
}
