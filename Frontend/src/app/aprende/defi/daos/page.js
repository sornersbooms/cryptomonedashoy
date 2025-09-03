'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function DaosPage() {
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
        <h1 className={styles.title}>DAOs: ¿Una Empresa Dirigida por un Robot?</h1>
        <p className={styles.paragraph}>
          Ya hemos hablado de la gobernanza, de votar con tokens... pero, ¿qué es la organización que gestiona todo esto? Es la <strong>DAO</strong>, la Organización Autónoma Descentralizada. Descompongamos esto, porque suena más complicado de lo que es.
        </p>
        <p className={styles.paragraph}>
          Piensen en una máquina expendedora. Es una máquina tonta, pero sigue unas reglas. Si metes el dinero correcto y pulsas el botón correcto, te da tu refresco. No hay un empleado dentro, no hay un jefe mirando. Es una "organización" (muy simple) que funciona de forma autónoma. Una DAO es como una máquina expendedora súper vitaminada para organizar a la gente.
        </p>

        <h2 className={styles.subtitle}>La Empresa del Futuro (Quizás)</h2>
        <p className={styles.paragraph}>
          Una empresa normal tiene una estructura: un jefe (CEO), directivos, empleados, departamentos... Las reglas están en contratos de papel y en la cabeza de la gente. Una DAO le da la vuelta a esto. Es una organización donde las reglas están escritas en código, en contratos inteligentes. La jerarquía no la deciden las personas, sino las reglas del código.
        </p>
        <ul>
          <li><strong>Descentralizada:</strong> No hay una oficina central, no hay un CEO que pueda tomar una decisión unilateral. Las decisiones las toman los miembros (los que tienen los tokens).</li>
          <li><strong>Autónoma:</strong> Funciona sola. Las votaciones se cuentan automáticamente, y si una propuesta gana, el código se ejecuta para hacerla realidad sin que nadie intervenga.</li>
          <li><strong>Organización:</strong> Su propósito es organizar a un grupo de personas para que trabajen juntas hacia un objetivo común, ya sea gestionar un protocolo DeFi, invertir en arte o comprar un equipo de baloncesto.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3368174_1280.jpg" alt="Una red de personas conectadas formando una organización" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Cómo Funciona en la Práctica?</h2>
        <p className={styles.paragraph}>
          Imaginen que queremos crear un club de inversión para comprar NFTs raros. En lugar de crear una empresa, creamos una DAO.
        </p>
        <ol>
          <li><strong>Creamos las reglas:</strong> Escribimos en un contrato inteligente las normas. Por ejemplo: "Para ser miembro, hay que aportar al menos 1 ETH. Las propuestas para comprar un NFT necesitan un 60% de los votos para ser aprobadas. Los beneficios se repartirán proporcionalmente entre los miembros".</li>
          <li><strong>Recaudamos fondos:</strong> La gente que quiere unirse envía su ETH a la tesorería de la DAO, que es una cartera digital controlada por el contrato inteligente, no por una persona. A cambio, reciben tokens de la DAO que representan su participación.</li>
          <li><strong>Tomamos decisiones:</strong> Alguien encuentra un NFT y hace una propuesta: "¡Compremos este CryptoPunk por 50 ETH!". Todos los miembros votan con sus tokens.</li>
          <li><strong>Actuamos:</strong> Si la votación tiene éxito, el contrato inteligente se activa automáticamente, saca los 50 ETH de la tesorería y compra el NFT. Nadie puede robar el dinero, nadie puede saltarse las reglas.</li>
        </ol>

        <h2 className={styles.subtitle}>Más Allá de DeFi</h2>
        <p className={styles.paragraph}>
          Aunque nacieron en el mundo de las criptomonedas, la idea de las DAOs es mucho más grande. Podrían usarse para cualquier cosa. Imaginen una organización benéfica donde los donantes votan exactamente en qué proyectos se gasta el dinero, con total transparencia. O un medio de comunicación propiedad de sus lectores, que deciden la línea editorial.
        </p>
        <p className={styles.paragraph}>
          Las DAOs son un experimento sobre cómo coordinar a los seres humanos de una forma más transparente, democrática y eficiente. Son complicadas, son caóticas, y muchas fracasarán. Pero la idea de una organización que vive en internet, propiedad de sus usuarios y gobernada por reglas claras y verificables... es una idea que podría cambiar muchas cosas.
        </p>
      </div>
    </>
  );
}
