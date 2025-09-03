'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function GobernanzaPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const defiCourse = courseData.defi;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={defiCourse.title}
        modules={defiCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Gobernanza: ¿Quién Manda Aquí?</h1>
        <p className={styles.paragraph}>
          Hemos construido todo este sistema de LEGOs financieros sin jefes, sin bancos, sin intermediarios. ¡Fantástico! Pero entonces surge una pregunta muy, muy importante: si no hay un jefe, ¿quién toma las decisiones? ¿Quién decide si hay que cambiar las reglas, arreglar un problema o añadir una nueva pieza al juego? 
        </p>
        <p className={styles.paragraph}>
          La respuesta es la <strong>gobernanza</strong>. Y en DeFi, la gobernanza es un experimento fascinante sobre cómo un grupo de extraños en internet puede ponerse de acuerdo para gestionar algo que es de todos. Es democracia, pero con un toque digital.
        </p>

        <h2 className={styles.subtitle}>Los Tokens de Gobernanza: Tu Derecho a Voto</h2>
        <p className={styles.paragraph}>
          Imaginen que un protocolo DeFi es un club. ¿Cómo se demuestra que eres un miembro con derecho a opinar? Con una ficha especial, una tarjeta de membresía. En DeFi, esta tarjeta es un <strong>token de gobernanza</strong>. 
        </p>
        <p className={styles.paragraph}>
          Normalmente, estos tokens se reparten entre los fundadores y, lo que es más importante, entre los usuarios del protocolo. ¿Recuerdan que al usar una "granja" de Yield Farming te pagaban con la moneda del protocolo? ¡Esa moneda es a menudo un token de gobernanza! Es una forma de decir: "Gracias por usar nuestro sistema, ahora eres parte de él. Ayúdanos a decidir su futuro".
        </p>
        <p className={styles.paragraph}>
          Cuantos más tokens tengas, más pesa tu voto. Es como tener acciones en una empresa. Si tienes el 51% de las acciones, tus decisiones mandan. Aquí es igual: si tienes el 51% de los tokens, tienes un poder de voto inmenso.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-6772378_1280.png" alt="Personas votando con tokens de gobernanza" width={600} height={600} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La DAO: El Club se Organiza</h2>
        <p className={styles.paragraph}>
          Este "club" de poseedores de tokens que votan sobre el futuro de un protocolo se llama una <strong>DAO (Organización Autónoma Descentralizada)</strong>. Es simplemente la estructura formal para gobernar. 
        </p>
        <p className={styles.paragraph}>
          El proceso suele ser así:
        </p>
        <ol>
          <li><strong>Propuesta:</strong> Cualquier miembro de la DAO (a veces se necesita un mínimo de tokens) puede hacer una propuesta. Por ejemplo: "Propongo que bajemos las comisiones del DEX del 0.3% al 0.25%".</li>
          <li><strong>Debate:</strong> La comunidad discute la propuesta en foros, en Discord, en Twitter. Se presentan argumentos a favor y en contra.</li>
          <li><strong>Votación:</strong> La propuesta se somete a una votación en la blockchain. Los poseedores de tokens usan sus monedas para votar "Sí", "No" o "Abstenerse".</li>
          <li><strong>Ejecución:</strong> Si la propuesta se aprueba, a menudo el resultado se ejecuta automáticamente. El contrato inteligente que controla las comisiones se actualiza solo, sin que nadie tenga que tocar un botón. ¡El código es la ley!
          </li>
        </ol>

        <h2 className={styles.subtitle}>El Poder y el Peligro</h2>
        <p className={styles.paragraph}>
          Este sistema es increíblemente poderoso. Permite que los proyectos evolucionen y se adapten sin necesidad de un equipo centralizado. Los propios usuarios, los que tienen "piel en el juego", son los que guían el barco. 
        </p>
        <p className={styles.paragraph}>
          Pero también tiene sus peligros. ¿Qué pasa si una sola persona o un grupo pequeño (una "ballena") acumula demasiados tokens y puede tomar todas las decisiones por su cuenta? ¿Qué pasa si a la mayoría de los votantes no les importa o no entienden bien las propuestas? La apatía del votante es un problema tan real en las DAOs como en las democracias tradicionales.
        </p>
        <p className={styles.paragraph}>
          La gobernanza es el pegamento que mantiene unido a un protocolo descentralizado. Es el mecanismo que le permite tener un cerebro colectivo, cambiar y sobrevivir. Es uno de los experimentos sociales y económicos más interesantes de nuestro tiempo.
        </p>
      </div>
    </>
  );
}
