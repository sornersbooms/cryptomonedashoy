'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function RsiMacdPage() {
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
        <h1 className={styles.title}>Indicadores: RSI y MACD (El Termómetro y el Detector de Impulso)</h1>
        <p className={styles.paragraph}>
          Ya sabemos que las medias móviles nos ayudan a ver la tendencia general. Pero a veces, necesitamos herramientas más sofisticadas, como un termómetro o un detector de impulso, para entender la "salud" del mercado. Aquí entran dos de los indicadores más populares: el <strong>RSI</strong> y el <strong>MACD</strong>.
        </p>

        <h2 className={styles.subtitle}>RSI (Relative Strength Index): El Termómetro del Mercado</h2>
        <p className={styles.paragraph}>
          Imaginen que tienen un termómetro para medir la "fiebre" del mercado. El RSI es un oscilador que se mueve entre 0 y 100. Nos dice si un activo está "sobrecomprado" (demasiada gente comprando, el precio podría bajar) o "sobrevendido" (demasiada gente vendiendo, el precio podría subir).
        </p>
        <p className={styles.paragraph}>
          <strong>¿Cómo funciona?</strong> Mide la velocidad y el cambio de los movimientos del precio.
        </p>
        <ul>
          <li>Si el RSI está por encima de 70 (o 80), el activo se considera <strong>sobrecomprado</strong>. Es como si el termómetro marcara fiebre alta. Podría ser una señal de que el precio está a punto de corregir.</li>
          <li>Si el RSI está por debajo de 30 (o 20), el activo se considera <strong>sobrevendido</strong>. Es como si el termómetro marcara hipotermia. Podría ser una señal de que el precio está a punto de rebotar.</li>
        </ul>
        <p className={styles.paragraph}>
          <strong>Divergencias:</strong> A veces, el precio hace un nuevo máximo, pero el RSI no. Esto se llama "divergencia bajista" y puede ser una señal de que la tendencia alcista está perdiendo fuerza. Lo contrario para una "divergencia alcista".
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Gráfico de precios con indicadores RSI y MACD" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>MACD (Moving Average Convergence Divergence): El Detector de Impulso</h2>
        <p className={styles.paragraph}>
          Ahora, imaginen un detector de impulso. El MACD es un indicador que nos ayuda a ver la relación entre dos medias móviles del precio, revelando el impulso de una tendencia. Es como si tuviéramos dos coches, uno rápido y uno lento, y el MACD nos dijera si el coche rápido se está acercando o alejando del lento.
        </p>
        <p className={styles.paragraph}>
          Se compone de tres partes:
        </p>
        <ul>
          <li><strong>Línea MACD:</strong> La diferencia entre una EMA rápida y una EMA lenta.</li>
          <li><strong>Línea de Señal:</strong> Una EMA de la línea MACD.</li>
          <li><strong>Histograma:</strong> Barras que muestran la diferencia entre la línea MACD y la línea de señal.</li>
        </ul>
        <p className={styles.paragraph}>
          <strong>Señales:</strong>
        </p>
        <ul>
          <li><strong>Cruce de Líneas:</strong> Cuando la línea MACD cruza por encima de la línea de señal, puede ser una señal de compra. Cuando cruza por debajo, una señal de venta.</li>
          <li><strong>Cruce de la Línea Cero:</strong> Cuando la línea MACD cruza por encima de cero, indica que el impulso alcista está aumentando. Por debajo de cero, el impulso bajista.</li>
        </ul>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          El RSI y el MACD son herramientas poderosas, pero no son infalibles. Son como los instrumentos de un avión: te dan información valiosa, pero no vuelan el avión por ti. Te ayudan a entender la "salud" del mercado, el "impulso" de una tendencia y a identificar posibles puntos de inflexión. Pero, como siempre, deben usarse junto con otras herramientas y con una buena gestión de riesgos. ¡Son como los ojos y los oídos del trader, pero la decisión final siempre es tuya!
        </p>
      </div>
    </>
  );
}
