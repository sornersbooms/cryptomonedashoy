'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function TrilemaPage() {
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
        <h1 className={styles.title}>El Trilema de la Blockchain: El Taburete de Tres Patas</h1>
        <p className={styles.paragraph}>
          Hemos hablado de muchas cosas geniales de la blockchain: es segura, es descentralizada, puede ser rápida... ¡Parece que lo tiene todo! Pero, como en la vida, no se puede tener todo al mismo tiempo. Hay un compromiso, un equilibrio. Esto es lo que llamamos el <strong>Trilema de la Blockchain</strong>.
        </p>

        <h2 className={styles.subtitle}>Las Tres Virtudes (Las Tres Patas del Taburete)</h2>
        <p className={styles.paragraph}>
          Imaginen un taburete con tres patas. Cada pata representa una virtud que queremos en una blockchain:
        </p>
        <ul>
          <li><strong>1. Descentralización:</strong> Que no haya un jefe central. Que miles de computadoras independientes mantengan la red. Esto la hace resistente a la censura y a los ataques. (La pata de la estabilidad).</li>
          <li><strong>2. Seguridad:</strong> Que sea casi imposible de hackear o de manipular. Que las transacciones sean válidas y la historia inmutable. (La pata de la confianza).</li>
          <li><strong>3. Escalabilidad:</strong> Que pueda manejar un montón de transacciones por segundo, muy rápido y barato. Que pueda crecer para servir a millones o miles de millones de usuarios. (La pata de la velocidad).</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/3d-cryptocurrency-rendering-design.jpg" alt="Representación abstracta del trilema de la blockchain" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Dilema: Solo Dos a la Vez</h2>
        <p className={styles.paragraph}>
          El trilema dice que, en el diseño actual de las blockchains, solo puedes tener dos de estas tres virtudes al máximo. Si intentas tener las tres, una de ellas (o las tres) sufrirá.
        </p>
        <ul>
          <li><strong>Ejemplo 1: Bitcoin (Descentralización + Seguridad):</strong> Bitcoin es el rey de la descentralización y la seguridad. Hay miles de nodos, es casi imposible de hackear. Pero, ¿es escalable? ¡No mucho! Solo procesa unas pocas transacciones por segundo. Es como un taburete con dos patas muy fuertes, pero la tercera es un poco coja.</li>
          <li><strong>Ejemplo 2: Una Blockchain Privada (Seguridad + Escalabilidad):</strong> Una blockchain privada puede ser muy segura (si confías en los participantes) y muy escalable (procesa miles de transacciones por segundo). Pero, ¿es descentralizada? ¡Para nada! Está controlada por un grupo pequeño. Es un taburete con dos patas fuertes, pero la de la descentralización es muy corta.</li>
          <li><strong>Ejemplo 3: ¿Una Blockchain que lo Tenga Todo?</strong> Si intentas hacer una blockchain que sea súper descentralizada, súper segura y súper rápida, te encontrarás con problemas. O se vuelve lenta, o menos segura, o menos descentralizada. Es como intentar hacer que las tres patas de un taburete sean igual de largas y fuertes, pero el material no te da para tanto.</li>
        </ul>

        <h2 className={styles.subtitle}>Soluciones: Intentando "Engañar" al Trilema</h2>
        <p className={styles.paragraph}>
          Los ingenieros de blockchain no se rinden. Están buscando formas de "engañar" al trilema, o al menos de mitigarlo. ¿Cómo?
        </p>
        <ul>
          <li><strong>Capas 2 (Layer 2):</strong> Construyendo soluciones <em>encima</em> de la blockchain principal. La blockchain principal se encarga de la seguridad y descentralización, y la capa 2 se encarga de la escalabilidad. Es como construir una autopista encima de una carretera local.</li>
          <li><strong>Nuevos Consensos:</strong> Explorando mecanismos de consenso más eficientes que PoW.</li>
          <li><strong>Sharding:</strong> Dividiendo la blockchain en trozos más pequeños para que cada nodo no tenga que procesar todo.</li>
        </ul>
        <p className={styles.paragraph}>
          El Trilema de la Blockchain es un concepto fundamental para entender por qué las blockchains funcionan como lo hacen y por qué hay tantas diferentes. Cada una hace un compromiso diferente. No hay una solución perfecta para todo, solo soluciones optimizadas para diferentes propósitos. ¡Es la física de la blockchain!
        </p>
      </div>
    </>
  );
}
