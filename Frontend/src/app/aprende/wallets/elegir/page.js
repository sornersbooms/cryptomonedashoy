'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ElegirPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const walletsCourse = courseData.wallets;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={walletsCourse.title}
        modules={walletsCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Cómo Elegir la Wallet Correcta: No Hay una Respuesta Única</h1>
        <p className={styles.paragraph}>
          Hemos visto que hay muchos tipos de wallets: calientes, frías, de software, de hardware, de papel, de custodia, de no custodia... ¡Es un lío! ¿Cuál es la mejor? La respuesta, como en casi todo en la vida, es: <strong>depende</strong>. Depende de lo que quieras hacer, de cuánto dinero tengas y de tu nivel de comodidad con la tecnología y el riesgo.
        </p>
        <p className={styles.paragraph}>
          Piensen en esto como elegir un vehículo. Si solo vas a ir a la tienda de la esquina, una bicicleta es perfecta. Si vas a cruzar el país, necesitas un coche. Si vas a la luna, un cohete. Cada herramienta tiene su propósito. Aquí les doy un marco para pensar.
        </p>

        <h2 className={styles.subtitle}>Pregunta Clave 1: ¿Cuánto Dinero Vas a Guardar?</h2>
        <p className={styles.paragraph}>
          Esta es la pregunta más importante. La cantidad de dinero que vas a guardar debería dictar el nivel de seguridad que necesitas.
        </p>
        <ul>
          <li><strong>Cantidades Pequeñas (dinero de bolsillo):</strong> Para el dinero que usas a diario, para probar DApps, para pequeñas transacciones. Aquí la <strong>conveniencia</strong> es clave. Una <strong>wallet móvil</strong> o una <strong>extensión de navegador</strong> (como MetaMask) es perfecta. Son wallets calientes, pero el riesgo es bajo porque la cantidad es pequeña.</li>
          <li><strong>Cantidades Medianas (ahorros a corto plazo):</strong> Para el dinero que no necesitas a diario pero que quieres tener relativamente accesible. Aquí buscas un equilibrio entre seguridad y conveniencia. Una <strong>wallet de escritorio</strong> o una <strong>wallet móvil</strong> con buenas prácticas de seguridad (PIN, 2FA) puede servir.</li>
          <li><strong>Cantidades Grandes (ahorros a largo plazo, patrimonio):</strong> Para el dinero que no vas a tocar en mucho tiempo y que representa una parte significativa de tu patrimonio. Aquí la <strong>seguridad</strong> es la prioridad absoluta. Una <strong>wallet de hardware</strong> es casi obligatoria. Es tu caja fuerte.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Diferentes tipos de wallets en una balanza" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Pregunta Clave 2: ¿Qué Vas a Hacer con tus Criptos?</h2>
        <p className={styles.paragraph}>
          El uso que le vas a dar también influye en la elección.
        </p>
        <ul>
          <li><strong>Solo Comprar y Vender (Principiante):</strong> Si solo quieres comprar y vender en un exchange, la wallet de custodia que te ofrece el propio exchange (como Coinbase o Binance) es la más sencilla para empezar. Pero recuerda: "Not your keys, not your coins".</li>
          <li><strong>Interactuar con DApps y DeFi:</strong> Si quieres usar aplicaciones descentralizadas, hacer Yield Farming, pedir préstamos en DeFi, etc., necesitarás una <strong>wallet de no custodia</strong> que se conecte a estas aplicaciones. MetaMask es el estándar de facto para Ethereum y redes compatibles.</li>
          <li><strong>Almacenamiento a Largo Plazo (HODL):</strong> Si tu plan es comprar y guardar por años, la seguridad es lo primero. Una <strong>wallet de hardware</strong> es la mejor opción. Una wallet de papel es una opción extrema para los más puristas, pero con más riesgos de pérdida física.</li>
        </ul>

        <h2 className={styles.subtitle}>Pregunta Clave 3: ¿Cuál es tu Nivel de Conocimiento y Comodidad?</h2>
        <p className={styles.paragraph}>
          Sé honesto contigo mismo. La auto-custodia es poder, pero también responsabilidad. Si no te sientes cómodo con la idea de ser tu propio banco, de guardar tu semilla de recuperación bajo siete llaves, o de entender cómo funcionan las transacciones, empieza con algo más sencillo.
        </p>
        <ul>
          <li><strong>Principiante:</strong> Empieza con una wallet de custodia en un exchange reputado. Aprende lo básico. Luego, cuando te sientas más seguro, da el salto a una wallet de no custodia.</li>
          <li><strong>Intermedio:</strong> Una wallet móvil o de navegador para el día a día, y una wallet de hardware para tus ahorros. Esta es la combinación más común y recomendada.</li>
          <li><strong>Avanzado:</strong> Puedes explorar opciones más complejas como wallets multi-firma, o incluso construir tus propias soluciones de almacenamiento en frío.</li>
        </ul>

        <h2 className={styles.subtitle}>La Mejor Estrategia: Diversificar</h2>
        <p className={styles.paragraph}>
          Al final, la mejor estrategia es no poner todos los huevos en la misma canasta. Usa diferentes tipos de wallets para diferentes propósitos. Una para el dinero que usas a diario, otra para tus ahorros, y quizás otra para experimentar con proyectos nuevos. La clave es entender los riesgos de cada una y elegir la que mejor se adapte a tus necesidades en cada momento. ¡Y siempre, siempre, guarda tu semilla de recuperación como si fuera el mapa de un tesoro!
        </p>
      </div>
    </>
  );
}
