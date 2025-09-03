'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function DexPage() {
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
        <h1 className={styles.title}>Exchanges Descentralizados: El Mercado de Trueque del Siglo XXI</h1>
        <p className={styles.paragraph}>
          Muy bien, hablemos de intercambiar cosas. Si tienes manzanas y quieres peras, vas al mercado. En el mundo de las finanzas, si tienes acciones de Apple y quieres dólares, vas a la bolsa de Nueva York. Siempre hay un intermediario, un "mercado" central que junta a compradores y vendedores. A estos intermediarios en el mundo cripto los llamamos <strong>Exchanges Centralizados (CEX)</strong>.
        </p>
        <p className={styles.paragraph}>
          Pero, ¿recuerdan? La idea de DeFi es quitar a los intermediarios. Entonces, ¿cómo intercambiamos nuestras criptomonedas sin una empresa en el medio? La respuesta es una de las ideas más elegantes de DeFi: el <strong>Exchange Descentralizado</strong> o <strong>DEX</strong>.
        </p>

        <h2 className={styles.subtitle}>El Problema del Libro de Órdenes</h2>
        <p className={styles.paragraph}>
          Un mercado tradicional funciona con un "libro de órdenes". Es una lista de gente que grita: "¡Quiero comprar 1 manzana por $1!" y otra gente que grita: "¡Quiero vender 1 manzana por $1.01!". El mercado se encarga de juntar a los que se ponen de acuerdo. Pero mantener este libro de órdenes actualizado a cada segundo en una blockchain es lento y muy, muy caro.
        </p>
        <p className={styles.paragraph}>
          Necesitábamos una forma más simple. Y la solución fue genial: en lugar de juntar personas, ¿por qué no juntamos el dinero de todos en una gran piscina y dejamos que la gente intercambie directamente con la piscina?
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/cryptocurrency-3423263_1280.jpg" alt="Piscinas de liquidez para intercambios automáticos" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Las Piscinas de Liquidez: El Corazón del DEX</h2>
        <p className={styles.paragraph}>
          Aquí está la magia. Un DEX funciona con <strong>piscinas de liquidez (liquidity pools)</strong>. Imaginen una piscina que, en lugar de agua, tiene dos tipos de monedas, digamos Ether (ETH) y Dólares (USDC). Hay 10 ETH y 10,000 USDC. La piscina no sabe nada, solo sabe que tiene esas dos cosas.
        </p>
        <p className={styles.paragraph}>
          Ahora llegan ustedes y quieren comprar 1 ETH. El DEX les dice: "Claro, solo tienes que echar a la piscina la cantidad equivalente en USDC y sacar 1 ETH". El precio no lo decide un señor en una oficina, ¡lo decide una fórmula matemática muy simple! La más famosa es <strong>X * Y = K</strong>.
        </p>

        <h2 className={styles.subtitle}>La Fórmula Mágica: X * Y = K</h2>
        <p className={styles.paragraph}>
          No se asusten, es más fácil de lo que suena. 'X' es la cantidad de ETH en la piscina (10). 'Y' es la cantidad de USDC (10,000). 'K' es un número constante (10 * 10,000 = 100,000). La regla de oro de la piscina es: <strong>"Pase lo que pase, K no puede cambiar"</strong>.
        </p>
        <p className={styles.paragraph}>
          Si ustedes sacan 1 ETH, en la piscina quedan 9 ETH. Para que K siga siendo 100,000, la cantidad de USDC tiene que aumentar. La fórmula les dirá exactamente cuántos USDC tienen que meter en la piscina para que la ecuación se mantenga. Así es como se determina el precio: por el cambio en el balance de las dos monedas. Es un mercado que se auto-regula con una simple multiplicación.
        </p>
        <p className={styles.paragraph}>
          La gente que pone su dinero en estas piscinas para que otros puedan intercambiar se llaman <strong>proveedores de liquidez</strong>, y reciben una pequeña comisión de cada intercambio como recompensa. ¡Así todos ganan!
        </p>
        <p className={styles.paragraph}>
          Y eso es un DEX. Un sistema de piscinas y una fórmula simple que permite a cualquiera intercambiar criptomonedas sin confiar en nadie, directamente desde su propia wallet. Es un mercado de trueque global, instantáneo y sin jefes.
        </p>
      </div>
    </>
  );
}
