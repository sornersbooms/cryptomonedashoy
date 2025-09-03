'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function BridgesPage() {
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
        <h1 className={styles.title}>Puentes (Bridges): Conectando Islas Digitales</h1>
        <p className={styles.paragraph}>
          Imaginen que cada blockchain (Bitcoin, Ethereum, Solana, etc.) es una isla. Cada isla tiene su propia gente, sus propias reglas y su propia moneda. En la isla de Ethereum se usa el Ether, en la de Solana se usa el SOL. El problema es que estas islas están separadas por un océano inmenso. No puedes gastar tu Ether en la isla de Solana, y viceversa. Están aisladas.
        </p>
        <p className={styles.paragraph}>
          Esto es un problema. ¿De qué sirve tener un sistema financiero abierto si está fragmentado en docenas de islas que no pueden hablar entre sí? Necesitamos una forma de cruzar el océano. Necesitamos <strong>puentes (bridges)</strong>.
        </p>

        <h2 className={styles.subtitle}>El Mecanismo: Bloquear y Acuñar</h2>
        <p className={styles.paragraph}>
          ¿Cómo se construye un puente entre dos de estas islas? La idea más común es bastante ingeniosa y se basa en un principio de "bloquear y acuñar".
        </p>
        <p className={styles.paragraph}>
          Funciona así:
        </p>
        <ol>
          <li><strong>Paso 1: Bloquear.</strong> Quieres llevar 1 ETH de la isla Ethereum a la isla Solana. Vas al inicio del puente en Ethereum y depositas tu ETH en una caja fuerte controlada por un contrato inteligente. Tu ETH se queda ahí, bloqueado.</li>
          <li><strong>Paso 2: Verificar.</strong> El "guardián" del puente (que puede ser un grupo de validadores o un programa) ve que has depositado 1 ETH en la caja fuerte de Ethereum.</li>
          <li><strong>Paso 3: Acuñar.</strong> Una vez verificado, el guardián va al otro extremo del puente, en la isla de Solana, y crea una nueva moneda, una ficha sintética. Esta ficha es como un pagaré que dice "Vale por 1 ETH". A esto lo llamamos "ETH envuelto" o "wrapped ETH" (wETH). Te entregan esta ficha en tu cartera de Solana.</li>
        </ol>
        <p className={styles.paragraph}>
          ¡Y ya está! Ahora tienes un activo en Solana que vale exactamente lo mismo que 1 ETH, y puedes usarlo en todo el ecosistema de Solana. Tu ETH original no se ha movido de isla, solo está esperando en la caja fuerte. Lo que tienes es un representante, un clon.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3041480_1280.jpg" alt="Un puente conectando dos ecosistemas blockchain diferentes" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Camino de Vuelta</h2>
        <p className={styles.paragraph}>
          Para volver es el proceso inverso. Vas al puente en la isla de Solana y devuelves tu ficha de "wETH". El guardián del puente la destruye (la "quema") y, al ver que ha sido destruida, abre la caja fuerte original en Ethereum y te devuelve tu ETH original. Simple y elegante.
        </p>

        <h2 className={styles.subtitle}>El Punto Débil: La Confianza en el Puente</h2>
        <p className={styles.paragraph}>
          Este sistema es fantástico, pero introduce un punto débil. ¿Quién vigila la caja fuerte? ¿Quiénes son los guardianes del puente? Si el puente es "centralizado", significa que confiamos en una empresa o en un pequeño grupo de personas para que no se escapen con el dinero de la caja fuerte. Y la historia nos ha enseñado que los puentes son uno de los objetivos favoritos de los hackers.
        </p>
        <p className={styles.paragraph}>
          Por eso, la carrera ahora mismo es construir puentes cada vez más descentralizados y seguros, donde la confianza no se deposite en un pequeño grupo, sino en mecanismos criptográficos y en una red amplia de validadores. A estos se les llama "trustless bridges" (puentes sin confianza).
        </p>
        <p className={styles.paragraph}>
          Los puentes son la infraestructura crítica que está convirtiendo un archipiélago de blockchains aisladas en un verdadero internet del valor, un mundo interconectado donde los activos y la información pueden fluir libremente de una isla a otra. Son absolutamente esenciales para el futuro multi-cadena que estamos construyendo.
        </p>
      </div>
    </>
  );
}
