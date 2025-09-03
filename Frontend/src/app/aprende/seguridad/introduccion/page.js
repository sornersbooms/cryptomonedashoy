'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function IntroduccionSeguridadPage() {
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
        <h1 className={styles.title}>Introducción a la Seguridad en Cripto</h1>
        <p className={styles.paragraph}>
          Hola a todos. Hoy vamos a hablar de algo crucial: la seguridad en el mundo de las criptomonedas. Suena intimidante, ¿verdad? Como si tuvieran que ser un espía internacional para proteger su dinero. Pero no es así. Vamos a desglosarlo con calma.
        </p>
        <p className={styles.paragraph}>
          Piensen en el dinero normal. Lo guardan en un banco. El banco tiene muros, cámaras, guardias... un montón de seguridad. Ustedes confían en que ellos protegerán su dinero. Pero en el mundo cripto, la cosa cambia. Aquí, <strong>ustedes son el banco</strong>. Esta es la idea más importante que deben recordar.
        </p>

        <h2 className={styles.subtitle}>La Llave Maestra de tu Reino Digital</h2>
        <p className={styles.paragraph}>
          Imaginen que su dinero cripto vive en una caja fuerte digital. Para abrir esa caja, no usan una llave de metal, sino una larguísima contraseña secreta llamada <strong>clave privada</strong>. Esta clave es todo. Es la prueba de que el dinero que hay en esa caja es suyo. Quien tenga la clave, tiene el control absoluto del dinero.
        </p>
        <p className={styles.paragraph}>
          No es como la contraseña del email, que si la olvidan, pueden pedir que se la restablezcan. Si pierden su clave privada, su dinero se queda encerrado en esa caja fuerte para siempre. Y si alguien se la roba, puede vaciar la caja sin que nadie pueda hacer nada. Por eso, el juego de la seguridad en cripto es, en esencia, el juego de <strong>proteger esa clave privada</strong> a toda costa.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-9268421_1280.png" alt="Seguridad en criptomonedas" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Dónde Están los Peligros?</h2>
        <p className={styles.paragraph}>
          Los malos no intentan romper la matemática detrás de las criptomonedas. Eso es como intentar derribar un muro de titanio con una cuchara. Es demasiado difícil. En cambio, intentan engañarlos a ustedes, los dueños de las llaves.
        </p>
        <p className={styles.paragraph}>
          Usan trucos tan viejos como el mundo, pero adaptados a la era digital:
        </p>
        <ul>
          <li><strong>Phishing:</strong> Les envían un email o un mensaje que parece ser de su exchange o wallet, pidiéndoles que inicien sesión en un sitio web falso para robarles sus credenciales.</li>
          <li><strong>Malware:</strong> Les hacen descargar un programa que parece inofensivo, pero que en secreto registra todo lo que teclean, esperando a que escriban su clave privada.</li>
          <li><strong>Ingeniería social:</strong> Se hacen pasar por soporte técnico o alguien de confianza para que ustedes mismos les den las llaves del reino.</li>
        </ul>
        <p className={styles.paragraph}>
          Como ven, el eslabón débil no es la tecnología, ¡somos nosotros! La curiosidad, el descuido o el exceso de confianza son las verdaderas puertas de entrada para los atacantes.
        </p>

        <h2 className={styles.subtitle}>Pensar en Capas, como una Cebolla</h2>
        <p className={styles.paragraph}>
          La buena seguridad no es una sola cosa, es un conjunto de hábitos. Es como una cebolla, con muchas capas. Si un atacante logra pasar una, se encuentra con la siguiente. Usar una <strong>wallet de hardware</strong> (una capa), tener una <strong>contraseña fuerte y única</strong> (otra capa), activar la <strong>autenticación de dos factores (2FA)</strong> (otra capa más)... cada pequeña cosa suma.
        </p>
        <p className={styles.paragraph}>
          La regla de oro es simple: <strong>desconfíen por defecto</strong>. No hagan clic en enlaces sospechosos. No descarguen software de fuentes dudosas. No le digan su clave privada ni su frase semilla a nadie. ¡A nadie! Ni a su madre, ni al Papa, ni a un supuesto empleado de soporte técnico que jura que los va a ayudar.
        </p>
        <p className={styles.paragraph}>
          Ser su propio banco es un poder inmenso, pero conlleva una gran responsabilidad. Entender estos principios básicos es el primer paso, y el más importante, para navegar este nuevo mundo de forma segura. ¡No es tan difícil si lo piensan con claridad!
        </p>
      </div>
    </>
  );
}
