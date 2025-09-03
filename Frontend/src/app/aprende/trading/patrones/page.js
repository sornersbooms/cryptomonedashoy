'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function PatronesPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const tradingCourse = courseData.trading;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={tradingCourse.title}
        modules={tradingCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Patrones de Gráficos: El Lenguaje Corporal del Mercado</h1>
        <p className={styles.paragraph}>
          Ya sabemos leer las velas (las pequeñas historias) y las líneas de tendencia (la dirección del viento). Ahora, vamos a juntar todo eso para ver las "señales en el cielo", las formaciones que el precio dibuja en el gráfico y que nos dan pistas sobre lo que podría pasar. Esto es el estudio de los <strong>Patrones de Gráficos</strong>.
        </p>
        <p className={styles.paragraph}>
          Los patrones de gráficos son como el lenguaje corporal del mercado. No te dicen exactamente lo que va a hacer, pero te dan una idea de sus intenciones, de si está a punto de cambiar de opinión o de seguir con lo que estaba haciendo.
        </p>

        <h2 className={styles.subtitle}>Patrones de Continuación: Tomando un Respiro</h2>
        <p className={styles.paragraph}>
          Estos patrones sugieren que la tendencia actual probablemente continuará después de una pequeña pausa.
        </p>
        <ul>
          <li><strong>Banderas y Banderines (Flags and Pennants):</strong> Imaginen que el precio sube muy rápido (el mástil de la bandera), luego hace una pequeña pausa, moviéndose de lado en un canal estrecho (la bandera o el banderín). Luego, ¡boom!, el precio suele seguir subiendo en la misma dirección. Es como si el mercado tomara un respiro antes de seguir su camino.</li>
          <li><strong>Triángulos (Triangles):</strong> El precio se mueve en un rango cada vez más estrecho, como un embudo. Puede ser ascendente, descendente o simétrico. Suelen indicar indecisión antes de una gran ruptura en una dirección.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Gráfico con patrones de continuación y reversión" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Patrones de Reversión: Cambiando de Opinión</h2>
        <p className={styles.paragraph}>
          Estos patrones sugieren que la tendencia actual podría estar a punto de cambiar de dirección.
        </p>
        <ul>
          <li><strong>Cabeza y Hombros (Head and Shoulders):</strong> Este es un clásico. Imaginen una cabeza con dos hombros. El precio sube (hombro izquierdo), baja, sube más alto (cabeza), baja, sube menos alto (hombro derecho), y luego baja. Si aparece después de una tendencia alcista, es una señal fuerte de que el precio podría empezar a caer. Es como si el mercado se cansara de subir.</li>
          <li><strong>Doble Techo y Doble Suelo (Double Top and Double Bottom):</strong> El precio sube, choca contra una resistencia, baja, vuelve a subir y choca contra la misma resistencia (doble techo). O baja, choca contra un soporte, sube, vuelve a bajar y choca contra el mismo soporte (doble suelo). Son como dos intentos fallidos de romper un nivel, lo que sugiere que el precio podría ir en la dirección opuesta.</li>
        </ul>

        <h2 className={styles.subtitle}>¿Por Qué Son Importantes?</h2>
        <p className={styles.paragraph}>
          Los patrones de gráficos no son magia. Funcionan porque reflejan la psicología colectiva de los traders. Cuando muchos traders ven el mismo patrón, reaccionan de manera similar, lo que ayuda a que el patrón se cumpla. Es una profecía autocumplida a gran escala.
        </p>
        <p className={styles.paragraph}>
          Te dan una "ventaja" estadística. No te dicen el futuro, pero te dicen que, históricamente, cuando el mercado ha dibujado esta forma, ha tendido a hacer esto otro. Te ayudan a identificar puntos de entrada y salida con mayor probabilidad de éxito.
        </p>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          Los patrones de gráficos son como el lenguaje corporal del mercado. Te dan pistas sobre lo que está pensando la multitud. No son infalibles, y siempre hay que usarlos con otras herramientas y una buena gestión de riesgos. Pero si aprendes a reconocer estas "señales en el cielo", tendrás una herramienta poderosa para entender la dinámica del mercado y tomar decisiones más informadas. ¡Es como aprender a leer las intenciones de la gente sin que digan una palabra!
        </p>
      </div>
    </>
  );
}
