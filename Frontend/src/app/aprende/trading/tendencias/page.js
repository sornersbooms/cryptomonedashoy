'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function LineasDeTendenciaPage() {
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
        <h1 className={styles.title}>Líneas de Tendencia: El Camino del Precio</h1>
        <p className={styles.paragraph}>
          Ya sabemos que el precio se mueve entre suelos (soportes) y techos (resistencias). Pero, ¿hacia dónde va el precio en general? ¿Está subiendo, bajando o moviéndose de lado? Aquí es donde entran las <strong>Líneas de Tendencia</strong>. Son como dibujar el camino principal que sigue el precio, la dirección del viento en el mercado.
        </p>

        <h2 className={styles.subtitle}>¿Qué es una Tendencia? El Flujo del Río</h2>
        <p className={styles.paragraph}>
          Una <strong>tendencia</strong> es la dirección general en la que se mueve el precio de un activo durante un período de tiempo. No es una línea recta perfecta; es más bien una "dirección" general, como un río que fluye hacia el mar, aunque tenga curvas y remolinos.
        </p>
        <p className={styles.paragraph}>
          Hay tres tipos principales de tendencias:
        </p>
        <ul>
          <li><strong>Tendencia Alcista (Uptrend):</strong> El precio está haciendo "máximos más altos" y "mínimos más altos". Es como subir una escalera: cada escalón es más alto que el anterior.</li>
          <li><strong>Tendencia Bajista (Downtrend):</strong> El precio está haciendo "máximos más bajos" y "mínimos más bajos". Es como bajar una escalera: cada escalón es más bajo que el anterior.</li>
          <li><strong>Tendencia Lateral (Sideways/Range):</strong> El precio se mueve de lado, sin una dirección clara. Es como una pelota rebotando entre dos paredes, sin ir a ningún lado.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Gráfico de precios con líneas de tendencia" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Dibujando Líneas de Tendencia: Trazando el Camino</h2>
        <p className={styles.paragraph}>
          Una <strong>línea de tendencia</strong> es una línea recta que dibujamos en el gráfico para identificar y visualizar una tendencia. No es una línea mágica, es una herramienta visual que nos ayuda a organizar el caos del precio.
        </p>
        <ul>
          <li><strong>Para una Tendencia Alcista:</strong> Dibujamos una línea conectando al menos dos (idealmente tres o más) mínimos crecientes. Esta línea actúa como un soporte dinámico. Cada vez que el precio baja y toca esta línea, tiende a rebotar hacia arriba.</li>
          <li><strong>Para una Tendencia Bajista:</strong> Dibujamos una línea conectando al menos dos (idealmente tres o más) máximos decrecientes. Esta línea actúa como una resistencia dinámica. Cada vez que el precio sube y toca esta línea, tiende a rebotar hacia abajo.</li>
        </ul>

        <h2 className={styles.subtitle}>¿Por Qué Son Importantes?</h2>
        <p className={styles.paragraph}>
          Las líneas de tendencia nos ayudan a:
        </p>
        <ul>
          <li><strong>Identificar la dirección:</strong> ¿Estamos en un mercado alcista o bajista?</li>
          <li><strong>Encontrar puntos de entrada/salida:</strong> Si el precio toca la línea de tendencia y rebota, puede ser una buena oportunidad para comprar (en alcista) o vender (en bajista).</li>
          <li><strong>Detectar cambios de tendencia:</strong> Si el precio rompe una línea de tendencia importante, puede ser una señal de que la tendencia actual está terminando y una nueva podría empezar. Es como si el río cambiara de curso.</li>
        </ul>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          Las líneas de tendencia son una herramienta simple pero poderosa en el Análisis Técnico. Nos ayudan a ver el "bosque" (la dirección general) en lugar de solo los "árboles" (los movimientos individuales de las velas). No son perfectas, y a veces se rompen, pero nos dan una guía valiosa para entender el flujo del mercado. ¡Es como tener una brújula en el vasto océano del trading!
        </p>
      </div>
    </>
  );
}
