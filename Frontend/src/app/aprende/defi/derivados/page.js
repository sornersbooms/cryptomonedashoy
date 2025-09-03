'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function DerivadosPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const defiCourse = courseData.defi;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={defiCourse.title}
        modules={defiCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Derivados Sintéticos: El Mundo en un Token</h1>
        <p className={styles.paragraph}>
          Aquí es donde DeFi se vuelve realmente alucinante. Ya sabemos que podemos prestar, intercambiar y asegurar criptomonedas. Pero, ¿y si quisiéramos interactuar con el precio de cualquier cosa del mundo real, como acciones de Tesla, el oro, o el euro, pero sin salir de la blockchain? ¿Cómo metemos el mundo entero dentro de DeFi? La respuesta son los <strong>derivados sintéticos</strong>.
        </p>
        <p className={styles.paragraph}>
          Un "sintético" es simplemente un token que imita el precio de otro activo. No es el activo real, es un clon, un representante digital. No estás comprando una acción de Tesla, estás comprando un token cuyo valor está programado para subir y bajar exactamente igual que una acción de Tesla.
        </p>

        <h2 className={styles.subtitle}>¿Cómo se Crea un Clon Digital?</h2>
        <p className={styles.paragraph}>
          La idea se parece un poco a cómo se crean las stablecoins descentralizadas, pero es más flexible. Se basa en la sobre-colateralización y en los oráculos.
        </p>
        <ol>
          <li><strong>Pones una garantía:</strong> Para crear un sintético, primero tienes que depositar una garantía (colateral) en un contrato inteligente. Esta garantía suele ser una criptomoneda estable como USDC o el token nativo del protocolo (por ejemplo, el token SNX de Synthetix). Tienes que depositar MÁS valor del que quieres crear. Por ejemplo, pones $500 de garantía para crear $100 del sintético.</li>
          <li><strong>Acuñas el sintético:</strong> Una vez depositada la garantía, puedes "acuñar" (crear) un token sintético. Le dices al protocolo: "Quiero que este token siga el precio del oro".</li>
          <li><strong>El oráculo hace su magia:</strong> Aquí es donde el oráculo es crucial. El protocolo constantemente le pregunta al oráculo: "Oye, ¿cuál es el precio del oro ahora mismo?". El oráculo le responde, y el valor de tu token sintético se ajusta para reflejar ese precio en tiempo real.</li>
        </ol>
        <p className={styles.paragraph}>
          Lo que tienes ahora es un token en tu wallet (llamémoslo sXAU, por oro sintético) que se comporta exactamente como el oro. Puedes intercambiarlo, prestarlo, usarlo en piscinas de liquidez... todo dentro del ecosistema DeFi.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/libra-4288548_1280.jpg" alt="Tokens representando activos del mundo real como acciones u oro" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Deuda y el Balanceo del Sistema</h2>
        <p className={styles.paragraph}>
          Cuando creaste ese sintético, también creaste una "deuda" en el sistema. Debes $100 (el valor de tu sintético) que están respaldados por tu garantía de $500. Para recuperar tu garantía, tienes que "quemar" (destruir) $100 de cualquier sintético del sistema, pagando así tu deuda.
        </p>
        <p className={styles.paragraph}>
          Lo interesante es que la deuda de todos los usuarios está mancomunada. Si el valor de todos los sintéticos de Tesla sube mucho y el de los de oro baja, la deuda total del sistema cambia, y tu parte de esa deuda también. Es un mecanismo complejo que incentiva a los usuarios a mantener el sistema equilibrado.
        </p>

        <h2 className={styles.subtitle}>¿Por Qué es Esto tan Revolucionario?</h2>
        <p className={styles.paragraph}>
          Los sintéticos abren la puerta a posibilidades infinitas:
        </p>
        <ul>
          <li><strong>Acceso global:</strong> Alguien en cualquier parte del mundo, sin una cuenta de bróker, puede tener exposición al mercado de acciones de EE.UU., a las materias primas o a las divisas. Democratiza el acceso a los mercados financieros.</li>
          <li><strong>Nuevos mercados:</strong> Podemos crear sintéticos de cualquier cosa que tenga un feed de precios fiable. ¿El precio de los metros cuadrados en Tokio? ¿Los puntos de un jugador de baloncesto? Si un oráculo puede medirlo, se puede tokenizar.</li>
          <li><strong>Liquidez sin fronteras:</strong> Permiten que el valor de activos tradicionalmente ilíquidos (como los bienes raíces) pueda fluir e interactuar con la velocidad y la eficiencia de DeFi.</li>
        </ul>
        <p className={styles.paragraph}>
          Los derivados sintéticos son uno de los LEGOs más avanzados y potentes de todo el ecosistema. Son el puente que podría permitir que el valor de todo el mundo real se integre y se negocie en la blockchain. Es una idea de una ambición deslumbrante.
        </p>
      </div>
    </>
  );
}
