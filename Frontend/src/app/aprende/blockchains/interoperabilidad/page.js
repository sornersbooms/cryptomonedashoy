'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function InteroperabilidadPage() {
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
        <h1 className={styles.title}>Interoperabilidad: Puentes entre Islas Digitales</h1>
        <p className={styles.paragraph}>
          Hemos visto que hay muchas blockchains diferentes: Bitcoin, Ethereum, Solana, Polkadot... Cada una es como una isla con sus propias reglas, su propia gente y su propia moneda. Son geniales, pero ¿qué pasa si la gente de una isla quiere hablar con la gente de otra? ¿O si quieren enviar sus monedas de una isla a otra? ¡Ahí es donde entra la <strong>interoperabilidad</strong>!
        </p>

        <h2 className={styles.subtitle}>El Problema: Islas Aisladas</h2>
        <p className={styles.paragraph}>
          Imaginen que tienen un montón de islas. En una isla hablan "Bitcoinés", en otra "Ethereumés", en otra "Solanés". Cada isla tiene su propia economía, sus propias leyes. Si quieres moverte de una isla a otra, o enviar algo, es complicado. No hay un puente directo, no hay un traductor universal.
        </p>
        <p className={styles.paragraph}>
          Esto es un problema para el ecosistema blockchain. Si las blockchains no pueden comunicarse entre sí, el crecimiento se limita. Es como si internet solo tuviera una página web.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-7678815_1280.jpg" alt="Un globo terráqueo con conexiones, representando la interoperabilidad" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Soluciones: Construyendo Puentes y Traductores</h2>
        <p className={styles.paragraph}>
          Los ingenieros de blockchain están trabajando duro para construir "puentes" y "traductores" entre estas islas. Aquí hay algunas ideas:
        </p>
        <ul>
          <li><strong>Puentes (Bridges):</strong> Son como los puentes físicos que conectan dos islas. Permiten que los activos (como las monedas) se muevan de una blockchain a otra. Por ejemplo, puedes "enviar" tu Bitcoin a Ethereum, y lo que realmente pasa es que tu Bitcoin se bloquea en la cadena de Bitcoin, y se crea una versión "envuelta" de Bitcoin en Ethereum. Cuando quieres tu Bitcoin de vuelta, quemas la versión envuelta en Ethereum y liberas el Bitcoin original. Es un poco como cambiar dinero en una casa de cambio.</li>
          <li><strong>Intercambios Atómicos (Atomic Swaps):</strong> Imagina que quieres intercambiar tu "Bitcoinés" por "Ethereumés" directamente con otra persona, sin pasar por una casa de cambio centralizada. Los intercambios atómicos son como un apretón de manos mágico que garantiza que ambos intercambian sus monedas al mismo tiempo, o ninguno lo hace. No hay riesgo de que uno se quede con el dinero del otro.</li>
          <li><strong>Redes de Capa 0 (Layer 0 Networks):</strong> Algunos proyectos están construyendo una "super-carretera" debajo de todas las islas. Es una capa fundamental que permite que diferentes blockchains se construyan sobre ella y se comuniquen de forma nativa. Es como si todas las islas estuvieran conectadas por un sistema de túneles subterráneos.</li>
          <li><strong>Estándares y Protocolos:</strong> Es como si las islas se pusieran de acuerdo en un idioma común para ciertas cosas. Por ejemplo, un estándar para cómo se ven los NFTs, para que un NFT de una isla pueda ser reconocido en otra.</li>
        </ul>

        <h2 className={styles.subtitle}>¿Por Qué es Importante?</h2>
        <p className={styles.paragraph}>
          La interoperabilidad es crucial para el futuro de la blockchain. Si las blockchains pueden hablar entre sí, el ecosistema se vuelve mucho más grande y útil. Imaginen un internet donde cada página web fuera una isla aislada. ¡Sería inútil! La interoperabilidad es lo que permitirá que la blockchain se convierta en una verdadera "internet de valor", donde los activos y la información fluyen libremente entre diferentes redes.
        </p>
        <p className={styles.paragraph}>
          Así que, la interoperabilidad es el desafío de hacer que las diferentes blockchains puedan comunicarse y trabajar juntas. Es como construir puentes y traductores para que todas las "islas" del ecosistema puedan comerciar, compartir información y crecer juntas. ¡Es el siguiente gran paso para que la blockchain alcance su máximo potencial!
        </p>
      </div>
    </>
  );
}
