'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function SeguridadDeFiPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const seguridadCourse = courseData.seguridad;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={seguridadCourse.title}
        modules={seguridadCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Seguridad en Finanzas Descentralizadas (DeFi)</h1>
        <p className={styles.paragraph}>
          ¡Abróchense los cinturones! Ahora nos adentramos en el Salvaje Oeste de las criptomonedas: las <strong>Finanzas Descentralizadas</strong> o DeFi. Aquí no hay bancos, ni empresas, ni nadie a quien llamar si las cosas salen mal. Son solo ustedes, su wallet y un montón de código. Es un lugar fascinante, lleno de oportunidades, pero también con nuevos y exóticos peligros.
        </p>
        <p className={styles.paragraph}>
          En DeFi, la confianza no se deposita en una empresa, sino en un <strong>contrato inteligente</strong>. Piensen en un contrato inteligente como una máquina expendedora muy sofisticada. Pones una moneda (un token), y la máquina, siguiendo unas reglas programadas, te da a cambio un refresco (otro token). Funciona de forma automática y predecible. Pero, ¿qué pasa si alguien encuentra un fallo en la máquina y descubre cómo sacar todos los refrescos sin pagar? Eso, en esencia, es el principal riesgo en DeFi.
        </p>

        <h2 className={styles.subtitle}>El Riesgo del Contrato Inteligente: El Código es la Ley</h2>
        <p className={styles.paragraph}>
          Este es el riesgo número uno. Un <strong>bug o un error en el código</strong> de un contrato inteligente puede ser catastrófico. Si un desarrollador comete un error, por pequeño que sea, un atacante puede encontrarlo y explotarlo para drenar todos los fondos del contrato. Es como construir una bóveda y dejar una pequeña grieta en la pared. Los hackers son expertos en encontrar esas grietas.
        </p>
        <p className={styles.paragraph}>
          ¿Cómo nos protegemos? No podemos leer el código nosotros mismos, es demasiado complejo. Pero podemos buscar señales de calidad y diligencia:
        </p>
        <ul>
            <li><strong>Auditorías de Seguridad:</strong> ¿El proyecto ha sido auditado por empresas de seguridad reputadas? Una auditoría es como contratar a un equipo de cerrajeros expertos para que intenten reventar tu bóveda y te digan dónde están los puntos débiles. No es una garantía total, pero es una señal muy importante.</li>
            <li><strong>Tiempo en el Mercado y Reputación:</strong> Proyectos como Aave, Uniswap o Compound llevan años funcionando y han manejado miles de millones de dólares. Han sido probados en batalla. Un proyecto nuevo y anónimo que promete un 1000% de rendimiento anual es mucho más sospechoso.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/ethereum-6928106_1280.jpg" alt="DeFi" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Permiso Infinito: La Firma que te Puede Arruinar</h2>
        <p className={styles.paragraph}>
          Cuando interactúas con una DApp (una aplicación descentralizada), tu wallet te pide que firmes dos tipos de transacciones: una para <strong>aprobar</strong> el gasto de tus tokens y otra para <strong>ejecutar</strong> la acción (como un intercambio).
        </p>
        <p className={styles.paragraph}>
          El peligro está en la aprobación. Por conveniencia, muchas DApps te piden que apruebes una cantidad "infinita" de un token, para que no tengas que volver a firmar una aprobación cada vez que quieras operar. Suena bien, pero piénsenlo: le están dando a ese contrato un cheque en blanco para que pueda retirar todos los tokens de ese tipo de su wallet, en cualquier momento. Si ese contrato es hackeado en el futuro, el atacante podría usar ese permiso que diste hace meses para vaciar tu cuenta. 
        </p>
        <p className={styles.paragraph}>
          La solución es ser higiénico con los permisos. Aprueben solo la cantidad que necesiten para la transacción actual. Y, de vez en cuando, usen herramientas como <strong>Revoke.cash</strong> para revisar y cancelar los permisos antiguos que ya no necesiten. Es como revisar quién tiene todavía llaves de tu casa y cambiarlas si es necesario.
        </p>

        <h2 className={styles.subtitle}>El "Rug Pull" o Tirón de Alfombra</h2>
        <p className={styles.paragraph}>
          Este es un tipo de estafa, no un hackeo técnico. Un equipo de desarrolladores anónimos crea un proyecto, promete grandes cosas, atrae a un montón de inversores que compran su nuevo token... y de repente, desaparecen. Venden todos sus tokens, drenan la liquidez del proyecto y se van con el dinero, dejando a los inversores con tokens que no valen nada. Literalmente, tiran de la alfombra y todo el mundo se cae.
        </p>
        <p className={styles.paragraph}>
          La defensa aquí es la investigación. ¿Quiénes son los desarrolladores? ¿Son anónimos o tienen una reputación que proteger? ¿El código es de código abierto? ¿La liquidez está bloqueada en un contrato inteligente? Desconfíen de los proyectos anónimos con un marketing agresivo.
        </p>

        <h2 className={styles.subtitle}>Navegando el Oeste con Cautela</h2>
        <p className={styles.paragraph}>
          DeFi es un campo de juego para la experimentación. Es emocionante, pero no es un lugar para apostar los ahorros de tu vida. La estrategia sensata es:
        </p>
        <ul>
            <li><strong>Empieza con poco:</strong> No inviertas más de lo que estés dispuesto a perder.</li>
            <li><strong>Usa una wallet separada:</strong> No uses tu wallet principal (donde guardas tus ahorros a largo plazo) para interactuar con protocolos DeFi. Crea una wallet "de batalla" para tus experimentos.</li>
            <li><strong>Investiga (DYOR - Do Your Own Research):</strong> Lee sobre el proyecto, busca auditorías, entiende qué es lo que hace antes de poner tu dinero en él.</li>
        </ul>
        <p className={styles.paragraph}>
          DeFi es la frontera, y en la frontera hay tesoros y hay bandidos. Con un poco de conocimiento y mucha cautela, puedes explorar este nuevo mundo de forma mucho más segura.
        </p>
      </div>
    </>
  );
}
