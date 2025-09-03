'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ConfigurarPage() {
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
        <h1 className={styles.title}>Configurando tu Primera Wallet: El Primer Paso Hacia la Libertad</h1>
        <p className={styles.paragraph}>
          Muy bien, la teoría es bonita, pero ahora toca la práctica. Vamos a configurar tu primera wallet. No te preocupes, no es tan complicado como parece. Es como aprender a atarse los cordones de los zapatos: una vez que lo haces, es automático. Para este ejemplo, vamos a usar una wallet de software muy popular y versátil: <strong>MetaMask</strong>. Es una extensión de navegador, pero los principios son los mismos para casi cualquier wallet de no custodia.
        </p>

        <h2 className={styles.subtitle}>Paso 1: Descargar e Instalar MetaMask</h2>
        <p className={styles.paragraph}>
          Ve a la página oficial de MetaMask (¡asegúrate de que es la oficial para evitar estafas!) y descarga la extensión para tu navegador (Chrome, Firefox, Brave, Edge). Una vez descargada, instálala como cualquier otra extensión. Verás un pequeño icono de zorro en la esquina superior derecha de tu navegador.
        </p>

        <h2 className={styles.subtitle}>Paso 2: Crear una Nueva Wallet</h2>
        <p className={styles.paragraph}>
          Haz clic en el icono del zorro. Te dará la bienvenida y te preguntará si quieres importar una wallet existente o crear una nueva. Elige "Crear una nueva cartera".
        </p>
        <ul>
          <li><strong>Contraseña:</strong> Te pedirá que crees una contraseña. Esta contraseña es para proteger tu wallet en tu ordenador. Si alguien accede a tu ordenador, necesitará esta contraseña para abrir MetaMask. ¡Guárdala bien!</li>
          <li><strong>La Semilla de Recuperación (¡Lo Más Importante!):</strong> Después de la contraseña, te mostrará tu semilla de recuperación (seed phrase). ¡ESTE ES EL MOMENTO CRÍTICO! Te mostrará 12 palabras. Escríbelas en un papel, en el orden exacto, y guárdalas en un lugar seguro, muy seguro. Fuera de internet. Repito: ¡FUERA DE INTERNET! Esta es la única forma de recuperar tus fondos si pierdes tu ordenador o tu contraseña.</li>
          <li><strong>Verificación:</strong> Te pedirá que confirmes algunas de las palabras para asegurarse de que las has apuntado correctamente.</li>
        </ul>
        <p className={styles.paragraph}>
          ¡Felicidades! Ya tienes tu primera wallet de no custodia. Ahora verás tu dirección pública (empieza por 0x...) y un saldo de 0 ETH (o la moneda de la red en la que estés).
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Proceso de configuración de una wallet" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Paso 3: Añadir Fondos a tu Wallet</h2>
        <p className={styles.paragraph}>
          Una wallet vacía no sirve de mucho. Para añadir fondos, necesitas enviar criptomonedas a tu dirección pública. Puedes hacerlo desde un exchange centralizado (como Binance o Coinbase) o desde otra wallet.
        </p>
        <ul>
          <li><strong>Copia tu Dirección:</strong> En MetaMask, haz clic en tu dirección (la que empieza por 0x...). Se copiará automáticamente al portapapeles.</li>
          <li><strong>Envía desde el Exchange:</strong> Ve a tu exchange, busca la opción de "Retirar" o "Enviar" criptomonedas. Pega tu dirección de MetaMask, elige la red correcta (¡muy importante!) y la cantidad.</li>
          <li><strong>Verifica:</strong> Después de unos minutos (o segundos, dependiendo de la red), verás tus fondos aparecer en tu MetaMask. ¡Ya tienes dinero en tu propia wallet!
          </li>
        </ul>

        <h2 className={styles.subtitle}>Paso 4: Conectar a una DApp (Opcional, pero Divertido)</h2>
        <p className={styles.paragraph}>
          Ahora que tienes fondos, puedes empezar a explorar el mundo de las DApps y DeFi. 
        </p>
        <ul>
          <li><strong>Visita una DApp:</strong> Ve a una DApp, como Uniswap (un DEX) o Aave (un protocolo de préstamos).</li>
          <li><strong>Conecta tu Wallet:</strong> Busca un botón que diga "Conectar Wallet" o "Connect Wallet". Haz clic y elige MetaMask. Tu wallet se conectará a la DApp.</li>
          <li><strong>¡A Jugar!:</strong> Ahora puedes interactuar con la DApp, hacer intercambios, prestar dinero, etc. Cada acción requerirá que "firmes" una transacción en MetaMask, confirmando que estás de acuerdo con lo que vas a hacer.</li>
        </ul>

        <h2 className={styles.subtitle}>Consejos Finales: Sé Tu Propio Banco</h2>
        <p className={styles.paragraph}>
          Configurar tu primera wallet es un gran paso. Te da control y soberanía sobre tus activos. Pero recuerda:
        </p>
        <ul>
          <li><strong>La Semilla es el Rey:</strong> Protégela como tu vida.</li>
          <li><strong>Verifica Siempre:</strong> Antes de enviar, verifica la dirección. Antes de firmar, lee lo que vas a firmar.</li>
          <li><strong>Empieza Pequeño:</strong> No pongas todos tus ahorros en tu primera wallet. Empieza con una cantidad pequeña para aprender y sentirte cómodo.</li>
        </ul>
        <p className={styles.paragraph}>
          ¡Felicidades! Ya eres parte de la revolución. Ahora tienes las herramientas para explorar este nuevo mundo financiero por ti mismo.
        </p>
      </div>
    </>
  );
}
