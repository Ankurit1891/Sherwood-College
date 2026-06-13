import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import styles from "./Navbar.module.css";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Button from "@/components/Button";
import navbarLinks from "@/data/navbar";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`${styles.navbar} ${
          isScrolled ? styles.scrolled : ""
        }`}
      >
        <div className={styles.container}>
          <Logo />

          <nav className={styles.desktopNav}>
            {navbarLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${styles.navItem} ${
                    isActive ? styles.active : ""
                  }`
                }
              >
                {link.label}
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
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}