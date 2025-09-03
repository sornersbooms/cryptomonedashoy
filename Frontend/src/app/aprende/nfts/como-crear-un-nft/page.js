'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ComoCrearUnNFTPage() {
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
        <h1 className={styles.title}>Cómo Crear (Mintear) un NFT: La Magia de la Singularidad Digital</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! Hoy vamos a hablar de algo que suena un poco a alquimia digital: <strong>mintear un NFT</strong>. No se asusten con la palabra, es más sencillo de lo que parece. Piensen en ello como el momento en que una idea, un dibujo, una canción, o cualquier cosa que exista en el universo digital, se convierte en algo único, verificable y, sí, ¡coleccionable!
        </p>
        <p className={styles.paragraph}>
          Imaginen que tienen una obra de arte. Una pintura, por ejemplo. Si quieren que esa pintura sea reconocida como *suya*, y que todo el mundo sepa que es la *original*, ¿qué hacen? La firman, la enmarcan, quizás la registran en algún sitio. En el mundo físico, hay formas de establecer la autenticidad y la propiedad. Pero, ¿y en el mundo digital? ¡Ahí es donde entra el minteo!
        </p>

        <h2 className={styles.subtitle}>El Acto de la Creación Digital</h2>
        <p className={styles.paragraph}>
          Mintear un NFT es, en esencia, el proceso de tomar un archivo digital (una imagen JPG, un GIF, un archivo de audio MP3, un video MP4, lo que sea) y registrarlo en una blockchain. Es como si le pusieran un sello de autenticidad inalterable, un certificado de nacimiento digital que dice: "Este es el original, y pertenece a X persona".
        </p>
        <p className={styles.paragraph}>
          ¿Cómo funciona esta magia? Bueno, no es magia, es física... ¡digo, criptografía! Cuando mintean un NFT, lo que realmente están haciendo es crear un <strong>token único</strong> en una blockchain (como Ethereum, por ejemplo). Este token contiene información que apunta a su archivo digital. No es que el archivo en sí se guarde en la blockchain, ¡eso sería carísimo y poco práctico! Lo que se guarda es un registro, un puntero, y metadatos que describen su obra.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/nft-7219625_1280.png" alt="Representación de un NFT" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Los Ingredientes para Mintear</h2>
        <p className={styles.paragraph}>
          Para mintear un NFT, necesitan algunas cosas, como si fueran a hacer un experimento:
        </p>
        <ul>
          <li><strong>Su Obra Digital:</strong> El archivo que quieren convertir en NFT.</li>
          <li><strong>Una Wallet de Criptomonedas:</strong> Necesitan un lugar donde guardar sus criptomonedas y, una vez minteado, su NFT. Piensen en ella como su cartera digital.</li>
          <li><strong>Criptomonedas (Gas):</strong> Mintear no es gratis. Hay que pagar una pequeña tarifa a la red (conocida como "gas") para que los mineros o validadores procesen su transacción y registren su NFT en la blockchain. Es como pagar la electricidad para que la máquina funcione.</li>
          <li><strong>Una Plataforma de Minteo (Marketplace):</strong> Sitios como OpenSea, Rarible o Foundation les proporcionan las herramientas para hacer este proceso. Son como las fábricas donde se imprimen estos certificados digitales.</li>
        </ul>

        <h2 className={styles.subtitle}>El Proceso, Paso a Paso (Simplificado)</h2>
        <p className={styles.paragraph}>
          1.  <strong>Conectan su Wallet:</strong> Entran a la plataforma de minteo y conectan su cartera digital.
          2.  <strong>Suben su Archivo:</strong> Seleccionan el archivo digital que quieren mintear.
          3.  <strong>Añaden Detalles:</strong> Le ponen un nombre, una descripción, propiedades (como si fuera un sombrero o un color específico en un personaje), y eligen cuántas copias quieren mintear (generalmente una para que sea único).
          4.  <strong>Pagan el Gas:</strong> La plataforma les mostrará la tarifa de gas. Confirman la transacción en su wallet.
          5.  <strong>¡Minteado!:</strong> Una vez que la transacción se confirma en la blockchain, ¡voilà! Su NFT ha nacido. Ahora es un activo digital único, rastreable y verificable por cualquiera en la red.
        </p>
        <p className={styles.paragraph}>
          Es un concepto poderoso, ¿verdad? Estamos pasando de un mundo donde las copias digitales eran indistinguibles del original, a uno donde la singularidad y la propiedad digital son una realidad. Es como si cada bit de información pudiera tener su propia huella dactilar única. ¡La naturaleza nos ha dado las leyes de la física, y ahora nosotros estamos creando las leyes de la propiedad digital! Es fascinante.
        </p>
      </div>
    </>
  );
}
