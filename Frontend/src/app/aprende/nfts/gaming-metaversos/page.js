'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function NftsGamingMetaversosPage() {
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
        <h1 className={styles.title}>Casos de Uso: Gaming y Metaversos</h1>
        <p className={styles.paragraph}>
          ¡Ah, los videojuegos! Esos mundos virtuales donde uno puede ser un héroe, un constructor, un explorador... Y ahora, con los NFTs, la cosa se pone aún más interesante. ¿Han pensado alguna vez en todas esas espadas mágicas, armaduras brillantes o skins extravagantes que coleccionan en sus juegos favoritos? Son suyas, ¿verdad? Bueno, sí y no.
        </p>
        <p className={styles.paragraph}>
          Piensen en ello como si estuvieran jugando en un casino. Ganan fichas, las usan para jugar, y si se van, pueden cambiar esas fichas por dinero real. Pero, ¿qué pasa si el casino decide que sus fichas ya no valen nada? O peor, ¿qué pasa si el casino cierra? Todas sus fichas, todo su esfuerzo, ¡se esfuman! En la mayoría de los videojuegos, los objetos que "poseen" son como esas fichas de casino: solo existen dentro de las reglas y los servidores del juego. El desarrollador del juego es el dueño del casino, y él tiene el control total.
        </p>

        <h2 className={styles.subtitle}>La Espada que Realmente es Tuya</h2>
        <p className={styles.paragraph}>
          Aquí es donde los NFTs entran en juego en el mundo del gaming. Imaginen que esa espada mágica que tanto les costó conseguir no es solo un dato en el servidor del juego. Imaginen que es un <strong>NFT</strong>. Eso significa que la propiedad de esa espada está registrada en la blockchain, en esa "libreta de contabilidad mágica" que no pertenece a nadie y a la vez a todos.
        </p>
        <p className={styles.paragraph}>
          Si esa espada es un NFT, entonces es <strong>realmente suya</strong>. No solo dentro del juego. Si el juego cierra, la espada sigue siendo suya. Pueden venderla a otro jugador fuera del juego, en un mercado de NFTs. Pueden incluso, en teoría, usarla en otro juego si los desarrolladores lo permiten. ¡Es como si pudieran llevarse sus fichas del casino a otro casino! Eso es lo que llamamos <strong>interoperabilidad</strong>.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-9268421_1280.png" alt="Gaming y Metaversos con NFTs" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Metaversos: Construyendo Nuevos Universos</h2>
        <p className={styles.paragraph}>
          Y luego están los metaversos. ¿Qué es un metaverso? Es como un gran universo virtual persistente donde la gente puede interactuar, jugar, trabajar, socializar. Piensen en un videojuego masivo, pero donde las reglas no las dicta una sola compañía, sino que son más abiertas y los usuarios tienen más control.
        </p>
        <p className={styles.paragraph}>
          En estos metaversos, los NFTs son los <strong>ladrillos fundamentales</strong>. Pueden ser parcelas de tierra virtual, avatares únicos, ropa digital, edificios, vehículos... Cualquier cosa que se pueda poseer en el mundo real, se puede representar como un NFT en el metaverso. Si compran una parcela de tierra virtual como un NFT, esa tierra es suya. Pueden construir en ella, alquilarla, venderla. Es como tener un pedazo de bienes raíces en un mundo digital.
        </p>

        <h2 className={styles.subtitle}>¿Por Qué es un Gran Negocio?</h2>
        <p className={styles.paragraph}>
          ¿Por qué es esto importante? Porque cambia la relación entre los jugadores y los desarrolladores. Los jugadores ya no son solo consumidores; se convierten en <strong>propietarios</strong> y, en algunos casos, en <strong>creadores</strong> dentro del ecosistema del juego. Pueden ganar dinero real vendiendo los objetos que consiguen o crean. Esto crea una economía real dentro del juego, donde el tiempo y el esfuerzo que invierten tienen un valor tangible.
        </p>
        <p className={styles.paragraph}>
          Es como si el casino, en lugar de solo dejarte jugar con sus fichas, te permitiera ser dueño de las mesas de póker, o de los tragamonedas, y ganar un porcentaje de lo que la gente juega en ellas. Es una idea salvaje, ¿verdad? Pero es la promesa de los NFTs en el gaming y los metaversos: dar a los usuarios una verdadera participación y propiedad en los mundos virtuales que habitan. ¡Es un experimento fascinante en la economía digital! 
        </p>
      </div>
    </>
  );
}
