'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function QueEsUnaWalletPage() {
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
        <h1 className={styles.title}>¿Qué es una Wallet? Tu Llavero Digital</h1>
        <p className={styles.paragraph}>
          De acuerdo, vamos a desmontar una de las primeras cosas con las que te tropiezas en el mundo cripto: la "wallet" o cartera. La palabra nos engaña. Cuando pensamos en una cartera, pensamos en un sitio donde guardamos el dinero, como la cartera de cuero que llevamos en el bolsillo. Pero en el mundo de las criptomonedas, esto es <strong>completamente falso</strong>.
        </p>
        <p className={styles.paragraph}>
          Tus criptomonedas no están "en" tu wallet. Tus criptomonedas (tus bitcoins, tu ether) no están en ningún sitio en particular. Solo son anotaciones en ese gran libro de contabilidad público y compartido que llamamos blockchain. Lo que tu wallet guarda no son las monedas, es algo mucho más importante: <strong>tus llaves</strong>.
        </p>

        <h2 className={styles.subtitle}>La Llave del Apartado Postal</h2>
        <p className={styles.paragraph}>
          Imaginen que la blockchain es como un edificio de correos gigante con miles de millones de apartados postales transparentes. Todo el mundo puede ver cuántas cartas (o monedas) hay en cada apartado, pero solo la persona con la llave correcta puede abrir un apartado para sacar las cartas y enviarlas a otro sitio.
        </p>
        <ul>
          <li><strong>La Dirección (Clave Pública):</strong> Es el número de tu apartado postal. Es una larga serie de letras y números que puedes compartir con cualquiera sin ningún peligro. Si quieres que alguien te envíe dinero, le das tu dirección. Es como decir: "¡Envíamelo al apartado 123!".</li>
          <li><strong>La Contraseña (Clave Privada):</strong> Esta es la llave maestra. Es un secreto absoluto que NUNCA, NUNCA debes compartir con nadie. Quien tiene esta llave, tiene el control total del apartado postal. Puede abrirlo y sacar todo lo que hay dentro.</li>
        </ul>
        <p className={styles.paragraph}>
          Una <strong>wallet de criptomonedas es simplemente un programa o un dispositivo que guarda y gestiona tus claves privadas</strong>. Eso es todo. Es un llavero digital. Su única función es mantener tus llaves seguras y facilitarte el trabajo de "firmar" transacciones para demostrar que eres el dueño de tus monedas.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-7693848_1280.png" alt="Una llave digital abriendo una cerradura en la blockchain" width={600} height={600} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>No es una Cuenta Bancaria</h2>
        <p className={styles.paragraph}>
          Esto es lo más importante que hay que entender. Cuando usas un banco, si pierdes tu contraseña, puedes llamar, verificar tu identidad y te darán una nueva. El banco tiene el control y puede ayudarte. En el mundo de las criptomonedas, no hay un banco. No hay nadie a quien llamar.
        </p>
        <p className={styles.paragraph}>
          <strong>Si pierdes tus claves privadas, has perdido tu dinero para siempre.</strong> Fin de la historia. El sistema no sabe quién eres, solo sabe de llaves. Por eso, la seguridad de tu wallet es tu responsabilidad, y solo tuya. A esto se le llama "auto-custodia".
        </p>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          Olvídate de la idea de que una wallet "contiene" tu dinero. No es así. Piensa en ella de esta forma:
        </p>
        <ul>
          <li>Tus monedas son apuntes en un libro de contabilidad público (la blockchain).</li>
          <li>Tu dirección es el número de la línea donde están tus apuntes.</li>
          <li>Tu wallet es el llavero que guarda la llave secreta que te permite escribir nuevos apuntes en ese libro.</li>
        </ul>
        <p className={styles.paragraph}>
          Entender esta simple analogía es el paso más crucial para navegar el mundo cripto de forma segura. No estás protegiendo monedas, estás protegiendo llaves. Y esas llaves te dan todo el poder y toda la responsabilidad.
        </p>
      </div>
    </>
  );
}
