'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function InmutabilidadPage() {
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
        <h1 className={styles.title}>La Cadena y la Inmutabilidad: ADN Digital</h1>
        <p className={styles.paragraph}>
          Ya tenemos nuestras piezas de LEGO (los bloques). Ahora vamos a ver qué pasa cuando las unimos. ¿Por qué esta torre que construimos es tan especial? ¿Por qué todo el mundo dice que la blockchain es <strong>"inmutable"</strong>? ¿Significa que está escrita en piedra por arte de magia? ¡Para nada! Es mucho más inteligente que eso.
        </p>

        <h2 className={styles.subtitle}>El Engranaje Genético de los Bloques</h2>
        <p className={styles.paragraph}>
          Recuerdan que cada bloque guarda la "huella digital" (el hash) del bloque que vino justo antes, ¿verdad? ¡Ese es el secreto! No es simplemente una pila de bloques, es una <strong>cadena</strong>. El bloque nº 100 contiene la huella del nº 99. El nº 99 contiene la huella del nº 98. Y así sucesivamente hasta el principio.
        </p>
        <p className={styles.paragraph}>
          Piensen en ello como si fuera ADN. Cada parte de la cadena lleva información genética de la parte anterior. Están intrínsecamente ligados. No se puede simplemente quitar un eslabón y poner otro sin que se note. La estructura entera depende de la integridad de cada pieza.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3041480_1280.jpg" alt="Cadena de bloques interconectados" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Qué Pasa si Alguien Intenta Hacer Trampa?</h2>
        <p className={styles.paragraph}>
          Imaginemos a un tramposo, "Ernesto el Editor". Ernesto quiere reescribir la historia. Ve una transacción en el bloque 500 donde pagó por un coche y quiere borrarla para recuperar su dinero. ¿Qué sucede si lo intenta?
        </p>
        <p className={styles.paragraph}>
          1. En el momento en que Ernesto modifica esa transacción, aunque solo sea un céntimo, la "huella digital" de todo el bloque 500 cambia por completo. ¡Nuestra licuadora mágica nos da un sabor de helado totalmente diferente!
        </p>
        <p className={styles.paragraph}>
          2. ¡Aquí está el problema para Ernesto! El bloque 501, que ya está sellado y en la cadena, contiene la huella <em>original</em> del bloque 500. Ahora no coinciden. El enlace entre el bloque 500 modificado y el bloque 501 se ha roto. <strong>La cadena se ha partido visiblemente.</strong>
        </p>

        <h2 className={styles.subtitle}>La Carrera Imposible Contra la Red</h2>
        <p className={styles.paragraph}>
          Para que su estafa funcione, Ernesto no solo tendría que modificar el bloque 500. Tendría que encontrar un nuevo "número de la suerte" (nonce) para volver a minarlo. Y luego tendría que modificar el bloque 501 para que apunte a su nuevo bloque 500, y volver a minar el 501. Y luego el 502, el 503, y así sucesivamente... ¡hasta el bloque más reciente!
        </p>
        <p className={styles.paragraph}>
          Mientras Ernesto está intentando reconstruir toda la historia él solo, el resto de miles de computadoras honestas en la red ya están trabajando en añadir el bloque 504, 505, etc., a la cadena original. La cadena honesta siempre crecerá más rápido.
        </p>
        <p className={styles.paragraph}>
          Es como intentar ganar una carrera de relevos tú solo contra un equipo de miles de atletas, pero además empezando desde la mitad del recorrido. Es una tarea computacionalmente astronómica.
        </p>
        <p className={styles.paragraph}>
          Por lo tanto, la <strong>inmutabilidad</strong> no significa que sea físicamente imposible cambiar los datos. Significa que es <strong>económica y computacionalmente inviable</strong>. El coste de reescribir la historia es tan absurdamente alto que es mucho más rentable ser honesto y jugar según las reglas. Y esa es la belleza del sistema.
        </p>
      </div>
    </>
  );
}
