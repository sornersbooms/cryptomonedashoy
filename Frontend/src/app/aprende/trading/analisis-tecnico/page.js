'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AnalisisTecnicoPage() {
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
        <h1 className={styles.title}>Análisis Técnico: Gráficos (Las Huellas en la Arena)</h1>
        <p className={styles.paragraph}>
          Muy bien, ya sabemos qué es el trading, dónde se hace y cómo darle órdenes. Ahora, ¿cómo decidimos <em>cuándo</em> comprar o vender? Aquí entra el <strong>Análisis Técnico</strong>. No es una bola de cristal, es más bien como leer las huellas en la arena para intentar adivinar hacia dónde fue el animal.
        </p>
        <p className={styles.paragraph}>
          El Análisis Técnico es el estudio del comportamiento del mercado, principalmente a través del uso de gráficos de precios, con el objetivo de predecir movimientos futuros. La idea es que toda la información relevante (noticias, rumores, emociones de los traders) ya está reflejada en el precio. El precio lo descuenta todo.
        </p>

        <h2 className={styles.subtitle}>El Gráfico: El Mapa del Tesoro</h2>
        <p className={styles.paragraph}>
          El gráfico es nuestra herramienta principal. Es un mapa que nos muestra la historia del precio de un activo a lo largo del tiempo. No es solo una línea; es una representación visual de la batalla entre compradores y vendedores.
        </p>
        <ul>
          <li><strong>Eje Vertical (Y):</strong> El precio. ¿Cuánto vale el activo?</li>
          <li><strong>Eje Horizontal (X):</strong> El tiempo. ¿En qué momento?</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Gráfico de velas japonesas" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Tipos de Gráficos: Contando Historias</h2>
        <p className={styles.paragraph}>
          Puedes ver la historia del precio de diferentes maneras:
        </p>
        <ul>
          <li><strong>Gráfico de Líneas:</strong> El más simple. Solo conecta los precios de cierre. Es como ver la silueta de una montaña.</li>
          <li><strong>Gráfico de Barras:</strong> Cada barra muestra el precio de apertura, cierre, máximo y mínimo de un período. Es como ver el esqueleto de la montaña.</li>
          <li><strong>Gráfico de Velas Japonesas:</strong> ¡Este es el favorito de los traders! Cada "vela" es como una pequeña historia de lo que pasó en un período de tiempo (un minuto, una hora, un día). Nos muestra el precio de apertura, cierre, máximo y mínimo, y si el precio subió o bajó en ese período. Es como ver la montaña con su vegetación y sus cuevas.</li>
        </ul>

        <h2 className={styles.subtitle}>Timeframes: Las Lentes del Tiempo</h2>
        <p className={styles.paragraph}>
          Puedes mirar el gráfico con diferentes "lentes de tiempo". Un gráfico de 1 minuto te muestra el detalle de lo que pasó en cada minuto. Un gráfico diario te muestra lo que pasó cada día. Es como mirar una ciudad desde un dron (diario) o caminar por sus calles (1 minuto). Depende de lo que quieras ver.
        </p>

        <h2 className={styles.subtitle}>Patrones: Las Huellas en la Arena</h2>
        <p className={styles.paragraph}>
          Los analistas técnicos creen que la historia se repite, o al menos rima. Buscan patrones en los gráficos que se han repetido en el pasado y que podrían indicar movimientos futuros. No es una ciencia exacta, es más bien un arte de reconocer formas y tendencias.
        </p>
        <p className={styles.paragraph}>
          Por ejemplo, si el precio rebota varias veces en un mismo nivel, eso podría ser un "soporte" (como un suelo invisible). Si choca varias veces contra otro nivel y no puede subir, eso podría ser una "resistencia" (como un techo invisible)..
        </p>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          El Análisis Técnico no es una forma de predecir el futuro con certeza. Es una herramienta para entender el comportamiento pasado del mercado y, basándose en eso, hacer apuestas informadas sobre lo que <em>podría</em> pasar. Es como un meteorólogo que usa datos históricos y patrones climáticos para predecir el tiempo. No siempre acierta, pero tiene una ventaja sobre el que solo mira por la ventana. ¡Es el arte de encontrar patrones en el caos!
        </p>
      </div>
    </>
  );
}
