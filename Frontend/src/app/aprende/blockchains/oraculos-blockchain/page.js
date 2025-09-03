'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function OraculosBlockchainPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const blockchainCourse = courseData.blockchains;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={blockchainCourse.title}
        modules={blockchainCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Oráculos Blockchain: Los Ojos y Oídos del Mundo Real</h1>
        <p className={styles.paragraph}>
          Hemos hablado de los contratos inteligentes, esos pequeños programas que viven en la blockchain y se ejecutan solos. Son geniales, ¡pero tienen un problema! Viven en su propio mundo, dentro de la blockchain. No pueden "ver" lo que pasa fuera. No saben si llovió en Madrid, si el precio del Bitcoin subió en un exchange, o si un avión aterrizó a tiempo.
        </p>
        <p className={styles.paragraph}>
          Es como si tuviéramos un robot súper inteligente encerrado en una habitación sin ventanas. Puede hacer cálculos complejos, pero no sabe nada del mundo exterior. Para que sea realmente útil, ¡necesita información del mundo real!
        </p>

        <h2 className={styles.subtitle}>El Periodista Honesto de la Blockchain</h2>
        <p className={styles.paragraph}>
          Aquí es donde entran los <strong>Oráculos Blockchain</strong>. Son como los "ojos y oídos" de la blockchain. Son servicios que traen información del mundo exterior (fuera de la blockchain) y la meten dentro de la blockchain para que los contratos inteligentes puedan usarla.
        </p>
        <p className={styles.paragraph}>
          Piensen en ellos como periodistas muy honestos y confiables. Recopilan datos de fuentes externas (APIs de precios, sensores de clima, resultados deportivos, etc.) y los publican en la blockchain de una manera que los contratos inteligentes pueden entender y verificar.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/window.svg" alt="Una ventana que conecta dos mundos" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Por Qué Son Tan Importantes?</h2>
        <p className={styles.paragraph}>
          Sin oráculos, los contratos inteligentes serían muy limitados. Solo podrían reaccionar a eventos que ocurren <em>dentro</em> de la blockchain (como una transferencia de tokens). Pero con los oráculos, ¡el cielo es el límite!
        </p>
        <ul>
          <li>Un contrato de seguro puede pagarte automáticamente si un oráculo confirma que tu vuelo se retrasó.</li>
          <li>Un contrato de préstamo puede liquidarse si un oráculo informa que el precio de tu garantía cayó por debajo de cierto umbral.</li>
          <li>Un contrato de apuestas puede pagar al ganador si un oráculo publica el resultado de un partido de fútbol.</li>
        </ul>

        <h2 className={styles.subtitle}>El "Problema del Oráculo": ¿En Quién Confiar?</h2>
        <p className={styles.paragraph}>
          Pero, ¡un momento! Si la blockchain es tan segura porque no confiamos en nadie, ¿no estamos introduciendo un punto de confianza al confiar en el oráculo? ¡Exacto! Este es el famoso "problema del oráculo". Si el oráculo miente o es hackeado, el contrato inteligente, por muy perfecto que sea, actuará sobre información falsa.
        </p>
        <p className={styles.paragraph}>
          Por eso, los buenos oráculos no son una sola fuente. Son redes de muchos "periodistas" independientes que verifican la misma información de múltiples fuentes y llegan a un consenso. Si la mayoría de los oráculos reportan lo mismo, es muy probable que sea verdad. Es como tener muchos periodistas de diferentes agencias reportando el mismo evento: si todos dicen lo mismo, es más creíble.
        </p>
        <p className={styles.paragraph}>
          Los oráculos son el puente vital entre el mundo real y el mundo de la blockchain. Son esenciales para que los contratos inteligentes puedan interactuar con eventos y datos del mundo exterior, desbloqueando un potencial enorme para las aplicaciones descentralizadas. Pero, como siempre, la descentralización y la seguridad son clave, incluso para los que traen las noticias.
        </p>
      </div>
    </>
  );
}
