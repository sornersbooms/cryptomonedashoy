'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function CriptografiaEsencialPage() {
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
        <h1 className={styles.title}>Criptografía Esencial: Sellos y Firmas Digitales</h1>
        <p className={styles.paragraph}>
          Muy bien, hablemos de la magia que hace que todo esto sea seguro: la <strong>criptografía</strong>. No se asusten por el nombre. En el fondo, son solo dos ideas muy simples que podemos entender con cosas del día a día: las huellas digitales y los buzones con llave.
        </p>

        <h2 className={styles.subtitle}>La Huella Digital Mágica (Hashing)</h2>
        <p className={styles.paragraph}>
          Imaginen que tienen una licuadora mágica. Pueden meter cualquier cosa en ella: la novela de 'Don Quijote', la palabra 'hola', o una foto de su gato. Le dan al botón y ¡ZAS! La licuadora siempre les da una pequeña bola de helado de un sabor único. Siempre es una bola pequeña, del mismo tamaño, sin importar lo que metieron.
        </p>
        <p className={styles.paragraph}>
          Lo curioso es esto: si meten 'gato', les da helado de chocolate. Pero si meten 'Gato' (con mayúscula), ¡les da de pistacho! Un cambio minúsculo en la entrada crea un resultado completamente diferente. Y lo más importante: <strong>es un viaje de ida</strong>. Pueden meter los ingredientes y obtener el helado, pero es absolutamente imposible mirar el helado y adivinar cuáles fueron los ingredientes.
        </p>
        <p className={styles.paragraph}>
          Esto es exactamente lo que hace una <strong>función de hash</strong>. Crea una "huella digital" (un hash) única e irrepetible para cualquier dato. En la blockchain, cada bloque de transacciones se pasa por esta "licuadora". Si alguien intenta cambiar una sola coma en una transacción antigua, la huella digital de ese bloque cambia por completo, rompiendo la cadena y alertando a todos de que algo no cuadra. Es un sello de seguridad perfecto.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-4231398_1280.jpg" alt="Representación abstracta de criptografía" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Buzón y la Llave Secreta (Claves Pública y Privada)</h2>
        <p className={styles.paragraph}>
          Ahora, la segunda idea. Imaginen que tienen un buzón especial en la puerta de su casa. Este buzón tiene una ranura. Cualquiera puede venir y dejarles una carta o un paquete (pensemos en criptomonedas). La dirección de su buzón es pública, la pueden pegar en internet si quieren. Esa es su <strong>clave pública</strong>.
        </p>
        <p className={styles.paragraph}>
          Pero para abrir el buzón y sacar lo que hay dentro, necesitan una llave especial, una que solo ustedes tienen. Esa es su <strong>clave privada</strong>. Es un secreto. ¡Jamás se la enseñan a nadie! Si alguien la consigue, puede abrir su buzón y robarles todo.
        </p>
        <p className={styles.paragraph}>
          Pero aquí viene lo genial: esa llave privada también sirve para <strong>firmar</strong> los paquetes que ustedes envían. Cuando pagan algo con Bitcoin, usan su clave privada para poner una "firma digital" en la transacción. Todos los demás pueden usar su clave pública (la dirección del buzón) para comprobar que la firma es auténtica y que vino de ustedes. Pero como nadie tiene su llave secreta, nadie puede falsificar su firma.
        </p>

        <h2 className={styles.subtitle}>¿Y qué significa todo esto?</h2>
        <p className={styles.paragraph}>
          Es simple:
        </p>
        <ul>
          <li>El <strong>Hashing</strong> asegura la <strong>integridad</strong>. Garantiza que la historia de la blockchain no se pueda cambiar.</li>
          <li>Las <strong>Claves</strong> aseguran la <strong>propiedad</strong> y la <strong>autenticidad</strong>. Garantizan que solo tú puedes gastar tu dinero y que todos sepan que fuiste tú quien lo hizo.</li>
        </ul>
        <p className={styles.paragraph}>
          Estas dos herramientas criptográficas son los pilares que permiten a completos extraños confiar los unos en los otros en una red descentralizada. ¡No es magia, son matemáticas!
        </p>
      </div>
    </>
  );
}
