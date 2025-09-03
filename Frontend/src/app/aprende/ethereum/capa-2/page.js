'use client';
import React, { useState } from 'react';
import styles from './Lesson.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function Capa2Page() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const ethereumCourse = courseData.ethereum;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={ethereumCourse.title}
        modules={ethereumCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Escalabilidad y Capa 2: Autopistas para Ethereum</h1>
        <p className={styles.paragraph}>
          ¡Amigos! Ya hemos establecido que Ethereum es como una supercomputadora mundial. Es increíblemente segura y descentralizada. Pero tiene un problema, como una carretera principal que se ha vuelto demasiado popular: ¡hay atascos!
        </p>
        <p className={styles.paragraph}>
          Cuando mucha gente quiere usar Ethereum al mismo tiempo, el espacio en los bloques se vuelve escaso y valioso. Las "tarifas de gas" (el peaje por usar la carretera) se disparan, y las transacciones se vuelven lentas. Esto es un gran problema. Si queremos que miles de millones de personas usen esta tecnología, no podemos tener una sola carretera lenta y cara. A esto lo llamamos el <strong>problema de la escalabilidad</strong>.
        </p>

        <h2 className={styles.subtitle}>¿Cómo Descongestionamos la Carretera Principal?</h2>
        <p className={styles.paragraph}>
          No podemos simplemente hacer la carretera principal (la "Capa 1" o "Layer 1" de Ethereum) infinitamente más ancha sin sacrificar la seguridad o la descentralización, que son sus superpoderes. Entonces, la comunidad tuvo una idea brillante: ¿y si construimos <strong>autopistas y carriles rápidos</strong> al lado de la carretera principal?
        </p>
        <p className={styles.paragraph}>
          Eso es exactamente lo que es una <strong>Capa 2</strong> (o "Layer 2"). Es una red separada que se construye "encima" de Ethereum. Funciona de forma independiente, es mucho más rápida y barata, pero toma prestada su seguridad de la carretera principal.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-7074949_1280.jpg" alt="Una red de autopistas rápidas sobre una ciudad, representando las Capas 2 sobre Ethereum" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Los "Rollups": El Truco de Magia</h2>
        <p className={styles.paragraph}>
          La forma más popular de construir estas autopistas se llama <strong>"Rollups"</strong>. ¡El nombre lo dice todo! Imaginen que un montón de gente quiere hacer transacciones. En lugar de que cada coche entre en la carretera principal uno por uno, un Rollup funciona como un autobús:
        </p>
        <ol>
          <li>Recoge a un montón de pasajeros (agrupa cientos de transacciones) fuera de la carretera principal, en su propia red súper rápida.</li>
          <li>Procesa todas esas transacciones de forma barata y casi instantánea.</li>
          <li>Luego, "enrolla" (comprime) los resultados de todas esas transacciones en un solo dato, como un resumen.</li>
          <li>Finalmente, el autobús entra en la carretera principal de Ethereum y publica solo ese pequeño resumen.</li>
        </ol>
        <p className={styles.paragraph}>
          Al hacer esto, en lugar de meter 500 coches en la carretera, solo metemos un autobús. Liberamos una cantidad enorme de espacio, las tarifas bajan drásticamente y todo va mucho más rápido para el usuario final. La seguridad se mantiene porque el "resumen" se publica en la Capa 1, que es inmutable y verificable por todos.
        </p>
        <p className={styles.paragraph}>
          Hay dos sabores principales de Rollups: <strong>Optimistic Rollups</strong> (que asumen que todo es correcto a menos que alguien demuestre lo contrario) y <strong>ZK-Rollups</strong> (que usan una criptografía muy elegante para demostrar matemáticamente que todo es correcto). Ambos buscan el mismo objetivo: escalar Ethereum.
        </p>

        <h2 className={styles.subtitle}>En Resumen: El Futuro es por Capas</h2>
        <p className={styles.paragraph}>
          La escalabilidad no se trata de hacer que la Capa 1 de Ethereum lo haga todo. Se trata de usar la Capa 1 para lo que es mejor: la seguridad y la liquidación final (ser el juez supremo). Y usar las Capas 2, como Arbitrum, Optimism o zkSync, para la actividad del día a día. Es un futuro modular, donde diferentes redes se especializan en diferentes tareas, pero todas confían en la misma base segura. ¡Así es como Ethereum planea pasar de ser una carretera congestionada a un sistema de autopistas global!
        </p>
      </div>
    </>
  );
}
