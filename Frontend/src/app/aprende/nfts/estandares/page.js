'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function EstandaresNftsPage() {
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
        <h1 className={styles.title}>Estándares de NFT: ERC-721 vs. ERC-1155 - La Diferencia Fundamental</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! Ya hemos hablado de qué es un NFT y de su historia. Ahora, vamos a meternos un poco más en la "ingeniería" detrás de ellos. No se asusten, no vamos a hacer matemáticas complicadas, solo vamos a entender los principios básicos. Piensen en esto como si estuviéramos comparando dos tipos de tornillos: ambos sirven para unir cosas, pero cada uno tiene sus propiedades y usos específicos. En el mundo de los NFTs, estos "tornillos" son los estándares <strong>ERC-721</strong> y <strong>ERC-1155</strong>.
        </p>

        <h2 className={styles.subtitle}>ERC-721: El Tornillo Único y Singular</h2>
        <p className={styles.paragraph}>
          El estándar <strong>ERC-721</strong> es el que hizo famosos a los NFTs. Es el estándar para crear tokens <strong>no fungibles</strong>, es decir, únicos e irrepetibles. Imaginen que tienen una obra de arte original, como un cuadro. Ese cuadro es único. Si lo venden, ya no lo tienen. No pueden dividirlo en pedacitos y vender cada pedacito como si fuera el cuadro completo. Y no pueden intercambiarlo por otro cuadro idéntico, porque no existe otro cuadro idéntico.
        </p>
        <p className={styles.paragraph}>
          Cada token ERC-721 tiene un identificador único y no puede ser reemplazado por otro. Es como si cada tornillo ERC-721 tuviera un número de serie grabado que lo hace distinto de todos los demás tornillos, incluso si se ven iguales. Esto lo hace perfecto para representar activos digitales que son inherentemente únicos, como:
        </p>
        <ul>
          <li>Obras de arte digitales (un cuadro, una canción, un video)</li>
          <li>Coleccionables (una tarjeta de béisbol digital, un CryptoPunk)</li>
          <li>Propiedad de bienes raíces virtuales (un terreno en el metaverso)</li>
          <li>Entradas para eventos (cada entrada es única y tiene un asiento específico)</li>
        </ul>
        <p className={styles.paragraph}>
          La belleza del ERC-721 es su simplicidad y su enfoque en la unicidad. Es el estándar que nos permitió tener la propiedad verificable de activos digitales singulares.
        </p>

        <h2 className={styles.subtitle}>ERC-1155: El Tornillo Multiusos y Eficiente</h2>
        <p className={styles.paragraph}>
          Ahora, imaginen que necesitan un tipo de tornillo que pueda ser único, pero también que puedan tener muchos idénticos. O que un solo tornillo pueda representar diferentes cosas. Aquí es donde entra el <strong>ERC-1155</strong>. Este estándar es más flexible y eficiente. Permite crear tanto tokens no fungibles (únicos) como tokens fungibles (intercambiables) dentro del mismo contrato inteligente.
        </p>
        <p className={styles.paragraph}>
          Piensen en un videojuego. En un juego, pueden tener un arma única (un NFT ERC-721), pero también pueden tener 100 pociones de salud idénticas (tokens fungibles). Con ERC-1155, el desarrollador del juego puede crear ambos tipos de activos dentro del mismo contrato. Esto es mucho más eficiente, ya que reduce los costos de transacción y simplifica la gestión. Es como tener una caja de herramientas donde un solo tipo de tornillo puede ser usado para diferentes propósitos, o donde puedes tener muchos tornillos idénticos de un solo tipo.
        </p>
        <p className={styles.paragraph}>
          Las características clave del ERC-1155 incluyen:
        </p>
        <ul>
          <li><strong>Múltiples tipos de tokens en un solo contrato:</strong> Puedes tener NFTs únicos y tokens fungibles en el mismo contrato.</li>
          <li><strong>Transacciones por lotes:</strong> Puedes enviar múltiples tokens (de diferentes tipos) en una sola transacción, lo que ahorra gas (tarifas de transacción).</li>
          <li><strong>Eficiencia:</strong> Reduce la cantidad de código y las transacciones necesarias para gestionar diferentes tipos de activos.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/cryptocurrency-3412307_1280.jpg" alt="Comparación de estándares ERC-721 y ERC-1155" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Cuándo Usar Cuál? La Elección del Ingeniero</h2>
        <p className={styles.paragraph}>
          La elección entre ERC-721 y ERC-1155 depende de lo que quieras construir. Es como elegir el material adecuado para un experimento. Si tu objetivo es la unicidad absoluta y la trazabilidad individual de cada activo, el <strong>ERC-721</strong> es tu mejor opción. Es el estándar para la singularidad digital.
        </p>
        <p className={styles.paragraph}>
          Si necesitas flexibilidad, eficiencia y la capacidad de manejar tanto activos únicos como fungibles dentro del mismo sistema, el <strong>ERC-1155</strong> es el camino a seguir. Es ideal para juegos, metaversos y cualquier aplicación donde se necesite una combinación de activos únicos y en cantidad.
        </p>

        <h2 className={styles.subtitle}>Conclusión: Las Reglas del Juego Digital</h2>
        <p className={styles.paragraph}>
          Los estándares ERC-721 y ERC-1155 no son solo códigos aburridos. Son las reglas fundamentales que permiten que el universo de los NFTs funcione. Son como las leyes de la física que dictan cómo se comportan las partículas. Entender estas diferencias nos permite apreciar la ingeniería detrás de los NFTs y cómo se están construyendo los cimientos de una nueva economía digital. No es magia, es diseño inteligente y principios bien definidos. ¡Y eso es todo sobre los estándares de NFT!
        </p>
      </div>
    </>
  );
}
