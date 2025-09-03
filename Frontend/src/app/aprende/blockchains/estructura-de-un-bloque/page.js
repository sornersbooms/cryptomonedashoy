'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function EstructuraBloquePage() {
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
        <h1 className={styles.title}>La Estructura de un Bloque: Un LEGO Digital</h1>
        <p className={styles.paragraph}>
          Ya hemos hablado de la "cadena de bloques", pero ¿qué es exactamente un "bloque"? ¡No es tan complicado! Pensemos en un bloque como una caja de LEGO transparente, o una de esas cajas fuertes para documentos importantes. Podemos ver lo que hay dentro, pero está sellada de una forma muy especial.
        </p>
        <p className={styles.paragraph}>
          Cada una de estas cajas o "bloques" tiene unos cuantos ingredientes clave. Vamos a verlos uno por uno.
        </p>

        <h2 className={styles.subtitle}>Ingrediente 1: Las Transacciones (El Contenido)</h2>
        <p className={styles.paragraph}>
          Esto es lo más fácil de entender. Dentro de la caja, metemos una lista de las transacciones más recientes. "Alicia le paga 1 Bitcoin a Roberto", "David le paga 5 a Carolina", etc. Es el propósito principal del bloque: registrar quién hizo qué. Como los documentos que guardas en la caja fuerte.
        </p>

        <h2 className={styles.subtitle}>Ingrediente 2: La Huella del Bloque Anterior (El Pegamento)</h2>
        <p className={styles.paragraph}>
          Aquí es donde empieza la "cadena". Antes de sellar nuestra caja, miramos la caja que vino justo antes, le sacamos su huella digital única (su <strong>hash</strong>, ¿recuerdan la licuadora mágica?) y metemos esa huella dentro de <em>nuestra</em> caja.
        </p>
        <p className={styles.paragraph}>
          Esto es importantísimo. Es lo que conecta un bloque con el anterior, creando un eslabón. Si un villano intentara cambiar algo en un bloque antiguo, su huella cambiaría, y la conexión con el bloque siguiente se rompería. ¡Toda la red se daría cuenta al instante! Es un truco genial para hacer la historia inmutable.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-9268421_1280.png" alt="Estructura de bloques enlazados" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Ingrediente 3: El "Nonce" (El Número de la Suerte)</h2>
        <p className={styles.paragraph}>
          Aquí entra en juego la "minería". La red de Bitcoin impone una regla: "No puedes sellar tu bloque así como así. La huella digital de tu bloque tiene que cumplir una condición muy específica, como empezar con un montón de ceros".
        </p>
        <p className={styles.paragraph}>
          La primera vez que calculas la huella, no va a cumplir la regla. Así que tienes que añadir a la mezcla un número al azar, un "número que se usa una sola vez" o <strong>Nonce</strong>. Y pruebas otra vez. ¿No funciona? Cambias el nonce. ¿Tampoco? Cambias el nonce otra vez. Los mineros hacen esto millones y millones de veces por segundo.
        </p>
        <p className={styles.paragraph}>
          Cuando un minero, por pura suerte, encuentra un nonce que produce una huella válida, ¡BINGO! Ha resuelto el acertijo. Ha ganado el derecho a añadir su bloque a la cadena y recibe una recompensa. Este proceso es la famosa <strong>Prueba de Trabajo (Proof-of-Work)</strong>.
        </p>

        <h2 className={styles.subtitle}>El Sello Final: La Huella de Este Bloque</h2>
        <p className={styles.paragraph}>
          Una vez que tienes los tres ingredientes (las transacciones, la huella del bloque anterior y el nonce ganador), metes todo junto en la licuadora mágica para crear la huella digital de tu propio bloque. Este es el sello final, la identidad única de tu bloque.
        </p>
        <p className={styles.paragraph}>
          En resumen, un bloque es simplemente un paquete de datos que contiene:
        </p>
        <ul>
          <li>Una lista de transacciones.</li>
          <li>Una referencia al bloque anterior (su hash).</li>
          <li>Un número especial (nonce) que prueba que se realizó un gran esfuerzo computacional.</li>
        </ul>
        <p className={styles.paragraph}>
          ¡Y ya está! Así es como se construye un LEGO digital, una pieza a la vez, para formar una cadena segura y confiable.
        </p>
      </div>
    </>
  );
}
