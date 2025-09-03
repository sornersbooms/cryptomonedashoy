'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AppNFTsPage() {
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
        <h1 className={styles.title}>Aplicación: NFTs (Tokens No Fungibles) - Objetos Únicos Digitales</h1>
        <p className={styles.paragraph}>
          Hemos hablado de criptomonedas, que son como billetes digitales. Un Bitcoin es igual a otro Bitcoin; son intercambiables. Pero, ¿qué pasa si queremos tener algo digital que sea <strong>único</strong>? Algo que no se pueda copiar, que tenga un dueño claro y que sea escaso. ¡Aquí es donde entran los <strong>NFTs</strong>!
        </p>

        <h2 className={styles.subtitle}>¿Qué es un NFT? El Certificado de Autenticidad Digital</h2>
        <p className={styles.paragraph}>
          Imaginen que tienen una obra de arte, un cuadro. Es único, ¿verdad? No hay dos iguales. Si le sacan una foto, la foto no es el cuadro original. El cuadro tiene un certificado de autenticidad que dice quién es el dueño y que es la pieza original.
        </p>
        <p className={styles.paragraph}>
          Un NFT es exactamente eso, pero para el mundo digital. Es un <strong>token no fungible</strong>. "No fungible" significa que es único y no se puede intercambiar por otro igual. Un Bitcoin es fungible (un Bitcoin es igual a otro). Un NFT no lo es. Es un certificado digital de propiedad y autenticidad de un activo digital (o a veces físico) que vive en la blockchain.
        </p>
        <p className={styles.paragraph}>
          El NFT en sí no es la imagen o el video. Es el <em>registro</em> en la blockchain que dice: "Esta persona es la dueña de la versión original de este archivo digital". Es como el certificado de autenticidad del cuadro, pero inmutable y verificable por cualquiera.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/nft-7219625_1280.png" alt="Representación de un NFT como un objeto digital único" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Para Qué Sirven los NFTs?</h2>
        <p className={styles.paragraph}>
          Los NFTs abren un universo de posibilidades para la economía digital:
        </p>
        <ul>
          <li><strong>Arte Digital:</strong> La aplicación más famosa. Permite a los artistas digitales vender sus obras como piezas únicas y escasas, dándoles valor.</li>
          <li><strong>Coleccionables:</strong> Tarjetas de béisbol digitales, personajes de videojuegos, sellos virtuales. Cualquier cosa que la gente quiera coleccionar y que necesite ser única.</li>
          <li><strong>Gaming:</strong> Objetos dentro de videojuegos que realmente posees y puedes vender o intercambiar fuera del juego.</li>
          <li><strong>Música y Medios:</strong> Canciones, álbumes, videos como piezas únicas.</li>
          <li><strong>Entradas y Certificados:</strong> Entradas para eventos, diplomas, licencias. Un NFT puede ser un certificado de que asististe a un concierto o que te graduaste de una universidad.</li>
          <li><strong>Identidad Digital:</strong> Tu pasaporte digital, tu historial médico. Cosas que son únicas para ti.</li>
        </ul>

        <h2 className={styles.subtitle}>¿Por Qué Son Importantes?</h2>
        <p className={styles.paragraph}>
          Los NFTs resuelven el "problema de la copia" en el mundo digital. Antes, cualquier archivo digital podía copiarse infinitas veces sin perder calidad. Con los NFTs, podemos tener escasez y propiedad verificable en el mundo digital. Esto abre un universo de posibilidades para la economía digital, permitiendo a los creadores monetizar su trabajo de formas nuevas y a los usuarios tener una verdadera propiedad sobre sus activos digitales.
        </p>
        <p className={styles.paragraph}>
          Así que, los NFTs son la forma en que la blockchain nos permite tener "objetos únicos" en el mundo digital. Son certificados de autenticidad y propiedad que no pueden ser falsificados ni censurados. Son la base para construir nuevas economías digitales donde la escasez y la propiedad son tan reales como en el mundo físico. ¡Es una idea que está cambiando la forma en que pensamos sobre el arte, los juegos y la propiedad en la era digital!
        </p>
      </div>
    </>
  );
}
