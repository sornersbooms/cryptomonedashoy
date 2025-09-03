'use client';
import React, { useState } from 'react';
import styles from './Lesson.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function DefiPage() {
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
        <h1 className={styles.title}>DeFi: Legos de Dinero sin Banqueros</h1>
        <p className={styles.paragraph}>
          ¡Hola de nuevo! Hablemos de algo que suena complicado pero que, en el fondo, es una idea maravillosamente simple: las <strong>Finanzas Descentralizadas</strong> o <strong>DeFi</strong>.
        </p>
        <p className={styles.paragraph}>
          Piensen en el sistema financiero normal. Si quieren un préstamo, van a un banco. Si quieren cambiar dólares por euros, van a una casa de cambio. Si quieren invertir, usan un bróker. Siempre hay un intermediario, un señor con traje en una oficina grande que pone las reglas, cobra comisiones y tiene el control.
        </p>
        <p className={styles.paragraph}>
          DeFi se pregunta: ¿Y si pudiéramos hacer todo eso, pero sin los intermediarios? ¿Y si en lugar de oficinas y banqueros, tuviéramos código, matemáticas y transparencia?
        </p>

        <h2 className={styles.subtitle}>Construyendo con Legos Financieros</h2>
        <p className={styles.paragraph}>
          Imaginen que los servicios financieros son como estructuras de Lego. En el mundo tradicional, cada banco tiene su propia caja de Legos patentada y no puedes mezclar las piezas. DeFi, en cambio, tira todas las piezas de Lego en una alfombra gigante y pública: la blockchain de Ethereum.
        </p>
        <p className={styles.paragraph}>
          Cada "pieza de Lego" es un Contrato Inteligente (una DApp) que hace una cosa muy específica:
        </p>
        <ul>
          <li><strong>Una pieza para prestar:</strong> Un contrato donde la gente puede depositar su cripto y ganar intereses, y otros pueden pedir prestado pagando intereses.</li>
          <li><strong>Una pieza para intercambiar:</strong> Un contrato que permite cambiar un tipo de token ERC-20 por otro, sin un libro de órdenes central, usando "pools de liquidez".</li>
          <li><strong>Una pieza para crear dinero estable:</strong> Un contrato que crea "stablecoins", tokens que intentan mantener el valor de 1 dólar.</li>
        </ul>
        <p className={styles.paragraph}>
          La verdadera magia es que, como todas estas piezas viven en la misma red (Ethereum) y hablan el mismo idioma (estándares como ERC-20), ¡puedes empezar a combinarlas! Puedes pedir un préstamo en una DApp, cambiar el token en otra y depositarlo para ganar intereses en una tercera, todo en cuestión de minutos. A esto lo llamamos "componibilidad" o "los legos del dinero".
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-9268421_1280.png" alt="Bloques de Lego interconectados, simbolizando la componibilidad de DeFi" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Por Qué es Tan Revolucionario?</h2>
        <ul>
            <li><strong>Acceso para todos:</strong> Cualquiera con una conexión a internet y una wallet puede usar DeFi. No hay que pedir permiso, rellenar formularios o tener una cuenta bancaria. Es abierto.</li>
            <li><strong>Transparencia:</strong> Las reglas del juego están escritas en código, visibles para todos. Sabes exactamente cómo funciona el sistema y qué comisiones estás pagando.</li>
            <li><strong>Control del usuario:</strong> Tú y solo tú controlas tus fondos con tu clave privada. No hay un banco que pueda congelar tu cuenta.</li>
            <li><strong>Eficiencia:</strong> Al eliminar intermediarios, los procesos son más rápidos y, a menudo, más baratos.</li>
        </ul>

        <h2 className={styles.subtitle}>En Resumen: Un Sistema Financiero Abierto</h2>
        <p className={styles.paragraph}>
          DeFi es un experimento para reconstruir el sistema financiero desde cero, pero de una manera abierta, transparente y sin permisos. Es tomar las funciones básicas del dinero (prestar, intercambiar, ahorrar) y convertirlas en software público que cualquiera puede usar y en el que cualquiera puede construir. Todavía es joven y tiene sus riesgos, ¡pero es una de las ideas más potentes que han surgido de la tecnología blockchain!
        </p>
      </div>
    </>
  );
}
