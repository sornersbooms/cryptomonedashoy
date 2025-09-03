'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ForksPage() {
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
        <h1 className={styles.title}>Forks (Bifurcaciones): ¿Cambio de Reglas o Divorcio?</h1>
        <p className={styles.paragraph}>
          Hemos visto que una blockchain es un libro de contabilidad con unas reglas muy estrictas. Pero, ¿qué pasa si la comunidad decide que hay que actualizar esas reglas? Aquí es donde entran en juego las <strong>bifurcaciones</strong> o <strong>"forks"</strong>. No es más que una forma elegante de decir "actualización del software". ¡Pensemos en ello como si actualizáramos las reglas de un juego de mesa!
        </p>

        <h2 className={styles.subtitle}>Soft Fork: Una Regla Más Estricta (Compatible)</h2>
        <p className={styles.paragraph}>
          Imaginen que estamos jugando al ajedrez. Una regla dice que un peón, en su primer movimiento, puede avanzar una o dos casillas. Ahora, la comunidad propone una nueva regla para hacer el juego más "refinado": <em>"A partir de ahora, los peones solo pueden moverse una casilla en su primer movimiento"</em>.
        </p>
        <p className={styles.paragraph}>
          Esta nueva regla es <strong>más estricta</strong> que la anterior. ¿Qué ocurre?
        </p>
        <ul>
          <li>Los jugadores que actualizan (nodos nuevos) solo harán movimientos de una casilla. Si ven a un jugador antiguo mover un peón dos casillas, lo considerarán válido según las reglas originales. No hay conflicto.</li>
          <li>Los jugadores antiguos (nodos viejos) ven que los nuevos solo mueven una casilla. Para ellos, ese movimiento siempre ha sido legal, así que no ven ningún problema.</li>
        </ul>
        <p className={styles.paragraph}>
          Esto es un <strong>soft fork</strong>. Es una actualización compatible con versiones anteriores. Los nodos nuevos y viejos pueden seguir jugando en el mismo tablero porque las nuevas reglas no invalidan las antiguas. La cadena de bloques no se divide.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/libra-4338939_1280.jpg" alt="Una bifurcación en el camino, representando un fork" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Hard Fork: Un Cambio de Reglas Radical (Incompatible)</h2>
        <p className={styles.paragraph}>
          Ahora, imaginen otra propuesta de actualización: <em>"¡A partir de ahora, la Reina también puede moverse como un Caballo!"</em>. Esto no es hacer una regla más estricta, ¡es cambiar el juego por completo!
        </p>
        <p className={styles.paragraph}>
          Esta nueva regla es <strong>incompatible</strong> con la anterior. ¿Qué ocurre ahora?
        </p>
        <ul>
          <li>Los jugadores que actualizan (nodos nuevos) empiezan a mover sus reinas como si fueran un caballo.</li>
          <li>Cuando un jugador antiguo ve este movimiento, grita: "¡TRAMPA! ¡Eso es ilegal!". Su software no entiende esta nueva regla, por lo que rechaza el bloque que la contiene.</li>
        </ul>
        <p className={styles.paragraph}>
          Esto es un <strong>hard fork</strong>. Se produce una división permanente. La red se bifurca en dos cadenas separadas:
        </p>
        <ol>
          <li><strong>La cadena original:</strong> Los nodos que no actualizaron siguen jugando al "Ajedrez Clásico".</li>
          <li><strong>La nueva cadena:</strong> Los nodos que actualizaron ahora juegan al "Ajedrez Turbo", con sus nuevas reglas.</li>
        </ol>
        <p className={styles.paragraph}>
          A partir de la bifurcación, son dos blockchains y dos monedas completamente diferentes, con su propia historia. Así es como nacieron criptomonedas como Bitcoin Cash (un hard fork de Bitcoin) o Ethereum Classic (un hard fork de Ethereum).
        </p>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          No hay que tenerles miedo. Los forks son simplemente el mecanismo de gobernanza de un sistema descentralizado.
        </p>
        <ul>
            <li><strong>Soft Fork:</strong> Un cambio "suave" y compatible. Como empezar a usar un dialecto más formal del mismo idioma. Todos se siguen entendiendo.</li>
            <li><strong>Hard Fork:</strong> Un cambio "duro" e incompatible. Como si un grupo decidiera empezar a hablar un idioma nuevo. Los que no lo aprenden, se quedan en su propia conversación.</li>
        </ul>
      </div>
    </>
  );
}
