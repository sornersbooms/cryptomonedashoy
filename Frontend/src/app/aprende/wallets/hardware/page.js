'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function HardwarePage() {
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
        <h1 className={styles.title}>Wallets de Hardware: Tu Caja Fuerte Personal</h1>
        <p className={styles.paragraph}>
          Ya hemos hablado de las wallets calientes, que son convenientes pero un poco como llevar el dinero en el bolsillo. Ahora vamos a hablar de la caja fuerte, el búnker, el lugar donde guardas tus tesoros más preciados: las <strong>wallets de hardware</strong>.
        </p>
        <p className={styles.paragraph}>
          Una wallet de hardware es un pequeño dispositivo físico, parecido a una memoria USB o a una calculadora de bolsillo. Su única y principal función es <strong>generar y almacenar tus claves privadas completamente desconectadas de internet</strong>. Esto es crucial. Es la diferencia entre tener tu secreto en un papel que puede leer cualquiera y tenerlo grabado en una roca en el fondo del océano.
        </p>

        <h2 className={styles.subtitle}>El Secreto Nunca Sale del Dispositivo</h2>
        <p className={styles.paragraph}>
          Imaginen que tienen un mensaje secreto que quieren firmar. En una wallet de software, el ordenador o el móvil donde está el programa tiene acceso a ese secreto. Si ese ordenador está comprometido, el secreto puede ser robado.
        </p>
        <p className={styles.paragraph}>
          Con una wallet de hardware, el secreto (tu clave privada) nunca, jamás, sale del dispositivo. Cuando quieres firmar una transacción, lo que haces es conectar tu wallet de hardware al ordenador. El ordenador le envía la transacción "en bruto" al dispositivo. El dispositivo, dentro de su pequeño cerebro seguro, firma la transacción con tu clave privada y luego envía la transacción ya firmada de vuelta al ordenador. 
        </p>
        <p className={styles.paragraph}>
          Es como si tuvieras un notario en miniatura dentro del dispositivo. Tú le das el documento (la transacción), él lo firma con tu sello secreto (tu clave privada) y te devuelve el documento firmado. El sello secreto nunca abandona la oficina del notario. Incluso si tu ordenador está lleno de virus, el secreto de tu clave privada sigue a salvo dentro del dispositivo de hardware.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Un dispositivo de hardware wallet conectado a un ordenador" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Características Clave</h2>
        <p className={styles.paragraph}>
          Las wallets de hardware tienen varias características que las hacen el estándar de oro para la seguridad:
        </p>
        <ul>
          <li><strong>Generación Offline de Claves:</strong> Tus claves se crean en el propio dispositivo, sin tocar internet.</li>
          <li><strong>Pantalla de Verificación:</strong> La mayoría tienen una pequeña pantalla donde puedes verificar los detalles de la transacción (la dirección a la que envías, la cantidad) antes de confirmarla. Esto te protege de ataques donde un virus podría cambiar la dirección en tu ordenador sin que te des cuenta.</li>
          <li><strong>PIN y Frase de Recuperación:</strong> Están protegidas por un PIN que introduces en el propio dispositivo. Y, por supuesto, siempre te darán una semilla de recuperación (esas 12 o 24 palabras) para que puedas restaurar tus fondos si pierdes o se rompe el dispositivo.</li>
          <li><strong>Resistencia Física:</strong> Están diseñadas para ser robustas y, a menudo, resistentes al agua o a golpes.</li>
        </ul>

        <h2 className={styles.subtitle}>¿Son Perfectas?</h2>
        <p className={styles.paragraph}>
          No hay nada perfecto. Las wallets de hardware son muy seguras, pero no infalibles. Si alguien te obliga a desbloquearla con tu PIN, o si pierdes tu semilla de recuperación, tus fondos están en riesgo. También ha habido casos muy raros de vulnerabilidades descubiertas en modelos específicos, pero suelen ser parcheadas rápidamente y son mucho menos comunes que los ataques a wallets de software.
        </p>
        <p className={styles.paragraph}>
          La principal "desventaja" es la conveniencia. Son más lentas de usar y cuestan dinero. Pero para guardar cantidades significativas de criptomonedas, la inversión en una wallet de hardware es, para muchos, una obviedad. Es la mejor forma de asegurarte de que tus claves privadas, y por tanto tus fondos, están realmente bajo tu control y a salvo de los peligros de internet.
        </p>
      </div>
    </>
  );
}
