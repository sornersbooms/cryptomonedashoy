'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function PowPage() {
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
        <h1 className={styles.title}>Consenso: Proof-of-Work (La Lotería Computacional)</h1>
        <p className={styles.paragraph}>
          Hemos hablado de que los generales necesitan un acuerdo (consenso) y de que los mineros resuelven acertijos difíciles. Bueno, la <strong>Prueba de Trabajo (Proof-of-Work o PoW)</strong> une esas dos ideas. Es el motor del consenso en Bitcoin y muchas otras redes. ¡Es la solución al problema de los generales bizantinos en acción!
        </p>

        <h2 className={styles.subtitle}>Una Competencia de Sudokus Gigantes</h2>
        <p className={styles.paragraph}>
          Imaginen una competición mundial para resolver un Sudoku increíblemente difícil. Hay miles de participantes (los "mineros") y todos intentan resolver el mismo Sudoku al mismo tiempo. Lo curioso es que el Sudoku es tan complejo que no se puede resolver siendo "listo"; la única forma es <strong>probar números al azar</strong>, una y otra vez, a una velocidad de vértigo.
        </p>
        <p className={styles.paragraph}>
          Cada intento de solución es un pequeño "trabajo" que hace una computadora. Requiere tiempo y, sobre todo, electricidad. Por eso se llama "Prueba de Trabajo": el ganador tiene que <strong>demostrar</strong> que ha gastado una enorme cantidad de energía para encontrar la solución. No hay atajos.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-4503758_1280.jpg" alt="Hardware de minería de criptomonedas" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Cuál es el Premio de esta Lotería?</h2>
        <p className={styles.paragraph}>
          El primer minero que grita "¡Eureka!" y encuentra la solución al Sudoku (el famoso "nonce" que produce un hash válido) gana dos cosas muy importantes:
        </p>
        <ul>
          <li><strong>El derecho a proponer el siguiente bloque:</strong> El ganador recoge un montón de transacciones que están esperando, las empaqueta en un nuevo bloque, lo sella con su solución ganadora y lo anuncia a toda la red.</li>
          <li><strong>La recompensa del bloque:</strong> Por todo su esfuerzo y gasto eléctrico, el ganador recibe un premio: una cantidad de bitcoins nuevos, recién creados, además de las pequeñas comisiones de todas las transacciones que incluyó. ¡Este es el gran incentivo económico para participar en la lotería!</li>
        </ul>

        <h2 className={styles.subtitle}>¿Y Cómo Logra Esto el Consenso?</h2>
        <p className={styles.paragraph}>
          Aquí está la parte brillante. Cuando el resto de los mineros ven el bloque ganador con la solución, es <strong>súper fácil y rápido para ellos verificarla</strong>. No tienen que resolver todo el Sudoku, solo comprobar que la solución es correcta.
        </p>
        <p className={styles.paragraph}>
          Al ver que es válida, todos los mineros honestos hacen lo siguiente:
        </p>
        <ol>
          <li>Abandonan el Sudoku en el que estaban trabajando (que ya es viejo e inútil).</li>
          <li>Aceptan el nuevo bloque y lo añaden a su copia de la cadena.</li>
          <li>Inmediatamente, empiezan a competir para resolver el <strong>siguiente</strong> Sudoku, el del próximo bloque, que ahora incluye la huella del bloque que acababan de aceptar.</li>
        </ol>
        <p className={styles.paragraph}>
          Este ciclo de <strong>competir, validar y avanzar</strong> es lo que mantiene a toda la red sincronizada. El consenso no se logra "hablando", sino aceptando colectivamente el resultado del que ha demostrado el mayor esfuerzo. La "verdad" es la cadena que tiene más trabajo acumulado.
        </p>
        <p className={styles.paragraph}>
          Proof-of-Work es, por tanto, un sistema de votación donde no votas con la mano, sino con potencia computacional. Es la columna vertebral de la seguridad y el acuerdo en las blockchains más grandes del mundo.
        </p>
      </div>
    </>
  );
}
