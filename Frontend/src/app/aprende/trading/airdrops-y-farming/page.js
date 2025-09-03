'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AirdropsYFarmingPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  // Asumiendo que courseData tiene una estructura para 'trading' similar a 'bitcoin'
  const tradingCourse = courseData.trading; 

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={tradingCourse.title}
        modules={tradingCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Airdrops y Farming: La Caza del Tesoro en el Cripto-Universo</h1>
        <p className={styles.paragraph}>
          ¡Saludos, exploradores del conocimiento! Hoy vamos a sumergirnos en dos fenómenos fascinantes del mundo cripto: los <strong>Airdrops</strong> y el <strong>Farming</strong>. No se asusten por los nombres, que no son más que etiquetas para ideas bastante sencillas, una vez que las despojamos de su jerga. Piensen en esto como una expedición para entender cómo se distribuyen y se cultivan los recursos en este nuevo ecosistema digital.
        </p>

        <h2 className={styles.subtitle}>Airdrops: Cuando el Cielo Lanza Monedas</h2>
        <p className={styles.paragraph}>
          Imaginen que están caminando por la calle y, de repente, ¡les cae dinero del cielo! No, no es un sueño, es un <strong>Airdrop</strong> en el mundo cripto. ¿Cómo funciona esta magia? Bueno, no es magia, es estrategia.
        </p>
        <p className={styles.paragraph}>
          Una empresa o proyecto de criptomonedas decide regalar una cantidad de sus nuevas monedas o tokens a un grupo de personas. ¿Por qué harían algo así? Hay varias razones, todas muy lógicas si lo piensan bien:
        </p>
        <ul>
          <li><strong>Publicidad y Conciencia:</strong> Es una forma fantástica de que la gente se entere de que existen. Si les regalan algo, es más probable que lo miren, ¿verdad?</li>
          <li><strong>Distribución Justa:</strong> A veces, quieren que sus tokens estén en manos de muchas personas, no solo de unos pocos grandes inversores. Esto ayuda a descentralizar el poder.</li>
          <li><strong>Recompensa a Usuarios Fieles:</strong> Si ya son usuarios de una plataforma o tienen ciertas criptomonedas, un airdrop puede ser una forma de agradecerles su apoyo.</li>
        </ul>
        <p className={styles.paragraph}>
          ¿Cómo se califica uno para un airdrop? A menudo, se basa en tener una cierta cantidad de una criptomoneda específica en su billetera en una fecha determinada, o por haber interactuado con un protocolo. Es como un censo digital: si estás en la lista, recibes tu parte. No hay que hacer nada complicado, solo tener la billetera adecuada en el momento justo.
        </p>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-7072522_1280.jpg" alt="Monedas de Bitcoin cayendo del cielo" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Farming (Yield Farming): Sembrando Cripto para Cosechar Más Cripto</h2>
        <p className={styles.paragraph}>
          Ahora, pasemos al <strong>Farming</strong>, o como se le conoce más elegantemente, <strong>Yield Farming</strong>. Aquí, la analogía es con la agricultura. En lugar de sembrar trigo, ¡sembrarán criptomonedas para cosechar más criptomonedas!
        </p>
        <p className={styles.paragraph}>
          Imaginen que tienen un poco de dinero y quieren que ese dinero trabaje para ustedes. En el mundo tradicional, lo pondrían en un banco para que les dé intereses, ¿verdad? En el mundo cripto, el farming es una versión mucho más dinámica y, a menudo, más rentable (pero también más arriesgada) de eso.
        </p>
        <p className={styles.paragraph}>
          Básicamente, ustedes prestan sus criptomonedas a un protocolo de finanzas descentralizadas (DeFi). Estos protocolos usan sus monedas para cosas como préstamos o para facilitar el intercambio de otras criptomonedas. A cambio de prestar sus activos, ustedes reciben una recompensa, que suele ser en forma de más criptomonedas.
        </p>
        <p className={styles.paragraph}>
          Es como si fueran un banco, pero sin el banco. Ustedes proveen liquidez al sistema, y por eso, el sistema les paga. Las recompensas pueden ser muy atractivas, a veces mucho más altas que las de un banco tradicional. Pero, como en toda buena aventura, hay riesgos. Los precios de las criptomonedas pueden fluctuar, y los protocolos pueden tener sus propias complejidades. Es un campo fértil, pero hay que saber qué se está sembrando.
        </p>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-7074949_1280.jpg" alt="Granja de servidores de criptomonedas" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Gran Pregunta: ¿Por Qué Importa?</h2>
        <p className={styles.paragraph}>
          Tanto los airdrops como el farming son ejemplos de cómo el ecosistema cripto está innovando en la distribución de valor y en la creación de oportunidades financieras. No son solo trucos; son mecanismos que permiten a los proyectos crecer, a los usuarios participar y, en última instancia, a la red descentralizarse y fortalecerse.
        </p>
        <p className={styles.paragraph}>
          Son una muestra de la experimentación constante que ocurre en este espacio, donde las reglas del juego financiero se están reescribiendo. Entenderlos es entender una parte fundamental de cómo se construye y se sostiene la economía digital del futuro. ¡Así que, a seguir explorando!
        </p>
      </div>
    </>
  );
}
