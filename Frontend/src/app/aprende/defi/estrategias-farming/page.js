'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function EstrategiasFarmingPage() {
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
        <h1 className={styles.title}>Estrategias de Yield Farming: El Arte de la Cosecha</h1>
        <p className={styles.paragraph}>
          De acuerdo, ya entendimos qué es el Yield Farming: el juego de apilar LEGOs de rendimiento uno encima de otro. Pero decir "voy a hacer Yield Farming" es como decir "voy a cocinar". No significa nada sin una receta. Lo que necesitamos son <strong>estrategias</strong>. Y aunque hay miles, casi todas son variaciones de unas pocas ideas fundamentales.
        </p>
        <p className={styles.paragraph}>
          Vamos a ver las "recetas" básicas, desde la más simple hasta la más enrevesada, para que entiendan la lógica del agricultor de DeFi.
        </p>

        <h2 className={styles.subtitle}>Estrategia 1: El Proveedor de Liquidez Simple</h2>
        <p className={styles.paragraph}>
          Esta es la estrategia más básica y fundamental. Es el pan con mantequilla del Yield Farmer.
        </p>
        <ol>
          <li><strong>Elige una piscina:</strong> Buscas una piscina de liquidez en un DEX conocido (como Uniswap, Curve o PancakeSwap). Lo ideal es un par de monedas que creas que se van a mantener estables entre sí, por ejemplo, un par de stablecoins como USDC/DAI, o un par como ETH/wBTC.</li>
          <li><strong>Aporta liquidez:</strong> Depositas la misma cantidad de valor de ambas monedas en la piscina.</li>
          <li><strong>Cosecha las comisiones:</strong> A cambio, recibes una parte de las comisiones de trading que pagan los que usan la piscina. Ya está. No haces nada más. Es una estrategia de "depositar y olvidar" (relativamente hablando).</li>
        </ol>
        <p className={styles.paragraph}>
          <strong>Ventaja:</strong> Es fácil de entender. <strong>Desventaja:</strong> El rendimiento (APY) suele ser modesto y estás expuesto al riesgo de *impermanent loss*.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-6884852_1280.jpg" alt="Un agricultor digital planificando sus estrategias de cosecha" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Estrategia 2: El Agricultor de Recompensas (Farming)</h2>
        <p className={styles.paragraph}>
          Aquí es donde empieza el verdadero "farming". Es la Estrategia 1, pero con un paso extra que lo cambia todo.
        </p>
        <ol>
          <li><strong>Sigue los pasos 1 y 2 de antes:</strong> Aportas liquidez a una piscina y, a cambio, el DEX te da unos tokens LP (el recibo).</li>
          <li><strong>Busca una granja:</strong> Ahora, buscas un protocolo que quiera incentivar esa piscina. Muchos proyectos nuevos lo hacen para atraer liquidez. Te dirán: "¡Oye! Si traes tus tokens LP de la piscina X/Y y los depositas aquí, te daremos nuestro propio token de gobernanza como recompensa extra".</li>
          <li><strong>Deposita (Stake) tus LP Tokens:</strong> Metes tus recibos en esta "granja". Ahora estás ganando dos cosas a la vez: las comisiones del trading de la piscina Y los nuevos tokens de la granja.</li>
        </ol>
        <p className={styles.paragraph}>
          <strong>Ventaja:</strong> El rendimiento potencial es mucho más alto (a veces, altísimo). <strong>Desventaja:</strong> Añades un nuevo riesgo. Ahora no solo dependes del DEX, sino también del protocolo de la granja. Y el valor del token que te regalan puede desplomarse.
        </p>

        <h2 className={styles.subtitle}>Estrategia 3: El Agricultor Compulsivo (Auto-compounding)</h2>
        <p className={styles.paragraph}>
          Esta es para los obsesionados con la eficiencia. Es la Estrategia 2, pero poniéndole un motor de cohete.
        </p>
        <p className={styles.paragraph}>
          Las recompensas de la granja (los tokens que te regalan) se suelen poder reclamar cada día o cada pocas horas. ¿Qué haces con ellas? Un agricultor compulsivo las cosecha inmediatamente, las vende en el mercado por más de las monedas originales que depositó (USDC/DAI, por ejemplo), y vuelve a añadir esa pequeña cantidad a su posición original en la piscina de liquidez. Al hacer esto, su trozo de la piscina se hace un poquito más grande, por lo que ganará un poquito más de comisiones y un poquito más de recompensas. Es el interés compuesto, pero a cámara súper-rápida.
        </p>
        <p className={styles.paragraph}>
          Hacer esto a mano es un fastidio y caro por las comisiones de gas. Por eso existen los <strong>"auto-compounders"</strong> o "bóvedas" (vaults) como Yearn Finance o Beefy Finance. Son protocolos que hacen todo este proceso de cosechar y reinvertir por ti, de forma automática y súper eficiente. Tú solo depositas tus tokens LP y ves cómo tu inversión crece sola.
        </p>
        <p className={styles.paragraph}>
          <strong>Ventaja:</strong> Maximiza el rendimiento de forma espectacular (el APY se convierte en APY compuesto o APYc). <strong>Desventaja:</strong> Añades OTRA capa de riesgo. Ahora confías en el DEX, en la granja Y en la bóveda que hace la auto-composición. Cada capa de LEGO añade un nuevo punto de posible rotura.
        </p>
        <p className={styles.paragraph}>
          Entender estas tres estrategias es entender el 90% del Yield Farming. Todo lo demás son combinaciones y variaciones de estas ideas. La clave es siempre la misma: encontrar un equilibrio entre el rendimiento que persigues y el riesgo que estás dispuesto a asumir.
        </p>
      </div>
    </>
  );
}
