'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function SeguridadPage() {
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
        <h1 className={styles.title}>Seguridad de la Wallet: Tu Responsabilidad, Tu Control</h1>
        <p className={styles.paragraph}>
          Hemos hablado de claves privadas, semillas de recuperación, wallets calientes y frías. Todo esto se reduce a una sola cosa: <strong>seguridad</strong>. En el mundo cripto, tú eres tu propio banco. Y eso significa que la seguridad de tus fondos recae enteramente sobre tus hombros. No hay un departamento de fraudes al que llamar si te roban. Por eso, entender y aplicar buenas prácticas de seguridad es, quizás, la lección más importante de todas.
        </p>

        <h2 className={styles.subtitle}>La Regla de Oro: Protege tu Semilla de Recuperación</h2>
        <p className={styles.paragraph}>
          Ya lo hemos dicho, pero lo repetiremos hasta la saciedad: tu semilla de recuperación (seed phrase) es la llave maestra de todas tus criptomonedas. Si alguien la tiene, tiene tu dinero. Si la pierdes, pierdes tu dinero. Así de simple. 
        </p>
        <ul>
          <li><strong>Escríbela a mano:</strong> Nunca la guardes en formato digital (foto, email, nube, gestor de contraseñas online).</li>
          <li><strong>Guárdala offline:</strong> En un lugar seguro, a prueba de fuego y agua si es posible. Considera una placa de metal grabada.</li>
          <li><strong>Múltiples copias, en diferentes lugares:</strong> No pongas todos los huevos en la misma canasta. Si tienes una copia en casa, ten otra en un lugar seguro fuera de casa (caja de seguridad bancaria, casa de un familiar de confianza).</li>
          <li><strong>Nunca la compartas:</strong> Nadie, absolutamente nadie, te pedirá tu semilla de recuperación. Si te la piden, es una estafa.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Un candado y una llave, simbolizando la seguridad de la wallet" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Contraseñas Fuertes y Autenticación de Dos Factores (2FA)</h2>
        <p className={styles.paragraph}>
          Aunque la semilla es lo más importante, las contraseñas y el 2FA son capas adicionales de protección para tus wallets de software y tus cuentas en exchanges.
        </p>
        <ul>
          <li><strong>Contraseñas Únicas y Complejas:</strong> Usa contraseñas largas, con mayúsculas, minúsculas, números y símbolos. Y lo más importante: ¡una contraseña diferente para cada servicio! Usa un gestor de contraseñas offline si es necesario.</li>
          <li><strong>Autenticación de Dos Factores (2FA):</strong> Activa el 2FA en todos los exchanges y servicios que uses. Esto significa que, además de tu contraseña, necesitarás un segundo código (generado por una app como Google Authenticator o un dispositivo físico como YubiKey) para iniciar sesión o realizar transacciones. Evita el 2FA por SMS, es menos seguro.</li>
        </ul>

        <h2 className={styles.subtitle}>Cuidado con el Phishing y el Malware</h2>
        <p className={styles.paragraph}>
          Los estafadores son muy creativos. La mayoría de los robos no ocurren por hackeos complejos a la blockchain, sino por engaños a los usuarios.
        </p>
        <ul>
          <li><strong>Phishing:</strong> Son emails o páginas web falsas que imitan a las originales para robar tus credenciales o tu semilla. Siempre verifica la URL. Si tienes dudas, no hagas clic en enlaces de emails. Ve directamente a la página oficial.</li>
          <li><strong>Malware:</strong> Son programas maliciosos que se instalan en tu ordenador o móvil. Pueden robar tus claves, cambiar direcciones de wallet en tu portapapeles o espiar tus actividades. Mantén tu software actualizado, usa un buen antivirus y sé muy cauteloso con lo que descargas.</li>
          <li><strong>Extensiones de Navegador:</strong> Ten cuidado con las extensiones falsas de wallets. Descarga solo las oficiales desde las tiendas de extensiones o las páginas web de los desarrolladores.</li>
        </ul>

        <h2 className={styles.subtitle}>La Regla de Oro del Sentido Común</h2>
        <p className={styles.paragraph}>
          Al final, la seguridad en cripto se reduce a unas pocas reglas de sentido común:
        </p>
        <ul>
          <li><strong>No hagas clic en enlaces sospechosos.</strong></li>
          <li><strong>Verifica siempre las direcciones</strong> antes de enviar fondos.</li>
          <li><strong>Usa wallets de hardware</strong> para grandes cantidades.</li>
          <li><strong>Sé escéptico</strong> con las ofertas que parecen demasiado buenas para ser verdad.</li>
          <li><strong>Educa a tu familia y amigos</strong> sobre estos riesgos.</li>
        </ul>
        <p className={styles.paragraph}>
          La seguridad no es un producto que compras, es un proceso continuo. Es una mentalidad. En el mundo cripto, donde tú eres tu propio banco, la seguridad es tu trabajo más importante. Y si lo haces bien, la recompensa es la libertad financiera.
        </p>
      </div>
    </>
  );
}
