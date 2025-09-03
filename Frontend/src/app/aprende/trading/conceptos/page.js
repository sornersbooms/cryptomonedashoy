'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ConceptosClavePage() {
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
        <h1 className={styles.title}>Conceptos Clave: Pares y Volumen (El Lenguaje del Mercado)</h1>
        <p className={styles.paragraph}>
          Muy bien, ya sabemos cómo darle órdenes al mercado. Pero, ¿qué estamos comprando y vendiendo exactamente? Y, ¿cómo sabemos si el mercado está "vivo" o "dormido"? Aquí entran dos conceptos clave: los <strong>pares de trading</strong> y el <strong>volumen</strong>.
        </p>

        <h2 className={styles.subtitle}>Pares de Trading: Las Divisas del Mercado</h2>
        <p className={styles.paragraph}>
          Imaginen que están en un mercado de divisas. No compran "dólares" sin más. Compran "dólares <em>con</em> euros" (EUR/USD) o "dólares <em>con</em> yenes" (USD/JPY). Siempre es un intercambio de una cosa por otra. Siempre es un <strong>par</strong>.
        </p>
        <p className={styles.paragraph}>
          En el mundo de las criptomonedas es igual. No compras "Bitcoin". Compras "Bitcoin <em>con</em> Tether" (BTC/USDT), o "Bitcoin <em>con</em> Ethereum" (BTC/ETH), o "Bitcoin <em>con</em> dólares" (BTC/USD). El primer activo del par es el que estás comprando o vendiendo, y el segundo es con lo que lo estás comprando o vendiendo.
        </p>
        <p className={styles.paragraph}>
          <strong>¿Por qué es importante?</strong> El precio que ves siempre es el precio de la primera moneda en términos de la segunda. Si BTC/USDT está a 30.000, significa que 1 Bitcoin vale 30.000 Tether. Y la liquidez (lo fácil que es comprar o vender) puede ser muy diferente para cada par.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Gráfico de trading con pares de divisas" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Volumen: La Energía del Mercado</h2>
        <p className={styles.paragraph}>
          Ahora, hablemos del <strong>volumen</strong>. Imaginen que están en el mercado y ven un puesto de manzanas. Si solo se han vendido 5 manzanas en todo el día, el mercado está muy tranquilo, casi dormido. Pero si se han vendido 5.000 manzanas, ¡el puesto está que arde! Hay mucha actividad, mucha gente comprando y vendiendo.
        </p>
        <p className={styles.paragraph}>
          El volumen en trading es exactamente eso: la cantidad total de un activo que se ha comprado y vendido en un período de tiempo determinado (por ejemplo, en las últimas 24 horas). Se mide en la moneda base (por ejemplo, 100 BTC de volumen) o en la moneda de cotización (por ejemplo, 3.000.000 USDT de volumen).
        </p>
        <p className={styles.paragraph}>
          <strong>¿Por qué es importante?</strong> El volumen es como la energía del mercado.
        </p>
        <ul>
          <li><strong>Volumen alto:</strong> Significa que hay mucho interés, mucha gente participando. Los movimientos de precios son más "reales" y confiables. Es más fácil comprar y vender sin mover mucho el precio.</li>
          <li><strong>Volumen bajo:</strong> Significa que el mercado está tranquilo. Los movimientos de precios pueden ser engañosos o causados por pocas operaciones grandes. Es más difícil comprar y vender sin afectar el precio.</li>
        </ul>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          Así que, cuando miren un gráfico de precios, no solo miren la línea del precio. Miren el par (¿qué están intercambiando por qué?) y miren el volumen (¿cuánta energía hay detrás de esos movimientos?). El par te dice el "qué" y el volumen te dice el "cuánto". Son como las coordenadas y la fuerza de un terremoto. ¡Entenderlos es fundamental para no perderse en el mercado!
        </p>
      </div>
    </>
  );
}
