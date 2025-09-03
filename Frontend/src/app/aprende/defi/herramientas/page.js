'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function HerramientasPage() {
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
        <h1 className={styles.title}>Herramientas y Dashboards: El Mapa del Tesoro de DeFi</h1>
        <p className={styles.paragraph}>
          Muy bien, hemos explorado la jungla de DeFi. Sabemos que hay piscinas de liquidez, granjas de rendimiento, préstamos... un montón de sitios donde podemos poner nuestro dinero a trabajar. Pero, ¿cómo navegamos por esta jungla? ¿Cómo sabemos dónde están las mejores oportunidades o seguimos el rastro de nuestro propio dinero? Sería como intentar explorar el Amazonas sin un mapa ni una brújula.
        </p>
        <p className={styles.paragraph}>
          Aquí es donde entran las <strong>herramientas y los dashboards</strong>. Son nuestro mapa, nuestra brújula y nuestros binoculares. Son ventanas que nos permiten ver toda esta actividad compleja de una forma sencilla y ordenada.
        </p>

        <h2 className={styles.subtitle}>Exploradores de Bloques: El Registro Público</h2>
        <p className={styles.paragraph}>
          Lo primero es lo primero. La blockchain es un libro de contabilidad público. ¡Cualquiera puede leerlo! Un <strong>explorador de bloques</strong> como Etherscan (para Ethereum) es una página web que te permite hacer exactamente eso. Puedes buscar tu propia dirección de wallet y ver todas las transacciones que has hecho, como si fuera el extracto de tu banco. Puedes ver cuánto dinero hay en un contrato inteligente o qué está haciendo otra gente. Es la herramienta fundamental para la transparencia.
        </p>

        <h2 className={styles.subtitle}>Dashboards de Portfolio: Tu Panel de Control</h2>
        <p className={styles.paragraph}>
          Ahora, imaginen que han puesto dinero en diez sitios diferentes: un poco en una piscina de liquidez, otro poco en una granja, algo en un protocolo de préstamos... Llevar la cuenta de todo eso en una hoja de cálculo sería una pesadilla. 
        </p>
        <p className={styles.paragraph}>
          Un <strong>dashboard o gestor de portfolio</strong> como Zapper o DeBank es una herramienta mágica. Conectas tu wallet y, automáticamente, escanea toda la blockchain en busca de tu dinero. En una sola pantalla te muestra un resumen de todo: "Tienes X en préstamos, Y en farming, Z en esta piscina... y en total, tu portfolio vale tanto". Es el panel de control de tu imperio financiero en DeFi. Te ahorra un tiempo y unos dolores de cabeza increíbles.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-7077716_1280.jpg" alt="Un panel de control mostrando datos y gráficos de DeFi" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Agregadores: El Comparador de Vuelos de DeFi</h2>
        <p className={styles.paragraph}>
          Quieres cambiar el Token A por el Token B. Podrías ir al DEX de Uniswap, o al de Sushiswap, o a cualquier otro. Cada uno podría darte un precio ligeramente diferente. ¿Cómo encuentras la mejor oferta sin tener que mirar en diez sitios distintos?
        </p>
        <p className={styles.paragraph}>
          Usas un <strong>agregador de DEXs</strong>, como 1inch o Matcha. Es como un buscador de vuelos (Kayak, Skyscanner). Tú le dices "quiero ir de A a B", y él busca en todas las "aerolíneas" (los DEXs) y te muestra la ruta más barata. A veces, incluso divide tu orden en varias piscinas para conseguirte el mejor precio posible. Es una herramienta esencial para no perder dinero tontamente en los intercambios.
        </p>

        <h2 className={styles.subtitle}>Herramientas de Análisis: Los Binoculares</h2>
        <p className={styles.paragraph}>
          Finalmente, hay herramientas para los más curiosos, los que quieren entender de verdad qué está pasando. Plataformas como Dune Analytics o Nansen te permiten crear tus propios gráficos y análisis sobre casi cualquier cosa. ¿Quieres saber cuánta gente está usando un protocolo? ¿O cuál es la piscina de liquidez más rentable de la última semana? Estas herramientas te permiten mirar los datos en crudo y sacar tus propias conclusiones.
        </p>
        <p className={styles.paragraph}>
          Navegar por DeFi sin estas herramientas es posible, pero es como navegar a ciegas. Te perderás, tomarás malas decisiones y probablemente te frustrarás. Aprender a usar un buen dashboard y un agregador es el primer paso para pasar de ser un simple turista a ser un explorador competente en esta nueva frontera financiera.
        </p>
      </div>
    </>
  );
}
