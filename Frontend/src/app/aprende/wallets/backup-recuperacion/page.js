'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function BackupRecuperacionPage() {
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
        <h1 className={styles.title}>Copias de Seguridad y Recuperación: Tu Plan B</h1>
        <p className={styles.paragraph}>
          Hemos insistido mucho en que la seguridad de tus criptomonedas depende de ti. Y la pieza central de esa seguridad es tu semilla de recuperación. Pero, ¿qué pasa si la pierdes? ¿O si se quema tu casa? ¿O si te la roban? Tener una semilla de recuperación es el primer paso, pero saber cómo hacer una copia de seguridad y cómo usarla para recuperar tus fondos es el segundo paso, igual de importante. Es tu plan B, tu paracaídas.
        </p>

        <h2 className={styles.subtitle}>La Semilla de Recuperación: Tu Única Copia de Seguridad</h2>
        <p className={styles.paragraph}>
          Ya sabemos que la semilla de recuperación (seed phrase) es una lista de 12 o 24 palabras que genera todas tus claves privadas. Es la única copia de seguridad que necesitas. Si tienes tu semilla, puedes restaurar tu wallet en cualquier dispositivo compatible, en cualquier momento, y tus fondos aparecerán. Es la magia de la criptografía.
        </p>
        <p className={styles.paragraph}>
          Pero, ¿cómo la guardamos de forma segura? No basta con escribirla en un papel y meterla en un cajón. Hay que pensar en los desastres.
        </p>

        <h2 className={styles.subtitle}>Estrategias de Copia de Seguridad: A Prueba de Desastres</h2>
        <p className={styles.paragraph}>
          Aquí no hay una solución única, pero la idea es la misma: protegerla de la pérdida, el robo y el daño.
        </p>
        <ul>
          <li><strong>Papel y Lápiz (y Laminado):</strong> La forma más básica. Escríbela claramente en un papel de buena calidad. Considera laminarla para protegerla del agua y el desgaste. Guárdala en un lugar seguro en tu casa (una caja fuerte, un lugar secreto).</li>
          <li><strong>Placas de Metal Grabadas:</strong> Para una seguridad superior. Hay dispositivos de metal (acero inoxidable, titanio) donde puedes grabar o estampar tus palabras. Son resistentes al fuego, al agua y a la corrosión. Son ideales para el almacenamiento a largo plazo.</li>
          <li><strong>Fragmentación (Shamir's Secret Sharing):</strong> Para los más avanzados. Puedes dividir tu semilla en varias partes, de modo que necesites un número mínimo de esas partes para reconstruirla. Por ejemplo, la divides en 5 partes y necesitas 3 para recuperarla. Así, si pierdes una o dos, no pasa nada, y si alguien encuentra una o dos, no puede acceder a tus fondos. Esto es para cantidades muy grandes de dinero y requiere un conocimiento técnico avanzado.</li>
          <li><strong>Múltiples Ubicaciones:</strong> No guardes todas las copias en el mismo sitio. Si tu casa se quema, no quieres que todas tus copias se quemen con ella. Ten una copia en casa, otra en una caja de seguridad bancaria, otra en casa de un familiar de confianza, etc.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Una semilla de recuperación en un papel, protegida" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Proceso de Recuperación: El Momento de la Verdad</h2>
        <p className={styles.paragraph}>
          Si alguna vez pierdes tu wallet (se te rompe el móvil, te roban el ordenador, etc.), el proceso de recuperación es sencillo si tienes tu semilla:
        </p>
        <ol>
          <li><strong>Descarga una Nueva Wallet:</strong> Instala una nueva wallet compatible (puede ser la misma marca o una diferente) en un dispositivo seguro y limpio.</li>
          <li><strong>Selecciona "Restaurar Wallet":</strong> En el proceso de configuración, busca la opción "Restaurar wallet", "Importar wallet" o "Ya tengo una semilla".</li>
          <li><strong>Introduce tu Semilla:</strong> Escribe tus 12 o 24 palabras en el orden exacto. ¡Cuidado con los errores tipográficos!</li>
          <li><strong>Crea una Nueva Contraseña:</strong> Te pedirá que crees una nueva contraseña para esta nueva instalación de la wallet.</li>
          <li><strong>¡Fondos Recuperados!:</strong> Tus fondos aparecerán en la nueva wallet. Es como si hubieras abierto una nueva ventana a tu dinero en la blockchain.</li>
        </ol>

        <h2 className={styles.subtitle}>Consejos Cruciales para la Recuperación</h2>
        <p className={styles.paragraph}>
          La recuperación es el momento más vulnerable. Aquí es donde los estafadores atacan.
        </p>
        <ul>
          <li><strong>Cuidado con el Phishing:</strong> Si buscas "MetaMask restore" en Google, asegúrate de que estás en la página oficial. Los estafadores crean sitios falsos para robar tu semilla.</li>
          <li><strong>Dispositivo Limpio:</strong> Si tu dispositivo anterior fue comprometido, usa uno nuevo y limpio para la recuperación.</li>
          <li><strong>Practica:</strong> Si tienes una pequeña cantidad de cripto, practica el proceso de recuperación. Envía una pequeña cantidad a una wallet, haz una copia de seguridad de la semilla, borra la wallet y luego restáurala. Te dará mucha confianza.</li>
        </ul>
        <p className={styles.paragraph}>
          La copia de seguridad y la recuperación no son solo un paso técnico, son una parte fundamental de tu estrategia de seguridad. Es la garantía de que, pase lo que pase con tus dispositivos, tus fondos estarán siempre a salvo, esperando a que los recuperes con tu "mapa del tesoro" de 12 o 24 palabras.
        </p>
      </div>
    </>
  );
}
