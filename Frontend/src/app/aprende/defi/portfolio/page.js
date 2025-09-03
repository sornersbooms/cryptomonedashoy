'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function PortfolioPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const defiCourse = courseData.defi;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={defiCourse.title}
        modules={defiCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Construyendo tu Portfolio: De la Teoría a la Práctica</h1>
        <p className={styles.paragraph}>
          ¡Muy bien, hemos llegado al final! Hemos aprendido las reglas del juego, conocemos las piezas y hemos visto los peligros. Ahora toca la parte divertida: ¿cómo empezamos a jugar? ¿Cómo construimos nuestra propia pequeña máquina de LEGOs financieros? Esto no es un consejo de inversión, ¡para nada! Es una forma de pensar, un marco para que tomen sus propias decisiones de forma un poco más inteligente.
        </p>

        <h2 className={styles.subtitle}>Paso 1: Los Cimientos - Tu Base Segura</h2>
        <p className={styles.paragraph}>
          No se empieza a construir una casa por el tejado. Se empieza por los cimientos. En DeFi, tus cimientos son tu "capa de seguridad y liquidez". Esta es la parte de tu portfolio que quieres que sea lo más segura y aburrida posible.
        </p>
        <ul>
          <li><strong>Stablecoins:</strong> Una buena parte de tu portfolio debería estar en stablecoins de alta calidad (como USDC o DAI). Son tu ancla, tu refugio seguro cuando el mercado se vuelve loco.</li>
          <li><strong>Préstamos de bajo riesgo:</strong> Puedes prestar estas stablecoins en protocolos grandes y auditados como Aave o Compound. El rendimiento no será espectacular, pero es una de las formas más seguras de obtener un ingreso pasivo. Es mejor un 5% seguro que un 500% que puede desaparecer mañana.</li>
          <li><strong>Tokens de Capa 1:</strong> Tener una parte en las monedas principales de las blockchains que usas (como ETH, AVAX, SOL) es fundamental. Las necesitarás para pagar el gas y son, en general, inversiones más consolidadas que los tokens de aplicaciones pequeñas.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-4235718_1280.jpg" alt="Una persona construyendo un portfolio financiero pieza por pieza" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Paso 2: La Estructura - El Juego del Rendimiento</h2>
        <p className={styles.paragraph}>
          Una vez que tienes unos cimientos sólidos, puedes empezar a construir hacia arriba. Aquí es donde asumes un poco más de riesgo para buscar un mayor rendimiento. Esta es la capa del Yield Farming.
        </p>
        <ul>
          <li><strong>Provisión de Liquidez:</strong> Empieza con piscinas de liquidez de pares estables. Por ejemplo, una piscina de USDC/USDT en una red barata como Polygon. El riesgo de *impermanent loss* es casi nulo y te familiarizas con el proceso.</li>
          <li><strong>Farming de Recompensas:</strong> Cuando te sientas cómodo, puedes dar el siguiente paso. Busca oportunidades de farming en protocolos establecidos. Quizás provees liquidez a un par como ETH/USDC y depositas los tokens LP en una granja para ganar el token de gobernanza del protocolo.</li>
          <li><strong>Usa las Bóvedas (Vaults):</strong> Para un extra de eficiencia, considera usar un auto-compounder como Yearn o Beefy. Delega el trabajo pesado de reinvertir las ganancias y simplemente observa cómo crece tu posición.</li>
        </ul>
        <p className={styles.paragraph}>
          La clave aquí es la <strong>diversificación</strong>. No pongas todos tus huevos en la misma canasta. Reparte tu capital entre diferentes protocolos y diferentes cadenas. Si un protocolo es hackeado, no lo perderás todo.
        </p>

        <h2 className={styles.subtitle}>Paso 3: El Tejado - La Apuesta Especulativa</h2>
        <p className={styles.paragraph}>
          Esta es la parte más pequeña y más arriesgada de tu portfolio. Es el dinero que estás dispuesto a perder por completo. Aquí es donde puedes experimentar con proyectos nuevos, tokens de pequeña capitalización o estrategias de farming muy arriesgadas que prometen rendimientos astronómicos.
        </p>
        <p className={styles.paragraph}>
          Esta es la punta de la pirámide. Puede que uno de estos proyectos se multiplique por 100, pero lo más probable es que la mayoría se vayan a cero. Trata esta parte como si fuera ir al casino. Diviértete, aprende, pero no apuestes la casa.
        </p>

        <h2 className={styles.subtitle}>La Regla de Oro: Investiga Por Tu Cuenta (DYOR)</h2>
        <p className={styles.paragraph}>
          Este es el mantra de DeFi: <strong>Do Your Own Research</strong>. No confíes en un tipo de YouTube que te promete riquezas. Aprende a leer sobre los proyectos, entiende su propuesta de valor, mira quién está en el equipo, comprueba si han sido auditados. Usa las herramientas que hemos visto para analizar y rastrear. Sé curioso. Sé escéptico.
        </p>
        <p className={styles.paragraph}>
          Construir un portfolio en DeFi es un proceso activo. No es un maratón, es una serie de sprints. El paisaje cambia constantemente. Pero si construyes sobre una base sólida, diversificas tus apuestas y, sobre todo, nunca dejas de aprender, tendrás una oportunidad de navegar con éxito por esta increíble nueva frontera.
        </p>
      </div>
    </>
  );
}
