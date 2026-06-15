import Button from '@/components/Button';
import styles from './Hero.module.css';

export default function HeroButtons() {
  return (
    <div className={styles.actions}>
      <Button>Explore Campus</Button>

      <Button variant="secondary">Virtual Tour</Button>
    </div>
  );
}
