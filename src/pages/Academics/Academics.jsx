import { useEffect } from 'react';
import { fadeUp } from '@/animations';
export default function Academics() {
  useEffect(() => {
    fadeUp('#academics');
  }, []);
  return (
    <main style={{ padding: '120px 6%' }}>
      <h1>Academics</h1>
    </main>
  );
}
