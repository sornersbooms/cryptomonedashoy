'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function BitcoinVsEthereumPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const ethereumCourse = courseData.ethereum; // Assuming ethereum course data exists

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={ethereumCourse.title}
        modules={ethereumCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Bitcoin vs. Ethereum: ¿Dos Caras de la Misma Moneda?</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! Hoy vamos a hablar de dos de las ideas más revolucionarias de nuestro tiempo: <strong>Bitcoin</strong> y <strong>Ethereum</strong>. A primera vista, podrían parecer hermanos gemelos, pero si miramos de cerca, son más como primos lejanos con personalidades muy distintas.
        </p>
        <p className={styles.paragraph}>
          Imaginen que tienen un martillo. ¿Para qué sirve un martillo? Para clavar clavos, ¿verdad? Es una herramienta fantástica para una tarea muy específica. Ese es <strong>Bitcoin</strong>. Fue diseñado para ser dinero digital, un sistema de efectivo electrónico de persona a persona. Su objetivo principal es ser una reserva de valor, un "oro digital", y un medio para transferir valor sin intermediarios. Es simple, robusto y hace una cosa increíblemente bien.
        </p>

        <h2 className={styles.subtitle}>Ethereum: El Ordenador Mundial</h2>
        <p className={styles.paragraph}>
          Ahora, imaginen que en lugar de un martillo, tienen un ordenador. Un ordenador puede hacer muchas cosas, ¿verdad? Puede escribir documentos, jugar juegos, navegar por internet, ¡incluso simular un martillo! Ese es <strong>Ethereum</strong>. No es solo una moneda; es una plataforma, un "ordenador mundial" descentralizado.
        </p>
        <p className={styles.paragraph}>
          En Ethereum, no solo enviamos dinero. Podemos escribir pequeños programas, a los que llamamos <strong>"contratos inteligentes"</strong>, que se ejecutan automáticamente cuando se cumplen ciertas condiciones. Piensen en ellos como acuerdos que se hacen cumplir solos, sin necesidad de abogados o bancos. Por ejemplo, un contrato inteligente podría decir: "Si María me envía 1 Ether, automáticamente le envío el título de propiedad de mi coche". Y nadie puede interferir con eso.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/ethereum-6928106_1280.jpg" alt="Símbolo de Ethereum con fondo tecnológico" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Las Diferencias Clave: Propósito y Flexibilidad</h2>
        <p className={styles.paragraph}>
          La diferencia fundamental radica en su propósito y flexibilidad:
        </p>
        <ul>
          <li><strong>Bitcoin:</strong> Es como una calculadora muy potente. Su función principal es calcular y registrar transacciones de valor. Es una cadena de bloques diseñada para ser una base de datos inmutable de quién posee qué Bitcoin.</li>
          <li><strong>Ethereum:</strong> Es como un smartphone. No solo hace llamadas (transacciones de valor), sino que también puede ejecutar miles de aplicaciones diferentes (contratos inteligentes y aplicaciones descentralizadas o dApps). Su cadena de bloques es una plataforma para construir casi cualquier cosa.</li>
        </ul>
        <p className={styles.paragraph}>
          Esto significa que mientras Bitcoin se enfoca en ser dinero, Ethereum permite la creación de todo un ecosistema de aplicaciones descentralizadas, desde juegos hasta sistemas de votación, pasando por finanzas descentralizadas (DeFi) y NFTs. La moneda de Ethereum, llamada Ether (ETH), es el "combustible" que se usa para ejecutar estos programas y transacciones en la red.
        </p>

        <h2 className={styles.subtitle}>¿Cuál es Mejor? ¡No es una Competición!</h2>
        <p className={styles.paragraph}>
          Preguntar cuál es mejor, ¿Bitcoin o Ethereum?, es como preguntar si un martillo es mejor que un ordenador. Depende de lo que quieras hacer. Ambos son increíblemente ingeniosos y resuelven problemas diferentes de maneras brillantes.
        </p>
        <ul>
          <li>Si quieres una forma descentralizada y segura de almacenar y transferir valor, <strong>Bitcoin</strong> es tu martillo.</li>
          <li>Si quieres construir aplicaciones descentralizadas, crear nuevos tipos de activos digitales o automatizar acuerdos, <strong>Ethereum</strong> es tu ordenador.</li>
        </ul>
        <p className={styles.paragraph}>
          Ambos son pilares de la revolución blockchain, cada uno con su propio papel crucial. Entender sus diferencias es entender la verdadera amplitud de lo que la tecnología blockchain puede lograr. ¡Y eso es todo por hoy!
        </p>
      </div>
    </>
  );
}
