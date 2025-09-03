'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function PilaresDeFiPage() {
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
        <h1 className={styles.title}>Los Pilares de DeFi: Las Piezas Fundamentales</h1>
        <p className={styles.paragraph}>
          Bien, ya dijimos que DeFi es como jugar con LEGOs financieros. Pero, ¿cuáles son esas piezas básicas que usamos para construir todo? No son tantas, y son más intuitivas de lo que creen. Vamos a verlas como si fueran los cimientos de un edificio.
        </p>

        <h2 className={styles.subtitle}>Pilar 1: Las Monedas Estables (Stablecoins)</h2>
        <p className={styles.paragraph}>
          Imaginen que están en un barco en medio de una tormenta. Todo se mueve, es caótico. Así son la mayoría de las criptomonedas, su valor sube y baja como loco. Es difícil hacer negocios si el dinero que tienes vale 100 un día y 80 al siguiente.
        </p>
        <p className={styles.paragraph}>
          Las <strong>stablecoins</strong> son el ancla del barco. Son un tipo especial de criptomoneda que intenta mantener un valor fijo, como 1 dólar. Es como tener una ficha de casino que siempre puedes cambiar por un dólar real. Esto nos da un suelo firme en el mundo cripto para poder hacer cosas más complejas sin marearnos. Son el punto de partida.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-7678815_1280.jpg" alt="Monedas estables como ancla en un mar de volatilidad" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Pilar 2: Los Préstamos (Lending & Borrowing)</h2>
        <p className={styles.paragraph}>
          Esto es simple. Tienes dinero que no estás usando. En lugar de dejarlo debajo del colchón, ¿por qué no prestarlo y que te paguen por ello? En DeFi, puedes depositar tus criptomonedas en una especie de "piscina comunal".
        </p>
        <p className={styles.paragraph}>
          Otros que necesitan dinero pueden venir a esa piscina y pedir prestado. Pero no es gratis. Tienen que dejar algo de valor como garantía (más de lo que piden, para estar seguros) y pagan un interés. Ese interés se reparte entre todos los que pusieron dinero en la piscina. Es un banco, pero sin el edificio ni los banqueros. Solo un programa que pone las reglas claras para todos.
        </p>

        <h2 className={styles.subtitle}>Pilar 3: Los Intercambios (Exchanges Descentralizados - DEX)</h2>
        <p className={styles.paragraph}>
          Quieren cambiar manzanas por naranjas. Normalmente, irían a un mercado central donde un vendedor fija los precios. Un <strong>DEX</strong> es diferente. Es como un sistema de trueque gigante y automático.
        </p>
        <p className={styles.paragraph}>
          Funciona con esas "piscinas" de las que hablamos. Hay una piscina con manzanas y naranjas. Si quieres naranjas, pones tus manzanas en la piscina y sacas las naranjas. El precio se ajusta automáticamente según cuántas manzanas y naranjas queden. No hay un intermediario decidiendo el precio; lo decide la propia piscina. Es un mercado que se gestiona a sí mismo, basado en la oferta y la demanda de ese momento.
        </p>

        <h2 className={styles.subtitle}>La Magia está en Combinarlos</h2>
        <p className={styles.paragraph}>
          Estos son los tres pilares básicos. Lo verdaderamente revolucionario es que, como son LEGOs, podemos combinarlos. Puedes pedir un préstamo de stablecoins, cambiarlas por otra criptomoneda en un DEX, y luego prestar esa criptomoneda para ganar intereses. Todo en minutos, sin pedir permiso a nadie.
        </p>
        <p className={styles.paragraph}>
          Estos pilares son las herramientas fundamentales. A partir de aquí, la gente está construyendo cosas mucho más complejas: seguros, derivados, loterías... Pero si entienden estas tres ideas, entienden el corazón de DeFi. No es más que un sistema para prestar, pedir prestado e intercambiar valor de una forma más directa y abierta.
        </p>
      </div>
    </>
  );
}
