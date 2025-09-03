'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function SeguridadEstafasNFTsPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const nftsCourse = courseData.nfts;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={nftsCourse.title}
        modules={nftsCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Seguridad y Estafas Comunes en NFTs: ¡No Caigan en la Trampa!</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! Hoy vamos a hablar de un tema crucial, tan importante como entender la física de las partículas: <strong>la seguridad en el mundo de los NFTs</strong>. Porque, como en cualquier frontera, hay pioneros, hay exploradores, y también hay... bueno, hay quienes quieren aprovecharse de los incautos. Y mi trabajo es que ustedes no sean de esos.
        </p>
        <p className={styles.paragraph}>
          Imaginen que están en un casino. Hay luces brillantes, gente emocionada, y la promesa de grandes ganancias. Pero también hay carteristas, tahúres y juegos trucados. El mundo de los NFTs es un poco así: emocionante, innovador, pero lleno de rincones oscuros donde los estafadores acechan. La clave es entender cómo funcionan para no caer en sus trampas.
        </p>

        <h2 className={styles.subtitle}>El Engaño del Phishing: ¡Cuidado con los Enlaces!</h2>
        <p className={styles.paragraph}>
          La estafa más común, y la más insidiosa, es el <strong>phishing</strong>. Es como si alguien les enviara una carta que parece del banco, pero en realidad es de un ladrón. En el mundo NFT, esto se traduce en enlaces falsos. Reciben un mensaje en Discord, Twitter o un correo electrónico que parece de un proyecto NFT legítimo, o de un marketplace conocido (OpenSea, Rarible).
        </p>
        <p className={styles.paragraph}>
          Les piden que conecten su wallet, o que "verifiquen" su propiedad. ¡No lo hagan! Si hacen clic en un enlace malicioso y conectan su wallet, o peor aún, aprueban una transacción sin leerla, podrían estar dándole permiso al estafador para vaciar sus NFTs y criptomonedas. Siempre verifiquen la URL, ¡siempre! Un solo carácter diferente puede ser la perdición.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3041480_1280.jpg" alt="Seguridad en la blockchain" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Las Trampas del Mint Falso y los Airdrops Maliciosos</h2>
        <p className={styles.paragraph}>
          Otra táctica común es el <strong>mint falso</strong>. Anuncian un nuevo proyecto NFT muy prometedor, con un sitio web que parece legítimo, pero es una copia. Ustedes intentan mintear, pagan el gas, y lo que obtienen es un NFT sin valor, o peor, un contrato malicioso que les roba sus activos. Siempre verifiquen la autenticidad del proyecto en sus canales oficiales (Twitter, Discord) y busquen el contrato inteligente en exploradores de blockchain como Etherscan.
        </p>
        <p className={styles.paragraph}>
          Los <strong>airdrops maliciosos</strong> son otra variante. Reciben un NFT "gratis" en su wallet que no pidieron. La curiosidad les pica y van a un sitio web para "reclamarlo" o "venderlo". Al interactuar con ese NFT o sitio, aprueban una transacción que les roba sus activos. Si reciben algo que no esperaban, ¡ignórenlo! Si es demasiado bueno para ser verdad, probablemente lo sea.
        </p>

        <h2 className={styles.subtitle}>Consejos de un Físico para su Seguridad Digital</h2>
        <p className={styles.paragraph}>
          Aquí van mis reglas de oro, como si fueran leyes de la naturaleza:
        </p>
        <ul>
          <li><strong>Doble Verificación:</strong> Siempre verifiquen la URL, el remitente, y la información de la transacción. ¡No confíen en nadie!</li>
          <li><strong>No Hagan Clic en Enlaces Sospechosos:</strong> Si no están seguros, no hagan clic. Vayan directamente al sitio web oficial del proyecto o marketplace.</li>
          <li><strong>Lean las Transacciones:</strong> Antes de aprobar cualquier cosa en su wallet, lean qué permisos están dando. Si dice "aprobar todo" o "transferir todos sus NFTs", ¡cancelen!</li>
          <li><strong>Usen una Wallet Fría (Hardware Wallet):</strong> Para sus activos más valiosos, una wallet de hardware es como tener su dinero en una caja fuerte impenetrable.</li>
          <li><strong>Mantengan su Seed Phrase Segura:</strong> Es la llave maestra de su reino digital. Nunca la compartan, nunca la guarden en línea, y nunca la escriban en un lugar que pueda ser encontrado.</li>
          <li><strong>Desconfíen de las Ofertas Irresistibles:</strong> Si alguien les ofrece un NFT carísimo por un precio ridículo, es una estafa.</li>
        </ul>
        <p className={styles.paragraph}>
          El mundo digital es un lugar fascinante, pero también es un lugar donde la información es poder, y la ignorancia es un riesgo. Sean curiosos, sean escépticos, y sobre todo, ¡sean inteligentes! La seguridad no es una característica, es un proceso continuo. ¡Y eso es todo por hoy!
        </p>
      </div>
    </>
  );
}
