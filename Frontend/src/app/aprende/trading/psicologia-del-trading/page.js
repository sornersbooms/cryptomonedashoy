'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function PsicologiaDelTradingPage() {
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
        <h1 className={styles.title}>15. Psicología del Trading: La Mente del Trader</h1>
        <p className={styles.paragraph}>
          ¡Hola, pensadores profundos! Hoy vamos a sumergirnos en el aspecto más fascinante y, a menudo, el más desafiante del trading: la <strong>Psicología del Trading</strong>. Imaginen que están en un laboratorio, pero en lugar de estudiar partículas subatómicas, están estudiando la partícula más compleja de todas: la mente humana, especialmente cuando está bajo presión y con dinero en juego. Es como la física de las emociones.
        </p>

        <h2 className={styles.subtitle}>Las Emociones: Fuerzas de la Naturaleza</h2>
        <p className={styles.paragraph}>
          En el trading, las emociones son como fuerzas de la naturaleza: poderosas, impredecibles y, si no se controlan, pueden causar estragos. Las dos emociones principales que nos afectan son el <strong>miedo</strong> y la <strong>codicia</strong>. El miedo nos hace dudar, cerrar operaciones demasiado pronto o no entrar en operaciones prometedoras. La codicia nos hace tomar riesgos excesivos, mantener operaciones perdedoras con la esperanza de que se recuperen, o no tomar ganancias cuando deberíamos.
        </p>
        <p className={styles.paragraph}>
          Un buen trader no es aquel que no siente miedo o codicia, sino aquel que reconoce estas emociones y tiene un plan para manejarlas. Es como un ingeniero que sabe que el viento y la gravedad existen, y diseña un puente para resistirlos, no para ignorarlos.
        </p>

        <h2 className={styles.subtitle}>La Disciplina: El Andamiaje de su Estrategia</h2>
        <p className={styles.paragraph}>
          La <strong>disciplina</strong> es la capacidad de seguir su plan de trading, incluso cuando sus emociones les gritan que hagan lo contrario. Es el andamiaje que sostiene su estrategia. Sin disciplina, incluso la mejor estrategia es inútil. Es como tener un mapa del tesoro, pero no tener la disciplina para seguirlo paso a paso, desviándose cada vez que ven algo brillante.
        </p>
        <p className={styles.paragraph}>
          La disciplina se construye con la práctica, la autoconciencia y la repetición. Cada vez que siguen su plan, refuerzan ese hábito. Cada vez que se desvían, lo debilitan. Es un músculo que hay que entrenar.
        </p>

        <h2 className={styles.subtitle}>La Paciencia: El Tiempo es su Aliado</h2>
        <p className={styles.paragraph}>
          El mercado no siempre se mueve a su ritmo. A veces, hay que esperar. La <strong>paciencia</strong> es la virtud de esperar las oportunidades correctas, de no forzar operaciones, de dejar que su estrategia se desarrolle. Es como un astrónomo que espera la noche perfecta para observar las estrellas; no puede forzar que las nubes se vayan.
        </p>

        <h2 className={styles.subtitle}>La Humildad: Aprender de los Errores</h2>
        <p className={styles.paragraph}>
          Todos cometemos errores. En el trading, los errores cuestan dinero. La <strong>humildad</strong> es la capacidad de reconocer sus errores, aprender de ellos y no repetirlos. Es como un científico que, cuando un experimento no sale como esperaba, no se rinde, sino que analiza los datos, ajusta las variables y lo intenta de nuevo. La arrogancia es el enemigo del trader.
        </p>

        <h2 className={styles.subtitle}>El Diario de Trading: Su Laboratorio Personal</h2>
        <p className={styles.paragraph}>
          Para entender sus emociones y mejorar su disciplina, lleven un <strong>diario de trading</strong>. Anoten cada operación: por qué entraron, por qué salieron, qué emociones sintieron, qué aprendieron. Es su laboratorio personal. Analicen sus datos, busquen patrones en su comportamiento. ¿Cuándo son más propensos a la codicia? ¿Cuándo el miedo los paraliza? Conocerse a sí mismos es la mitad de la batalla.
        </p>

        <h2 className={styles.subtitle}>La Gestión de Expectativas: La Realidad del Trading</h2>
        <p className={styles.paragraph}>
          El trading no es un esquema para hacerse rico rápidamente. Es un negocio, y como cualquier negocio, tiene sus altibajos. La <strong>gestión de expectativas</strong> es entender que habrá días buenos y días malos, operaciones ganadoras y operaciones perdedoras. No busquen la perfección, busquen la consistencia. Un trader exitoso no es el que nunca pierde, sino el que gestiona sus pérdidas y permite que sus ganancias superen sus pérdidas a largo plazo.
        </p>
        <p className={styles.paragraph}>
          En resumen, la psicología del trading es el estudio de cómo su mente interactúa con el mercado. Es entender que el mayor obstáculo no está en los gráficos o en las noticias, sino dentro de ustedes mismos. Es la física de la autodisciplina. ¡Y eso es todo por hoy!
        </p>
      </div>
    </>
  );
}
