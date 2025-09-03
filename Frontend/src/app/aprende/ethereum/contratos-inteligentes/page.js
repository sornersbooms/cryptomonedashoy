'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ContratosInteligentesPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  // Asumo que courseData.ethereum existe y tiene la estructura necesaria
  const ethereumCourse = courseData.ethereum;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={ethereumCourse.title}
        modules={ethereumCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Contratos Inteligentes: Acuerdos que se Ejecutan Solos</h1>
        <p className={styles.paragraph}>
          ¡Saludos, curiosos!, hoy vamos a desmenuzar una de las ideas más potentes de Ethereum: los <strong>Contratos Inteligentes</strong>. Olvídense de los papeles, las firmas y los abogados por un momento. Imaginen un acuerdo que no necesita a nadie para asegurarse de que se cumpla. Un acuerdo que, una vez que se establece, se ejecuta solo, de forma automática e inmutable. Eso es un contrato inteligente.
        </p>
        <p className={styles.paragraph}>
          Piensen en una máquina expendedora. Ustedes ponen dinero, seleccionan una bebida, y la máquina les entrega la bebida. No necesitan confiar en el dueño de la máquina para que les dé su refresco. La lógica está programada dentro de la máquina. Si se cumplen las condiciones (dinero insertado, botón presionado), la acción se ejecuta (bebida dispensada). Un contrato inteligente es exactamente eso, pero en el mundo digital y con una complejidad mucho mayor.
        </p>

        <h2 className={styles.subtitle}>¿Cómo Funcionan?</h2>
        <p className={styles.paragraph}>
          Un contrato inteligente es, en esencia, un pequeño programa de computadora que vive en la blockchain de Ethereum. Está escrito en un lenguaje de programación especial (como Solidity) y, una vez que se despliega, no se puede cambiar. Es como si lo grabaran en piedra digital. Contiene reglas y condiciones predefinidas. Cuando esas condiciones se cumplen, el contrato ejecuta automáticamente las acciones acordadas.
        </p>
        <p className={styles.paragraph}>
          Por ejemplo, un contrato inteligente podría decir: "Si la temperatura en Nueva York supera los 30 grados Celsius mañana, y Juan ha depositado 1 ETH en este contrato, entonces el contrato enviará 1 ETH a María". Nadie tiene que intervenir. La información de la temperatura se obtiene de una fuente externa confiable (un "oráculo"), y si la condición se cumple, el Ether se transfiere automáticamente. No hay posibilidad de que Juan se eche atrás o de que María no reciba su dinero.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3368174_1280.jpg" alt="Representación de un contrato inteligente en la blockchain" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Por Qué Son Tan Poderosos?</h2>
        <p className={styles.paragraph}>
          La magia de los contratos inteligentes radica en su naturaleza descentralizada y su ejecución autónoma. Al vivir en la blockchain, no están controlados por una sola entidad. Esto los hace resistentes a la censura y a la manipulación. Una vez que un contrato está en la blockchain, seguirá funcionando según sus reglas, sin importar lo que pase en el mundo exterior, a menos que sus propias condiciones internas lo detengan.
        </p>
        <p className={styles.paragraph}>
          Eliminan la necesidad de intermediarios. No necesitan bancos, abogados, notarios o cualquier otra tercera parte de confianza para garantizar que un acuerdo se cumpla. Esto reduce costos, acelera los procesos y, lo más importante, aumenta la confianza. La confianza no se deposita en una persona o institución, sino en las matemáticas y el código.
        </p>

        <h2 className={styles.subtitle}>Aplicaciones y el Futuro</h2>
        <p className={styles.paragraph}>
          Las aplicaciones de los contratos inteligentes son vastas y apenas estamos rascando la superficie. Desde finanzas descentralizadas (DeFi) donde puedes prestar, pedir prestado o intercambiar activos sin bancos, hasta sistemas de votación transparentes, gestión de la cadena de suministro, juegos, seguros y mucho más. Cualquier acuerdo que pueda ser codificado con reglas claras puede convertirse en un contrato inteligente.
        </p>
        <p className={styles.paragraph}>
          Son la base de la "web3", una nueva era de internet donde las aplicaciones no son propiedad de grandes corporaciones, sino que son abiertas, transparentes y están controladas por sus usuarios. Es una forma de automatizar la confianza y construir sistemas más justos y eficientes. ¡Es como si hubiéramos descubierto una nueva forma de hacer que las promesas se cumplan por sí solas!.
        </p>
      </div>
    </>
  );
}
