'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function SeedPhrasePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const walletsCourse = courseData.wallets;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={walletsCourse.title}
        modules={walletsCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>La Semilla de Recuperación: El ADN de tu Dinero</h1>
        <p className={styles.paragraph}>
          Muy bien, ya sabemos que la clave privada es el secreto más importante, la llave maestra que controla todo. Pero las claves privadas son horribles. Son una cadena larguísima de letras y números sin ningún sentido, como `E9873D79C6D87DC0FB6A5778633389F4453213303DA61F20BD67FC233AA33262`. ¿Se imaginan tener que apuntar eso sin equivocarse? ¿Y si tienes varias cuentas? ¡Sería una locura!
        </p>
        <p className={styles.paragraph}>
          Los genios que inventaron esto se dieron cuenta del problema. Dijeron: "Necesitamos una forma más humana de manejar estos secretos". Y así nació la idea más importante para la seguridad de tu wallet: la <strong>semilla de recuperación</strong>, también conocida como "frase semilla" o "seed phrase".
        </p>

        <h2 className={styles.subtitle}>La Semilla Maestra de Todas las Llaves</h2>
        <p className={styles.paragraph}>
          Piensen en la semilla de un árbol. Esa pequeña semilla contiene toda la información necesaria para que crezca un árbol entero, con sus ramas, sus hojas y sus frutos. La semilla de recuperación es exactamente eso. Es una única "semilla maestra" de la que se pueden generar <strong>todas</strong> las claves privadas y públicas que vayas a necesitar.
        </p>
        <p className={styles.paragraph}>
          En lugar de ser una cadena de números sin sentido, esta semilla se presenta de una forma mucho más amigable: una lista de <strong>12 o 24 palabras comunes en inglés</strong>. Palabras como `witch`, `collapse`, `practice`, `feed`, `shame`, `open`... en un orden específico.
        </p>
        <p className={styles.paragraph}>
          <strong>Esta lista de palabras es tu clave privada maestra.</strong> Es el secreto definitivo. A partir de estas 12 o 24 palabras, tu wallet puede recrear matemáticamente cada una de las claves privadas de cada una de tus cuentas (tu cuenta de Bitcoin, tu cuenta de Ethereum, etc.).
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/cryptocurrency-3412307_1280.jpg" alt="Un árbol creciendo a partir de una semilla, representando la seed phrase" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Por Qué es tan Importante? El Plan de Rescate</h2>
        <p className={styles.paragraph}>
          Aquí está la verdadera utilidad. Imaginen que se les rompe el móvil donde tenían su wallet. O que su ordenador se quema. O que pierden su dispositivo de hardware. ¿Han perdido todo su dinero? <strong>No. Si tienen su semilla de recuperación.</strong>
        </p>
        <p className={styles.paragraph}>
          Pueden simplemente descargarse una nueva wallet (cualquier wallet compatible, no tiene por qué ser la misma) en un nuevo dispositivo, seleccionar la opción "Restaurar desde semilla" e introducir sus 12 o 24 palabras en el orden correcto. ¡Y voilà! Como por arte de magia, la nueva wallet regenerará todas sus claves y todas sus cuentas aparecerán con sus fondos intactos. 
        </p>
        <p className={styles.paragraph}>
          La semilla de recuperación es tu plan de rescate universal. Es la prueba de que tu dinero no vive en tu teléfono, vive en la blockchain. Tu wallet es solo una ventana para verlo, y la semilla es la forma de abrir una nueva ventana en cualquier sitio y en cualquier momento.
        </p>

        <h2 className={styles.subtitle}>Trátala como el Tesoro que Es</h2>
        <p className={styles.paragraph}>
          Ahora entienden por qué esto es tan crítico. Si la clave privada es la llave de una caja fuerte, la semilla de recuperación es la fórmula para fabricar esa llave y todas las demás que puedas tener. Por lo tanto:
        </p>
        <ul>
          <li><strong>NUNCA la guardes en un dispositivo conectado a internet.</strong> No le hagas una foto, no la guardes en un email, ni en la nube, ni en un gestor de contraseñas. ¡Jamás!</li>
          <li><strong>Escríbela en un papel</strong> (o en una placa de metal para que resista al fuego y al agua) y guárdala en un lugar increíblemente seguro. O en varios lugares seguros.</li>
          <li><strong>NUNCA la compartas con nadie.</strong> Ningún servicio de soporte técnico te la pedirá jamás. Quien te pida tu semilla es un ladrón, sin excepción.</li>
        </ul>
        <p className={styles.paragraph}>
          La seguridad de todo tu portfolio de criptomonedas no depende de la marca de tu wallet ni de la contraseña que le pongas. Depende, única y exclusivamente, de lo bien que guardes este pequeño poema de 12 o 24 palabras.
        </p>
      </div>
    </>
  );
}
