'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function LiquidityPoolsPage() {
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
        <h1 className={styles.title}>Piscinas de Liquidez y AMMs: El Motor del Trueque</h1>
        <p className={styles.paragraph}>
          Ya mencionamos estas "piscinas" mágicas, pero son tan importantes que merecen su propia explicación. Son el motor que hace que los mercados descentralizados (DEXs) funcionen. Olvídense de la bolsa, de los traders con traje y de las pantallas parpadeantes. Piensen en algo mucho más fundamental: una balanza.
        </p>

        <h2 className={styles.subtitle}>El Creador de Mercado Automatizado (AMM)</h2>
        <p className={styles.paragraph}>
          La palabra clave aquí es <strong>"Automatizado"</strong>. En un mercado normal, necesitas "creadores de mercado" (market makers), que son personas o empresas que están constantemente diciendo "compro a este precio, vendo a este otro", para que siempre haya alguien con quien negociar. Es un trabajo activo.
        </p>
        <p className={styles.paragraph}>
          Un <strong>Creador de Mercado Automatizado (AMM)</strong> es un robot que hace ese trabajo. Pero no es un robot físico, es un programa, un contrato inteligente. Y su única herramienta es una piscina y una fórmula matemática. No piensa, no tiene opiniones sobre el mercado, solo equilibra la balanza.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-7074949_1280.jpg" alt="Una balanza equilibrando dos tipos de activos" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Piscina de Liquidez: La Balanza en Acción</h2>
        <p className={styles.paragraph}>
          La <strong>piscina de liquidez</strong> es la balanza. De un lado ponemos un montón de Manzanas (Token A) y del otro lado un montón de Naranjas (Token B). Para que la balanza esté equilibrada, el valor total de las manzanas debe ser igual al valor total de las naranjas. Por ejemplo, 100 manzanas que valen $1 cada una, y 100 naranjas que valen $1 cada una.
        </p>
        <p className={styles.paragraph}>
          Ahora, ¿quién trae las frutas? Gente como ustedes o como yo. Los llamamos <strong>Proveedores de Liquidez (LPs)</strong>. Si tienes manzanas y naranjas de sobra, las puedes depositar en la balanza (en la piscina). ¿Por qué lo harías? Porque el AMM te da una recompensa. Cada vez que alguien usa la balanza para cambiar una fruta por otra, paga una pequeña comisión, y esa comisión se reparte entre todos los que pusieron sus frutas.
        </p>

        <h2 className={styles.subtitle}>El Baile de los Precios</h2>
        <p className={styles.paragraph}>
          Aquí viene lo bueno. Llega alguien que quiere desesperadamente una manzana. Toma una manzana de la balanza. Ahora hay 99 manzanas y 100 naranjas. ¡La balanza está desequilibrada! El AMM, nuestro robot, se da cuenta y dice: "¡Eh! Ahora las manzanas son más escasas, así que son más valiosas".
        </p>
        <p className={styles.paragraph}>
          Para la siguiente persona que quiera una manzana, el precio ya no será de una naranja. Quizás sea de 1.02 naranjas. El precio se ajusta <strong>automáticamente</strong> basándose en la proporción de las dos frutas que quedan en la piscina. Cuantas menos manzanas queden, más caras se vuelven en términos de naranjas. La fórmula `X * Y = K` que vimos antes es la que le dice al robot exactamente cómo mover los precios para mantener el equilibrio.
        </p>
        <p className={styles.paragraph}>
          Así que un AMM es simplemente un programa que gestiona una piscina de activos (la piscina de liquidez) y utiliza una fórmula para determinar los precios en tiempo real basándose en la oferta y la demanda de los intercambios que ocurren en ella. Es un mecanismo de descubrimiento de precios increíblemente simple y poderoso, y es la razón por la que podemos intercambiar miles de tokens diferentes sin necesidad de un intermediario central. ¡Es la física del mercado convertida en código!
        </p>
      </div>
    </>
  );
}
