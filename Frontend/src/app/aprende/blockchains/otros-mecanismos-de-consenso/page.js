'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function OtrosConsensosPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const blockchainCourse = courseData.blockchains;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={blockchainCourse.title}
        modules={blockchainCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Otros Mecanismos de Consenso: Más Allá de PoW y PoS</h1>
        <p className={styles.paragraph}>
          Ya hemos explorado la competición de trabajo duro (PoW) y el sorteo de los accionistas (PoS). Pero la curiosidad humana no tiene límites, ¡y los científicos informáticos han ideado otras formas de ponerse de acuerdo! Pensemos en esto como diferentes sistemas de gobierno: no todo es monarquía o democracia directa, hay muchas opciones intermedias.
        </p>

        <h2 className={styles.subtitle}>Prueba de Participación Delegada (DPoS): Una Democracia Representativa</h2>
        <p className={styles.paragraph}>
          Imaginen nuestro sorteo de accionistas (PoS). Ahora, supongan que en lugar de que todos puedan ganar, decidimos que es un poco lento y caótico. Así que, como comunidad, <strong>votamos para elegir a un pequeño grupo de élite</strong>, digamos 21 "súper-representantes" o "delegados".
        </p>
        <p className={styles.paragraph}>
          ¿Cómo se vota? Con tus monedas. Si tienes 100 monedas, tu voto por un candidato vale por 100. Los 21 candidatos con más votos se convierten en los validadores oficiales. Ellos son los únicos que se turnan, de forma predecible, para crear nuevos bloques. Es como una <strong>democracia representativa</strong>: no votas en cada ley, eliges a un congresista para que lo haga por ti.
        </p>
        <p className={styles.paragraph}>
          <strong>Ventaja:</strong> ¡Es súper rápido y eficiente! Coordinar a 21 personas es mucho más fácil que a miles. <strong>Desventaja:</strong> Es más centralizado. La seguridad y la honestidad de la red dependen de un grupo mucho más pequeño.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Personas colaborando en un sistema" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Prueba de Autoridad (PoA): Un Club de Notarios</h2>
        <p className={styles.paragraph}>
          Ahora, vayamos a un sistema aún más exclusivo. Aquí, no importa cuánto trabajes (PoW) ni cuánto dinero tengas (PoS). Lo único que importa es <strong>quién eres</strong>. La autoridad para crear bloques se le otorga a un conjunto de validadores cuya identidad es pública y conocida. Su <strong>reputación</strong> está en juego.
        </p>
        <p className={styles.paragraph}>
          Piensen en un consorcio de empresas que gestionan una base de datos logística, o un grupo de universidades que validan títulos. Los participantes no son anónimos. Si uno de ellos hace trampas, todo el mundo sabe quién fue, y su reputación (y su negocio) se arruinaría. La seguridad aquí no es el coste de la energía ni el capital, es el <strong>coste reputacional</strong>.
        </p>
        <p className={styles.paragraph}>
          <strong>Ventaja:</strong> Es ultra-rápido y no consume casi energía. <strong>Desventaja:</strong> Es altamente centralizado y solo funciona en entornos privados o de consorcio, donde los participantes ya tienen un nivel de confianza entre ellos. No es apto para un sistema monetario global y abierto.
        </p>

        <h2 className={styles.subtitle}>Un Mundo de Equilibrios</h2>
        <p className={styles.paragraph}>
          Como pueden ver, no existe un mecanismo de consenso "perfecto". Cada uno es una solución de ingeniería con sus propios equilibrios.
        </p>
        <ul>
          <li><strong>PoW:</strong> Máxima seguridad y descentralización, pero lento y costoso.</li>
          <li><strong>PoS:</strong> Muy seguro y eficiente, pero puede favorecer a los más ricos.</li>
          <li><strong>DPoS:</strong> Extremadamente rápido y barato, pero más centralizado.</li>
          <li><strong>PoA:</strong> Hiper-eficiente para grupos cerrados, pero basado en confianza y reputación.</li>
        </ul>
        <p className={styles.paragraph}>
          Entender estas diferencias es clave para comprender por qué cada proyecto de blockchain elige un camino distinto para resolver el famoso "trilema" entre seguridad, descentralización y escalabilidad.
        </p>
      </div>
    </>
  );
}
