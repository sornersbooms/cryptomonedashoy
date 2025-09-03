'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function PublicasPrivadasPage() {
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
        <h1 className={styles.title}>Blockchains Públicas y Privadas: ¿Plaza del Pueblo o Club Exclusivo?</h1>
        <p className={styles.paragraph}>
          Hasta ahora, hemos hablado de "la blockchain" como si fuera una sola cosa. Pero, ¡sorpresa!, hay diferentes sabores. Pensemos en ello como si fueran parques. Hay parques públicos, donde cualquiera puede entrar y jugar. Y hay clubes de campo privados, con una valla y un guardia, donde solo los miembros pueden pasar. Ambos son "parques", pero su propósito y funcionamiento son muy distintos.
        </p>

        <h2 className={styles.subtitle}>Blockchains Públicas: La Plaza del Pueblo</h2>
        <p className={styles.paragraph}>
          Una blockchain pública, como <strong>Bitcoin</strong> o <strong>Ethereum</strong>, es como la gran plaza de un pueblo. Es radicalmente abierta.
        </p>
        <ul>
          <li><strong>Cualquiera puede entrar:</strong> No necesitas permiso para unirte a la red. Solo tienes que descargar el software.</li>
          <li><strong>Cualquiera puede leer:</strong> Todos los participantes pueden ver el libro de contabilidad completo. Es transparente.</li>
          <li><strong>Cualquiera puede escribir:</strong> Cualquiera puede intentar añadir un nuevo bloque (minar en PoW o hacer staking en PoS).</li>
        </ul>
        <p className={styles.paragraph}>
          A estas redes las llamamos <strong>"permissionless" (sin permiso)</strong>. Son ideales para aplicaciones que requieren una alta resistencia a la censura y neutralidad, como el dinero digital. Su gran ventaja es su seguridad y descentralización, que nacen de tener miles de ojos vigilando. La desventaja es que pueden ser más lentas y costosas, porque poner de acuerdo a tanta gente lleva tiempo y esfuerzo.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/wear-3080558_1280.jpg" alt="Una plaza pública concurrida" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Blockchains Privadas: El Club Exclusivo</h2>
        <p className={styles.paragraph}>
          Una blockchain privada (o de consorcio) es como ese club de campo con guardia en la puerta. Es un entorno controlado.
        </p>
        <ul>
          <li><strong>La entrada es por invitación:</strong> Solo las entidades autorizadas pueden unirse a la red.</li>
          <li><strong>La lectura puede ser restringida:</strong> Se puede configurar quién puede ver qué partes del libro de contabilidad.</li>
          <li><strong>La escritura está controlada:</strong> Solo un grupo preseleccionado de participantes (validadores) puede añadir nuevos bloques.</li>
        </ul>
        <p className={styles.paragraph}>
          A estas redes las llamamos <strong>"permissioned" (permisionadas)</strong>. Aquí, la confianza no se basa en un cálculo masivo, sino en la identidad y reputación de los participantes, que suelen conocerse. Se usan mecanismos de consenso súper eficientes como la Prueba de Autoridad (PoA).
        </p>
        <p className={styles.paragraph}>
          Son perfectas para casos de uso empresariales. Por ejemplo, un grupo de bancos que quiere liquidar transacciones entre ellos, o una empresa que quiere trazar su cadena de suministro sin hacer públicos todos sus datos. La ventaja es su <strong>velocidad, bajo coste y privacidad</strong>. La desventaja es que son centralizadas y no son resistentes a la censura de la misma forma que una red pública.
        </p>

        <h2 className={styles.subtitle}>¿Cuál es Mejor?</h2>
        <p className={styles.paragraph}>
          ¡Esa es la pregunta equivocada! No es que una sea mejor que la otra. Son herramientas diferentes para trabajos diferentes. Es como preguntar si un martillo es mejor que un destornillador.
        </p>
        <p className={styles.paragraph}>
          Si quieres construir un sistema monetario global, abierto y neutral, necesitas la robustez y la falta de permisos de una <strong>blockchain pública</strong>. Si un grupo de empresas necesita una base de datos compartida, segura y eficiente, una <strong>blockchain privada</strong> es la herramienta correcta.
        </p>
      </div>
    </>
  );
}
