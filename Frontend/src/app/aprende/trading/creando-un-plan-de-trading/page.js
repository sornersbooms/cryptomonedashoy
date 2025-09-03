'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function CreandoUnPlanDeTradingPage() {
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
        <h1 className={styles.title}>Creando un Plan de Trading: Tu Mapa para el Éxito</h1>
        <p className={styles.paragraph}>
          ¡Hola, futuros maestros del mercado! Hoy vamos a hablar de algo que, aunque no sea tan emocionante como descubrir un nuevo planeta o una partícula subatómica, es absolutamente fundamental para cualquiera que quiera navegar por los mercados financieros: <strong>crear un plan de trading</strong>. Piensen en esto como el mapa y la brújula que necesitan antes de zarpar en un viaje por aguas desconocidas. Sin ellos, ¿a dónde irían? ¿Cómo sabrían si han llegado?
        </p>

        <h2 className={styles.subtitle}>¿Qué es un Plan de Trading y Por Qué lo Necesitas?</h2>
        <p className={styles.paragraph}>
          Un plan de trading no es un deseo, ni una corazonada. Es un documento, una serie de reglas claras y concisas que definen cómo van a operar en el mercado. Incluye todo: qué van a comprar o vender, cuándo, cuánto, y lo más importante, cuándo van a salir, tanto si ganan como si pierden.
        </p>
        <p className={styles.paragraph}>
          ¿Por qué es tan crucial? Porque los mercados son como un océano en tormenta. Las emociones –el miedo, la codicia, la euforia, el pánico– son olas gigantes que pueden arrastrarlos. Un plan es su ancla. Les permite tomar decisiones racionales, no emocionales. Es su disciplina en papel.
        </p>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Persona analizando gráficos de trading" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Los Componentes de tu Brújula (El Plan)</h2>
        <p className={styles.paragraph}>
          Un buen plan de trading tiene varias partes, como un reloj bien engranado. Cada pieza es importante:
        </p>
        <ul>
          <li><strong>Objetivos Claros:</strong> ¿Qué quieren lograr? ¿Ganar un porcentaje X al mes? ¿Aumentar su capital en un Y% al año? Sean específicos.</li>
          <li><strong>Estrategia de Entrada y Salida:</strong> ¿Bajo qué condiciones van a entrar en una operación? ¿Qué indicadores, patrones o noticias les darán la señal? Y, crucialmente, ¿cuándo van a salir? Esto incluye su "stop-loss" (cuánto están dispuestos a perder) y su "take-profit" (cuándo van a asegurar ganancias).</li>
          <li><strong>Gestión de Riesgos:</strong> ¿Cuánto capital van a arriesgar por operación? ¿Qué porcentaje de su cuenta total? Esta es la parte más importante para sobrevivir a largo plazo.</li>
          <li><strong>Gestión de Posiciones:</strong> ¿Cuánto van a invertir en cada operación? ¿Cómo van a escalar dentro o fuera de una posición?</li>
          <li><strong>Mercados y Activos:</strong> ¿En qué mercados van a operar? ¿Qué criptomonedas o pares? No intenten abarcarlo todo.</li>
          <li><strong>Horarios de Trading:</strong> ¿Cuándo van a operar? ¿Hay momentos del día o de la semana más propicios para su estrategia?</li>
          <li><strong>Registro y Análisis:</strong> Lleven un diario de todas sus operaciones. ¿Por qué entraron? ¿Por qué salieron? ¿Qué aprendieron? Esto es como el laboratorio de un científico: observen, registren, analicen.</li>
          <li><strong>Revisión y Adaptación:</strong> El mercado cambia, y ustedes también. Revisen su plan periódicamente. ¿Sigue funcionando? ¿Necesita ajustes?</li>
        </ul>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-4235718_1280.jpg" alt="Gráficos de trading y un plan en papel" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Disciplina es la Clave</h2>
        <p className={styles.paragraph}>
          Tener un plan es solo la mitad de la batalla. La otra mitad es seguirlo. Es como tener un mapa detallado y luego decidir ir por el camino que les parece más "interesante" en ese momento. No funciona.
        </p>
        <p className={styles.paragraph}>
          El plan les quita la carga de tomar decisiones impulsivas. Cuando el mercado se vuelve loco, ustedes ya saben qué hacer. Es su piloto automático. Les permite operar con calma, con lógica, y con una visión a largo plazo.
        </p>
        <p className={styles.paragraph}>
          Así que, antes de lanzarse a la aventura del trading, tómense el tiempo para construir su brújula. Será la herramienta más valiosa que tengan. ¡A planificar se ha dicho!
        </p>
      </div>
    </>
  );
}
