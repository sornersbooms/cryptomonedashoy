'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function CustodiaPage() {
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
        <h1 className={styles.title}>Custodia vs. No Custodia: ¿Quién Tiene las Llaves?</h1>
        <p className={styles.paragraph}>
          Esta es la pregunta más importante que te puedes hacer en el mundo de las criptomonedas. No es una cuestión de tecnología, sino de <strong>filosofía y confianza</strong>. ¿Quién tiene el control de tus claves privadas? ¿Tú o alguien más? La respuesta a esta pregunta define si tu wallet es de custodia o de no custodia.
        </p>

        <h2 className={styles.subtitle}>Wallets de Custodia: Confía en Mí</h2>
        <p className={styles.paragraph}>
          Una <strong>wallet de custodia</strong> es aquella en la que <strong>un tercero guarda tus claves privadas por ti</strong>. El ejemplo más común es la wallet que te dan en un exchange centralizado como Coinbase, Binance o Kraken. Cuando compras Bitcoin en Coinbase, no te dan las claves privadas de ese Bitcoin. Ellos las guardan en sus servidores.
        </p>
        <p className={styles.paragraph}>
          Piensen en ello como dejar su dinero en un banco. El banco lo guarda por ustedes, lo asegura, y ustedes confían en que el banco les devolverá su dinero cuando lo pidan. Es conveniente, ¿verdad? No tienes que preocuparte por perder tus claves, por los hackers, por las copias de seguridad. El banco (o el exchange) se encarga de todo.
        </p>
        <p className={styles.paragraph}>
          <strong>Ventajas:</strong> Facilidad de uso, ideal para principiantes. No hay riesgo de perder tus claves. Acceso a servicios adicionales como trading, préstamos, etc.
        </p>
        <p className={styles.paragraph}>
          <strong>Desventajas:</strong> ¡Aquí está el gran problema! Si no tienes tus claves, no tienes tus monedas. Estás confiando en un tercero. Si el exchange es hackeado, si quiebra, si decide congelar tus fondos, o si un gobierno les obliga a hacerlo, podrías perderlo todo. "Not your keys, not your coins" (Si no tienes tus claves, no tienes tus monedas) es el mantra aquí.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Una mano entregando una llave a otra, simbolizando la custodia" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Wallets de No Custodia: Tú Tienes el Control Total</h2>
        <p className={styles.paragraph}>
          Una <strong>wallet de no custodia</strong> es aquella en la que <strong>tú eres el único que tiene acceso a tus claves privadas</strong>. Esto incluye las wallets de hardware (Ledger, Trezor), las wallets de software (MetaMask, Trust Wallet, Exodus) y las wallets de papel. 
        </p>
        <p className={styles.paragraph}>
          Piensen en ello como guardar su dinero en una caja fuerte en su propia casa. Nadie más tiene la llave. Solo ustedes. Esto les da un control total y absoluto sobre sus fondos. Nadie puede congelarlos, nadie puede quitárselos, nadie puede decirles qué hacer con ellos.
        </p>
        <p className={styles.paragraph}>
          <strong>Ventajas:</strong> Máxima seguridad y soberanía. Eres el único dueño de tus fondos. Inmune a la censura o congelación por parte de terceros. Acceso a todo el ecosistema DeFi.
        </p>
        <p className={styles.paragraph}>
          <strong>Desventajas:</strong> La responsabilidad es tuya. Si pierdes tus claves privadas (o tu semilla de recuperación), pierdes tus fondos para siempre. No hay servicio de atención al cliente que te ayude. Requiere más conocimiento y disciplina para gestionar la seguridad.
        </p>

        <h2 className={styles.subtitle}>La Elección: Conveniencia vs. Soberanía</h2>
        <p className={styles.paragraph}>
          La elección entre una wallet de custodia y una de no custodia es una de las decisiones más fundamentales que tomarás en el mundo cripto. 
        </p>
        <ul>
          <li>Para pequeñas cantidades, para empezar, o si no te sientes cómodo con la responsabilidad, una wallet de custodia puede ser una buena opción.</li>
          <li>Para cantidades significativas, para interactuar con DeFi, o si valoras la soberanía y el control total, una wallet de no custodia es el camino a seguir.</li>
        </ul>
        <p className={styles.paragraph}>
          La belleza de las criptomonedas es que te dan la opción. Te permiten ser tu propio banco. Pero con ese poder viene una gran responsabilidad. Entender quién tiene las llaves es el primer paso para tomar el control de tu propio destino financiero en este nuevo mundo.
        </p>
      </div>
    </>
  );
}
