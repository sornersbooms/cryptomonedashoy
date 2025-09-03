'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function QueEsDeFiPage() {
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
        <h1 className={styles.title}>¿Qué es DeFi? Finanzas Como un Juego de LEGO</h1>
        <p className={styles.paragraph}>
          Muy bien, olvidemos las palabras complicadas por un segundo. ¿Han jugado con LEGO? Esas pequeñas piezas de plástico que puedes unir para construir cualquier cosa: una casa, un cohete, un castillo. No necesitas pedirle permiso a nadie, solo tomas las piezas y construyes. ¿Y si pudiéramos hacer lo mismo con el dinero y las finanzas?
        </p>
        <p className={styles.paragraph}>
          Eso, en esencia, es <strong>DeFi</strong>, o <strong>Finanzas Descentralizadas</strong>. Es como una caja gigante de LEGO financieros que vive en internet, abierta para que cualquiera la use.
        </p>

        <h2 className={styles.subtitle}>El Banco vs. Los LEGOs</h2>
        <p className={styles.paragraph}>
          Normalmente, si quieres pedir un préstamo, tienes que ir a un banco. El banco es como el dueño de todas las piezas de LEGO. Tiene sus propias reglas, sus propios edificios, y decide si te presta las piezas o no. Todo pasa por ellos. Son el intermediario.
        </p>
        <p className={styles.paragraph}>
          DeFi le da la vuelta a esto. En lugar de un banco, tenemos programas de computadora —pequeños robots, si quieren— que funcionan en una de esas "blockchains" de las que hablamos, como Ethereum. Estos programas son las reglas del juego. Dicen: "Si pones esta pieza (un tipo de criptomoneda), puedes tomar prestada aquella otra pieza". Y simplemente funciona, automáticamente, sin que un señor con corbata tenga que aprobarlo.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-9268421_1280.png" alt="Bloques de construcción financieros interconectados" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Cómo Funciona Este Parque de Juegos Financiero?</h2>
        <p className={styles.paragraph}>
          Imaginen un gran parque de juegos. En una esquina, hay un robot que te permite intercambiar tus canicas rojas por azules (esto es un <strong>exchange descentralizado</strong>). En otra esquina, hay un robot que te paga un premio si dejas tus canicas en una caja para que otros jueguen con ellas (esto es como <strong>prestar y ganar intereses</strong>).
        </p>
        <p className={styles.paragraph}>
          Lo más increíble es que todas estas piezas y robots pueden conectarse entre sí. Puedes tomar las canicas azules del primer robot, llevarlas al segundo para ganar un premio, y luego usar ese premio para jugar en otra atracción. Por eso lo llamamos "LEGOs de dinero". Las posibilidades son casi infinitas, y todo el mundo está invitado a jugar y a construir cosas nuevas.
        </p>

        <h2 className={styles.subtitle}>Entonces, ¿Qué es DeFi?</h2>
        <p className={styles.paragraph}>
          En pocas palabras, DeFi es:
        </p>
        <ul>
          <li><strong>Abierto:</strong> Cualquiera con una conexión a internet puede usarlo. No hay que rellenar formularios ni pedir permiso.</li>
          <li><strong>Interconectable:</strong> Los diferentes servicios financieros pueden "hablar" entre sí, creando combinaciones nuevas y poderosas.</li>
          <li><strong>Transparente:</strong> Todas las reglas y todas las transacciones están a la vista de todos en la blockchain. No hay secretos en la trastienda.</li>
        </ul>
        <p className={styles.paragraph}>
          Es un intento de reconstruir el sistema financiero desde cero, pero esta vez de una manera abierta y automática, como un juego de construcción universal. Es complicado, sí, y tiene sus riesgos, como un cohete de LEGO que se desarma. Pero la idea es simple y muy, muy poderosa. ¡Es finanzas para todos!
        </p>
      </div>
    </>
  );
}
