'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function PosPage() {
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
        <h1 className={styles.title}>Consenso: Proof-of-Stake (El Sorteo de los Accionistas)</h1>
        <p className={styles.paragraph}>
          Ya vimos la Prueba de Trabajo (PoW), esa competición de fuerza bruta que gasta un montón de energía. Ahora, exploremos una forma diferente de lograr consenso, una que no se basa en quién trabaja más, sino en quién tiene más "piel en el juego". Esto es la <strong>Prueba de Participación</strong> o <strong>Proof-of-Stake (PoS)</strong>.
        </p>

        <h2 className={styles.subtitle}>De Competir a Ser Elegido por Sorteo</h2>
        <p className={styles.paragraph}>
          Imaginen que, en lugar de una carrera para resolver un acertijo, la red organiza un <strong>sorteo</strong> para decidir quién crea el próximo bloque. Para entrar en este sorteo, tienes que comprar boletos. ¿El precio? Tienes que "apostar" o bloquear una cantidad de tus propias criptomonedas. A esta acción de poner tu dinero como garantía se le llama <strong>staking</strong>.
        </p>
        <p className={styles.paragraph}>
          Si tienes 100 monedas y las pones en staking, es como si tuvieras 100 boletos para el sorteo. Si alguien tiene 5,000 monedas en staking, tiene 5,000 boletos. Cuantas más monedas apuestes, más probabilidades tienes de que te toque "el gordo" y seas elegido para proponer el siguiente bloque.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/ethereum-6928106_1280.jpg" alt="Símbolo de Ethereum, una red Proof-of-Stake" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Por Qué Funciona Esto? El Coste de la Traición</h2>
        <p className={styles.paragraph}>
          Aquí está la genialidad del asunto. Si sales elegido, validas transacciones, creas el bloque y te llevas las comisiones como recompensa. ¡Un buen negocio! Pero, ¿qué pasa si intentas hacer trampa? ¿Si propones un bloque con transacciones falsas para beneficiarte?
        </p>
        <p className={styles.paragraph}>
          Bueno, el resto de la red se dará cuenta. Y si te pillan, el sistema te impone un castigo severo: te quitan una parte (o la totalidad) de las monedas que habías puesto en juego. A esta penalización se le llama <strong>"slashing"</strong>.
        </p>
        <p className={styles.paragraph}>
          Piénsenlo un segundo. Si eres un gran "accionista" de la red (tienes mucho dinero en staking), no tienes ningún incentivo para hacer trampas. Sería como intentar robar en un banco del que eres el dueño. Atacar la red es atacar el valor de tus propias monedas. Es mucho más rentable y seguro ser honesto, proponer bloques válidos y seguir cobrando las recompensas del sorteo.
        </p>

        <h2 className={styles.subtitle}>Proof-of-Work vs. Proof-of-Stake</h2>
        <p className={styles.paragraph}>
          La diferencia fundamental es de dónde viene la seguridad:
        </p>
        <ul>
          <li>En <strong>Proof-of-Work</strong>, la seguridad proviene de un <strong>coste externo</strong>: la electricidad. Tienes que quemar energía en el mundo real para demostrar tu compromiso.</li>
          <li>En <strong>Proof-of-Stake</strong>, la seguridad proviene de un <strong>coste interno</strong>: el capital. Pones tu propio dinero en la red como garantía de tu buen comportamiento.</li>
        </ul>
        <p className={styles.paragraph}>
          Debido a esto, PoS es muchísimo más eficiente a nivel energético. No hay una carrera masiva de computadoras consumiendo electricidad, solo un sorteo entre los participantes que ya han demostrado su confianza en la red al invertir en ella.
        </p>
        <p className={styles.paragraph}>
          En resumen, Proof-of-Stake es un mecanismo que dice: "Para confiar en ti, no me demuestres cuánto has trabajado; demuéstrame cuánto estás dispuesto a perder si me engañas".
        </p>
      </div>
    </>
  );
}
