'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ScalpingDayTradingPage() {
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
        <h1 className={styles.title}>16. Estrategias: Scalping y Day Trading - La Velocidad del Rayo</h1>
        <p className={styles.paragraph}>
          ¡Hola, amantes de la acción rápida! Hoy vamos a sumergirnos en dos estrategias de trading que son como la física de las colisiones de partículas: el <strong>Scalping</strong> y el <strong>Day Trading</strong>. Aquí, el tiempo es oro, y la velocidad es clave. No se trata de esperar a que las cosas se cocinen a fuego lento, sino de atrapar los pequeños movimientos del mercado como un cazador de mariposas.
        </p>

        <h2 className={styles.subtitle}>Scalping: El Arte de los Pequeños Saltos</h2>
        <p className={styles.paragraph}>
          Imaginen que están en una playa y las olas son pequeñas, pero constantes. El scalper es como alguien que salta sobre cada pequeña ola, una y otra vez, acumulando pequeñas ganancias. El <strong>Scalping</strong> es una estrategia de trading de muy corto plazo donde los traders buscan obtener pequeñas ganancias de movimientos mínimos de precios. Las operaciones duran desde segundos hasta unos pocos minutos. Es como un francotirador que dispara a objetivos muy cercanos, pero lo hace muchas veces.
        </p>
        <p className={styles.paragraph}>
          Para ser un buen scalper, necesitan una ejecución impecable, una disciplina de hierro y una concentración total. Es un juego de alta frecuencia, donde cada tick cuenta. Requiere mucha atención a los gráficos de muy corto plazo (como los de 1 minuto o 5 minutos) y una rápida toma de decisiones. No es para los débiles de corazón o para aquellos que se distraen fácilmente.
        </p>

        <h2 className={styles.subtitle}>Day Trading: El Juego de un Día</h2>
        <p className={styles.paragraph}>
          Ahora, imaginen que están en un día de pesca. Salen por la mañana, pescan durante el día y regresan por la noche. El <strong>Day Trading</strong> es una estrategia donde todas las operaciones se abren y se cierran dentro del mismo día de trading. Los day traders no mantienen posiciones abiertas durante la noche para evitar los riesgos asociados con los movimientos del mercado cuando están dormidos. Es como un atleta que compite en una carrera de un día; todo el esfuerzo se concentra en ese período.
        </p>
        <p className={styles.paragraph}>
          Los day traders buscan movimientos de precios más grandes que los scalpers, pero aún así, sus operaciones son de corta duración, generalmente de minutos a unas pocas horas. Utilizan gráficos de 5, 15 o 30 minutos. Requiere un buen entendimiento del análisis técnico, la gestión de riesgos y, sobre todo, la psicología. Las emociones pueden jugar una mala pasada cuando se está operando activamente durante todo el día.
        </p>

        <h2 className={styles.subtitle}>Similitudes y Diferencias: La Misma Física, Diferente Escala</h2>
        <p className={styles.paragraph}>
          Tanto el scalping como el day trading se basan en la misma física del mercado: oferta y demanda, patrones de precios, indicadores. La diferencia principal es la escala de tiempo y la magnitud de los movimientos que buscan. El scalping es como estudiar el movimiento browniano de las partículas, mientras que el day trading es como observar el movimiento de un péndulo.
        </p>
        <ul>
          <li><strong>Marco Temporal:</strong> Scalping (segundos a minutos), Day Trading (minutos a horas, dentro del mismo día).</li>
          <li><strong>Frecuencia de Operaciones:</strong> Scalping (muy alta), Day Trading (alta).</li>
          <li><strong>Ganancias por Operación:</strong> Scalping (muy pequeñas), Day Trading (pequeñas a moderadas).</li>
          <li><strong>Riesgo:</strong> Ambos son de alto riesgo si no se gestionan adecuadamente, pero el scalping es aún más intenso debido a la alta frecuencia.</li>
        </ul>

        <h2 className={styles.subtitle}>¿Para Quién Son Estas Estrategias?</h2>
        <p className={styles.paragraph}>
          Estas estrategias no son para todos. Requieren:
          <ul>
            <li><strong>Tiempo:</strong> Necesitan estar frente a las pantallas durante horas.</li>
            <li><strong>Capital:</strong> Aunque las ganancias por operación son pequeñas, necesitan un capital suficiente para que esas pequeñas ganancias sumen algo significativo.</li>
            <li><strong>Conocimiento:</strong> Un profundo entendimiento del análisis técnico y del mercado.</li>
            <li><strong>Control Emocional:</strong> La capacidad de mantener la calma bajo presión y de seguir su plan sin dejarse llevar por el miedo o la codicia.</li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          En resumen, el scalping y el day trading son estrategias de alta velocidad y alta intensidad. Son como la física de los eventos rápidos, donde cada milisegundo cuenta. Si les gusta la adrenalina y tienen la disciplina para ejecutar un plan con precisión, estas estrategias podrían ser para ustedes. Pero recuerden, la velocidad no siempre es sinónimo de éxito sin una buena preparación. ¡Y eso es todo por hoy!
        </p>
      </div>
    </>
  );
}
