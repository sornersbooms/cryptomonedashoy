'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function MultiSigPage() {
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
        <h1 className={styles.title}>Wallets Multi-firma (Multi-sig): La Caja Fuerte con Varias Llaves</h1>
        <p className={styles.paragraph}>
          Hemos hablado de la seguridad de tu wallet, de cómo tu clave privada es la única llave. Pero, ¿qué pasa si esa única llave se pierde, se la roban o la persona que la tiene se vuelve loca? Para cantidades muy grandes de dinero, o para fondos que pertenecen a varias personas, tener una sola llave es un riesgo enorme. Aquí es donde entra en juego una idea muy inteligente: la <strong>wallet multi-firma</strong> o <strong>multi-sig</strong>.
        </p>
        <p className={styles.paragraph}>
          Imaginen una caja fuerte muy especial. Para abrirla, no necesitas una sola llave, sino varias. Y no solo eso, necesitas un número mínimo de esas llaves para que la caja se abra. Por ejemplo, puedes tener una caja fuerte que necesita 3 de 5 llaves para abrirse. O 2 de 3. O 7 de 10. Tú decides las reglas.
        </p>

        <h2 className={styles.subtitle}>¿Cómo Funciona? El Comité de Firmantes</h2>
        <p className={styles.paragraph}>
          En el mundo cripto, una wallet multi-sig es un tipo de contrato inteligente que controla los fondos. Este contrato está programado para que, para que una transacción se ejecute (para que el dinero se mueva), se necesiten un número predefinido de firmas digitales. 
        </p>
        <p className={styles.paragraph}>
          Por ejemplo, una configuración común es una wallet "2 de 3". Esto significa que hay tres claves privadas diferentes que pueden firmar transacciones, pero para que una transacción sea válida, al menos dos de esas tres claves deben firmarla. 
        </p>
        <p className={styles.paragraph}>
          <strong>Escenario 1: Seguridad Personal.</strong> Tienes mucho dinero. Puedes tener una clave en tu Ledger, otra en tu Trezor y una tercera en un papel guardado en una caja fuerte bancaria. Para mover el dinero, necesitas dos de esas tres. Si pierdes una, o te roban una, tus fondos siguen a salvo. Es como tener un plan de respaldo incorporado.
        </p>
        <p className={styles.paragraph}>
          <strong>Escenario 2: Fondos Compartidos.</strong> Una empresa o una DAO (Organización Autónoma Descentralizada) tiene fondos. En lugar de que una sola persona tenga el control, se designan a varios miembros clave. Para que el dinero se mueva, la mayoría de ellos (o un número predefinido) tienen que aprobar la transacción. Esto evita que una sola persona se escape con los fondos o tome decisiones unilaterales.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Varias llaves abriendo una caja fuerte" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Ventajas: Seguridad y Confianza Distribuida</h2>
        <p className={styles.paragraph}>
          Las wallets multi-sig ofrecen ventajas significativas:
        </p>
        <ul>
          <li><strong>Seguridad Mejorada:</strong> Es mucho más difícil para un atacante robar tus fondos, ya que necesitaría comprometer múltiples claves privadas en diferentes ubicaciones.</li>
          <li><strong>Prevención de Errores Humanos:</strong> Si una persona comete un error (envía a la dirección equivocada, cae en un phishing), la transacción no se ejecutará a menos que las otras firmas la aprueben.</li>
          <li><strong>Gestión de Fondos Compartidos:</strong> Ideal para empresas, organizaciones o familias que quieren gestionar fondos de forma conjunta y transparente, sin que una sola persona tenga el control absoluto.</li>
          <li><strong>Recuperación de Fondos:</strong> Si una de tus claves se pierde o se daña, aún puedes acceder a tus fondos con las otras claves (siempre que tengas el número mínimo requerido).</li>
        </ul>

        <h2 className={styles.subtitle}>Desventajas: Complejidad y Costo</h2>
        <p className={styles.paragraph}>
          No todo es perfecto. Las wallets multi-sig son más complejas de configurar y usar. Requieren una coordinación entre los firmantes. Además, las transacciones multi-sig suelen ser más caras en términos de tarifas de gas, ya que requieren más operaciones en la blockchain.
        </p>
        <p className={styles.paragraph}>
          Por eso, las wallets multi-sig no son para todo el mundo. Son para aquellos que manejan grandes cantidades de criptomonedas, o para grupos que necesitan una forma segura y transparente de gestionar fondos compartidos. Son una herramienta poderosa para distribuir la confianza y reducir el riesgo de un único punto de fallo. Es la ingeniería de la seguridad aplicada a las finanzas digitales.
        </p>
      </div>
    </>
  );
}
