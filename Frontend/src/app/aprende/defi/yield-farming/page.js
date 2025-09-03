'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function YieldFarmingPage() {
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
        <h1 className={styles.title}>Yield Farming y Staking: Cosechando en el Campo Digital</h1>
        <p className={styles.paragraph}>
          Muy bien, ya sabemos que podemos prestar dinero para ganar un interés. Simple. Pero, ¿y si les digo que podemos tomar ese "recibo" que nos dan por prestar y usarlo para ganar todavía más dinero en otro sitio? Ahí es donde la cosa se pone interesante. Bienvenidos a la "agricultura de rendimiento" o <strong>Yield Farming</strong>.
        </p>

        <h2 className={styles.subtitle}>Staking: La Apuesta Segura</h2>
        <p className={styles.paragraph}>
          Primero, lo más sencillo: <strong>Staking</strong>. Imaginen que una red de blockchain es como un club. Para asegurarse de que todos se portan bien y que las transacciones son honestas, el club pide a sus miembros que pongan algo de dinero como fianza. Al poner esa fianza (hacer "staking" de tus monedas), estás "apostando" a que la red funcionará bien. A cambio de tu ayuda para asegurar el club, este te da una recompensa, como un dividendo.
        </p>
        <p className={styles.paragraph}>
          Es una forma de ganar dinero simplemente por tener y bloquear tus monedas. Es como un depósito a plazo fijo en un banco, pero en lugar de ayudar al banco, estás ayudando a que una red descentralizada sea segura. Bastante directo, ¿verdad?
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-4231398_1280.jpg" alt="Agricultor digital cosechando rendimientos de sus activos" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Yield Farming: El Juego de los LEGOs al Máximo</h2>
        <p className={styles.paragraph}>
          El <strong>Yield Farming</strong> es más enrevesado y creativo. Es el arte de exprimir hasta la última gota de rendimiento de tu capital, moviéndolo de un sitio a otro. Es como ser un agricultor súper eficiente que no solo cosecha trigo, sino que usa la paja para alimentar al ganado y el estiércol para fertilizar un segundo campo.
        </p>
        <p className={styles.paragraph}>
          Funciona así:
        </p>
        <ol>
          <li>Vas a un DEX y depositas tus monedas en una piscina de liquidez (por ejemplo, ETH y USDC). Como ya vimos, por hacer esto, el DEX te paga comisiones. ¡Primer rendimiento!</li>
          <li>Al depositar, el DEX te da unas "fichas de piscina" (LP tokens), que son como el recibo de que eres dueño de una parte de esa piscina.</li>
          <li>Ahora viene lo bueno. En lugar de guardar ese recibo en un cajón, buscas otro protocolo DeFi, una "granja", que esté buscando justo esos recibos.</li>
          <li>Depositas tus "fichas de piscina" en esa granja. ¿Por qué querrían tu recibo? Porque les ayuda a ellos a tener más liquidez. A cambio de prestarles tu recibo, la granja te paga con su propia moneda (un token de gobernanza). ¡Segundo rendimiento!</li>
        </ol>
        <p className={styles.paragraph}>
          ¡Y podría no acabar ahí! Podrías tomar esa nueva moneda que te dieron y usarla en otro sitio para ganar un tercer rendimiento. Es una cadena. Estás apilando un rendimiento sobre otro, sobre otro... como construir con LEGOs cada vez más alto.
        </p>

        <h2 className={styles.subtitle}>¿Es Fácil y Seguro? ¡Para Nada!</h2>
        <p className={styles.paragraph}>
          Suena genial, pero aquí está la trampa. Cada paso en esta cadena añade complejidad y riesgo. El valor de las monedas puede cambiar (el famoso *impermanent loss*), los contratos inteligentes pueden tener errores (bugs), y las estrategias que funcionan hoy pueden no funcionar mañana. El Yield Farming es un juego de alto riesgo y alta recompensa.
        </p>
        <p className={styles.paragraph}>
          Así que, en resumen: <strong>Staking</strong> es simple y más seguro, es ganar por ayudar a una red. <strong>Yield Farming</strong> es complejo y arriesgado, es el arte de mover tu dinero a través de diferentes protocolos para maximizar las ganancias. Uno es ser un inversor paciente, el otro es ser un agricultor hiperactivo en el salvaje oeste digital.
        </p>
      </div>
    </>
  );
}
