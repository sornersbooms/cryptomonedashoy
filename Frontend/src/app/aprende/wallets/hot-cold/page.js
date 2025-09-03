'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function HotColdPage() {
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
        <h1 className={styles.title}>Wallets Calientes y Frías: La Cartera de Diario y la Caja Fuerte</h1>
        <p className={styles.paragraph}>
          Ya sabemos que una wallet es un llavero que guarda nuestras claves secretas. Pero no todos los llaveros son iguales. La diferencia fundamental entre los tipos de wallets no es la marca ni el color, sino una sola cosa: <strong>¿está conectada a internet o no?</strong> Esta simple pregunta divide el universo de las wallets en dos grandes categorías: calientes y frías.
        </p>

        <h2 className={styles.subtitle}>Wallets Calientes (Hot Wallets): La Cartera en tu Bolsillo</h2>
        <p className={styles.paragraph}>
          Una <strong>wallet caliente</strong> es cualquier wallet que se ejecuta en un dispositivo conectado a internet. Esto incluye las aplicaciones en tu móvil (como MetaMask o Trust Wallet), las extensiones de tu navegador o los programas en tu ordenador. 
        </p>
        <p className={styles.paragraph}>
          Piensen en ella como la cartera de cuero que llevan en el bolsillo. Es increíblemente <strong>conveniente</strong>. La tienes siempre a mano para pagar un café, para interactuar con una aplicación de DeFi, para hacer un intercambio rápido. Es perfecta para el día a día, para manejar pequeñas cantidades de dinero.
        </p>
        <p className={styles.paragraph}>
          Pero, ¿cuál es el problema? Que al estar conectada a internet, está expuesta a los peligros de internet. Si tu ordenador o tu móvil coge un virus, si caes en una estafa de phishing, un ladrón podría, en teoría, acceder a tu wallet y robar las claves que guarda. Es como llevar mucho dinero en efectivo en la cartera por una calle peligrosa. Es conveniente, pero no es lo más seguro para guardar los ahorros de tu vida.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/cryptocurrency-3409658_1280.jpg" alt="Una wallet caliente (móvil) y una wallet fría (hardware) contrastando" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Wallets Frías (Cold Wallets): La Caja Fuerte en un Búnker</h2>
        <p className={styles.paragraph}>
          Una <strong>wallet fría</strong> es un dispositivo que mantiene tus claves privadas completamente desconectado de internet. Las genera y las almacena en un entorno seguro y aislado, un "búnker" digital. Los ejemplos más comunes son los dispositivos de hardware (como Ledger o Trezor) o una simple hoja de papel con tus claves apuntadas (paper wallet).
        </p>
        <p className={styles.paragraph}>
          Piensen en ella como una caja fuerte en el sótano de un banco. Es mucho menos conveniente. Para hacer una transacción, tienes que conectar el dispositivo, introducir un PIN, verificar la transacción en su pequeña pantalla y pulsar un botón físico. Es un proceso más lento y deliberado.
        </p>
        <p className={styles.paragraph}>
          Pero esa inconveniencia es precisamente su mayor fortaleza. Al estar desconectada, es prácticamente <strong>inmune a los ataques online</strong>. Un hacker no puede robar algo que no está en la red. Por eso, las wallets frías son el estándar de oro para guardar grandes cantidades de criptomonedas a largo plazo. Son para tus ahorros, no para el café.
        </p>

        <h2 className={styles.subtitle}>La Estrategia Correcta: Usar las Dos</h2>
        <p className={styles.paragraph}>
          Entonces, ¿cuál es mejor? ¡La pregunta es incorrecta! No se trata de elegir una u otra. Se trata de usar la herramienta adecuada para el trabajo adecuado. Nadie guarda todos sus ahorros en la cartera del bolsillo, ni va al banco a sacar dinero de la caja fuerte para pagar un chicle.
        </p>
        <p className={styles.paragraph}>
          La estrategia inteligente es usar ambas:
        </p>
        <ul>
          <li><strong>Una hot wallet en tu móvil o navegador:</strong> Para el día a día. Cárgala con una pequeña cantidad de dinero que no te importaría perder, para interactuar con DApps, hacer intercambios y pagar pequeñas cosas. Es tu "cartera de gastos".</li>
          <li><strong>Una cold wallet (hardware):</strong> Para el resto. La gran mayoría de tus fondos, tus ahorros a largo plazo, deben estar guardados de forma segura y desconectada. Es tu "cuenta de ahorros".</li>
        </ul>
        <p className={styles.paragraph}>
          De esta forma, obtienes lo mejor de ambos mundos: la conveniencia para las operaciones diarias y la máxima seguridad para tu patrimonio. Entender esta separación es fundamental para protegerte en el Salvaje Oeste que es el mundo cripto.
        </p>
      </div>
    </>
  );
}
