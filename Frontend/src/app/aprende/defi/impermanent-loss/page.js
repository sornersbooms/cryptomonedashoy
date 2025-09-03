'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ImpermanentLossPage() {
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
        <h1 className={styles.title}>Impermanent Loss: El Costo Oculto de la Liquidez</h1>
        <p className={styles.paragraph}>
          Muy bien, este es uno de los conceptos más extraños y menos intuitivos de DeFi. Suena aterrador, pero si lo desglosamos, verán que es solo una consecuencia natural de cómo funcionan las piscinas de liquidez. La palabra clave aquí es <strong>"Impermanente"</strong>.
        </p>
        <p className={styles.paragraph}>
          Imaginen que son proveedores de liquidez. Aportan sus monedas a una piscina para ganar comisiones. ¡Genial! Pero al hacerlo, se exponen a un riesgo muy particular. El <strong>Impermanent Loss</strong> (o Pérdida Impermanente) es la diferencia entre el valor que tendrían sus monedas si las hubieran guardado quietas en su cartera (HODL) y el valor que tienen después de haberlas puesto a trabajar en una piscina de liquidez.
        </p>

        <h2 className={styles.subtitle}>El Juego de la Balanza</h2>
        <p className={styles.paragraph}>
          Recordemos cómo funciona la piscina, nuestra balanza. Si tenemos una piscina de ETH y USDC, el Creador de Mercado Automatizado (AMM) siempre mantiene el valor total de ambos lados equilibrado. 
        </p>
        <p className={styles.paragraph}>
          Supongamos que aportan 1 ETH y 3,000 USDC a la piscina. En ese momento, el precio de 1 ETH es 3,000 USDC. Su inversión total es de $6,000.
        </p>
        <p className={styles.paragraph}>
          Ahora, el precio de ETH en el mercado exterior (en Coinbase, etc.) se dispara a $4,000. ¿Qué pasa en nuestra piscina? Los traders listos (los arbitrajistas) ven una oportunidad. Saben que en nuestra piscina el ETH sigue "barato". Así que vienen a nuestra piscina, meten USDC y sacan ETH, hasta que el precio dentro de la piscina se iguala al del mercado exterior. 
        </p>
        <p className={styles.paragraph}>
          El resultado es que la balanza se ha reajustado. Para mantener el equilibrio, la piscina ahora tiene MENOS ETH (el caro) y MÁS USDC (el barato) que al principio. 
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/ethereum-6928106_1280.jpg" alt="Una balanza desequilibrada mostrando el concepto de impermanent loss" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Calculando la "Pérdida"</h2>
        <p className={styles.paragraph}>
          Aquí viene el truco. Si ahora ustedes deciden retirar su dinero, la piscina les devolverá su parte proporcional. Pero como la composición de la piscina ha cambiado, ya no recibirán 1 ETH y 3,000 USDC. Recibirán algo como 0.8 ETH y 3,500 USDC (los números exactos dependen de la fórmula del AMM).
        </p>
        <p className={styles.paragraph}>
          El valor total de esto es de $6,700 (0.8 * $4,000 + $3,500). ¡Han ganado dinero! Pero, un momento... ¿qué hubiera pasado si simplemente se hubieran quedado quietos? Si hubieran guardado su 1 ETH y sus 3,000 USDC en su cartera, ahora tendrían un valor total de $7,000 (1 * $4,000 + $3,000). 
        </p>
        <p className={styles.paragraph}>
          La diferencia entre esos $7,000 (quedarse quieto) y los $6,700 (proveer liquidez) es la <strong>Pérdida Impermanente</strong>. Es una "pérdida" en el sentido de que han ganado MENOS de lo que podrían haber ganado. Es un costo de oportunidad.
        </p>

        <h2 className={styles.subtitle}>¿Por Qué es "Impermanente"?</h2>
        <p className={styles.paragraph}>
          Se le llama impermanente porque solo se hace real, solo se materializa, en el momento en que retiran sus fondos de la piscina. Si el precio del ETH volviera a bajar a $3,000, la balanza de la piscina se reajustaría de nuevo, y si retiraran sus fondos en ese momento, la pérdida impermanente desaparecería.
        </p>
        <p className={styles.paragraph}>
          La esperanza de todo proveedor de liquidez es que las comisiones que gana por tener su dinero en la piscina sean mayores que cualquier pérdida impermanente que pueda sufrir. Si las comisiones superan esa "pérdida", entonces la operación sigue siendo rentable. Es el riesgo fundamental que asumes a cambio de esas jugosas comisiones de trading. Es el precio que pagas por jugar a ser el mercado.
        </p>
      </div>
    </>
  );
}
