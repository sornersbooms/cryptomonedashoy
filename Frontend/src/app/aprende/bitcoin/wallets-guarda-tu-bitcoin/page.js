'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function WalletsBitcoinPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const bitcoinCourse = courseData.bitcoin;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={bitcoinCourse.title}
        modules={bitcoinCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Wallets de Bitcoin: Tus Llaves, Tus Monedas</h1>
        <p className={styles.paragraph}>
          ¡Adelante! Hoy vamos a aclarar una de las ideas más confusas de Bitcoin: las "wallets" o carteras. Lo primero y más importante que deben entender es esto: una wallet de Bitcoin <strong>no guarda tus bitcoins</strong>. Sé que suena raro, pero es la verdad.
        </p>
        <p className={styles.paragraph}>
          Tus bitcoins nunca salen de la blockchain, de ese libro de contabilidad público y gigante. Siempre están ahí. Lo que una wallet guarda es algo mucho más importante: tus <strong>llaves privadas</strong>. 
        </p>

        <h2 className={styles.subtitle}>Piensa en un Correo Electrónico</h2>
        <p className={styles.paragraph}>
          Es como tu cuenta de email. Tus correos no están "en" tu teléfono; están en los servidores de Google o de quien sea. Tu teléfono solo tiene la <strong>contraseña</strong> para acceder a ellos. La wallet es la aplicación de correo (Gmail, Outlook) y la llave privada es tu contraseña. ¡Y no le darías tu contraseña a nadie, ¿verdad?! Con las llaves privadas, es exactamente lo mismo. Son el secreto que te da control sobre tus monedas en la blockchain.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-6772378_1280.png" alt="Una persona usando una wallet de Bitcoin en su teléfono" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Tipos de Carteras: Calientes y Frías</h2>
        <p className={styles.paragraph}>
          Hay dos sabores principales de wallets, y la diferencia es simple: ¿están conectadas a internet o no?
        </p>
        <h3>1. Wallets Calientes (Hot Wallets)</h3>
        <p className={styles.paragraph}>
          Son aplicaciones en tu teléfono o computadora. Se llaman "calientes" porque están conectadas a internet. Son súper <strong>convenientes</strong> para el día a día, para hacer pagos pequeños o gestionar tus monedas activamente. Pero, como todo lo que está en internet, tienen un pequeño riesgo de ser hackeadas. Es como llevar dinero en el bolsillo: útil, pero no llevarías ahí los ahorros de tu vida.
        </p>
        <h3>2. Wallets Frías (Cold Wallets)</h3>
        <p className={styles.paragraph}>
          Suelen ser pequeños dispositivos físicos, como una memoria USB. Guardan tus llaves privadas <strong>totalmente desconectadas</strong> de internet. Son increíblemente <strong>seguras</strong>. Un hacker no puede robar algo que no está online. Son como la caja fuerte de un banco. Perfectas para guardar grandes cantidades a largo plazo. Su única pega es que son un poco menos cómodas de usar y suelen costar dinero.
        </p>

        <h2 className={styles.subtitle}>¡Las Palabras Mágicas! La Frase Semilla</h2>
        <p className={styles.paragraph}>
          Esto es, quizás, lo más importante que aprenderán hoy. Cuando configuras una wallet por primera vez, te dará una lista de 12 o 24 palabras al azar. Esto es tu <strong>frase de recuperación</strong> o "frase semilla".
        </p>
        <p className={styles.paragraph}>
          Piensa en ella como la llave maestra de todas tus llaves. Si se te rompe el teléfono o se te estropea el ordenador, no pasa nada. Te descargas una nueva wallet en un dispositivo nuevo, introduces estas palabras mágicas en el orden correcto, y ¡listo! Todos tus fondos estarán ahí de nuevo. 
        </p>
        <p className={styles.paragraph}>
          <strong>¡Protege esta frase con tu vida!</strong> Anótala en un papel y guárdala en un lugar seguro y secreto. Nunca, jamás, la guardes en tu ordenador o le hagas una foto. Si alguien consigue tu frase semilla, consigue tus bitcoins. 
        </p>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          Una wallet no guarda monedas, guarda llaves. Las llaves te dan acceso a tus monedas en la blockchain. Las wallets calientes son para el día a día, las frías son para el ahorro a largo plazo. Y tu frase de recuperación es la red de seguridad definitiva. ¡Ahora ya sabes cómo ser tu propio banco!
        </p>
      </div>
    </>
  );
}
