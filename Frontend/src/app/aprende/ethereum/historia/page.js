'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function HistoriaDeEthereumPage() {
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
        <h1 className={styles.title}>La Historia de Ethereum: El Sueño de un Joven Genio</h1>
        <p className={styles.paragraph}>
          Toda gran idea tiene una historia, y la de Ethereum es particularmente interesante. No nació en una gran corporación, sino en la mente de un joven programador increíblemente brillante llamado <strong>Vitalik Buterin</strong>.
        </p>
        <p className={styles.paragraph}>
          A principios de la década de 2010, Vitalik estaba fascinado con Bitcoin. ¡Una moneda sin bancos! ¡Un sistema de confianza basado en matemáticas! Pero su mente inquieta empezó a ver más allá. Se dio cuenta de que la tecnología de Bitcoin, la blockchain, era como tener una herramienta increíblemente poderosa... que solo se usaba como martillo. Él se preguntó: "¿Y si pudiéramos construir cualquier herramienta con esto?".
        </p>

        <h2 className={styles.subtitle}>Más Allá del Dinero</h2>
        <p className={styles.paragraph}>
          Vitalik pensaba que limitar la blockchain a ser solo dinero era como tener el primer internet y usarlo solo para el correo electrónico. ¡Había mucho más potencial! Intentó proponer sus ideas a la comunidad de Bitcoin, sugiriendo hacer el sistema más flexible para poder crear otras aplicaciones.
        </p>
        <p className={styles.paragraph}>
          Pero la comunidad de Bitcoin era (y es) muy conservadora. Su lema es "no tocar lo que funciona". Querían mantener Bitcoin simple y seguro. Así que, en lugar de rendirse, Vitalik decidió hacer algo audaz: diseñar un sistema completamente nuevo desde cero. A finales de 2013, publicó un documento, un <strong>"whitepaper"</strong>, describiendo su visión para Ethereum.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3368174_1280.jpg" alt="Representación abstracta de una red blockchain" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Venta de Garaje que Financió una Revolución</h2>
        <p className={styles.paragraph}>
          Una idea tan grande necesitaba financiación. Pero en lugar de ir a los grandes inversores de capital de riesgo, el equipo de Ethereum hizo algo muy propio de su filosofía: una <strong>venta pública o "crowdsale"</strong> en 2014. Fue como una venta de garaje a nivel mundial.
        </p>
        <p className={styles.paragraph}>
          La gente de todo el mundo podía comprar "Ether", el futuro combustible de la red, pagando con Bitcoin. ¡Fue un éxito rotundo! Recaudaron millones de dólares, lo que demostró que muchísima gente creía en el sueño de una computadora mundial. Con esos fondos, un equipo de desarrolladores de todo el planeta se puso a trabajar para convertir la idea en realidad.
        </p>

        <h2 className={styles.subtitle}>El Lanzamiento y un Gran Desafío</h2>
        <p className={styles.paragraph}>
          Finalmente, el 30 de julio de 2015, la red Ethereum cobró vida. ¡La computadora mundial estaba encendida! La gente empezó a experimentar, a construir esos famosos "contratos inteligentes" y a crear las primeras aplicaciones descentralizadas.
        </p>
        <p className={styles.paragraph}>
          Pero la historia no fue un camino de rosas. En 2016, un gran proyecto llamado "The DAO" fue hackeado, y se robaron millones de dólares en Ether. Fue un golpe durísimo. La comunidad se enfrentó a una decisión imposible: ¿rompemos nuestras propias reglas y revertimos el robo para devolver el dinero, o mantenemos que el "código es ley" aunque signifique que los malos se salgan con la suya? 
        </p>
        <p className={styles.paragraph}>
          La decisión fue tan controvertida que dividió a la comunidad, creando dos cadenas: <strong>Ethereum (ETH)</strong>, que revirtió el hack, y <strong>Ethereum Classic (ETC)</strong>, que no lo hizo. Es una parte fascinante de su historia que nos enseña que la tecnología, al final, siempre trata sobre las personas y las decisiones que tomamos.
        </p>
      </div>
    </>
  );
}
