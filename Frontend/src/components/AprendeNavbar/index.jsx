'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

const courses = [
  { name: 'Bitcoin', path: '/aprende/bitcoin' },
  { name: 'Ethereum', path: '/aprende/ethereum' },
  { name: 'Blockchains', path: '/aprende/blockchains' },
  { name: 'Trading', path: '/aprende/trading' },
  { name: 'NFTs', path: '/aprende/nfts' },
  { name: 'DeFi', path: '/aprende/defi' },
  { name: 'Wallets', path: '/aprende/wallets' },
  { name: 'Seguridad', path: '/aprende/seguridad' },
];

export default function AprendeNavbar() {
  const listRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const checkScroll = () => {
    if (listRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for precision
    }
  };

  const scroll = (direction) => {
    if (listRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      listRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      checkScroll(); // Initial check
      listElement.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);

      return () => {
        listElement.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [courses]);

  return (
    <nav className={styles.aprendeNav}>
      <div className={styles.navContainer}>
        {isClient && (
          <button 
            className={`${styles.scrollButton} ${styles.left} ${!canScrollLeft ? styles.hidden : ''}`}
            onClick={() => scroll('left')}
          >
            &#x25C0;
          </button>
        )}
        <ul className={styles.navList} ref={listRef}>
          {courses.map((course) => (
            <li key={course.path} className={styles.navItem}>
              <Link href={course.path} className={styles.navLink}>
                {course.name}
              </Link>
            </li>
          ))}
        </ul>
        {isClient && (
          <button 
            className={`${styles.scrollButton} ${styles.right} ${!canScrollRight ? styles.hidden : ''}`}
            onClick={() => scroll('right')}
          >
            &#x25B6;
          </button>
        )}
      </div>
    </nav>
  );
}
