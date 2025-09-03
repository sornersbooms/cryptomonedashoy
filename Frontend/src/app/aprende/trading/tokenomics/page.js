'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function TokenomicsPage() {
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
        <h1 className={styles.title}>13. Tokenomics: La Física de los Tokens</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! Hoy vamos a hablar de algo que suena un poco a ciencia espacial, pero les prometo que es más como la física de las partículas, solo que en el mundo de las criptomonedas: la <strong>Tokenomics</strong>. No se asusten por el nombre, es simplemente entender cómo funcionan los tokens, cómo se crean, cómo se distribuyen y por qué tienen valor. Es como la economía de un pequeño universo digital.
        </p>

        <h2 className={styles.subtitle}>¿Qué es un Token? Un Ladrillo de Lego Digital</h2>
        <p className={styles.paragraph}>
          Imaginen que están construyendo algo con ladrillos de Lego. Cada ladrillo es un token. Puede ser un ladrillo rojo, uno azul, uno grande, uno pequeño. Cada uno tiene una función, un propósito. En el mundo de las criptomonedas, un token es una unidad de valor digital que se emite en una blockchain. Puede representar muchas cosas: dinero, acciones de una empresa, derechos de voto, acceso a un servicio, o incluso una obra de arte digital.
        </p>
        <p className={styles.paragraph}>
          La <strong>Tokenomics</strong> es el estudio de cómo se diseñan estos ladrillos, cuántos hay, cómo se distribuyen, cómo se usan y cómo se queman (sí, se pueden quemar, como si desaparecieran para siempre). Es la ciencia detrás de la creación de un ecosistema económico sostenible para un proyecto de criptomonedas.
        </p>

        <h2 className={styles.subtitle}>Oferta y Demanda: El Baile de los Tokens</h2>
        <p className={styles.paragraph}>
          Recuerdan la ley de la oferta y la demanda, ¿verdad? Es como cuando hay pocas manzanas y mucha gente quiere comprarlas, el precio sube. Si hay muchas manzanas y poca gente las quiere, el precio baja. Con los tokens es igual. La <strong>oferta</strong> de un token se refiere a cuántos tokens existen y cuántos estarán disponibles en el futuro. La <strong>demanda</strong> es cuánta gente quiere ese token y para qué lo quiere.
        </p>
        <p className={styles.paragraph}>
          En la Tokenomics, se diseñan mecanismos para controlar la oferta y estimular la demanda. Por ejemplo, algunos tokens tienen una oferta limitada, como Bitcoin, lo que los hace escasos y potencialmente más valiosos a largo plazo. Otros tokens pueden tener mecanismos de quema, donde una parte de los tokens se destruye con cada transacción, reduciendo la oferta y aumentando su valor.
        </p>

        <h2 className={styles.subtitle}>Utilidad: ¿Para Qué Sirve Este Ladrillo?</h2>
        <p className={styles.paragraph}>
          Un token no es solo un número en una pantalla. Tiene que tener una <strong>utilidad</strong>, un propósito. ¿Para qué sirve? ¿Puedo usarlo para pagar servicios? ¿Me da derecho a votar en decisiones importantes del proyecto? ¿Me permite acceder a contenido exclusivo? Cuanta más utilidad tenga un token, más gente querrá tenerlo, y eso aumenta su demanda.
        </p>
        <p className={styles.paragraph}>
          La Tokenomics se asegura de que la utilidad del token esté alineada con los objetivos del proyecto. Si el token no tiene un propósito claro, es como un ladrillo de Lego que no encaja en ninguna parte: nadie lo querrá.
        </p>

        <h2 className={styles.subtitle}>Distribución: ¿Quién Tiene los Ladrillos?</h2>
        <p className={styles.paragraph}>
          ¿Cómo se distribuyen los tokens? ¿Se venden todos de golpe? ¿Se dan a los primeros usuarios? ¿Se reparten a los desarrolladores? La forma en que se distribuyen los tokens es crucial para la equidad y la descentralización del proyecto. Una buena distribución evita que unas pocas personas tengan demasiado control sobre el token y el proyecto.
        </p>
        <p className={styles.paragraph}>
          En resumen, la Tokenomics es la ingeniería económica detrás de un proyecto de criptomonedas. Es el diseño de las reglas del juego para que el token tenga valor, sea útil y se distribuya de manera justa. Es la física que hace que el universo de los tokens funcione. ¡Y eso es todo por hoy!
        </p>
      </div>
    </>
  );
}
