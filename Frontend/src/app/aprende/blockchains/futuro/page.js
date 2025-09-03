'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function FuturoPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const blockchainCourse = courseData.blockchains;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={blockchainCourse.title}
        modules={blockchainCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>El Futuro y los Desafíos de la Blockchain: El Gran Experimento</h1>
        <p className={styles.paragraph}>
          Hemos recorrido un largo camino. Empezamos con generales bizantinos, pasamos por licuadoras mágicas y notarios robot, y ahora tenemos una idea bastante buena de cómo funciona esta cosa llamada blockchain. Pero, ¿a dónde va todo esto? ¿Qué nos depara el futuro? Y, ¿qué problemas tiene este "bebé gigante" que aún está creciendo?
        </p>

        <h2 className={styles.subtitle}>El Futuro Brillante: Las Promesas</h2>
        <p className={styles.paragraph}>
          La blockchain no es una solución mágica para todos los problemas, pero sí promete un futuro donde la confianza no dependa de instituciones, sino de las matemáticas y la criptografía. Un futuro con:
        </p>
        <ul>
          <li><strong>Más Transparencia:</strong> En cadenas de suministro, votaciones, registros de propiedad. Menos corrupción, más claridad.</li>
          <li><strong>Más Inclusión Financiera:</strong> Miles de millones de personas sin acceso a bancos podrían usar DeFi para préstamos, ahorros y pagos.</li>
          <li><strong>Nuevas Formas de Propiedad:</strong> NFTs abriendo mercados para arte digital, música, coleccionables, e incluso bienes físicos.</li>
          <li><strong>Internet Descentralizado (Web3):</strong> Un internet donde los usuarios controlan sus datos y su identidad, no las grandes corporaciones.</li>
          <li><strong>Eficiencia y Automatización:</strong> Contratos inteligentes automatizando acuerdos, reduciendo burocracia y costes.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/wear-3080558_1280.jpg" alt="Concepto futurista de blockchain y tecnología" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Los Grandes Desafíos: Dolores de Crecimiento</h2>
        <p className={styles.paragraph}>
          Pero, como todo bebé que crece, la blockchain tiene sus dolores. No todo es color de rosa. Aquí están los grandes desafíos que la comunidad está intentando resolver:
        </p>
        <ul>
          <li><strong>Escalabilidad:</strong> El famoso Trilema. ¿Cómo hacemos que las blockchains sean súper rápidas y baratas sin sacrificar seguridad o descentralización? Las soluciones de Capa 2 y el sharding están en desarrollo, pero aún no son perfectas.</li>
          <li><strong>Regulación:</strong> Los gobiernos y las leyes van más lentos que la tecnología. ¿Cómo se regulan las criptomonedas y DeFi sin ahogar la innovación? Es un tira y afloja constante.</li>
          <li><strong>Experiencia de Usuario (UX):</strong> Usar una wallet, entender las comisiones, proteger tus claves... Aún es complicado para el usuario promedio. Necesitamos interfaces más sencillas, más intuitivas.</li>
          <li><strong>Seguridad (Errores Humanos y Hacks):</strong> Aunque la blockchain es segura, los contratos inteligentes pueden tener errores (bugs) que los hackers explotan. Y la gente sigue cayendo en estafas de phishing. La seguridad es un trabajo constante.</li>
          <li><strong>Consumo Energético (para PoW):</strong> Aunque PoS está ganando terreno, el consumo de energía de Bitcoin (PoW) sigue siendo una preocupación para muchos.</li>
          <li><strong>Interoperabilidad:</strong> Aunque estamos construyendo puentes, aún no hay una forma fluida y universal para que todas las blockchains hablen entre sí.</li>
        </ul>

        <h2 className={styles.subtitle}>Un Lienzo en Blanco</h2>
        <p className={styles.paragraph}>
          La blockchain es un experimento gigantesco, un campo de juego para mentes brillantes. No sabemos exactamente cómo será el futuro, pero lo que sí sabemos es que esta tecnología tiene el potencial de cambiar muchas cosas, desde cómo manejamos el dinero hasta cómo interactuamos en internet. No es una solución mágica para todos los problemas, pero es una herramienta poderosa que nos permite construir sistemas más justos, transparentes y eficientes. ¡El futuro de la blockchain es un lienzo en blanco, y todos estamos invitados a pintar en él!
        </p>
      </div>
    </>
  );
}
