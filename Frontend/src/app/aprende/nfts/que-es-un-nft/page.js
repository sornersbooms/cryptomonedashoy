'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function QueEsNftPage() {
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
        <h1 className={styles.title}>¿Qué es un NFT? La Singularidad Digital Explicada</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! Hoy vamos a desentrañar un concepto que ha vuelto locos a muchos: los <strong>NFTs</strong>. No se asusten por las siglas, es más sencillo de lo que parece si lo miramos con la curiosidad de un niño que desarma un juguete para ver cómo funciona. Olvídense de los millones de dólares y los monos aburridos por un momento. Vamos a lo fundamental.
        </p>
        <p className={styles.paragraph}>
          Piensen en cualquier cosa que posean. Su coche, su casa, un billete de un dólar. Son cosas que, si las tienen ustedes, no las puede tener otra persona al mismo tiempo, ¿verdad? Son <strong>únicas</strong> en su posesión. Ahora, piensen en una canción digital, una foto en su teléfono o un archivo de texto. Si yo les envío una foto, ustedes tienen una copia, y yo sigo teniendo la original. ¡Podemos tener infinitas copias! Esto es lo que llamamos <strong>fungible</strong>: una unidad es intercambiable por otra idéntica, como un billete de un dólar por otro billete de un dólar.
        </p>

        <h2 className={styles.subtitle}>La Magia de la Unicidad Digital</h2>
        <p className={styles.paragraph}>
          Aquí es donde entra el truco del NFT. Un NFT, o <strong>Token No Fungible</strong>, es como un certificado de autenticidad digital. No es la obra de arte en sí, sino la prueba de que tú eres el <strong>propietario original</strong> de esa obra de arte digital, o de cualquier otro activo digital, en un registro público e inmutable llamado <strong>blockchain</strong>.
        </p>
        <p className={styles.paragraph}>
          Imaginen que tienen una obra de arte famosa, como la Mona Lisa. Hay millones de copias de la Mona Lisa en postales, tazas, pósters. Pero solo hay una Mona Lisa original en el Louvre. El NFT es como el certificado que dice: "Esta es la Mona Lisa original, y pertenece a [nombre del propietario]". Pero en lugar de un museo, el registro está en una red de computadoras descentralizada.
        </p>
        <p className={styles.paragraph}>
          Entonces, cuando compras un NFT, no estás comprando la imagen JPEG que puedes ver en internet. Estás comprando la <strong>propiedad verificable</strong> de esa imagen en la blockchain. Es un concepto nuevo, porque antes, en el mundo digital, todo era infinitamente copiable y no había una forma nativa de probar la escasez o la propiedad única.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/nft-7219625_1280.png" alt="Concepto de NFT y arte digital" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Cómo Funciona? El Sello Digital</h2>
        <p className={styles.paragraph}>
          Cada NFT tiene un identificador único y metadatos que lo distinguen de cualquier otro token. Estos datos se almacenan en una blockchain (generalmente Ethereum, pero hay otras). Cuando alguien "mintea" un NFT, lo que hace es crear una entrada en la blockchain que dice: "Este archivo digital (con este hash específico) ahora está asociado a este token único, y este token pertenece a esta dirección de billetera".
        </p>
        <p className={styles.paragraph}>
          Es como poner un sello digital irrompible en un objeto digital. Ese sello no puede ser duplicado, falsificado ni alterado. Y como está en la blockchain, todo el mundo puede verificar quién es el propietario actual y todo el historial de transacciones de ese NFT.
        </p>

        <h2 className={styles.subtitle}>¿Para Qué Sirven? Más Allá del Arte</h2>
        <p className={styles.paragraph}>
          Aunque los NFTs se hicieron famosos por el arte digital, su potencial va mucho más allá. Piensen en ellos como una forma de representar la propiedad de cualquier cosa, digital o incluso física, de manera verificable y transparente:
        </p>
        <ul>
          <li><strong>Arte y Coleccionables:</strong> La aplicación más obvia.</li>
          <li><strong>Música:</strong> Un artista podría vender un NFT que represente la propiedad de una canción o un porcentaje de sus regalías.</li>
          <li><strong>Entradas de Eventos:</strong> Una entrada NFT sería imposible de falsificar y su reventa podría ser controlada.</li>
          <li><strong>Bienes Raíces:</strong> La propiedad de una casa podría estar representada por un NFT.</li>
          <li><strong>Identidad Digital:</strong> Tu pasaporte o licencia de conducir podrían ser NFTs.</li>
          <li><strong>Activos en Videojuegos:</strong> Los objetos únicos que ganas en un juego podrían ser tuyos de verdad, y podrías venderlos o intercambiarlos fuera del juego.</li>
        </ul>

        <h2 className={styles.subtitle}>Conclusión: Una Nueva Forma de Propiedad</h2>
        <p className={styles.paragraph}>
          En esencia, un NFT es una herramienta para crear escasez y propiedad verificable en el mundo digital. Es un concepto que desafía nuestra forma tradicional de pensar sobre lo que significa "poseer" algo en un entorno donde todo puede ser copiado infinitamente. No es la imagen, es el certificado. No es el archivo, es la prueba de autenticidad y propiedad.
        </p>
        <p className={styles.paragraph}>
          Es una idea poderosa que apenas estamos empezando a explorar, y como cualquier nueva tecnología, tiene sus complejidades y sus exageraciones. Pero la idea fundamental de la unicidad digital es un concepto que, una vez que lo entiendes, abre un universo de posibilidades. ¡Y eso es un NFT!
        </p>
      </div>
    </>
  );
}
