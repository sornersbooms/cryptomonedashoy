'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function SoportesResistenciasPage() {
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
        <h1 className={styles.title}>Soportes y Resistencias: El Suelo y el Techo del Precio</h1>
        <p className={styles.paragraph}>
          Muy bien, ya sabemos leer las velas japonesas, esas pequeñas historias del mercado. Ahora, vamos a usar esas historias para encontrar los "puntos calientes" en el gráfico, los lugares donde el precio tiende a reaccionar. Esto es lo que llamamos <strong>Soportes y Resistencias</strong>.
        </p>
        <p className={styles.paragraph}>
          Imaginen que el precio de un activo es como una pelota rebotando dentro de una habitación. La pelota sube, choca contra el techo, baja. Baja, choca contra el suelo, sube. El techo es la resistencia, el suelo es el soporte.
        </p>

        <h2 className={styles.subtitle}>Soporte: El Suelo Invisible</h2>
        <p className={styles.paragraph}>
          Un <strong>soporte</strong> es un nivel de precio donde la demanda (los compradores) es lo suficientemente fuerte como para detener una caída del precio y hacer que rebote hacia arriba. Es como el suelo de nuestra habitación. Cada vez que la pelota (el precio) lo toca, encuentra algo que la empuja hacia arriba.
        </p>
        <p className={styles.paragraph}>
          <strong>¿Por qué ocurre?</strong> Porque en ese nivel, hay muchos compradores esperando. O los que vendieron antes, ahora quieren comprar de nuevo. O los que compraron antes y están perdiendo dinero, deciden que ya no quieren vender más.
        </p>
        <p className={styles.paragraph}>
          Cuantas más veces el precio rebote en un soporte, más fuerte se considera ese soporte. Es como un suelo que ha aguantado muchos golpes.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Gráfico de precios con líneas de soporte y resistencia" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Resistencia: El Techo Invisible</h2>
        <p className={styles.paragraph}>
          Una <strong>resistencia</strong> es un nivel de precio donde la oferta (los vendedores) es lo suficientemente fuerte como para detener una subida del precio y hacer que rebote hacia abajo. Es como el techo de nuestra habitación. Cada vez que la pelota (el precio) lo toca, encuentra algo que la empuja hacia abajo.
        </p>
        <p className={styles.paragraph}>
          <strong>¿Por qué ocurre?</strong> Porque en ese nivel, hay muchos vendedores esperando. O los que compraron antes y están ganando dinero, deciden que es un buen momento para vender. O los que vendieron antes y están perdiendo dinero, deciden que es un buen momento para salir sin más pérdidas.
        </p>
        <p className={styles.paragraph}>
          Cuantas más veces el precio choque contra una resistencia y no la rompa, más fuerte se considera esa resistencia. Es como un techo muy sólido.
        </p>

        <h2 className={styles.subtitle}>La Psicología Detrás: Profecías Autocumplidas</h2>
        <p className={styles.paragraph}>
          No hay una ley física que diga que el precio tiene que rebotar. Es pura <strong>psicología humana</strong>. Los traders recuerdan esos niveles. Si el precio rebotó en 20.000 dólares antes, muchos traders pondrán sus órdenes de compra en 20.000 dólares, creando una demanda que empuja el precio hacia arriba. Es una profecía autocumplida.
        </p>

        <h2 className={styles.subtitle}>Rompiendo Soportes y Resistencias: El Cambio de Roles</h2>
        <p className={styles.paragraph}>
          ¿Qué pasa si la pelota rompe el suelo o el techo? ¡Ahí es donde se pone interesante!
        </p>
        <ul>
          <li>Si el precio rompe un soporte fuerte, ese soporte roto a menudo se convierte en una nueva resistencia.</li>
          <li>Y si rompe una resistencia fuerte, esa resistencia rota a menudo se convierte en un nuevo soporte.</li>
        </ul>
        <p className={styles.paragraph}>
          Es como si el suelo se convirtiera en techo, o el techo en suelo, en el siguiente nivel de la casa.
        </p>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          Soportes y Resistencias son conceptos fundamentales en el Análisis Técnico. No son líneas mágicas, sino zonas donde la psicología del mercado tiende a cambiar. Identificarlos te ayuda a entender dónde el precio podría detenerse, rebotar o incluso cambiar de dirección. ¡Es como encontrar los puntos de inflexión en la batalla entre compradores y vendedores!
        </p>
      </div>
    </>
  );
}
