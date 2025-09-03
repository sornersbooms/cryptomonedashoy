'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ProtegiendoWalletsPage() {
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
        <h1 className={styles.title}>Protegiendo tus Wallets: Hot vs. Cold</h1>
        <p className={styles.paragraph}>
          Perfecto, sigamos desentrañando esto. Ya sabemos que nuestra clave privada es el tesoro. Ahora, la pregunta es: ¿dónde guardamos ese tesoro? No todas las cajas fuertes son iguales. Y aquí es donde entra la idea de carteras "calientes" y "frías".
        </p>
        <p className={styles.paragraph}>
          Olvídense de la temperatura. Piensen en esto de una forma más simple: <strong>conexión a internet</strong>. ¿La caja fuerte está conectada a internet? ¿Sí o no? Esa es toda la diferencia.
        </p>

        <h2 className={styles.subtitle}>Wallets Calientes (Hot Wallets): La Cartera en tu Bolsillo</h2>
        <p className={styles.paragraph}>
          Una <strong>wallet caliente</strong> es cualquier cartera de criptomonedas que está en un dispositivo conectado a internet. La aplicación de tu teléfono, la extensión de tu navegador, el software en tu computadora... todas esas son hot wallets. 
        </p>
        <p className={styles.paragraph}>
          Son como la cartera que llevas en el bolsillo. Son increíblemente convenientes. Quieres pagar un café, hacer una transacción rápida, interactuar con una aplicación DeFi... ¡genial! Tienes acceso inmediato a tus fondos. Pero, al igual que no llevarías todos los ahorros de tu vida en la cartera del bolsillo, no deberías guardar grandes cantidades de cripto en una hot wallet.
        </p>
        <p className={styles.paragraph}>
          ¿Por qué? Porque todo lo que está conectado a internet es, por naturaleza, más vulnerable. Si tu teléfono o computadora se infecta con malware, un atacante podría, en teoría, acceder a tu wallet y robar tus claves. <strong>Conveniencia a cambio de un poco de seguridad.</strong>
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/wear-3080558_1280.jpg" alt="Hardware wallet" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Wallets Frías (Cold Wallets): La Bóveda del Banco</h2>
        <p className={styles.paragraph}>
          Ahora, pensemos en el opuesto. Una <strong>wallet fría</strong> es una cartera cuya clave privada NUNCA toca internet. Está completamente aislada. Es la bóveda de tu banco personal, donde guardas la mayor parte de tus ahorros, las joyas de la familia.
        </p>
        <p className={styles.paragraph}>
          El ejemplo más común es una <strong>hardware wallet</strong>. Es un pequeño dispositivo físico, como un USB, diseñado con un único propósito: guardar tus claves privadas de forma segura y sin conexión. Cuando quieres hacer una transacción, conectas el dispositivo a tu computadora. La transacción se prepara en la computadora, se envía al dispositivo, se firma DENTRO del dispositivo (la clave nunca sale de él) y luego la transacción firmada se devuelve a la computadora para ser enviada a la red. 
        </p>
        <p className={styles.paragraph}>
          Incluso si tu computadora estuviera llena de virus hasta los topes, la clave privada permanece segura en su pequeña fortaleza de hardware. <strong>Máxima seguridad a cambio de un poco de conveniencia.</strong> No la usarías para pagar el pan todos los días, pero es el lugar ideal para guardar los fondos que no planeas tocar a menudo.
        </p>

        <h2 className={styles.subtitle}>La Estrategia Correcta: Lo Mejor de Ambos Mundos</h2>
        <p className={styles.paragraph}>
          Entonces, ¿cuál es mejor? ¡La pregunta es incorrecta! No se trata de elegir una sobre la otra. Se trata de usar la herramienta adecuada para el trabajo adecuado. La estrategia inteligente es usar ambas.
        </p>
        <ul>
            <li><strong>Usa una hot wallet (en tu teléfono o navegador) para pequeñas cantidades.</strong> El dinero del día a día, para experimentar, para transacciones frecuentes. Si algo sale terriblemente mal, la pérdida es limitada y no un desastre catastrófico.</li>
            <li><strong>Usa una cold wallet (una hardware wallet) para la gran mayoría de tus fondos.</strong> Tus ahorros a largo plazo, las inversiones que no quieres tocar. La "caja fuerte" principal.</li>
        </ul>
        <p className={styles.paragraph}>
          Piensen en ello como tener una cuenta corriente (hot wallet) y una cuenta de ahorros (cold wallet). Transfieres dinero de tus ahorros a tu cuenta corriente solo cuando lo necesitas. Es una forma simple y poderosa de reducir drásticamente tu exposición al riesgo. ¡Pura y simple lógica de seguridad!
        </p>
      </div>
    </>
  );
}
