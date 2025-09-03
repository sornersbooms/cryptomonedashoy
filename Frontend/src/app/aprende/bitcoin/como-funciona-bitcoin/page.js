'use client';
import React, { useState } from 'react';
import styles from './page.module.css'; // Import the CSS module
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';


export default function ComoFuncionaBitcoinPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const bitcoinCourse = courseData.bitcoin;

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={bitcoinCourse.title}
        modules={bitcoinCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>¿Cómo Funciona Bitcoin? Un Vistazo a la Maquinaria</h1>
        <p className={styles.paragraph}>
          ¡Adelante, no sean tímidos! Hoy vamos a abrir el capó de Bitcoin y ver qué hay dentro. Ya hemos hablado de las piezas: la blockchain, la criptografía, los mineros... Ahora vamos a ver cómo bailan todas juntas. Es como una coreografía perfectamente sincronizada.
        </p>
        <h2 className={styles.subtitle}>La Vida de una Transacción</h2>
        <p className={styles.paragraph}>
          Imaginen que quieren enviarle un bitcoin a su amiga María. No es como mandarle un email. Lo que hacen es, esencialmente, gritar a los cuatro vientos: "¡Yo, dueño de esta dirección de Bitcoin, quiero enviar un bitcoin a la dirección de María!". Para firmar este mensaje y que todos sepan que son ustedes, usan su <strong>llave privada</strong>. Es su sello personal, su firma digital.
        </p>
        <p className={styles.paragraph}>
          Este mensaje, la <strong>transacción</strong>, se lanza a la red de Bitcoin. Pasa de una computadora (o "nodo") a otra, esparciéndose por todo el mundo en cuestión de segundos. Piensen en ello como un chisme que se extiende como la pólvora.
        </p>
        <h2 className={styles.subtitle}>Los Mineros Entran en Escena</h2>
        <p className={styles.paragraph}>
          Ahora, los mineros, que están escuchando atentamente, recogen su transacción y muchas otras. Las meten en una caja, nuestro famoso <strong>"bloque"</strong>. Pero antes de sellar la caja, comprueban que todo esté en orden. Verifican que ustedes realmente tenían ese bitcoin para gastar. No se puede gastar el mismo bitcoin dos veces, ¡el sistema no lo permite!
        </p>
        <p className={styles.paragraph}>
          Una vez que el bloque está lleno de transacciones verificadas, empieza la gran carrera: el sorteo matemático del que hablamos en la clase de minería. Todos los mineros del mundo empiezan a buscar ese número mágico, el "nonce". El primero que lo encuentra, sella el bloque, lo añade a la cadena y lo anuncia a toda la red.
        </p>
        <h2 className={styles.subtitle}>La Confirmación y la Inmutabilidad</h2>
        <p className={styles.paragraph}>
          Cuando los demás nodos de la red ven el nuevo bloque, lo revisan. Si todo es correcto (la solución del acertijo es válida y las transacciones son legítimas), lo añaden a su propia copia de la blockchain. Su transacción con María ahora está oficialmente en el libro de cuentas. Se dice que tiene <strong>una confirmación</strong>.
        </p>
        <p className={styles.paragraph}>
          Pero la cosa se pone mejor. Poco después, otro minero resuelve el siguiente bloque y lo añade encima del de ustedes. Ahora su transacción tiene dos confirmaciones. Y luego tres, y así sucesivamente. Cada nuevo bloque que se añade hace que el suyo esté más y más enterrado en la historia de la blockchain. Cambiarlo se vuelve exponencialmente más difícil. Por eso decimos que la blockchain es <strong>inmutable</strong>. Una vez que algo está ahí, está ahí para siempre.
        </p>
        <h2 className={styles.subtitle}>En Resumen: Un Baile de Confianza</h2>
        <p className={styles.paragraph}>
          Y eso es todo. No hay un gran botón central, ni un tipo con un sombrero de copa aprobando las cosas. Es un sistema descentralizado que funciona por consenso. Es un baile entre usuarios que crean transacciones, mineros que las verifican y las sellan en bloques, y una red de nodos que mantiene la integridad de todo el libro de cuentas. Es una forma de crear orden y confianza a partir del caos aparente. ¡Y es absolutamente fascinante!
        </p>
      </div>
    </>
  );
}
