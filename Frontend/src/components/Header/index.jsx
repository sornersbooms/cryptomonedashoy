'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          CryptoMonedasHoy
        </Link>

        <div className={styles.navLinks}>
          <Link href="/aprende">Aprende</Link>
          <Link href="/noticias">Noticias</Link>
          
          
        </div>

        <button className={styles.hamburgerBtn} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/noticias" onClick={toggleMenu}>Noticias</Link>
          <Link href="/aprende" onClick={toggleMenu}>Aprende</Link>
         
        </div>
      )}
    </header>
  );
}