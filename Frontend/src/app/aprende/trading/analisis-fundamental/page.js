'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AnalisisFundamentalPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const tradingCourse = courseData.trading; // Assuming 'trading' course data exists

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={tradingCourse.title}
        modules={tradingCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Análisis Fundamental: Más Allá de los Gráficos</h1>
        <p className={styles.paragraph}>
          ¡Saludos, curiosos del universo financiero! Soy Richard Feynman, y hoy vamos a desentrañar un misterio que a muchos les parece esotérico: el <strong>Análisis Fundamental</strong>. Olvídense de las líneas y los patrones en los gráficos por un momento. Hoy vamos a hablar de la realidad, de lo que realmente hace que algo tenga valor.
        </p>
        <p className={styles.paragraph}>
          Imaginen que tienen un coche. ¿Cómo saben si es un buen coche? ¿Lo juzgan solo por el color de la pintura o por lo rápido que va en una carrera? No, ¿verdad? Miran el motor, la eficiencia del combustible, la reputación del fabricante, si las ruedas están bien, si los frenos funcionan. Miran lo que hay <em>debajo del capó</em>. Eso, mis amigos, es el análisis fundamental.
        </p>

        <h2 className={styles.subtitle}>El Valor Intrínseco: ¿Qué es Eso?</h2>
        <p className={styles.paragraph}>
          En el mundo de las inversiones, ya sean acciones, bienes raíces o, sí, ¡criptomonedas!, el análisis fundamental busca el <strong>valor intrínseco</strong>. Es como preguntarse: "Si nadie estuviera comprando o vendiendo esto ahora mismo, ¿cuánto valdría realmente?". No es lo que la gente está dispuesta a pagar hoy en el mercado, sino lo que <em>debería</em> valer basándose en sus propiedades fundamentales.
        </p>
        <p className={styles.paragraph}>
          Para una empresa, esto significa mirar sus ganancias, sus deudas, su equipo directivo, su posición en el mercado, sus productos, su capacidad de innovar. Para una criptomoneda, es un poco diferente, pero la idea es la misma.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-4235718_1280.jpg" alt="Representación de análisis fundamental" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Cómo Aplicamos Esto a las Criptomonedas?</h2>
        <p className={styles.paragraph}>
          Ah, aquí viene la parte divertida. Las criptomonedas no tienen ganancias ni balances tradicionales. Entonces, ¿qué miramos?
        </p>
        <ul>
          <li><strong>La Tecnología:</strong> ¿Qué problema resuelve esta criptomoneda? ¿Es innovadora? ¿Su blockchain es segura, escalable? ¿Qué tan robusta es su arquitectura?</li>
          <li><strong>El Equipo:</strong> ¿Quién está detrás del proyecto? ¿Tienen experiencia? ¿Son transparentes? ¿Han cumplido sus promesas?</li>
          <li><strong>La Comunidad y Adopción:</strong> ¿Cuánta gente usa esta criptomoneda o su plataforma? ¿Hay desarrolladores activos? ¿Grandes empresas la están adoptando? Una red es tan fuerte como sus usuarios.</li>
          <li><strong>Tokenomics (Economía del Token):</strong> ¿Cómo se distribuyen los tokens? ¿Hay un límite en la oferta? ¿Cómo se incentiva a los participantes de la red? ¿Es inflacionario o deflacionario?</li>
          <li><strong>Casos de Uso Reales:</strong> ¿Se está utilizando para algo más que la especulación? ¿Hay aplicaciones descentralizadas (dApps) construidas sobre ella que resuelvan problemas reales?</li>
        </ul>
        <p className={styles.paragraph}>
          No es una fórmula mágica con una respuesta única. Es como la física: observamos, medimos, formulamos hipótesis y tratamos de entender la naturaleza subyacente del fenómeno. No se trata de predecir el precio de mañana, sino de entender el valor a largo plazo.
        </p>

        <h2 className={styles.subtitle}>La Diferencia con el Análisis Técnico</h2>
        <p className={styles.paragraph}>
          Mientras que el análisis técnico es como leer las huellas en la arena para ver dónde ha estado la gente, el análisis fundamental es como entender por qué la gente fue a la playa en primer lugar. Uno mira el pasado del precio, el otro mira el futuro del valor. Ambos tienen su lugar, pero el fundamental te da una comprensión más profunda de <em>por qué</em> algo podría ser valioso.
        </p>
        <p className={styles.paragraph}>
          Así que, la próxima vez que vean una criptomoneda, no solo miren su precio. Pregúntense: "¿Qué hay debajo del capó? ¿Qué problema resuelve? ¿Quién lo construyó? ¿Tiene un propósito real?". Si pueden responder a esas preguntas, estarán haciendo análisis fundamental. Y eso, mis amigos, es la ciencia de la inversión.
        </p>
      </div>
    </>
  );
}
