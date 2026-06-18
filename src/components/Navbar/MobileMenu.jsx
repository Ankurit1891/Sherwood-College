import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';

import styles from './MobileMenu.module.css';
import navigation from '@/data/navigation';

export default function MobileMenu({ open, onClose }) {
  return (
    <aside className={`${styles.menu} ${open ? styles.open : ''}`}>
      <button className={styles.close} onClick={onClose} aria-label="Close Menu">
        <X size={34} />
      </button>

      <nav>
        {navigation.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
