import { useEffect } from 'react';
import { stagger } from '@/animations';
export default function StudentLife() {
  useEffect(() => {
    stagger('#student-life');
  }, []);
  return (
    <main style={{ padding: '120px 6%' }} id="student-life">
      <h1>Student Life</h1>
    </main>
  );
}
