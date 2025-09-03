'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function DappsDefiPage() {
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
        <h1 className={styles.title}>Integración con DApps y DeFi: Tu Wallet, Tu Pasaporte al Nuevo Mundo</h1>
        <p className={styles.paragraph}>
          Hemos hablado de wallets como llaveros y de DApps como aplicaciones que viven en la blockchain. Ahora, ¿cómo se conectan estas dos cosas? ¿Cómo usas tu wallet para interactuar con un DEX, un protocolo de préstamos o un juego NFT? Es como usar tu pasaporte para viajar a un nuevo país. Tu wallet es tu identidad y tu permiso para interactuar con el mundo descentralizado.
        </p>

        <h2 className={styles.subtitle}>El Estándar: WalletConnect y Proveedores de Ethereum</h2>
        <p className={styles.paragraph}>
          La mayoría de las DApps y protocolos DeFi funcionan de una manera muy similar. Se basan en un estándar que permite que tu wallet "hable" con la aplicación web. El más común es el "proveedor de Ethereum" (Ethereum Provider), que es una interfaz que permite a las DApps solicitar acciones a tu wallet. 
        </p>
        <p className={styles.paragraph}>
          Si usas MetaMask, por ejemplo, la extensión de tu navegador actúa como ese proveedor. Cuando visitas una DApp, esta detecta que tienes MetaMask instalado y te pide permiso para conectarse. Si usas una wallet móvil, a menudo se usa un protocolo llamado <strong>WalletConnect</strong>, que te permite escanear un código QR en la pantalla de tu ordenador con tu móvil para establecer una conexión segura.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Una wallet conectándose a una DApp" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Proceso: Conectar y Firmar</h2>
        <p className={styles.paragraph}>
          El proceso general para interactuar con una DApp es siempre el mismo:
        </p>
        <ol>
          <li><strong>Visita la DApp:</strong> Abre la página web de la DApp en tu navegador.</li>
          <li><strong>Conecta tu Wallet:</strong> Busca un botón que diga "Conectar Wallet" o "Connect Wallet". Haz clic en él.</li>
          <li><strong>Elige tu Wallet:</strong> Aparecerá una lista de wallets compatibles (MetaMask, WalletConnect, Coinbase Wallet, etc.). Elige la tuya.</li>
          <li><strong>Autoriza la Conexión:</strong> Tu wallet te pedirá permiso para conectarse a la DApp. Esto no le da acceso a tus fondos, solo le permite ver tu dirección pública y solicitarte que firmes transacciones. ¡Siempre lee lo que autorizas!</li>
          <li><strong>Interactúa con la DApp:</strong> Una vez conectada, la DApp podrá ver tu saldo y tú podrás usar sus funciones (intercambiar tokens, depositar en una piscina de liquidez, pedir un préstamo, etc.).</li>
          <li><strong>Firma Transacciones:</strong> Cada vez que quieras hacer una acción que implique mover fondos o cambiar el estado de la blockchain, tu wallet te pedirá que "firmes" una transacción. Esto es crucial. La DApp te prepara la transacción, pero tú eres quien la autoriza con tu clave privada. Siempre revisa los detalles de la transacción antes de firmar.</li>
        </ol>

        <h2 className={styles.subtitle}>¿Qué Significa "Firmar" una Transacción?</h2>
        <p className={styles.paragraph}>
          Cuando firmas una transacción, no estás dando tu clave privada a la DApp. Lo que haces es usar tu clave privada para crear una firma digital única para esa transacción específica. Es como poner tu huella dactilar en un documento. La DApp luego envía esa transacción firmada a la blockchain para que se ejecute. Tu clave privada nunca sale de tu wallet.
        </p>

        <h2 className={styles.subtitle}>Consejos de Seguridad para DApps y DeFi</h2>
        <p className={styles.paragraph}>
          La conveniencia de interactuar con DApps viene con riesgos. Aquí van algunos consejos:
        </p>
        <ul>
          <li><strong>Verifica la URL:</strong> Siempre, siempre, asegúrate de que estás en la página web oficial de la DApp. Los ataques de phishing son muy comunes.</li>
          <li><strong>Desconecta tu Wallet:</strong> Cuando termines de usar una DApp, desconecta tu wallet. La mayoría de las wallets tienen una opción para "desconectar" o "revocar permisos".</li>
          <li><strong>Revisa los Permisos:</strong> Algunas DApps te pedirán permisos para gastar tus tokens en tu nombre. Ten mucho cuidado con esto. Solo da permisos a contratos en los que confíes plenamente y solo por la cantidad necesaria.</li>
          <li><strong>Empieza con Pequeñas Cantidades:</strong> Si es la primera vez que usas una DApp o un protocolo, empieza con una cantidad pequeña de fondos para probarlo.</li>
          <li><strong>Usa una Wallet de Hardware:</strong> Para cantidades significativas, conecta tu wallet de hardware a MetaMask. Así, la firma de la transacción se hará en el dispositivo físico, añadiendo una capa extra de seguridad.</li>
        </ul>
        <p className={styles.paragraph}>
          Tu wallet es tu pasaporte al mundo de las finanzas descentralizadas. Aprender a usarla de forma segura para interactuar con DApps es el paso final para convertirte en un verdadero ciudadano de la Web3. ¡Ahora, a explorar!
        </p>
      </div>
    </>
  );
}
