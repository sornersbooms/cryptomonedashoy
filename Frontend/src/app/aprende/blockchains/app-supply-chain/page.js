'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AppSupplyChainPage() {
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
        <h1 className={styles.title}>Aplicación: Cadena de Suministro (El Detective de la Manzana)</h1>
        <p className={styles.paragraph}>
          Hemos visto cómo la blockchain puede ser dinero, bancos sin banqueros y objetos únicos. Pero la blockchain es mucho más que eso. Es una herramienta fantástica para resolver un problema muy antiguo: ¿cómo sabemos de dónde viene algo y qué le ha pasado en el camino?
        </p>
        <p className={styles.paragraph}>
          Imaginen que van al supermercado y compran una manzana. ¿De dónde viene esa manzana? ¿Quién la cultivó? ¿Qué pesticidas usaron? ¿Cómo la transportaron? ¿Estuvo en un almacén frío? ¡En una cadena de suministro tradicional, es un misterio!
        </p>

        <h2 className={styles.subtitle}>El Problema de la Información Fragmentada</h2>
        <p className={styles.paragraph}>
          En una cadena de suministro tradicional, la información está fragmentada. Cada empresa (el agricultor, el transportista, el distribuidor, el supermercado) tiene su propio libro de contabilidad. No comparten la información fácilmente. Esto lleva a:
        </p>
        <ul>
          <li><strong>Falta de Transparencia:</strong> No sabes el origen real de los productos.</li>
          <li><strong>Ineficiencia:</strong> Si algo sale mal (una contaminación, un producto defectuoso), es muy difícil rastrear el problema hasta su origen.</li>
          <li><strong>Fraude:</strong> Es fácil falsificar productos o etiquetas.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Personas colaborando en un proceso de cadena de suministro" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Cómo la Blockchain Resuelve el Misterio: El Diario de Viaje del Producto</h2>
        <p className={styles.paragraph}>
          Ahora, imaginen que nuestra manzana tiene un pequeño diario de viaje digital, un <strong>NFT</strong> quizás, que se actualiza en una blockchain cada vez que le pasa algo.
        </p>
        <ol>
          <li><strong>Paso 1: El Agricultor:</strong> Cuando la manzana se cosecha, el agricultor registra en la blockchain: "Manzana X cosechada en la granja Y, fecha Z, usando método orgánico". ¡Un bloque!</li>
          <li><strong>Paso 2: El Transportista:</strong> Cuando la manzana se carga en un camión, el transportista registra: "Manzana X cargada en camión A, temperatura B, destino C". ¡Otro bloque!</li>
          <li><strong>Paso 3: El Distribuidor:</strong> Cuando llega al almacén, el distribuidor registra: "Manzana X recibida, almacenada a temperatura D". ¡Otro bloque!</li>
        </ol>
        <p className={styles.paragraph}>
          Y así sucesivamente. Cada paso en el viaje de la manzana es una nueva entrada en la blockchain. Y como ya sabemos, la blockchain es inmutable. Nadie puede cambiar una entrada anterior sin que se note.
        </p>

        <h2 className={styles.subtitle}>Beneficios: Transparencia, Trazabilidad y Confianza</h2>
        <p className={styles.paragraph}>
          Con la blockchain en la cadena de suministro, obtenemos:
        </p>
        <ul>
          <li><strong>Transparencia Total:</strong> Ahora, cuando compran la manzana, pueden escanear un código QR y ver todo su historial: desde la granja hasta su mano. ¡Es como tener un detective personal para cada producto!</li>
          <li><strong>Trazabilidad Rápida:</strong> Si hay un problema de contaminación, se puede identificar el lote exacto y el origen en segundos, no en semanas.</li>
          <li><strong>Confianza y Autenticidad:</strong> Los consumidores pueden confiar en que el producto es lo que dice ser. Las marcas pueden probar la autenticidad de sus productos de lujo.</li>
          <li><strong>Eficiencia:</strong> Reduce el papeleo, los errores y los retrasos.</li>
        </ul>
        <p className={styles.paragraph}>
          La blockchain no es solo para dinero. Es una herramienta para crear confianza y transparencia en cualquier proceso donde múltiples partes necesitan compartir información de forma segura y verificable. La cadena de suministro es solo una de las muchas áreas donde esta tecnología puede revolucionar la forma en que hacemos negocios. ¡Es como darle superpoderes a cada producto para que cuente su propia historia!
        </p>
      </div>
    </>
  );
}
