'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function PropiedadDigitalPage() {
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
        <h1 className={styles.title}>¿Cómo Funciona la Propiedad Digital? El Acto de Poseer Bits</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! Hemos hablado de qué son los NFTs y de sus estándares. Pero, ¿cómo es que de repente podemos "poseer" algo digital? Esto es un concepto que, si lo piensan bien, es un poco extraño. En el mundo físico, la propiedad es bastante clara: si tengo esta tiza, ustedes no la tienen. Pero en el mundo digital, todo es copiable. Si les envío una foto, ustedes tienen una copia, y yo sigo teniendo la original. ¿Cómo se resuelve este dilema? Es como la física cuántica: las cosas se comportan de manera diferente a como estamos acostumbrados, pero hay una lógica subyacente.
        </p>

        <h2 className={styles.subtitle}>El Problema de la Copia Infinita: El Dilema del Bit</h2>
        <p className={styles.paragraph}>
          Antes de los NFTs, el problema fundamental de la propiedad digital era que cualquier archivo podía ser copiado infinitamente sin pérdida de calidad. Esto es genial para compartir información, pero terrible para crear escasez o valor. Si yo creo una obra de arte digital, y cualquiera puede hacer una copia idéntica con un clic derecho, ¿cómo puedo decir que soy el "dueño" de la original? ¿Y cómo puedo venderla si no hay escasez?
        </p>
        <p className={styles.paragraph}>
          Piensen en un billete de un dólar. Si yo les doy un billete, ya no lo tengo. No puedo gastarlo dos veces. Esto se llama el "problema del doble gasto". En el mundo digital, era muy difícil evitar el doble gasto sin una autoridad central que llevara un registro de quién tiene qué. Y esa autoridad central es precisamente lo que Bitcoin y las blockchains vinieron a eliminar.
        </p>

        <h2 className={styles.subtitle}>La Solución Blockchain: El Registro Inmutable</h2>
        <p className={styles.paragraph}>
          Aquí es donde entra la magia de la blockchain. La blockchain es un libro de contabilidad público y distribuido. Cada transacción que ocurre en ella se registra y se verifica por una red de computadoras. Una vez que algo se registra en la blockchain, es casi imposible de alterar o eliminar. Es como si cada vez que se mueve un átomo, se dejara una huella imborrable en el universo.
        </p>
        <p className={styles.paragraph}>
          Con los NFTs, lo que se registra en la blockchain no es el archivo digital en sí (la imagen, la canción, el video), sino un <strong>certificado de propiedad</strong> que apunta a ese archivo. Este certificado es un token único (ERC-721 o ERC-1155) que dice: "Este token, con este identificador único, representa la propiedad de este activo digital (ubicado en esta dirección), y pertenece a esta dirección de billetera".
        </p>
        <p className={styles.paragraph}>
          Entonces, cuando ustedes "poseen" un NFT, lo que realmente poseen es la entrada en la blockchain que dice que su billetera es la propietaria de ese token único. Y como la blockchain es inmutable y transparente, cualquiera puede verificar esa propiedad. Es como si tuvieran el título de propiedad de una casa, pero en lugar de estar en un registro físico en una oficina, está en un registro digital que todo el mundo puede ver y verificar.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3368174_1280.jpg" alt="Cómo funciona la propiedad digital con blockchain" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Activo vs. el Certificado: La Distinción Crucial</h2>
        <p className={styles.paragraph}>
          Es vital entender la diferencia entre el activo digital (la imagen, la canción) y el NFT (el certificado de propiedad). El NFT no es el archivo en sí. El archivo puede seguir siendo copiado y compartido. Lo que el NFT hace es crear una <strong>escasez artificial</strong> y una <strong>propiedad verificable</strong> para una versión específica de ese archivo.
        </p>
        <p className={styles.paragraph}>
          Piensen en un libro firmado por un autor famoso. Hay millones de copias de ese libro, pero solo unas pocas tienen la firma original. La firma no cambia el contenido del libro, pero le da un valor único y coleccionable. El NFT es esa "firma digital" que autentifica una versión específica de un activo digital.
        </p>

        <h2 className={styles.subtitle}>Implicaciones de la Propiedad Digital</h2>
        <p className={styles.paragraph}>
          Esta nueva forma de propiedad tiene implicaciones profundas:
        </p>
        <ul>
          <li><strong>Creación de Valor:</strong> Permite a los creadores monetizar su arte digital de formas nuevas.</li>
          <li><strong>Trazabilidad:</strong> Todo el historial de propiedad de un NFT es transparente en la blockchain.</li>
          <li><strong>Derechos de Autor y Regalías:</strong> Los contratos inteligentes pueden programarse para que los creadores reciban un porcentaje de las ventas futuras de su NFT.</li>
          <li><strong>Comunidades:</strong> La posesión de ciertos NFTs puede otorgar acceso a comunidades exclusivas o beneficios.</li>
        </ul>

        <h2 className={styles.subtitle}>Conclusión: Un Nuevo Paradigma de Posesión</h2>
        <p className={styles.paragraph}>
          La propiedad digital, habilitada por los NFTs y la tecnología blockchain, es un nuevo paradigma. No se trata de poseer los bits en sí, sino de poseer el registro inmutable que certifica tu derecho sobre esos bits. Es una forma de crear escasez y autenticidad en un mundo de abundancia digital. Es un concepto que nos obliga a repensar lo que significa "poseer" en la era de la información. Y como en la física, entender cómo funcionan las cosas a nivel fundamental nos permite construir cosas nuevas y maravillosas. ¡Y eso es cómo funciona la propiedad digital!
        </p>
      </div>
    </>
  );
}
