'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AppCriptomonedasPage() {
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
        <h1 className={styles.title}>Aplicación: Criptomonedas (El Dinero de la Blockchain)</h1>
        <p className={styles.paragraph}>
          Hemos construido esta máquina increíble llamada blockchain. ¿Para qué sirve? La primera y más obvia aplicación, la que lo empezó todo, es el dinero digital: las <strong>criptomonedas</strong>.
        </p>

        <h2 className={styles.subtitle}>¿Qué es una Criptomoneda? El Oro Digital</h2>
        <p className={styles.paragraph}>
          Piensen en el dinero que tienen en su banco. No es físico, ¿verdad? Son solo números en una pantalla. Pero esos números están en el libro de contabilidad del banco, y el banco tiene el control. Puede congelar su cuenta, puede decidir no enviar su dinero a ciertos lugares.
        </p>
        <p className={styles.paragraph}>
          Una criptomoneda es también dinero digital, números en una pantalla. Pero la gran diferencia es que esos números no están en el libro de contabilidad de un banco. ¡Están en la blockchain! Y como ya sabemos, la blockchain es un libro de contabilidad público, inmutable y descentralizado.
        </p>
        <p className={styles.paragraph}>
          Esto significa que, si tienes Bitcoin, no lo "tienes" en un banco. Lo "tienes" porque tu clave privada te da el control sobre una entrada en ese libro de contabilidad global. Nadie puede quitarte ese control, nadie puede censurar tus transacciones, nadie puede "imprimir" más de lo que está programado.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3327643_1280.jpg" alt="Monedas de Bitcoin y un chip, representando criptomonedas" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Características Clave</h2>
        <p className={styles.paragraph}>
          Las criptomonedas comparten propiedades fascinantes que las hacen únicas:
        </p>
        <ul>
          <li><strong>Descentralización:</strong> No hay un banco central, ni un gobierno que las controle. La red es mantenida por miles de computadoras en todo el mundo.</li>
          <li><strong>Transparencia:</strong> Todas las transacciones son públicas y verificables en la blockchain. Puedes ver cuánto dinero se mueve, pero no quién es el dueño de las direcciones (pseudonimato).</li>
          <li><strong>Seguridad:</strong> Gracias a la criptografía y los mecanismos de consenso (PoW, PoS), es extremadamente difícil falsificar o alterar transacciones.</li>
          <li><strong>Escasez:</strong> Muchas criptomonedas, como Bitcoin, tienen un suministro limitado y predecible. No se pueden "imprimir" más a voluntad, lo que las hace similares a metales preciosos como el oro.</li>
          <li><strong>Global y Sin Permiso:</strong> Puedes enviar cualquier cantidad de criptomoneda a cualquier persona en el mundo, en cualquier momento, sin necesidad de un intermediario y sin pedir permiso.</li>
        </ul>

        <h2 className={styles.subtitle}>Más Allá de Bitcoin</h2>
        <p className={styles.paragraph}>
          Bitcoin fue la primera, el "abuelo" de las criptomonedas. Pero luego vinieron otras, cada una con sus propias reglas y propósitos:
        </p>
        <ul>
          <li><strong>Ethereum (Ether):</strong> No solo es dinero, sino que también permite ejecutar contratos inteligentes.</li>
          <li><strong>Monedas Estables (Stablecoins):</strong> Intentan mantener su valor atado a una moneda tradicional como el dólar, para reducir la volatilidad.</li>
          <li>Y miles más, cada una con su propia visión y tecnología.</li>
        </ul>
        <p className={styles.paragraph}>
          Todas comparten la idea fundamental de ser dinero digital descentralizado, pero con diferentes enfoques.
        </p>
        <p className={styles.paragraph}>
          Así que, las criptomonedas son la primera y más directa aplicación de la tecnología blockchain. Son dinero que no depende de la confianza en una institución, sino en la confianza en las matemáticas y en una red distribuida. Es un experimento fascinante sobre cómo podemos construir sistemas financieros más abiertos, transparentes y resistentes a la censura. ¡Es el dinero del futuro, o al menos, una parte muy importante de él!
        </p>
      </div>
    </>
  );
}
