'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function NftsArteColeccionablesPage() {
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
        <h1 className={styles.title}>Casos de Uso: Arte y Coleccionables</h1>
        <p className={styles.paragraph}>
          ¡Ah, los NFTs! Esas pequeñas cosas que parecen tan complicadas, ¿verdad? La gente habla de arte digital, de millones de dólares por un JPEG... Y uno se rasca la cabeza y piensa: "¿Pero qué demonios está pasando aquí?". Bueno, déjenme decirles, no es tan misterioso como parece. Es solo una nueva forma de jugar con la idea de la "propiedad" en el mundo digital.
        </p>
        <p className={styles.paragraph}>
          Imaginen esto: tienen una obra de arte. Una pintura, por ejemplo. Es única, ¿verdad? Solo hay una. Si la tienen, es suya. Pueden colgarla en su pared, pueden venderla, pueden hacer lo que quieran con ella. Pero, ¿y si esa obra de arte es un archivo de computadora? Un dibujo digital, una canción, un video. ¡Cualquiera puede copiarlo! Pueden tener mil copias idénticas en un segundo. Entonces, ¿cómo le dan "unicidad" a algo que es infinitamente copiable?
        </p>

        <h2 className={styles.subtitle}>El Certificado de Autenticidad Digital</h2>
        <p className={styles.paragraph}>
          Aquí es donde entra el truco, la pequeña genialidad de los NFTs. Piensen en un NFT no como la obra de arte en sí, sino como un <strong>certificado de autenticidad</strong>. Es como si tuvieran un cuadro famoso, y junto a él, un papelito firmado por el artista que dice: "Esta es la original. Las demás son copias". Pero este papelito no es de papel, ¡es digital! Y está grabado en una de esas "libretas de contabilidad mágicas" que llamamos blockchain.
        </p>
        <p className={styles.paragraph}>
          Así que, cuando compran un NFT de arte, no están comprando el JPEG. ¡El JPEG lo pueden descargar gratis! Lo que están comprando es la <strong>prueba irrefutable</strong> de que ustedes son los dueños de la "versión original" o la "versión canónica" de ese archivo digital. Es como tener el autógrafo del artista en la única copia que él reconoce como "suya".
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/nft-7219625_1280.png" alt="Arte digital NFT" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Coleccionables: La Fiebre del Cromo Digital</h2>
        <p className={styles.paragraph}>
          Y esto no es solo para el arte "serio". Piensen en los coleccionables. ¿Recuerdan las tarjetas de béisbol? O las estampitas, o los cómics. ¿Por qué valen dinero? Porque son escasos, porque son difíciles de conseguir, y porque la gente los quiere. Los NFTs hacen lo mismo, pero con cosas digitales.
        </p>
        <p className={styles.paragraph}>
          Pueden ser avatares de monos aburridos, o gatitos pixelados, o momentos destacados de deportes. La idea es la misma: hay una cantidad limitada de ellos, y cada uno tiene un identificador único en la blockchain. Si tienen el NFT de un "CryptoPunk" en particular, ¡nadie más puede tener ese mismo CryptoPunk! Pueden copiar la imagen, claro, pero no pueden copiar la "propiedad" que está registrada en la blockchain. Es como tener la tarjeta de béisbol de Babe Ruth, pero en lugar de cartón, es un pedacito de código.
        </p>

        <h2 className={styles.subtitle}>¿Por Qué es Importante?</h2>
        <p className={styles.paragraph}>
          Bueno, ¿por qué es importante que la gente pueda ser dueña de cosas digitales de esta manera? Porque abre un mundo completamente nuevo para los creadores. Un artista digital, por primera vez, puede vender su obra de una manera que antes era imposible. Puede crear escasez artificial para algo que es digitalmente abundante. Y puede recibir regalías cada vez que su obra se revende, ¡automáticamente! Es como si cada vez que su pintura cambiara de manos, un pequeño porcentaje volviera a su bolsillo. ¡Eso es un cambio de juego!
        </p>
        <p className={styles.paragraph}>
          Así que, la próxima vez que escuchen sobre un NFT, no piensen en el JPEG. Piensen en el certificado. Piensen en la prueba de propiedad. Piensen en la escasez digital. Y piensen en cómo esta pequeña idea está cambiando la forma en que valoramos y comerciamos con las cosas en el vasto y extraño universo digital. ¡Es fascinante!
        </p>
      </div>
    </>
  );
}
