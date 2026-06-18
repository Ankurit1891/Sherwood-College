import { useEffect } from 'react';
import { stagger } from '@/animations';
export default function Academics() {
  useEffect(() => {
    stagger('#academics');
  }, []);
  return (
    <main style={{ padding: '120px 6%' }} id="academics">
      <h1>Academics</h1>
    </main>
  );
}
