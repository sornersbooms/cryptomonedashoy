'use client';
import React, { useState } from 'react';
import styles from './Lesson.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function StakingPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const ethereumCourse = courseData.ethereum;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={ethereumCourse.title}
        modules={ethereumCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Staking: La Lotería de la Confianza</h1>
        <p className={styles.paragraph}>
          ¡Muy bien! Ya sabemos que la blockchain es un libro de contabilidad que todos comparten. Pero, ¿quién tiene el derecho de escribir la siguiente página? ¿Y cómo nos aseguramos de que no hagan trampa?
        </p>
        <p className={styles.paragraph}>
          Bitcoin lo resuelve con la "Minería" (Proof-of-Work), que es como una carrera de computadoras para resolver un acertijo súper difícil. El ganador escribe la página y se lleva un premio. Funciona, pero consume una cantidad de energía descomunal. Es como quemar un bosque para ganar una medalla.
        </p>
        <p className={styles.paragraph}>
          Ethereum solía hacer eso, pero se pasó a un sistema mucho más elegante y eficiente llamado <strong>Proof-of-Stake (Prueba de Participación)</strong>. ¡Vamos a desglosarlo!
        </p>

        <h2 className={styles.subtitle}>De la Fuerza Bruta al Compromiso Económico</h2>
        <p className={styles.paragraph}>
          En lugar de una carrera de fuerza bruta, imaginen una <strong>lotería</strong>. Para participar en esta lotería y tener la oportunidad de escribir la siguiente página (validar el siguiente bloque), tienes que comprar boletos.
        </p>
        <p className={styles.paragraph}>
          En Proof-of-Stake, los "boletos" son la propia moneda de la red, el Ether (ETH). Para convertirte en un "validador", tienes que hacer <strong>"staking"</strong>, que no es más que depositar y bloquear una cantidad significativa de tu ETH (actualmente 32 ETH) como una especie de fianza o depósito de seguridad.
        </p>
        <ul>
          <li>Al poner tu propio dinero en juego, tienes un incentivo económico directo para jugar limpio. Si validas transacciones fraudulentas o intentas atacar la red, el sistema te penaliza y te quita una parte de tu ETH depositado. ¡Es como si el organizador de la lotería te quemara los boletos por hacer trampa!</li>
          <li>Cuantos más "boletos" (más ETH) tengas en staking, más probabilidades tienes de ser elegido al azar por el sistema para proponer el siguiente bloque y ganar las recompensas (nuevos ETH y tarifas de transacción).</li>
        </ul>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/ethereum-6928106_1280.jpg" alt="Una representación visual del staking y la red Ethereum" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Por Qué es Mejor (para Ethereum)?</h2>
        <ul>
            <li><strong>Eficiencia Energética:</strong> No se necesitan ejércitos de computadoras consumiendo energía. Validar se puede hacer con un hardware relativamente modesto. ¡Se estima que redujo el consumo de energía de Ethereum en más de un 99.9%!</li>
            <li><strong>Más Descentralización:</strong> En teoría, es más fácil para la gente común participar. No necesitas comprar hardware de minería carísimo y especializado, solo necesitas la moneda de la red. Esto abre la puerta a que más gente pueda ayudar a asegurar la red.</li>
            <li><strong>Seguridad Económica:</strong> Atacar la red se vuelve increíblemente caro. Un atacante no solo necesitaría una cantidad gigantesca de ETH (que haría subir su precio), sino que además vería cómo su propia fortuna se desvanece si el ataque tiene éxito y la confianza en la red se desploma.</li>
        </ul>

        <h2 className={styles.subtitle}>En Resumen: Apostar por la Red</h2>
        <p className={styles.paragraph}>
          El Proof-of-Stake es un mecanismo de consenso que asegura la red haciendo que los participantes pongan "piel en el juego" (skin in the game). El <strong>Staking</strong> es la acción de depositar y bloquear tus monedas para participar en este sistema. En lugar de seguridad a través de la quema de energía, se consigue seguridad a través de un compromiso económico. Es una forma mucho más sostenible y escalable de mantener la honestidad del libro de contabilidad compartido.
        </p>
      </div>
    </>
  );
}
