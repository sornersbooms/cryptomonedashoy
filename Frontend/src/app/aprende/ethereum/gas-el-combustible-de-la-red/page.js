'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function GasElCombustibleDeLaRedPage() {
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
        <h1 className={styles.title}>Gas: El Combustible que Mueve Ethereum</h1>
        <p className={styles.paragraph}>
          ¡Hola, gente curiosa! Soy Richard Feynman, y hoy vamos a hablar de algo que suena a gasolina, pero que en Ethereum es mucho más interesante: el <strong>Gas</strong>. Imaginen que Ethereum es una gigantesca ciudad digital, llena de edificios (contratos inteligentes) y vehículos (transacciones). Para que todo se mueva, para que los vehículos vayan de un lado a otro y los edificios hagan su trabajo, necesitamos energía. Esa energía, en Ethereum, es el Gas.
        </p>
        <p className={styles.paragraph}>
          No es un gas que puedan oler o ver, claro. Es una unidad de medida. Piensen en ello como las "unidades de trabajo" que la Máquina Virtual de Ethereum (EVM) necesita para realizar cualquier operación. Cada vez que envían Ether, ejecutan un contrato inteligente, o hacen cualquier cosa en la red de Ethereum, están consumiendo Gas. Es el costo computacional de hacer algo en esta computadora global.
        </p>

        <h2 className={styles.subtitle}>¿Por Qué Necesitamos Gas?</h2>
        <p className={styles.paragraph}>
          ¡Excelente pregunta! Imaginen que no hubiera costo por usar la red. La gente podría enviar millones de transacciones inútiles, o crear contratos inteligentes que se ejecuten infinitamente, saturando la red y haciéndola inútil para todos. El Gas es el mecanismo que evita esto. Es una forma de ponerle un precio al esfuerzo computacional, incentivando a los usuarios a ser eficientes y a los mineros (o validadores en el futuro) a procesar las transacciones.
        </p>
        <p className={styles.paragraph}>
          Cada operación en la EVM tiene un costo de Gas predefinido. Por ejemplo, una simple transferencia de Ether cuesta 21,000 unidades de Gas. Ejecutar una línea de código en un contrato inteligente puede costar más. Es como si cada instrucción tuviera una etiqueta de precio en términos de Gas. Antes de que su transacción se ejecute, ustedes deben especificar cuánto Gas están dispuestos a pagar por unidad (el "precio del Gas", medido en Gwei, una pequeña fracción de Ether) y el límite máximo de Gas que su transacción puede consumir (el "límite de Gas").
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-7072522_1280.jpg" alt="Representación de energía o combustible digital" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Gas Limit y Gas Price: La Subasta</h2>
        <p className={styles.paragraph}>
          El <strong>Límite de Gas</strong> es la cantidad máxima de Gas que están dispuestos a gastar en su transacción. Si la operación requiere más Gas del que ustedes especificaron, la transacción fallará, pero aún así se les cobrará el Gas que se haya consumido hasta ese punto. Es como decir: "Estoy dispuesto a pagar hasta X cantidad de gasolina para llegar a mi destino".
        </p>
        <p className={styles.paragraph}>
          El <strong>Precio del Gas</strong> es cuánto Ether (en Gwei) están dispuestos a pagar por cada unidad de Gas. Aquí es donde entra la "subasta". Los mineros (o validadores) eligen las transacciones con los precios de Gas más altos para incluirlas en el siguiente bloque, porque así ganan más. Si el precio del Gas es bajo, su transacción podría tardar más en ser procesada, o incluso quedarse atascada. Es como decir: "Estoy dispuesto a pagar Y dólares por cada litro de gasolina".
        </p>
        <p className={styles.paragraph}>
          El costo total de su transacción es: <strong>Gas Consumido x Precio del Gas</strong>. Si su transacción consume menos Gas del límite que especificaron, se les devuelve la diferencia. ¡No se preocupen, no se les cobra de más!
        </p>

        <h2 className={styles.subtitle}>La Importancia del Gas</h2>
        <p className={styles.paragraph}>
          El Gas es fundamental para la seguridad y la eficiencia de la red Ethereum. Asegura que los recursos computacionales de la red se utilicen de manera justa y que los participantes maliciosos no puedan abusar de ella. Es el mecanismo que equilibra la demanda de la red con la capacidad de los mineros para procesar las transacciones.
        </p>
        <p className={styles.paragraph}>
          Así que, la próxima vez que escuchen hablar de "Gas" en Ethereum, piensen en ello como el combustible esencial que mantiene en movimiento esta increíble computadora global. Es el costo de hacer negocios en el mundo descentralizado. ¡Y eso es todo por hoy!
        </p>
      </div>
    </>
  );
}
