'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function StablecoinsPage() {
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
        <h1 className={styles.title}>Stablecoins: El Ancla en el Mar Cripto</h1>
        <p className={styles.paragraph}>
          Perfecto, vamos a meternos con una de las ideas más importantes para que todo el castillo de naipes de DeFi no se venga abajo: las <strong>stablecoins</strong> o "monedas estables". El nombre ya les da una pista, ¿no? Estabilidad. Pero, ¿estabilidad con respecto a qué?
        </p>
        <p className={styles.paragraph}>
          Imaginen que quieren comprar una pizza con Bitcoin. Un día la pizza cuesta 0.001 Bitcoin. Al día siguiente, el precio de Bitcoin se dispara y la misma pizza cuesta 0.0005. Y al otro, se desploma y cuesta 0.002. ¡Sería una locura! No se puede usar algo como dinero del día a día si su valor es un sube y baja constante. Necesitamos un punto de referencia, algo que no se mueva.
        </p>

        <h2 className={styles.subtitle}>Fichas de Casino para el Mundo Digital</h2>
        <p className={styles.paragraph}>
          Una stablecoin es, en su forma más simple, como una ficha de casino. Ustedes van a la caja del casino y entregan 100 dólares. A cambio, el cajero les da 100 fichas, cada una con un valor impreso de "$1". Pueden usar esas fichas para jugar en las mesas, sabiendo que en cualquier momento pueden volver a la caja y cambiarlas por 100 dólares de verdad. Su valor es estable porque hay dinero real guardado en una caja fuerte que lo respalda.
        </p>
        <p className={styles.paragraph}>
          Las <strong>stablecoins centralizadas</strong> funcionan igual. Una compañía (como Tether con USDT o Circle con USDC) guarda un dólar en su cuenta bancaria por cada "ficha" digital que crea. Es un acuerdo basado en la confianza: confiamos en que la compañía de verdad tiene ese dinero guardado y que nos lo devolverá si se lo pedimos.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/libra-4338939_1280.jpg" alt="Fichas digitales con valor estable" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Y si no Confiamos en Nadie?</h2>
        <p className={styles.paragraph}>
          "¡Un momento!", dirán. "¡Pero la idea de las cripto era no tener que confiar en un intermediario!". ¡Exacto! Y por eso existen otros tipos de stablecoins, un poco más ingeniosos.
        </p>
        <p className={styles.paragraph}>
          Las <strong>stablecoins descentralizadas</strong> son más como un sistema de trueque automatizado. Imaginen que para obtener una ficha de "$1", en lugar de darle un dólar a una empresa, tienen que depositar $1.50 de otra criptomoneda (como Ether) en una caja fuerte inteligente (un contrato inteligente). El sistema les da su ficha de $1, y mantiene su Ether bloqueado como garantía.
        </p>
        <p className={styles.paragraph}>
          Si el valor de su Ether empieza a bajar peligrosamente, el sistema vende automáticamente una parte para asegurarse de que siempre haya suficiente valor respaldando su ficha de $1. Es un mecanismo que se auto-regula, usando la sobre-garantía para mantener la estabilidad sin necesidad de un banco o una empresa. Un ejemplo famoso de esto es DAI.
        </p>

        <h2 className={styles.subtitle}>¿Para Qué Sirven Entonces?</h2>
        <p className={styles.paragraph}>
          Las stablecoins son la base de todo en DeFi. Son la herramienta que nos permite:
        </p>
        <ul>
          <li><strong>Operar:</strong> Movernos dentro y fuera de criptomonedas volátiles sin tener que volver a dinero de banco.</li>
          <li><strong>Prestar y pedir prestado:</strong> Es mucho más sensato pedir un préstamo o ganar intereses en algo que mantiene su valor.</li>
          <li><strong>Ahorrar:</strong> Proteger nuestro dinero de la volatilidad del mercado cripto sin salir del ecosistema.</li>
        </ul>
        <p className={styles.paragraph}>
          Son el aceite que lubrica todo el motor de las finanzas descentralizadas. Sin un ancla, sin una referencia de valor estable, todo el sistema sería demasiado caótico para ser útil. ¡Son la pieza aburrida pero absolutamente esencial del juego!
        </p>
      </div>
    </>
  );
}
