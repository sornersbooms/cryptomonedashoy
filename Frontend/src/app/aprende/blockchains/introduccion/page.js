'use client';
import React, { useState } from 'react';
import styles from './Lesson.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function IntroduccionBlockchainPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const blockchainsCourse = courseData.blockchains;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={blockchainsCourse.title}
        modules={blockchainsCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>¿Qué es una Blockchain? El Cuaderno Mágico</h1>
        <p className={styles.paragraph}>
          ¡Hola! Olvídense de todo el bombo y la jerga técnica por un segundo. Vamos a entender qué es una <strong>blockchain</strong> o "cadena de bloques" con una idea muy simple: un cuaderno de notas mágico.
        </p>
        <p className={styles.paragraph}>
          Imaginen que un grupo de amigos quiere llevar la cuenta de sus deudas. Podrían apuntarlo en un solo cuaderno, pero entonces tendrían que confiar en la persona que lo guarda. ¿Y si esa persona hace trampa? ¿Y si pierde el cuaderno? Es un sistema frágil.
        </p>
        <p className={styles.paragraph}>
          Ahora, ¿y si en lugar de un solo cuaderno, <strong>cada amigo tuviera una copia idéntica</strong> del mismo cuaderno?
        </p>

        <h2 className={styles.subtitle}>El Cuaderno Compartido</h2>
        <p className={styles.paragraph}>
          Cuando alguien quiere añadir una nueva anotación (por ejemplo, "Ana le paga 5 euros a Carlos"), se lo anuncia a todo el grupo. Todos comprueban si la anotación es válida (¿tiene Ana esos 5 euros?) y, si están de acuerdo, la añaden a su propia copia del cuaderno.
        </p>
        <p className={styles.paragraph}>
          Esto es, en esencia, una blockchain. Es una base de datos, un libro de contabilidad, que no está en un solo lugar, sino que está <strong>distribuido</strong> (o descentralizado) entre muchos participantes. No hay un jefe. La confianza no se deposita en una persona o empresa, sino en las reglas del sistema y en el consenso del grupo.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3041480_1280.jpg" alt="Una cadena de bloques interconectados" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Bloques y Cadenas: Las Páginas del Cuaderno</h2>
        <p className={styles.paragraph}>
          ¿Por qué se llama "cadena de bloques"? ¡Buena pregunta! No podemos añadir anotaciones una por una sin más. Sería un caos.
        </p>
        <ul>
            <li><strong>Bloques:</strong> Agrupamos un montón de anotaciones (transacciones) en una lista, como si fuera una página del cuaderno. A esta página la llamamos <strong>bloque</strong>.</li>
            <li><strong>Cadena:</strong> Una vez que la página está llena y todos están de acuerdo en su contenido, se "sella" con una especie de cera digital mágica (criptografía). Este sello está conectado con el sello de la página anterior. Así, cada página nueva queda encadenada a la anterior, formando una <strong>cadena</strong> de páginas.</li>
        </ul>
        <p className={styles.paragraph}>
          Esta estructura de cadena es lo que la hace tan segura. Si un tramposo intentara cambiar una anotación en una página antigua, rompería el sello. Y como cada sello depende del anterior, romper un sello rompería todos los sellos de las páginas siguientes. ¡Todo el mundo se daría cuenta del engaño al instante! Esto es lo que llamamos <strong>inmutabilidad</strong>. Una vez que algo está escrito en la blockchain, es prácticamente imposible de cambiar.
        </p>

        <h2 className={styles.subtitle}>En Resumen: Confianza a través de las Matemáticas</h2>
        <p className={styles.paragraph}>
          Así que, en pocas palabras, una blockchain es un <strong>libro de contabilidad digital, descentralizado e inmutable</strong>. Es una forma de que un grupo de personas que no necesariamente confían entre sí puedan llegar a un acuerdo sobre un conjunto de hechos sin necesidad de un intermediario. Es un sistema que crea confianza a través de la transparencia, la colaboración y la criptografía inteligente. ¡Y esa idea tan simple es la base de las criptomonedas, los NFTs y todo lo que hemos visto!
        </p>
      </div>
    </>
  );
}
