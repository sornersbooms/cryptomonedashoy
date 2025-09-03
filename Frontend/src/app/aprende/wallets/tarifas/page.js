'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function TarifasPage() {
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
        <h1 className={styles.title}>Tarifas de Transacción (Gas): El Precio de la Energía Digital</h1>
        <p className={styles.paragraph}>
          Muy bien, ya sabemos cómo enviar y recibir criptomonedas. Pero hay un pequeño detalle que siempre aparece cuando haces una transacción: la "tarifa" o, en el mundo de Ethereum y otras blockchains, el <strong>"gas"</strong>. ¿Qué es esto? ¿Por qué tenemos que pagarlo? Y, ¿por qué a veces es tan caro?
        </p>
        <p className={styles.paragraph}>
          Piensen en la blockchain como una gran autopista digital. Cada vez que envías una transacción, estás usando un trocito de esa autopista. Y como en cualquier autopista, hay que pagar un peaje. Ese peaje es la tarifa de transacción. Y el "gas" es la unidad de medida de ese peaje.
        </p>

        <h2 className={styles.subtitle}>¿Quién Recibe el Dinero? Los Mineros/Validadores</h2>
        <p className={styles.paragraph}>
          En una autopista normal, el peaje va a la empresa que la construyó y la mantiene. En la blockchain, el peaje va a los <strong>mineros</strong> (en blockchains como Bitcoin o Ethereum antes de su actualización) o a los <strong>validadores</strong> (en blockchains más nuevas como Ethereum actual o Solana). 
        </p>
        <p className={styles.paragraph}>
          Estos mineros/validadores son los que hacen el trabajo pesado: verifican las transacciones, las agrupan en bloques y las añaden a la blockchain. Es un trabajo que requiere mucha potencia de cálculo y energía. Así que, la tarifa que pagas es su recompensa por hacer ese trabajo y mantener la red segura y funcionando.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Una gasolinera digital con el símbolo de gas" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Por Qué el Precio del Gas Varía Tanto?</h2>
        <p className={styles.paragraph}>
          Aquí es donde la analogía de la autopista se vuelve aún más útil. Imaginen una autopista con un número limitado de carriles. Si hay poca gente usándola, el peaje es barato. Pero si de repente todo el mundo quiere usar la autopista a la vez (por ejemplo, hay un evento importante, o mucha gente quiere comprar una nueva criptomoneda), la autopista se congestiona. 
        </p>
        <p className={styles.paragraph}>
          En la blockchain, los mineros/validadores tienen un espacio limitado en cada bloque para incluir transacciones. Si hay más transacciones de las que caben, se crea una "subasta". La gente que quiere que su transacción se procese rápido ofrece una tarifa de gas más alta. Los mineros/validadores, lógicamente, eligen las transacciones que les pagan más. Así que, cuanto más congestionada esté la red, más caro será el gas.
        </p>
        <p className={styles.paragraph}>
          Es pura oferta y demanda. Si la demanda de espacio en el bloque es alta, el precio del gas sube. Si la demanda es baja, el precio baja. Por eso, a veces una transacción puede costar céntimos y otras veces, decenas o incluso cientos de dólares.
        </p>

        <h2 className={styles.subtitle}>¿Cómo se Calcula el Gas?</h2>
        <p className={styles.paragraph}>
          La tarifa total que pagas se calcula multiplicando dos cosas:
        </p>
        <ul>
          <li><strong>Cantidad de Gas Usado:</strong> Cada operación en la blockchain (enviar dinero, interactuar con un contrato inteligente) requiere una cierta cantidad de "trabajo" o "energía computacional". Esto se mide en unidades de gas. Una simple transferencia de dinero requiere menos gas que una operación compleja en un protocolo DeFi.</li>
          <li><strong>Precio del Gas (Gwei):</strong> Es el precio que estás dispuesto a pagar por cada unidad de gas. Se mide en una unidad muy pequeña de Ether llamada "Gwei" (que es 0.000000001 ETH).</li>
        </ul>
        <p className={styles.paragraph}>
          Así que, <strong>Tarifa Total = Gas Usado x Precio del Gas</strong>. Tu wallet te suele dar una estimación de la tarifa y te permite ajustarla. Si pones un precio de gas muy bajo, tu transacción podría tardar mucho en confirmarse o incluso quedarse "atascada".
        </p>

        <h2 className={styles.subtitle}>El Futuro del Gas</h2>
        <p className={styles.paragraph}>
          Las tarifas de gas son un problema real para la adopción masiva de las blockchains. Por eso, se están desarrollando soluciones como las "Layer 2" (capas 2) y nuevas blockchains que prometen transacciones mucho más baratas y rápidas. La idea es que, en el futuro, el gas sea tan barato que ni siquiera te des cuenta de que lo estás pagando.
        </p>
        <p className={styles.paragraph}>
          Pero por ahora, entender el gas es fundamental. Es el combustible que mueve la máquina de la blockchain. Y como cualquier combustible, tiene un precio que varía según la oferta y la demanda. Es la física de la economía aplicada a la computación distribuida.
        </p>
      </div>
    </>
  );
}
