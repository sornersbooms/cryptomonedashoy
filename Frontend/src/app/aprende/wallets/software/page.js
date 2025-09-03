'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function SoftwarePage() {
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
        <h1 className={styles.title}>Wallets de Software: Tu Llavero en la Nube o en tu Bolsillo</h1>
        <p className={styles.paragraph}>
          Ya sabemos que las wallets calientes están conectadas a internet y son convenientes. Ahora vamos a ver los diferentes sabores de estas wallets calientes, las que llamamos <strong>wallets de software</strong>. Son programas, aplicaciones, extensiones... en esencia, código que vive en algún lugar de tu mundo digital.
        </p>

        <h2 className={styles.subtitle}>1. Wallets de Escritorio: El Programa en tu Ordenador</h2>
        <p className={styles.paragraph}>
          Piensen en ellas como un programa que instalan en su ordenador, como Word o Photoshop. Una vez instaladas, guardan sus claves privadas directamente en el disco duro de su máquina. Ejemplos famosos son Exodus o Atomic Wallet.
        </p>
        <p className={styles.paragraph}>
          <strong>Ventajas:</strong> Tienes un control total sobre tus claves (siempre que tu ordenador esté seguro). Son más seguras que las wallets online porque tus claves no están en un servidor de terceros.
        </p>
        <p className={styles.paragraph}>
          <strong>Desventajas:</strong> Si tu ordenador es hackeado, si le entra un virus, o si simplemente se estropea el disco duro, tus claves podrían estar en peligro o perderse. Necesitas hacer copias de seguridad de tu semilla de recuperación.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Un ordenador con una wallet de software" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>2. Wallets Móviles: Tu Llavero en el Bolsillo</h2>
        <p className={styles.paragraph}>
          Estas son aplicaciones que instalas en tu smartphone. Son increíblemente populares porque te permiten llevar tus criptomonedas contigo a todas partes y hacer pagos rápidos con un código QR. Ejemplos son Trust Wallet, Coinbase Wallet o la app de MetaMask.
        </p>
        <p className={styles.paragraph}>
          <strong>Ventajas:</strong> Máxima conveniencia para transacciones diarias. Puedes usarlas para pagar en tiendas o interactuar con DApps sobre la marcha.
        </p>
        <p className={styles.paragraph}>
          <strong>Desventajas:</strong> Los móviles son más propensos a perderse o ser robados. También son un objetivo común para ataques de phishing o malware. De nuevo, la seguridad de tu móvil es la seguridad de tu wallet.
        </p>

        <h2 className={styles.subtitle}>3. Wallets de Navegador (Extensiones): El Enchufe a la Web3</h2>
        <p className={styles.paragraph}>
          Estas son extensiones que instalas en tu navegador web (Chrome, Firefox, Brave). MetaMask es el ejemplo más famoso y es, de lejos, la forma más común de interactuar con el mundo de las DApps y DeFi. Tus claves se guardan en tu navegador.
        </p>
        <p className={styles.paragraph}>
          <strong>Ventajas:</strong> Son la puerta de entrada al mundo de las aplicaciones descentralizadas (DApps). Te permiten conectar tu wallet a sitios web y firmar transacciones directamente desde el navegador.
        </p>
        <p className={styles.paragraph}>
          <strong>Desventajas:</strong> Son vulnerables a ataques de sitios web maliciosos o extensiones de navegador fraudulentas. Si tu navegador es comprometido, tus claves podrían estar en riesgo.
        </p>

        <h2 className={styles.subtitle}>4. Wallets Online (Web Wallets): La Comodidad con un Precio</h2>
        <p className={styles.paragraph}>
          Estas son wallets que se gestionan completamente a través de una página web. A menudo, tus claves privadas se guardan en los servidores de la empresa que ofrece el servicio. Un ejemplo sería la wallet que te dan en un exchange centralizado como Binance o Coinbase.
        </p>
        <p className={styles.paragraph}>
          <strong>Ventajas:</strong> Son las más fáciles de usar para principiantes. No tienes que preocuparte por guardar tus claves, la empresa lo hace por ti. Acceso desde cualquier dispositivo con internet.
        </p>
        <p className={styles.paragraph}>
          <strong>Desventajas:</strong> ¡Aquí está el gran problema! No tienes el control total de tus claves. Estás confiando en un tercero. Si la empresa es hackeada, si quiebra o si decide congelar tus fondos, podrías perderlo todo. "Not your keys, not your coins" (Si no tienes tus claves, no tienes tus monedas) es el mantra aquí.
        </p>

        <h2 className={styles.subtitle}>La Elección Correcta</h2>
        <p className={styles.paragraph}>
          Cada tipo de wallet de software tiene su lugar. Para pequeñas cantidades y uso diario, las móviles y de navegador son fantásticas. Para cantidades más grandes, las de escritorio son un paso adelante. Y las online, aunque cómodas, son las que implican mayor riesgo de terceros. La clave es entender dónde se guardan tus claves y quién tiene el control. ¡Y siempre, siempre, tener tu semilla de recuperación a buen recaudo!
        </p>
      </div>
    </>
  );
}
