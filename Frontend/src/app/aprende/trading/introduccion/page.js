'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function IntroduccionTradingPage() {
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
        <h1 className={styles.title}>Introducción al Trading: El Juego de Comprar y Vender</h1>
        <p className={styles.paragraph}>
          Hemos explorado el fascinante mundo de la blockchain y las criptomonedas. Ahora, vamos a meternos en un juego diferente, uno que ha existido desde que el hombre empezó a intercambiar cosas: el <strong>trading</strong>. No es magia, no es adivinación, es un estudio de la probabilidad y el comportamiento humano.
        </p>

        <h2 className={styles.subtitle}>¿Qué es el Trading? El Puesto en el Mercado</h2>
        <p className={styles.paragraph}>
          Imaginen que tienen un puesto en un mercado. Su trabajo es comprar cosas baratas y venderlas caras. Eso es, en esencia, el trading. Comprar un activo (una acción, una moneda, una criptomoneda) con la esperanza de que su precio suba, para luego venderlo y obtener una ganancia. O, si eres más atrevido, vender algo que no tienes (apostar a que su precio bajará) para luego comprarlo más barato y cerrar la operación.
        </p>
        <p className={styles.paragraph}>
          No se trata de "invertir" a largo plazo, como comprar una casa y esperar 20 años. El trading es más como un "juego" a corto o medio plazo, donde intentas aprovechar los movimientos del precio.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Personas interactuando en un mercado, representando el trading" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Por Qué se Mueven los Precios? El Baile de la Oferta y la Demanda</h2>
        <p className={styles.paragraph}>
          ¿Por qué sube o baja el precio de algo? ¡Es el baile de la oferta y la demanda! Si mucha gente quiere comprar algo (alta demanda) y hay poco disponible (baja oferta), el precio sube. Si nadie quiere algo (baja demanda) y hay mucho disponible (alta oferta), el precio baja.
        </p>
        <p className={styles.paragraph}>
          Pero no es tan simple. La demanda y la oferta están influenciadas por un montón de cosas: noticias, rumores, el estado de la economía, el miedo, la codicia, la tecnología... Es un sistema complejo, y predecirlo es como predecir el clima: puedes tener una idea, pero nunca estás 100% seguro.
        </p>

        <h2 className={styles.subtitle}>La Mentalidad del Trader: Un Detective de Probabilidades</h2>
        <p className={styles.paragraph}>
          Un trader no es un adivino. Es un detective. Busca patrones, estudia la historia, escucha las noticias, y sobre todo, gestiona el riesgo. Sabe que va a perder algunas veces. La clave no es ganar siempre, sino que cuando ganes, ganes más de lo que pierdes cuando pierdes.
        </p>
        <p className={styles.paragraph}>
          Es un juego de probabilidades. Si lanzas una moneda 100 veces, no esperas que salgan 50 caras y 50 cruces exactas. Pero si lanzas 1000 veces, te acercarás mucho más. El trader busca una "ventaja" estadística, algo que le dé una ligera inclinación a su favor.
        </p>

        <h2 className={styles.subtitle}>Trading vs. Inversión: Diferentes Juegos</h2>
        <p className={styles.paragraph}>
          No confundan trading con inversión. Invertir es como plantar un árbol y esperar que crezca durante años. Trading es como comprar y vender frutas en el mercado cada día, aprovechando los cambios de precio a corto plazo. Ambos pueden dar frutos, pero son estrategias diferentes con horizontes de tiempo y riesgos distintos.
        </p>
        <p className={styles.paragraph}>
          Así que, el trading es el arte y la ciencia de intentar beneficiarse de los movimientos de precios en los mercados. Requiere disciplina, estudio, gestión de riesgos y, sobre todo, entender que no se trata de ser el más listo, sino de ser el más adaptable y el que mejor gestiona sus emociones. ¡Es un campo de batalla fascinante donde la psicología juega un papel tan importante como las matemáticas!
        </p>
      </div>
    </>
  );
}
