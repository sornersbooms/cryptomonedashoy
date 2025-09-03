'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function NodosP2PPage() {
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
        <h1 className={styles.title}>Nodos y Redes P2P: Una Red de Chismosos Organizados</h1>
        <p className={styles.paragraph}>
          Hemos hablado mucho de "la red", "los participantes" y "la descentralización". Pero, ¿qué es eso en realidad? ¿Quiénes forman la red? La respuesta es simple y elegante: todo se basa en algo que conocemos muy bien, el chisme. O, en términos técnicos, una red <strong>Peer-to-Peer (P2P)</strong>.
        </p>

        <h2 className={styles.subtitle}>¿Qué es una Red P2P? El Chisme sin un Jefe</h2>
        <p className={styles.paragraph}>
          Imaginen que no existe un gran periódico o un canal de noticias central que anuncie la "verdad" oficial. En su lugar, hay un pueblo lleno de gente, y todos están constantemente hablando entre ellos. Si Ana le da una manzana a Carlos, no va a la oficina del alcalde para registrarlo. Simplemente se lo cuenta a sus tres o cuatro amigos más cercanos.
        </p>
        <p className={styles.paragraph}>
          Esos amigos, al enterarse, se lo cuentan a sus propios amigos. Y estos, a su vez, a los suyos. En cuestión de segundos, ¡todo el pueblo sabe que Ana le dio una manzana a Carlos! No hay un punto central. Si uno de los chismosos se va de vacaciones, no pasa nada, la noticia se sigue extendiendo por otras rutas. Esto es una red P2P: una red de pares, de iguales, donde todos hablan con todos sin un intermediario.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-7074949_1280.jpg" alt="Visualización de una red de nodos conectados" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Y Qué es un Nodo? El Chismoso Guardián</h2>
        <p className={styles.paragraph}>
          En este pueblo, cada "chismoso" es un <strong>nodo</strong>. Un nodo no es más que una computadora que ejecuta el software de una blockchain (por ejemplo, Bitcoin Core). Este software le da al nodo unas tareas muy importantes:
        </p>
        <ol>
          <li><strong>Guardar una copia del libro mayor:</strong> Cada nodo completo tiene su propia copia de toda la historia de la blockchain. No confía en la palabra de nadie; tiene los datos para verificarlo todo por sí mismo.</li>
          <li><strong>Escuchar los chismes (transacciones):</strong> Está constantemente escuchando las nuevas transacciones que otros nodos le anuncian.</li>
          <li><strong>Validar los chismes:</strong> Cuando escucha una nueva transacción, la comprueba con su libro mayor. ¿Tiene el emisor los fondos suficientes? ¿Es correcta la firma digital? Si una regla se rompe, el nodo descarta la transacción y no la pasa. ¡Es un guardián de las reglas!</li>
          <li><strong>Propagar los chismes válidos:</strong> Si la transacción es válida, el nodo se la cuenta a los otros nodos a los que está conectado, ayudando a que la información se distribuya por toda la red.</li>
        </ol>
        <p className={styles.paragraph}>
          Los mineros o validadores que proponen nuevos bloques son simplemente un tipo especial de nodo. Pero todos los nodos completos son los que realmente mantienen la red segura al hacer cumplir las reglas y conservar la historia.
        </p>
        
        <h2 className={styles.subtitle}>No Todos los Nodos son Iguales</h2>
        <p className={styles.paragraph}>
          Hay que distinguir entre <strong>nodos completos</strong>, que son los guardianes que se descargan toda la blockchain y validan cada transacción, y los <strong>nodos ligeros</strong> (como muchas wallets de móvil). Estos últimos no se descargan todo, sino que confían en los nodos completos para obtener la información que necesitan. Son como los habitantes del pueblo que no se saben todos los chismes, pero le preguntan a sus amigos de confianza cuando necesitan saber algo.
        </p>
        <p className={styles.paragraph}>
          Así que, cuando pienses en una blockchain, no imagines una "nube" mágica. Imagina miles de computadoras (nodos) por todo el mundo, chismorreando (red P2P), validando y preservando la historia de forma colectiva.
        </p>
      </div>
    </>
  );
}
