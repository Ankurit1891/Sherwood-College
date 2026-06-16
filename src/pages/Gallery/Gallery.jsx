import { useEffect } from 'react';
import { fadeUp } from '@/animations';

export default function Gallery() {
  useEffect(() => {
    fadeUp('#gallery');
  }, []);
  return (
    <main style={{ padding: '120px 6%' }}>
      <h1>Gallery</h1>
    </main>
  );
}
