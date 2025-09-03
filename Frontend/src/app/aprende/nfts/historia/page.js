'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function HistoriaNftsPage() {
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
        <h1 className={styles.title}>Historia de los NFTs: De los Bits a la Singularidad</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! Ayer hablamos de qué es un NFT, esa idea de la unicidad digital. Pero, ¿cómo llegamos a esto? ¿Fue una idea que apareció de la nada, como un conejo de un sombrero? ¡Claro que no! La ciencia y la tecnología rara vez funcionan así. Es un proceso de acumulación, de pequeños pasos, de ideas que se conectan de formas inesperadas. La historia de los NFTs es como la historia de la física: no es una línea recta, sino una serie de descubrimientos y conexiones que nos llevan a un entendimiento más profundo.
        </p>

        <h2 className={styles.subtitle}>Los Primeros Bits Únicos: Coloured Coins (2012-2013)</h2>
        <p className={styles.paragraph}>
          Imaginen que tienen un montón de canicas idénticas. Todas son iguales, ¿verdad? Pero, ¿y si pintan una de ellas de un color diferente? Ahora esa canica es especial, es única. Eso es, en esencia, lo que fueron las <strong>Coloured Coins</strong> en la blockchain de Bitcoin. La gente empezó a "colorear" pequeñas fracciones de Bitcoin, asignándoles un significado o un activo del mundo real. Podían representar acciones de una empresa, propiedades, o incluso obras de arte. La idea era usar la seguridad y la inmutabilidad de Bitcoin para rastrear la propiedad de activos únicos.
        </p>
        <p className={styles.paragraph}>
          No eran NFTs como los conocemos hoy, porque la blockchain de Bitcoin no estaba diseñada para manejar la complejidad de los metadatos que vemos en los NFTs modernos. Era un experimento, una prueba de concepto, pero la semilla de la unicidad digital ya estaba plantada.
        </p>

        <h2 className={styles.subtitle}>Counterparty y Rare Pepes (2014-2016): El Arte de la Escasez</h2>
        <p className={styles.paragraph}>
          Luego vino <strong>Counterparty</strong>, una plataforma construida sobre Bitcoin que permitía crear activos digitales más complejos. Y con ella, llegaron los <strong>Rare Pepes</strong>. Sí, esos memes de la rana Pepe. La gente empezó a crear y coleccionar versiones únicas de estos memes, limitando su número y dándoles un valor de escasez. Fue un fenómeno cultural que demostró que la gente estaba dispuesta a pagar por la propiedad digital verificable, incluso si el "arte" era un meme de internet. Era como si de repente, la gente se diera cuenta de que una copia de un dibujo de un niño podía ser valiosa si era la "original" y escasa.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-9268421_1280.png" alt="Historia de los NFTs, evolución de la tecnología blockchain" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Ethereum y el Estándar ERC-721 (2017): La Explosión</h2>
        <p className={styles.paragraph}>
          El verdadero punto de inflexión llegó con <strong>Ethereum</strong>. Ethereum no es solo una criptomoneda; es una plataforma que permite crear "contratos inteligentes", que son como pequeños programas que se ejecutan en la blockchain. Esto abrió la puerta a una complejidad mucho mayor para los activos digitales.
        </p>
        <p className={styles.paragraph}>
          En 2017, se lanzó el estándar <strong>ERC-721</strong>. Este estándar es la "receta" que define cómo debe ser un token no fungible en Ethereum. Es como si de repente tuviéramos un manual de instrucciones claro para crear esas canicas únicas y coloreadas, pero ahora con la capacidad de añadirles un montón de información extra (metadatos) y de programar su comportamiento. Esto permitió la creación de proyectos como <strong>CryptoPunks</strong> (colecciones de avatares pixelados) y, sobre todo, <strong>CryptoKitties</strong>.
        </p>
        <p className={styles.paragraph}>
          CryptoKitties fue un juego donde podías coleccionar, criar y comerciar con gatos digitales únicos. Fue tan popular que llegó a congestionar la red de Ethereum. Demostró al mundo que los NFTs no eran solo una curiosidad, sino que tenían un potencial masivo para el entretenimiento y la creación de valor digital. Fue el momento en que la idea de la propiedad digital única pasó de ser una teoría a una realidad palpable para millones.
        </p>

        <h2 className={styles.subtitle}>El Boom de 2021 y Más Allá: La Singularidad se Vuelve Viral</h2>
        <p className={styles.paragraph}>
          Después de CryptoKitties, la idea de los NFTs siguió evolucionando, pero fue en 2021 cuando explotó. Artistas, celebridades, marcas y coleccionistas se lanzaron al espacio NFT. Vimos obras de arte digitales vendiéndose por millones, colecciones de avatares como los Bored Ape Yacht Club alcanzando valores estratosféricos, y la gente empezando a entender que los NFTs podían ser mucho más que simples imágenes: podían ser pases de acceso a comunidades, licencias de uso, o incluso representaciones de activos físicos.
        </p>
        <p className={styles.paragraph}>
          Hoy, la historia de los NFTs sigue escribiéndose. Estamos en una fase de experimentación, de prueba y error, de entender las verdaderas implicaciones de la propiedad digital. Es un campo en constante evolución, lleno de nuevas ideas y aplicaciones. Es como el universo: siempre expandiéndose, siempre revelando nuevas maravillas.
        </p>

        <h2 className={styles.subtitle}>Conclusión: No es una Moda Pasajera, es una Evolución</h2>
        <p className={styles.paragraph}>
          La historia de los NFTs no es la de una moda pasajera, sino la de una evolución natural de la tecnología digital y la forma en que interactuamos con la propiedad. Desde las simples "monedas coloreadas" hasta los complejos ecosistemas de hoy, cada paso ha sido una pieza en el rompecabezas de cómo crear escasez y valor en un mundo de bits infinitamente copiables. Entender esta historia nos ayuda a ver que los NFTs no son una anomalía, sino una consecuencia lógica de la búsqueda humana de la unicidad y la propiedad, incluso en el reino digital. ¡Y eso es la historia de los NFTs!
        </p>
      </div>
    </>
  );
}
