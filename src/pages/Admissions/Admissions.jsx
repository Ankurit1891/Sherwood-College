import { useEffect } from 'react';
import { fadeUp } from '@/animations';
export default function Admissions() {
  useEffect(() => {
    fadeUp('#admissions');
  }, []);
  return (
    <main style={{ padding: '120px 6%' }}>
      <h1>Admissions</h1>
    </main>
  );
}
