'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function OnChainAnalysisPage() {
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
        <h1 className={styles.title}>20. On-Chain Analysis</h1>
        <p className={styles.paragraph}>
          ¡Saludos, detectives del dato! Hoy vamos a hablar de una de las herramientas más fascinantes y poderosas que nos ofrecen las criptomonedas: el <strong>Análisis On-Chain</strong>. Imaginen que tienen un microscopio y un telescopio, pero en lugar de ver células o estrellas, están viendo el flujo de dinero y la actividad de millones de participantes en un sistema financiero completamente transparente. Eso es el análisis on-chain.
        </p>
        <p className={styles.paragraph}>
          En el mundo tradicional, la información financiera es opaca. Los bancos no publican cada transacción, ni sabemos quién mueve qué cantidad de dinero. Pero en las blockchains públicas, ¡todo está a la vista! Cada transacción, cada movimiento de monedas, cada interacción con un contrato inteligente, queda grabado para siempre en un libro de contabilidad público e inmutable.
        </p>

        <h2 className={styles.subtitle}>La Blockchain: Un Laboratorio Abierto</h2>
        <p className={styles.paragraph}>
          Piensen en la blockchain como un laboratorio gigante, donde cada experimento (transacción) se registra meticulosamente. Nuestro trabajo es observar esos registros, buscar patrones y extraer conclusiones. No estamos adivinando; estamos analizando datos puros y duros.
        </p>
        <p className={styles.paragraph}>
          ¿Qué tipo de datos podemos ver?
        </p>
        <ul>
          <li>
            <strong>Transacciones:</strong> Cantidad, dirección de origen, dirección de destino, tarifa pagada, marca de tiempo.
          </li>
          <li>
            <strong>Bloques:</strong> Cuántas transacciones contiene un bloque, cuándo se minó, quién lo minó.
          </li>
          <li>
            <strong>Direcciones:</strong> El historial completo de transacciones de una dirección, su saldo actual.
          </li>
          <li>
            <strong>Contratos Inteligentes:</strong> Todas las interacciones con un contrato, el valor bloqueado en él (TVL - Total Value Locked).
          </li>
        </ul>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-7074949_1280.jpg" alt="Representación visual de datos on-chain" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Qué Podemos Aprender?</h2>
        <p className={styles.paragraph}>
          Con estos datos, podemos empezar a formular hipótesis sobre el comportamiento del mercado.
        </p>
        <ul>
          <li>
            <strong>Comportamiento de los "Whales" (Ballenas):</strong> Podemos identificar grandes direcciones (ballenas) y seguir sus movimientos. Si una ballena mueve una gran cantidad de Bitcoin a un exchange, podría indicar que planea vender. Si la retira, podría indicar que planea holdear.
          </li>
          <li>
            <strong>Flujos de Exchange:</strong> Observar cuánto Bitcoin o Ethereum entra y sale de los exchanges. Un aumento en las entradas podría sugerir presión de venta, mientras que un aumento en las salidas podría indicar acumulación.
          </li>
          <li>
            <strong>Actividad de la Red:</strong> El número de transacciones diarias, el número de direcciones activas, las tarifas de transacción. Un aumento en la actividad puede ser un signo de crecimiento orgánico y adopción.
          </li>
          <li>
            <strong>Sentimiento del Mercado:</strong> Métricas como el "Spent Output Profit Ratio" (SOPR) nos dicen si los participantes están vendiendo con ganancias o pérdidas, lo que puede indicar el sentimiento general del mercado.
          </li>
          <li>
            <strong>Salud de Proyectos DeFi:</strong> Para proyectos de finanzas descentralizadas, podemos ver el TVL, el número de usuarios, la actividad de los contratos, lo que nos da una idea de su adopción y seguridad.
          </li>
        </ul>

        <h2 className={styles.subtitle}>La Advertencia del Científico</h2>
        <p className={styles.paragraph}>
          Como cualquier herramienta científica, el análisis on-chain no es una bola de cristal. Los datos son datos, pero la interpretación es clave. No porque una ballena mueva monedas a un exchange significa que va a vender; podría estar rebalanceando su cartera o moviéndolas a un servicio de staking.
        </p>
        <p className={styles.paragraph}>
          Además, la correlación no implica causalidad. Un aumento en las transacciones no siempre significa un aumento de precio. Es una pieza más del rompecabezas, una capa adicional de información que, combinada con el análisis técnico y fundamental, nos da una visión más completa del mercado.
        </p>
        <p className={styles.paragraph}>
          El análisis on-chain nos permite ver el "ADN" del mercado cripto. Nos da una visión sin precedentes de lo que realmente está sucediendo bajo la superficie. Así que, pónganse sus batas de laboratorio, ajusten sus microscopios y ¡a explorar el fascinante mundo de los datos on-chain!
        </p>
      </div>
    </>
  );
}