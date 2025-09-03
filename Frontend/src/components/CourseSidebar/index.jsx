'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

export default function CourseSidebar({ title, modules = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle course menu"
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </button>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.sidebarContent}>
          <h3 className={styles.title}>{title}</h3>
          <nav>
            <ul className={styles.moduleList}>
              {modules.map((module) => (
                <li key={module.path}>
                  <Link href={module.path} className={styles.moduleLink}>
                    {module.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
