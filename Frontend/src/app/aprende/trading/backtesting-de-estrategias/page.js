'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function BacktestingDeEstrategiasPage() {
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
        <h1 className={styles.title}>Backtesting de Estrategias: El Laboratorio del Trader</h1>
        <p className={styles.paragraph}>
          ¡Saludos, mentes curiosas! Hoy vamos a adentrarnos en un concepto que, aunque suene un poco técnico, es tan fundamental para un trader como la física para un ingeniero: el <strong>Backtesting de Estrategias</strong>. Piensen en esto como un viaje en el tiempo, una forma de ver el futuro de su estrategia mirando su pasado. Es su laboratorio personal, donde pueden experimentar sin arriesgar un solo centavo.
        </p>

        <h2 className={styles.subtitle}>¿Qué es el Backtesting y Por Qué es Crucial?</h2>
        <p className={styles.paragraph}>
          En esencia, el backtesting es el proceso de probar una estrategia de trading usando datos históricos. Es decir, toman su conjunto de reglas –cuándo comprar, cuándo vender, cuándo salir– y las aplican a movimientos de precios que ya ocurrieron. ¿El objetivo? Ver cómo se habría comportado su estrategia en el pasado.
        </p>
        <p className={styles.paragraph}>
          ¿Por qué es tan importante? Imaginen que un ingeniero construye un puente sin probar los materiales o sin hacer cálculos de resistencia. Sería una locura, ¿verdad? Lo mismo ocurre con el trading. Lanzarse al mercado con una estrategia no probada es como construir un puente sin cimientos. El backtesting les permite:
        </p>
        <ul>
          <li><strong>Evaluar la Viabilidad:</strong> ¿La estrategia realmente funciona? ¿Genera ganancias consistentes o es solo una ilusión?</li>
          <li><strong>Identificar Debilidades:</strong> ¿Hay condiciones de mercado en las que la estrategia falla estrepitosamente? ¿Qué reglas necesitan ajustarse?</li>
          <li><strong>Ganar Confianza:</strong> Si ven que su estrategia ha sido rentable en el pasado, tendrán más confianza para aplicarla en el futuro, lo cual es vital para la disciplina.</li>
          <li><strong>Optimizar Parámetros:</strong> Pueden ajustar los números de sus indicadores o las condiciones de entrada/salida para encontrar la configuración más eficiente.</li>
        </ul>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3510168_1280.jpg" alt="Gráficos de trading con datos históricos" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Proceso: Como un Experimento Científico</h2>
        <p className={styles.paragraph}>
          El backtesting no es solo mirar un gráfico y decir "aquí habría comprado, aquí vendido". Es un proceso sistemático, casi científico:
        </p>
        <ol>
          <li><strong>Definir la Estrategia:</strong> Tengan reglas claras y objetivas. Si no pueden escribirla en un papel, no pueden probarla.</li>
          <li><strong>Obtener Datos Históricos:</strong> Necesitan datos de precios fiables y de calidad. Cuantos más datos, mejor, para cubrir diferentes condiciones de mercado.</li>
          <li><strong>Aplicar la Estrategia:</strong> Ejecuten sus reglas sobre los datos históricos. Esto puede hacerse manualmente (tedioso pero educativo) o, idealmente, con software especializado.</li>
          <li><strong>Analizar los Resultados:</strong> Aquí es donde la ciencia se pone interesante. Miren métricas como:
            <ul>
              <li><strong>Rentabilidad Total:</strong> ¿Cuánto dinero habrían ganado o perdido?</li>
              <li><strong>Drawdown Máximo:</strong> ¿Cuál fue la mayor caída de capital desde un pico? Esto mide el riesgo.</li>
              <li><strong>Ratio de Ganancia/Pérdida:</strong> ¿Cuántas operaciones ganaron vs. cuántas perdieron?</li>
              <li><strong>Beneficio por Operación:</strong> ¿Cuánto ganaron en promedio por cada operación?</li>
            </ul>
          </li>
          <li><strong>Optimizar y Refinar:</strong> Si los resultados no son los esperados, ajusten las reglas y vuelvan a probar. Es un proceso iterativo.</li>
        </ol>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-4503758_1280.jpg" alt="Persona analizando resultados de backtesting" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Advertencia: El Pasado No es Garantía del Futuro</h2>
        <p className={styles.paragraph}>
          Aquí viene la parte importante, la que un buen científico siempre recalcaría: el hecho de que una estrategia haya funcionado en el pasado no garantiza que funcionará en el futuro. El mercado es un sistema dinámico y complejo.
        </p>
        <p className={styles.paragraph}>
          El backtesting es una herramienta poderosa para entender la lógica de su estrategia y su potencial, pero no es una bola de cristal. Es como estudiar la trayectoria de un cohete en el pasado para predecir su vuelo futuro; les da una buena idea, pero siempre hay variables inesperadas.
        </p>
        <p className={styles.paragraph}>
          Úsenlo para construir una base sólida, para entender los principios subyacentes de su estrategia, y para ganar la confianza necesaria para ejecutar su plan con disciplina. ¡A experimentar se ha dicho!
        </p>
      </div>
    </>
  );
}
