'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AtaquesPage() {
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
        <h1 className={styles.title}>Ataques Comunes a Wallets: Los Lobos en el Bosque Digital</h1>
        <p className={styles.paragraph}>
          Hemos hablado mucho de la seguridad, de proteger tu semilla y tus claves. Pero, ¿cómo intentan los malos robarte tus criptomonedas? No suelen ser hackers supergenios que rompen la criptografía. La mayoría de los ataques se basan en engañar a la gente. Es como un lobo que se disfraza de abuelita. Si conoces sus trucos, es mucho más difícil que te engañen.
        </p>

        <h2 className={styles.subtitle}>1. Phishing: El Email Falso</h2>
        <p className={styles.paragraph}>
          Este es el ataque más común y el más efectivo. Recibes un email o un mensaje que parece de una empresa legítima (un exchange, un protocolo DeFi, tu wallet). Te dicen que hay un problema con tu cuenta, que tienes que verificar algo, o que hay una oferta increíble. El mensaje te pide que hagas clic en un enlace.
        </p>
        <p className={styles.paragraph}>
          Si haces clic, te lleva a una página web que es una copia exacta de la original. Te pide tu contraseña, o peor aún, ¡tu semilla de recuperación! Si la introduces, los malos la capturan y vacían tu wallet en segundos. 
        </p>
        <p className={styles.paragraph}>
          <strong>Cómo protegerte:</strong> Siempre, siempre, verifica la URL. Mira la dirección web con lupa. Si tienes dudas, no hagas clic en el enlace. Abre una nueva pestaña y ve directamente a la página oficial escribiendo la dirección a mano. Ninguna empresa legítima te pedirá tu semilla de recuperación.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Un anzuelo de phishing con un cebo de criptomonedas" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>2. Malware y Virus: El Ladrón Silencioso</h2>
        <p className={styles.paragraph}>
          Son programas maliciosos que se instalan en tu ordenador o móvil sin que te des cuenta. Pueden hacer muchas cosas:
        </p>
        <ul>
          <li><strong>Keyloggers:</strong> Registran todo lo que escribes, incluyendo tus contraseñas.</li>
          <li><strong>Clipboard Hijackers:</strong> Cuando copias una dirección de wallet, el malware la cambia por la dirección del atacante en el portapapeles. Si no verificas la dirección antes de enviar, ¡enviarás tus fondos al ladrón!</li>
          <li><strong>Spyware:</strong> Espían tu actividad, buscando información sensible.</li>
        </ul>
        <p className={styles.paragraph}>
          <strong>Cómo protegerte:</strong> Mantén tu sistema operativo y tu software antivirus actualizados. Sé muy cauteloso con lo que descargas, especialmente de fuentes no oficiales. No hagas clic en anuncios sospechosos. Usa una wallet de hardware para grandes cantidades, ya que son inmunes a este tipo de ataques.
        </p>

        <h2 className={styles.subtitle}>3. Ataques de Ingeniería Social: El Arte del Engaño</h2>
        <p className={styles.paragraph}>
          Este es el más peligroso porque no ataca la tecnología, sino a la persona. El atacante te manipula psicológicamente para que le des tu información o hagas algo que no deberías. Puede ser un mensaje de un "amigo" en redes sociales que te pide ayuda urgente, o un falso soporte técnico que te pide acceso a tu ordenador.
        </p>
        <p className={styles.paragraph}>
          <strong>Cómo protegerte:</strong> Sé escéptico con cualquier petición inusual, especialmente si implica dinero o información sensible. Verifica la identidad de la persona por un canal diferente (llama a tu amigo por teléfono, no confíes en el mensaje). Recuerda: nadie de soporte técnico te pedirá tu semilla o tus claves privadas.
        </p>

        <h2 className={styles.subtitle}>4. Ataques a la Semilla de Recuperación: El Tesoro Robado</h2>
        <p className={styles.paragraph}>
          Si tu semilla de recuperación no está guardada de forma segura, es un objetivo. Esto incluye:
        </p>
        <ul>
          <li><strong>Robo físico:</strong> Si la tienes en un papel en tu casa y alguien entra a robar.</li>
          <li><strong>Almacenamiento digital inseguro:</strong> Si le hiciste una foto, la guardaste en la nube, en un email, o en un gestor de contraseñas online.</li>
        </ul>
        <p className={styles.paragraph}>
          <strong>Cómo protegerte:</strong> Sigue las mejores prácticas para guardar tu semilla: offline, en múltiples ubicaciones seguras, y en un formato resistente a daños físicos.
        </p>

        <h2 className={styles.subtitle}>La Mejor Defensa: Conocimiento y Sentido Común</h2>
        <p className={styles.paragraph}>
          La mayoría de los ataques a wallets no son sofisticados. Son ataques a la ignorancia o a la prisa. La mejor defensa es el conocimiento. Entiende cómo funcionan tus claves, cómo funciona la blockchain y cómo funcionan los ataques. Y luego, aplica el sentido común. Si algo parece demasiado bueno para ser verdad, probablemente lo sea. Si alguien te presiona para que hagas algo rápido, detente y piensa. Tu dinero está en juego.
        </p>
      </div>
    </>
  );
}
