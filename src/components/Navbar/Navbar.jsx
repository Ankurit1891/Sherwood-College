import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

import styles from './Navbar.module.css';

import Logo from './Logo';
import MobileMenu from './MobileMenu';
import Button from '@/components/Button';
import navigation from '@/data/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'auto';
  }, [mobileOpen]);

  return (
    <>
      <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logoLink}>
            <Logo />
          </Link>

          <nav className={styles.desktopNav}>
            {navigation.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.actions}>
            <Button size="sm">Apply Now</Button>

            <button
              className={styles.menuButton}
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
