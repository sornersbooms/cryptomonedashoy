'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ContratosInteligentesPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const blockchainCourse = courseData.blockchains;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={blockchainCourse.title}
        modules={blockchainCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Contratos Inteligentes: El Notario Robot</h1>
        <p className={styles.paragraph}>
          Ya hemos construido una base de datos súper segura, descentralizada e inmutable. Al principio, se usaba principalmente para anotar transacciones de dinero. Pero entonces, a alguien se le ocurrió una idea revolucionaria: "¿Y si pudiéramos meter pequeños programas de computadora dentro de la blockchain? ¿Programas que se ejecutan solos cuando se cumplen ciertas condiciones?". ¡Bienvenidos a los <strong>contratos inteligentes</strong>!
        </p>

        <h2 className={styles.subtitle}>La Máquina Expendedora Súper-Inteligente</h2>
        <p className={styles.paragraph}>
          Piensen en una máquina expendedora. Es, en esencia, un contrato muy simple y tonto. Sus reglas están programadas: <strong>SI</strong> metes 1 euro, <strong>ENTONCES</strong> la máquina te entrega una lata de refresco. El acuerdo se ejecuta automáticamente. No necesitas confiar en el dueño de la máquina; confías en que la máquina cumplirá su código.
        </p>
        <p className={styles.paragraph}>
          Un contrato inteligente es exactamente eso, pero elevado a la enésima potencia. Es un programa que vive en la blockchain (como Ethereum) y que contiene lógica del tipo "SI ocurre esto, ENTONCES haz aquello". Por ejemplo:
        </p>
        <p className={styles.paragraph}>
          <code>SI la API del clima informa que llovió en Madrid hoy, ENTONCES págame la apuesta que hice con Juan.</code><br/>
          <code>SI pasan 30 días, ENTONCES libera los fondos que dejé en garantía para el alquiler.</code>
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/cryptocurrency-3423263_1280.jpg" alt="Una mano interactuando con una interfaz digital de contratos" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Qué los Hace tan Especiales?</h2>
        <p className={styles.paragraph}>
          La verdadera magia de los contratos inteligentes no es que "piensen", sino que heredan las propiedades de la blockchain en la que viven:
        </p>
        <ul>
          <li><strong>Son auto-ejecutables:</strong> No necesitan que una persona o empresa apriete el botón. Se disparan solos cuando las condiciones programadas se cumplen.</li>
          <li><strong>Son inmutables:</strong> Una vez que el contrato se despliega en la blockchain, sus reglas no pueden ser cambiadas. ¡Ni siquiera por su creador! Esto garantiza que el acuerdo se respetará tal y como se pactó.</li>
          <li><strong>Son transparentes y descentralizados:</strong> Cualquiera puede leer el código del contrato y verificar sus reglas. Y como vive en miles de computadoras (nodos) a la vez, nadie puede "apagarlo" o censurarlo.</li>
        </ul>
        <p className={styles.paragraph}>
          Un contrato inteligente es como un <strong>notario robot</strong>, incorruptible y totalmente predecible, que ejecuta acuerdos sin necesidad de abogados, bancos u otros intermediarios. La confianza ya no se deposita en una persona o institución, sino en la lógica del código.
        </p>

        <h2 className={styles.subtitle}>El Salto de "Dinero Digital" a "Computadora Mundial"</h2>
        <p className={styles.paragraph}>
          Esta idea, popularizada por Ethereum, fue lo que transformó la blockchain. Pasó de ser una simple base de datos para dinero a convertirse en una especie de <strong>computadora mundial descentralizada</strong>. Los contratos inteligentes son las piezas de LEGO que permiten construir aplicaciones y sistemas enteros sobre la blockchain, lo que conocemos como DApps (Aplicaciones Descentralizadas).
        </p>
        <p className={styles.paragraph}>
          Desde sistemas de préstamos (DeFi) y certificados de propiedad (NFTs) hasta organizaciones autónomas (DAOs), todo se construye con estos pequeños pero poderosos programas. Son el siguiente paso en la evolución de internet.
        </p>
      </div>
    </>
  );
}
