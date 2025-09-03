'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function FuturoNFTsPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const nftsCourse = courseData.nfts;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={nftsCourse.title}
        modules={nftsCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>El Futuro de los NFTs: Más Allá de la Colección Digital</h1>
        <p className={styles.paragraph}>
          ¡Hola, visionarios! Hoy vamos a hacer un ejercicio fascinante, un poco como predecir el comportamiento de las partículas subatómicas: vamos a intentar vislumbrar <strong>el futuro de los NFTs</strong>. Es un campo tan nuevo y en constante evolución que cualquier predicción es, por naturaleza, una hipótesis. Pero, como buenos científicos, podemos observar las tendencias, las fuerzas en juego, y hacer algunas conjeturas educadas.
        </p>
        <p className={styles.paragraph}>
          Imaginen que están al borde de un nuevo continente. Lo que ven ahora son solo las playas, quizás algunos árboles. Pero saben que hay montañas, ríos, ciudades enteras por descubrir. Los NFTs están en esa fase. Lo que hemos visto hasta ahora (arte digital, coleccionables) es solo la punta del iceberg. La verdadera revolución está por venir, y no se trata solo de imágenes de monos.
        </p>

        <h2 className={styles.subtitle}>De la Propiedad a la Utilidad: El Gran Salto</h2>
        <p className={styles.paragraph}>
          Hasta ahora, muchos NFTs se han centrado en la <strong>propiedad digital</strong>: ser dueño de algo único. Pero el futuro, mis amigos, está en la <strong>utilidad</strong>. Un NFT no será solo algo que posees, sino algo que *hace* cosas, que te *permite* acceder a experiencias, que te *otorga* derechos.
        </p>
        <p className={styles.paragraph}>
          Piensen en los NFTs como llaves. Una llave no es valiosa por sí misma, sino por la puerta que abre. En el futuro, los NFTs podrían ser:
        </p>
        <ul>
          <li><strong>Entradas a Eventos:</strong> Un NFT como tu boleto para un concierto, un partido, o una conferencia. Imposible de falsificar, fácil de transferir.</li>
          <li><strong>Identidad Digital:</strong> Tu pasaporte digital, tu historial médico, tus credenciales académicas, todo en forma de NFT, bajo tu control.</li>
          <li><strong>Propiedad de Activos Físicos:</strong> Un NFT que representa la propiedad de una casa, un coche, o incluso una parte de una obra de arte física.</li>
          <li><strong>Licencias de Software:</strong> Un NFT que te da derecho a usar un programa, y que puedes revender cuando ya no lo necesites.</li>
        </ul>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-9268421_1280.png" alt="Futuro de la tecnología blockchain" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Intersección con el Metaverso y la Web3</h2>
        <p className={styles.paragraph}>
          El futuro de los NFTs está intrínsecamente ligado al desarrollo del <strong>Metaverso</strong> y la <strong>Web3</strong>. Si el Metaverso es el nuevo internet tridimensional, los NFTs serán los objetos, las propiedades, las identidades y las experiencias dentro de él. Podrán llevar sus avatares, sus ropas, sus bienes virtuales de un mundo a otro, porque son NFTs, y son suyos.
        </p>
        <p className={styles.paragraph}>
          La Web3, con su énfasis en la descentralización y la propiedad del usuario, es el marco perfecto para que los NFTs florezcan. Ya no estaremos a merced de grandes corporaciones que controlan nuestros datos y nuestros activos digitales. Con los NFTs, la propiedad y el control vuelven a las manos del individuo. Es una democratización de la propiedad digital.
        </p>

        <h2 className={styles.subtitle}>Desafíos y Oportunidades: La Incertidumbre de la Ciencia</h2>
        <p className={styles.paragraph}>
          Por supuesto, no todo es un camino de rosas. Hay desafíos: la escalabilidad de las blockchains, la regulación gubernamental, la educación masiva, y la necesidad de construir interfaces de usuario más amigables. Pero cada desafío es una oportunidad para la innovación, para que mentes brillantes encuentren soluciones, como siempre ha ocurrido en la ciencia.
        </p>
        <p className={styles.paragraph}>
          El futuro de los NFTs es un lienzo en blanco, esperando ser pintado por la creatividad y la ingeniosidad humana. No sabemos exactamente cómo se verá, pero sabemos que será fascinante. Y lo más emocionante es que ustedes, al entender estos conceptos, son parte de la construcción de ese futuro. ¡Así que sigan explorando, sigan preguntando, y sigan siendo curiosos! ¡Y eso es todo por hoy!
        </p>
      </div>
    </>
  );
}
