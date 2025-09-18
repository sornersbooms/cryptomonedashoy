import React from 'react';
import Link from 'next/link';
import courseData from '@/lib/courseData'; // Importa los datos de los cursos
import styles from './aprende.module.css'; // Asumiendo que crearás un archivo CSS para estilos

export const metadata = {
  title: 'Aprende sobre Criptomonedas - cryptomonedashoy.com',
  description: 'Explora nuestros cursos y artículos educativos sobre Bitcoin, Ethereum, Blockchains, Trading, NFTs, DeFi, Wallets y Seguridad en el mundo de las criptomonedas.',
};

export default function AprendePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Aprende sobre Criptomonedas</h1>
      <p className={styles.description}>
        Sumérgete en el mundo de las criptomonedas con nuestros cursos y artículos educativos.
        Desde los fundamentos de Bitcoin y Ethereum hasta estrategias avanzadas de trading y seguridad.
      </p>

      <div className={styles.courseList}>
        {Object.keys(courseData).map((courseKey) => {
          const course = courseData[courseKey];
          return (
            <div key={courseKey} className={styles.courseCategory}>
              <h2 className={styles.courseTitle}>{course.title}</h2>
              <ul className={styles.moduleList}>
                {course.modules.map((module) => (
                  <li key={module.path} className={styles.moduleItem}>
                    <Link href={module.path} className={styles.moduleLink}>
                      {module.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </main>
  );
}