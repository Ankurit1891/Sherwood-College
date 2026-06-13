import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

import styles from "./MobileMenu.module.css";
import navbarLinks from "@/data/navbar";

export default function MobileMenu({ open, onClose }) {
  return (
    <aside
      className={`${styles.menu} ${
        open ? styles.open : ""
      }`}
    >
      <button
        className={styles.close}
        onClick={onClose}
      >
        <X size={34} />
      </button>

      <nav>
        {navbarLinks.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={styles.link}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}