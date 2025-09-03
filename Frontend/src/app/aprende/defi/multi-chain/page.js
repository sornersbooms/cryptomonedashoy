'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function MultiChainPage() {
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
        <h1 className={styles.title}>El Mundo Multi-Cadena: No Todo es Ethereum</h1>
        <p className={styles.paragraph}>
          Hasta ahora, cuando hemos hablado de DeFi, casi siempre hemos pensado en Ethereum. Es el rey, la primera gran ciudad donde se construyeron todos estos LEGOs financieros. Pero, ¿qué pasa cuando una ciudad se vuelve demasiado popular? Se llena de gente, el tráfico es horrible y todo se vuelve carísimo. En Ethereum, a ese "tráfico" lo llamamos congestión de la red, y a ese "precio caro" lo llamamos <strong>tarifas de gas</strong>.
        </p>
        <p className={styles.paragraph}>
          Hacer una simple operación en Ethereum en horas punta puede costar una cantidad absurda de dinero en gas. Para el pequeño inversor, es como si para comprar un café de 3 dólares tuvieras que pagar 50 dólares de peaje. ¡No tiene sentido! La gente empezó a buscar otros sitios. Empezaron a mudarse a otras "ciudades", a otras blockchains.
        </p>

        <h2 className={styles.subtitle}>El Surgimiento de Nuevas Ciudades</h2>
        <p className={styles.paragraph}>
          Así nació el <strong>mundo multi-cadena (multi-chain)</strong>. Empezaron a surgir otras blockchains que eran compatibles con el código de Ethereum (se llaman EVM-compatibles) pero que prometían dos cosas: ser mucho más rápidas y mucho más baratas. 
        </p>
        <p className={styles.paragraph}>
          Piensen en ciudades como:
        </p>
        <ul>
          <li><strong>Polygon:</strong> Es como un barrio residencial pegado a la gran ciudad de Ethereum, con un tren de alta velocidad que las conecta. Ofrece transacciones baratas y rápidas, pero sigue muy conectada a la seguridad de Ethereum.</li>
          <li><strong>Avalanche:</strong> Es otra gran metrópolis, construida desde cero para ser increíblemente rápida, capaz de procesar miles de transacciones por segundo.</li>
          <li><strong>Solana:</strong> Es la ciudad futurista, con una arquitectura completamente diferente, diseñada para una velocidad y una escala masivas, aunque a veces sufre "apagones".</li>
          <li><strong>Arbitrum/Optimism:</strong> Estas son como "rascacielos" construidos encima de Ethereum (se llaman Layer 2 o Capa 2). Procesan miles de transacciones en su propio edificio y luego solo registran el resultado final en la ciudad principal de Ethereum, ahorrando un montón de espacio y dinero.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-7072522_1280.jpg" alt="Un mapa con diferentes ciudades blockchain interconectadas" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Por Qué es Importante para Ti?</h2>
        <p className={styles.paragraph}>
          Como usuario de DeFi, este mundo multi-cadena es una bendición. Significa que tienes opciones. Si quieres hacer Yield Farming con poco dinero, probablemente no lo harás en Ethereum. Te irás a Polygon o a Arbitrum, donde una transacción te costará céntimos en lugar de decenas de dólares.
        </p>
        <p className={styles.paragraph}>
          Cada cadena tiene su propia cultura, sus propias aplicaciones estrella y sus propias comunidades. Los mismos protocolos que conoces en Ethereum (como Aave o Curve) a menudo tienen versiones desplegadas en estas otras cadenas. Tu wallet, como MetaMask, puede cambiar de una red a otra con solo un clic, como si cambiaras de canal en la televisión.
        </p>

        <h2 className={styles.subtitle}>El Desafío: Moverse entre Ciudades</h2>
        <p className={styles.paragraph}>
          El gran desafío de este nuevo mundo es cómo moverse entre estas ciudades. ¿Cómo llevas tu dinero de Ethereum a Polygon? Para eso usamos los <strong>puentes (bridges)</strong>, de los que ya hemos hablado. Son la infraestructura crítica que conecta todas estas islas y las convierte en un verdadero continente interconectado.
        </p>
        <p className={styles.paragraph}>
          El futuro de DeFi no pertenece a una sola cadena. Es un futuro multi-cadena. Entender las ventajas y desventajas de cada una de estas "ciudades" digitales es clave para navegar el ecosistema. Algunas son más seguras, otras más rápidas, otras más baratas. Tu trabajo como explorador de DeFi es elegir la ciudad correcta para la tarea que quieres realizar.
        </p>
      </div>
    </>
  );
}
