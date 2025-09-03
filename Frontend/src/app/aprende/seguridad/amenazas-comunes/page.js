'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AmenazasComunesPage() {
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
        <h1 className={styles.title}>Amenazas Comunes y Vectores de Ataque</h1>
        <p className={styles.paragraph}>
          Muy bien, vamos al grano. Ya sabemos que en el mundo cripto somos nuestro propio banco. Ahora, la pregunta es: ¿cómo intentan los ladrones forzar nuestra caja fuerte? No usan dinamita, usan trucos. Y casi siempre, el objetivo es el mismo: engañarnos para que les demos la llave.
        </p>
        <p className={styles.paragraph}>
          Pensemos en esto como un juego de magia. El mago distrae tu atención para hacer el truco. Los atacantes hacen lo mismo. Crean una situación que parece legítima para que bajes la guardia. A estas "rutas" que usan para llegar a ti las llamamos <strong>vectores de ataque</strong>.
        </p>

        <h2 className={styles.subtitle}>El Pescador de Contraseñas: Phishing</h2>
        <p className={styles.paragraph}>
          Este es el truco más viejo del libro. Imaginen que reciben un correo que parece ser de su exchange de confianza. Dice algo como: "Actividad sospechosa en su cuenta. Haga clic aquí para verificar su identidad". ¡Alarma! El enlace no te lleva al sitio real, sino a una copia idéntica que ellos controlan. Ponen su usuario y contraseña, y ¡listo! El ladrón ya tiene sus credenciales. A esto se le llama <strong>phishing</strong>.
        </p>
        <p className={styles.paragraph}>
          La regla es simple: <strong>NUNCA hagas clic en enlaces de correos o mensajes directos</strong>. Si necesitas ir a tu exchange, escribe la dirección directamente en el navegador. Es como si en lugar de seguir a un desconocido que te ofrece un atajo, decides caminar por la calle principal que ya conoces.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-7678815_1280.jpg" alt="Vectores de ataque" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Software Espía: Malware y Keyloggers</h2>
        <p className={styles.paragraph}>
          ¿Alguna vez han descargado un programa "gratis" de un sitio web un poco raro? A veces, estos programas vienen con un regalito no deseado: un <strong>malware</strong>. Puede ser un virus, un troyano o, peor aún, un <strong>keylogger</strong>.
        </p>
        <p className={styles.paragraph}>
          Un keylogger es como tener a alguien mirando por encima de tu hombro cada vez que escribes en el teclado. Registra todo: tus contraseñas, tus conversaciones y, lo más peligroso, tu frase de recuperación. Instalan este software espía y simplemente esperan. En el momento en que escribes tu clave privada, la capturan. Por eso es vital tener un buen antivirus y, más importante aún, <strong>ser increíblemente selectivo con lo que descargas e instalas</strong> en tu computadora o teléfono.
        </p>

        <h2 className={styles.subtitle}>El Lobo con Piel de Cordero: Ingeniería Social</h2>
        <p className={styles.paragraph}>
          Este es el ataque más astuto porque no ataca tu tecnología, sino tu psicología. La <strong>ingeniería social</strong> es el arte de la manipulación. El atacante podría hacerse pasar por un miembro del equipo de soporte de tu wallet. Te contacta por Telegram o Discord y te dice que hay un problema con tu cuenta y que, para solucionarlo, necesita que le des tu frase de recuperación "para sincronizarla".
        </p>
        <p className={styles.paragraph}>
          ¡JAMÁS! Nadie, absolutamente <strong>NADIE</strong>, necesita tu frase de recuperación o tu clave privada para nada. Es tuya y solo tuya. Es como si alguien te pidiera el PIN de tu tarjeta de crédito para "verificar" que funciona. No tiene ningún sentido. El soporte técnico legítimo nunca te pedirá tus claves.
        </p>

        <h2 className={styles.subtitle}>Otras Amenazas a Considerar</h2>
        <ul>
            <li><strong>SIM Swapping:</strong> Los atacantes convencen a tu compañía telefónica para que transfieran tu número a una SIM que ellos controlan. Con esto, pueden interceptar los códigos de autenticación de dos factores (2FA) que recibes por SMS.</li>
            <li><strong>Ataques de "Dusting":</strong> Te envían una cantidad minúscula de criptomonedas a tu wallet. Luego, rastrean cómo mueves esos fondos para intentar desenmascarar tu identidad y tus otras direcciones.</li>
            <li><strong>Extensiones de Navegador Falsas:</strong> Instalas una extensión que parece ser una wallet legítima, pero es una imitación diseñada para robar tus fondos en cuanto la usas.</li>
        </ul>
        <p className={styles.paragraph}>
          Entender cómo operan los atacantes es tu mejor defensa. No se trata de tener miedo, se trata de ser consciente y metódico. Si sabes dónde están las trampas, es mucho más fácil esquivarlas. ¡Pura lógica!
        </p>
      </div>
    </>
  );
}
