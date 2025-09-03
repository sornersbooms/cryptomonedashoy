'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function MercadosPage() {
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
        <h1 className={styles.title}>Mercados: CEX vs. DEX (El Gran Mercado Central vs. El Trueque del Pueblo)</h1>
        <p className={styles.paragraph}>
          Muy bien, ya sabemos qué es el trading: comprar y vender para intentar ganar dinero. Pero, ¿dónde hacemos ese trading? ¿Dónde se encuentran los compradores y los vendedores? ¡En los mercados! Y en el mundo de las criptomonedas, tenemos dos tipos principales, como dos tipos de mercados muy diferentes.
        </p>

        <h2 className={styles.subtitle}>CEX (Centralized Exchange): El Gran Mercado Central</h2>
        <p className={styles.paragraph}>
          Imaginen un gigantesco mercado central, como la bolsa de valores de Nueva York o un gran supermercado. Hay un dueño, una empresa que lo gestiona todo. Ellos tienen los puestos, ellos ponen las reglas, ellos guardan tu dinero mientras estás comprando y vendiendo.
        </p>
        <ul>
          <li><strong>Ventajas:</strong> Son muy fáciles de usar, rápidos, y tienen mucha liquidez (siempre hay alguien comprando o vendiendo). Si tienes un problema, puedes llamar a atención al cliente. Es como ir a un banco tradicional.</li>
          <li><strong>Desventajas:</strong> Tienes que confiar en ellos. Ellos controlan tus fondos (no tienes tus claves privadas). Son un punto central de ataque para hackers. Y, como son empresas, tienen que cumplir con regulaciones, lo que significa que tienes que darles tu información personal (KYC - Know Your Customer).</li>
        </ul>
        <p className={styles.paragraph}>
          Ejemplos: Binance, Coinbase, Kraken.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Personas interactuando en un mercado, representando un CEX" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>DEX (Decentralized Exchange): El Mercado de Trueque del Pueblo</h2>
        <p className={styles.paragraph}>
          Ahora, imaginen un mercado de trueque en un pueblo pequeño. No hay un dueño central. La gente se encuentra directamente para intercambiar cosas. No hay un intermediario que guarde tu dinero. Todo se hace directamente entre las personas, usando contratos inteligentes (¡nuestros notarios robot!).
        </p>
        <ul>
          <li><strong>Ventajas:</strong> No tienes que confiar en nadie más que en el código. Tú siempre tienes el control de tus fondos (tus claves privadas). No hay un punto central de ataque. No necesitas dar tu información personal. Es la verdadera esencia de la descentralización.</li>
          <li><strong>Desventajas:</strong> Pueden ser más complicados de usar para principiantes. A veces tienen menos liquidez (menos gente comprando/vendiendo un activo específico). Las comisiones pueden ser variables (gas fees). Si cometes un error, no hay atención al cliente que te ayude.</li>
        </ul>
        <p className={styles.paragraph}>
          Ejemplos: Uniswap, PancakeSwap, SushiSwap.
        </p>

        <h2 className={styles.subtitle}>¿Cuál Elegir? Conveniencia vs. Confianza</h2>
        <p className={styles.paragraph}>
          La elección entre CEX y DEX es una elección entre conveniencia y confianza.
        </p>
        <ul>
          <li>Si valoras la <strong>conveniencia, la velocidad y el soporte</strong>, un <strong>CEX</strong> es como un banco tradicional: fácil, pero con un intermediario.</li>
          <li>Si valoras la <strong>autonomía, la privacidad y la descentralización</strong>, un <strong>DEX</strong> es como un trueque directo: más complejo, pero sin intermediarios.</li>
        </ul>
        <p className={styles.paragraph}>
          Ambos son herramientas para el trading, pero entender sus diferencias es crucial para saber dónde y cómo operar en el salvaje oeste de las criptomonedas. ¡Es como elegir entre ir a un supermercado o cultivar tus propias verduras!
        </p>
      </div>
    </>
  );
}
