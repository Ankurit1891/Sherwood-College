import { useEffect } from 'react';
import { fadeUp } from '@/animations';
export default function StudentLife() {
  useEffect(() => {
    fadeUp('#student-life');
  }, []);
  return (
    <main style={{ padding: '120px 6%' }}>
      <h1>Student Life</h1>
    </main>
  );
}
