'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AutenticacionDosFactoresPage() {
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
        <h1 className={styles.title}>Autenticación de Dos Factores (2FA)</h1>
        <p className={styles.paragraph}>
          ¡Vamos a ello! Hablemos de una de las capas de seguridad más importantes y fáciles de usar: la Autenticación de Dos Factores, o como la llaman los amigos, <strong>2FA</strong>. Esto no es exclusivo de las criptomonedas, lo usan en su email, en sus redes sociales... pero en el mundo cripto, donde no hay un botón de "olvidé mi contraseña", es absolutamente vital.
        </p>
        <p className={styles.paragraph}>
          Piensen en la seguridad como la puerta de un castillo. La contraseña es la primera cerradura. Es fuerte, pero si alguien consigue la llave (su contraseña), la puerta se abre. El 2FA es como añadir un segundo cerrojo, completamente diferente al primero. Para entrar, un ladrón no solo necesita la llave, sino que también necesita saber el truco para abrir este segundo cerrojo.
        </p>

        <h2 className={styles.subtitle}>¿Cómo Funciona? Tres Sabores Diferentes</h2>
        <p className={styles.paragraph}>
          El 2FA se basa en combinar dos de tres cosas posibles:
        </p>
        <ul>
            <li><strong>Algo que sabes:</strong> Tu contraseña.</li>
            <li><strong>Algo que tienes:</strong> Tu teléfono, una llave de seguridad.</li>
            <li><strong>Algo que eres:</strong> Tu huella dactilar, tu cara.</li>
        </ul>
        <p className={styles.paragraph}>
          Cuando activas 2FA en un exchange, por ejemplo, después de poner tu contraseña (lo que sabes), el sistema te pide una segunda prueba (lo que tienes). Veamos los métodos más comunes, del menos seguro al más seguro.
        </p>

        <h3 className={styles.subtitle}>1. 2FA por SMS: El Menos Recomendable</h3>
        <p className={styles.paragraph}>
          Es el más simple. Intentas iniciar sesión y te envían un código a tu teléfono por SMS. Parece seguro, ¿verdad? El problema es que los números de teléfono pueden ser robados. Con un ataque llamado <strong>SIM swapping</strong>, un criminal puede convencer a tu operador de telefonía para que transfiera tu número a su propia tarjeta SIM. Si lo consiguen, recibirán tus códigos 2FA y entrarán en tu cuenta. Es mejor que nada, pero hay opciones mucho mejores.
        </p>

        <h2 className={styles.subtitle}>2. Apps de Autenticación (TOTP): El Estándar de Oro</h2>
        <p className={styles.paragraph}>
          Este es el método que deberían usar siempre que sea posible. Usan una aplicación en su teléfono como <strong>Google Authenticator, Authy o Microsoft Authenticator</strong>. Al configurar el 2FA, escanean un código QR que sincroniza la app con su cuenta. A partir de ese momento, la app genera un nuevo código de 6 dígitos cada 30 segundos.
        </p>
        <p className={styles.paragraph}>
          Este código se genera usando un algoritmo basado en el tiempo y en un secreto compartido (que se estableció con el QR). No depende de su número de teléfono, solo de la app en su dispositivo. Para que un atacante entre, necesitaría robar su contraseña Y robarles físicamente el teléfono. Mucho más difícil. Es el equilibrio perfecto entre seguridad y usabilidad.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Autenticación de dos factores" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>3. Llaves de Seguridad (U2F/FIDO2): La Fortaleza</h2>
        <p className={styles.paragraph}>
          Este es el nivel más alto de seguridad 2FA. Una <strong>llave de seguridad</strong>, como una YubiKey, es un dispositivo físico (parecido a un USB) que actúa como tu segundo factor. Para iniciar sesión, además de tu contraseña, tienes que conectar la llave a tu computadora y tocarla físicamente.
        </p>
        <p className={styles.paragraph}>
          Esto es increíblemente seguro porque es inmune al phishing. Un sitio web falso no puede "pedirle" el código a la llave. La comunicación se basa en criptografía y está ligada al dominio web real. Un atacante necesitaría tu contraseña Y robarte la llave física. Para la mayoría de la gente, una app de autenticación es suficiente, pero si manejas cantidades muy grandes de dinero en un exchange, una de estas llaves te da una tranquilidad casi absoluta.
        </p>

        <h2 className={styles.subtitle}>La Lección Más Importante</h2>
        <p className={styles.paragraph}>
          La moraleja es simple: <strong>activen el 2FA en todas partes</strong>. En sus cuentas de exchanges, en su email (¡muy importante, ya que se usa para recuperar otras cuentas!), en todas partes. Y siempre que puedan, usen una <strong>app de autenticación</strong> en lugar de los SMS.
        </p>
        <p className={styles.paragraph}>
          Es una acción que toma cinco minutos y que aumenta tu seguridad de forma exponencial. No añadir esta capa de protección es como dejar la segunda cerradura de la puerta de tu castillo sin usar. ¡No tiene sentido! Es una de las cosas más simples y efectivas que pueden hacer para protegerse en el mundo digital.
        </p>
      </div>
    </>
  );
}
