'use client';
import React, { useState } from 'react';
import styles from './page.module.css'; // Import the CSS module
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function MineriaDeBitcoinPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const bitcoinCourse = courseData.bitcoin;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={bitcoinCourse.title}
        modules={bitcoinCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Minería de Bitcoin: El Gran Sorteo Digital</h1>
        <p className={styles.paragraph}>
          Muy bien, amigos, pónganse cómodos. Hoy vamos a hablar de algo que suena complicado: <strong>la minería de Bitcoin</strong>. Pero olvídense de los picos y las palas. Esto es mucho más interesante. Imaginen que Bitcoin es un gigantesco libro de contabilidad público, como un cuaderno de notas que todos en el mundo comparten. Cada vez que alguien envía o recibe dinero, hay que anotarlo en una nueva página.
        </p>
        <p className={styles.paragraph}>
          La pregunta es: ¿quién tiene permiso para escribir en ese cuaderno? Si cualquiera pudiera añadir páginas, podría hacer trampas, ¿verdad? Podrían escribir "Ahora tengo un millón de bitcoins" y arruinarlo todo. Necesitamos una forma de que añadir una página sea difícil, que cueste trabajo. Así nos aseguramos de que quien lo haga se lo tome en serio.
        </p>

        <h2 className={styles.subtitle}>El Concurso de Adivinanzas</h2>
        <p className={styles.paragraph}>
          Aquí es donde entran los "mineros". Piensen en ellos no como obreros, sino como concursantes en un sorteo masivo que ocurre cada 10 minutos. Todos ellos tienen una "caja" (un <strong>bloque</strong>) llena de las últimas transacciones que la gente ha hecho. Para poder añadir su caja a la cadena del libro de contabilidad (la blockchain), tienen que ganar el sorteo.
        </p>
        <p className={styles.paragraph}>
          ¿Y en qué consiste el sorteo? Es básicamente un juego de adivinanzas. El sistema de Bitcoin les da un acertijo matemático muy, muy difícil. No es un acertijo que se pueda resolver con inteligencia, sino a base de prueba y error. Las computadoras de los mineros empiezan a lanzar números al azar, a una velocidad increíble, tratando de encontrar la respuesta. Es como intentar adivinar una combinación de una cerradura con trillones de posibilidades.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3368174_1280.jpg" alt="Representación abstracta de la minería de Bitcoin" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Por Qué Tanto Esfuerzo? La Prueba de Trabajo</h2>
        <p className={styles.paragraph}>
          El primer minero cuya computadora adivina el número correcto, gana. Gana el derecho a añadir su bloque de transacciones a la cadena. Y como recompensa por todo ese esfuerzo computacional (toda esa electricidad gastada en adivinar), el sistema le premia con una cantidad de bitcoins nuevos. ¡Así es como se crean los nuevos bitcoins!
        </p>
        <p className={styles.paragraph}>
          Este esfuerzo se llama <strong>"Prueba de Trabajo" (Proof of Work)</strong>. Es la clave de todo. Hace que sea extremadamente caro y difícil para un tramposo intentar reescribir el libro de contabilidad. Tendría que volver a hacer todo el trabajo de adivinanzas de cada página, ¡y más rápido que todos los demás mineros honestos juntos! Es prácticamente imposible. Es la forma que tiene el sistema de garantizar la seguridad sin necesidad de un banco o un gobierno. La seguridad se basa en las matemáticas y en el esfuerzo.
        </p>

        <h2 className={styles.subtitle}>En Pocas Palabras</h2>
        <p className={styles.paragraph}>
          Así que, la minería es simplemente esto:
        </p>
        <ul>
          <li><strong>Competir:</strong> Miles de computadoras compiten para resolver un acertijo matemático.</li>
          <li><strong>Verificar:</strong> El ganador de la competencia agrupa las últimas transacciones en un bloque y lo añade a la cadena.</li>
          <li><strong>Asegurar:</strong> Este proceso (la Prueba de Trabajo) hace que la red sea segura y a prueba de manipulaciones.</li>
          <li><strong>Crear:</strong> Como recompensa por su trabajo, los mineros reciben nuevos bitcoins, poniéndolos en circulación.</li>
        </ul>
        <p className={styles.paragraph}>
          No es magia, es solo un sistema muy ingenioso. Es un sorteo donde el premio no es solo para el ganador, sino para la confianza y seguridad de toda la red. ¡Fascinante!
        </p>
      </div>
    </>
  );
}
