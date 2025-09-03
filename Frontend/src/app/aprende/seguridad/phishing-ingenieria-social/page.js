'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function PhishingIngenieriaSocialPage() {
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
        <h1 className={styles.title}>Phishing y Ataques de Ingeniería Social</h1>
        <p className={styles.paragraph}>
          Muy bien, vamos a meternos en el barro. Ya hemos hablado de proteger nuestras llaves y de poner cerraduras extra. Pero, ¿qué pasa cuando el atacante, en lugar de intentar forzar la puerta, simplemente nos convence para que se la abramos nosotros mismos? De eso se tratan el <strong>phishing</strong> y la <strong>ingeniería social</strong>. No atacan el código, atacan nuestra mente.
        </p>

        <h2 className={styles.subtitle}>Ingeniería Social: El Arte del Engaño</h2>
        <p className={styles.paragraph}>
          La <strong>ingeniería social</strong> es simplemente el nombre elegante para el arte de la manipulación. Es explotar la psicología humana: nuestra tendencia a confiar, nuestro miedo a perdernos algo, nuestra pereza o nuestro deseo de ayudar. El atacante no usa código, usa palabras. Se pone un disfraz para ganarse tu confianza.
        </p>
        <p className={styles.paragraph}>
          Imaginen que alguien los llama y dice: "Hola, soy del equipo de seguridad de su wallet. Hemos detectado un problema y necesitamos que nos confirme su frase de 12 palabras para resincronizar su cuenta". Suena profesional, ¿verdad? Usan un lenguaje que impone, crean un sentido de urgencia. Pero es un truco. Es un lobo con piel de cordero. <strong>Recuerden la regla de oro: NADIE necesita tus claves secretas. NUNCA.</strong>
        </p>

        <h2 className={styles.subtitle}>Phishing: Pescando en Río Revuelto</h2>
        <p className={styles.paragraph}>
          El <strong>phishing</strong> es una forma de ingeniería social, pero más específica. Es como lanzar una red de pesca con un cebo muy apetitoso. El cebo suele ser un correo electrónico o un mensaje de texto que parece oficial. El objetivo es que piques y hagas clic en un enlace malicioso.
        </p>
        <p className={styles.paragraph}>
          El correo puede decir: "¡Felicidades! ¡Has ganado 1 Bitcoin! Haz clic aquí para reclamarlo". O, más comúnmente: "Alerta de seguridad en tu cuenta de [nombre del exchange]. Haz clic aquí para verificar tu inicio de sesión". El enlace te lleva a una página que es un clon perfecto de la real. Misma apariencia, mismos logos. Pero es una farsa. En cuanto introduces tu usuario y contraseña, se los estás entregando en bandeja de plata al ladrón.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3327643_1280.jpg" alt="Phishing" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Cómo No Picar el Anzuelo? El Escepticismo es tu Superpoder</h2>
        <p className={styles.paragraph}>
          La defensa contra estos ataques no es un software, es un estado mental. Es el <strong>escepticismo saludable</strong>. Aquí tienen un manual de supervivencia:
        </p>
        <ul>
            <li><strong>Verifica el remitente:</strong> Mira la dirección de correo completa, no solo el nombre. Los estafadores suelen usar direcciones que se parecen a las reales, pero con pequeños cambios (ej: '''soporte@binance-seguridad.com''' en lugar de '''soporte@binance.com''').</li>
            <li><strong>No hagas clic, escribe:</strong> Nunca, nunca hagas clic en los enlaces de los correos. Si el correo dice que hay un problema con tu cuenta de un exchange, cierra el correo, abre tu navegador y escribe tú mismo la dirección del exchange (o usa tus marcadores/favoritos).</li>
            <li><strong>Busca señales de alarma:</strong> Los correos de phishing a menudo tienen faltas de ortografía, gramática extraña o un tono de urgencia exagerado ("¡Actúa ahora o tu cuenta será bloqueada!"). Las empresas serias no suelen comunicarse así.</li>
            <li><strong>Desconfía de las ofertas demasiado buenas:</strong> Nadie regala Bitcoin por hacer clic en un enlace. Si algo parece demasiado bueno para ser verdad, probablemente no lo es.</li>
            <li><strong>En las redes sociales, cuidado con los impostores:</strong> En Twitter, Telegram o Discord, es muy fácil que alguien copie la foto de perfil y el nombre de una persona influyente o de un proyecto. Si te escriben por privado para ofrecerte una inversión exclusiva o pedirte ayuda, lo más probable es que sea una estafa.</li>
        </ul>

        <h2 className={styles.subtitle}>El Eslabón Más Débil y Más Fuerte</h2>
        <p className={styles.paragraph}>
          Se suele decir que el ser humano es el eslabón más débil de la cadena de seguridad. Y es cierto. Pero también podemos ser el más fuerte. La tecnología puede fallar, pero un ser humano bien entrenado y con una buena dosis de desconfianza es un cortafuegos formidable.
        </p>
        <p className={styles.paragraph}>
          No se trata de volverse un paranoico, sino de ser metódico. Tómate siempre cinco segundos antes de hacer clic. Piensa: "¿Tiene esto sentido? ¿Hay alguna razón para que esta persona o empresa me esté pidiendo esto?". Esa simple pausa es tu mejor defensa. Es la diferencia entre mantener tu castillo seguro y darle las llaves al primer desconocido que llame a la puerta con un disfraz convincente.
        </p>
      </div>
    </>
  );
}
