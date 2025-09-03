'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AppDeFiPage() {
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
        <h1 className={styles.title}>Aplicación: DeFi (Finanzas Descentralizadas) - El Banco sin Banqueros</h1>
        <p className={styles.paragraph}>
          Hemos visto que la blockchain es un libro de contabilidad inmutable y que los contratos inteligentes son como notarios robot. ¡Ahora, imaginen que usamos todo eso para construir un sistema financiero completo, pero sin bancos, sin intermediarios, sin jefes! Eso es <strong>DeFi</strong>, o Finanzas Descentralizadas.
        </p>

        <h2 className={styles.subtitle}>¿Qué es DeFi? El Parque de Atracciones Financiero</h2>
        <p className={styles.paragraph}>
          Piensen en todo lo que hacen con su banco: pedir préstamos, ahorrar dinero, intercambiar divisas, asegurar cosas. DeFi es hacer todo eso, pero directamente en la blockchain, usando contratos inteligentes. Es como si el banco fuera un programa de computadora que vive en la blockchain, y nadie puede cambiar sus reglas una vez que está ahí.
        </p>
        <p className={styles.paragraph}>
          Es un "banco sin banqueros". No hay una oficina central, no hay un CEO, no hay un horario de cierre. Funciona 24/7, en todo el mundo, y cualquiera con una conexión a internet puede participar.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-4231398_1280.jpg" alt="Representación abstracta de finanzas descentralizadas" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Aplicaciones Clave de DeFi</h2>
        <p className={styles.paragraph}>
          DeFi es un ecosistema enorme, pero aquí están algunas de las aplicaciones más comunes:
        </p>
        <ul>
          <li><strong>Préstamos y Empréstitos:</strong> Puedes prestar tus criptomonedas a otros y ganar intereses, o pedir prestado poniendo tus criptomonedas como garantía. Todo gestionado por contratos inteligentes, sin que un banco decida si eres "digno de crédito".</li>
          <li><strong>Exchanges Descentralizados (DEXs):</strong> Intercambiar una criptomoneda por otra sin necesidad de un intermediario como Binance o Coinbase. Es como si pudieras intercambiar directamente tus euros por dólares con otra persona, pero el contrato inteligente se asegura de que ambos cumplan su parte.</li>
          <li><strong>Stablecoins:</strong> Criptomonedas que intentan mantener un valor estable, como el dólar. Son cruciales en DeFi para evitar la volatilidad.</li>
          <li><strong>Yield Farming:</strong> Poner tus criptomonedas a trabajar en diferentes protocolos DeFi para ganar más criptomonedas. Es como buscar la mejor tierra para cultivar y obtener la mayor cosecha.</li>
          <li><strong>Seguros Descentralizados:</strong> Contratos que te pagan si ocurre un evento específico, como un hackeo a un protocolo DeFi.</li>
        </ul>

        <h2 className={styles.subtitle}>¿Por Qué es Revolucionario?</h2>
        <p className={styles.paragraph}>
          DeFi es revolucionario porque elimina a los intermediarios. Esto significa menos comisiones, más velocidad, más transparencia y acceso para cualquiera, en cualquier parte del mundo. Es como si de repente, todos tuvieran acceso a servicios financieros sofisticados, sin importar dónde vivan o cuánto dinero tengan.
        </p>
        <p className={styles.paragraph}>
          Claro, es un campo nuevo y experimental. Hay riesgos, como errores en los contratos inteligentes o la volatilidad de las criptomonedas. Pero la idea es construir un sistema financiero más abierto, justo y eficiente para todos.
        </p>
        <p className={styles.paragraph}>
          DeFi es la promesa de un sistema financiero global, abierto y sin permisos, construido sobre la blockchain. Es la aplicación más ambiciosa de los contratos inteligentes, transformando la forma en que interactuamos con el dinero y los servicios financieros. ¡Es el futuro de las finanzas, o al menos, una visión muy audaz de él!
        </p>
      </div>
    </>
  );
}
