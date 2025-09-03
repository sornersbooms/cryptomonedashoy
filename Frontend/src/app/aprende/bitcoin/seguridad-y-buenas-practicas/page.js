'use client';
import React, { useState } from 'react';
import styles from '../que-es-bitcoin/page.module.css'; // Re-using the same styles
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function SeguridadBitcoinPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const bitcoinCourse = courseData.bitcoin;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={bitcoinCourse.title}
        modules={bitcoinCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Seguridad en Bitcoin: Protegiendo tu Tesoro Digital</h1>
        <p className={styles.paragraph}>
          Muy bien, ya sabemos qué es Bitcoin. Es como un tesoro digital. Ahora, la pregunta del millón: ¿cómo guardamos un tesoro que no podemos ver ni tocar? No puedes meterlo en una caja fuerte en tu armario. Necesitas una caja fuerte *digital*, y entender cómo funciona es la clave para no perder tu tesoro.
        </p>
        <p className={styles.paragraph}>
          Imaginen que su Bitcoin no es una moneda, sino un secreto. Un hechizo mágico. Quien conoce el hechizo, controla el tesoro. La seguridad en Bitcoin se trata, simplemente, de ser el mejor guardián de secretos del mundo.
        </p>

        <h2 className={styles.subtitle}>La Llave Maestra: Tu Clave Privada</h2>
        <p className={styles.paragraph}>
          El corazón de todo esto es algo llamado <strong>"clave privada"</strong>. Es una cadena larguísima de números y letras que se genera al azar. Es tu hechizo secreto. No es una contraseña que tú inventas, es algo que se te entrega. Esta clave es la que te da el poder de gastar tus bitcoins.
        </p>
        <p className={styles.paragraph}>
          Aquí va la regla más importante, la única que no pueden olvidar nunca: <strong>JAMÁS compartan su clave privada con NADIE</strong>. Ni con su mejor amigo, ni con un supuesto soporte técnico, ¡nadie! Si alguien la conoce, puede llevarse tus fondos sin que puedas hacer nada. Perderla es como darle a un ladrón la llave de tu casa y la combinación de tu caja fuerte.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3368174_1280.jpg" alt="Cadenas de bloques simbolizando seguridad" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Las Carteras (Wallets): Llaveros para tus Hechizos</h2>
        <p className={styles.paragraph}>
          Entonces, ¿dónde guardas este hechizo tan importante? Usas una <strong>"cartera"</strong> o <strong>"wallet"</strong>. Pero no es como la cartera de cuero de tu bolsillo. Piensa en ella como un llavero digital, diseñado para gestionar tus claves secretas de forma segura. Hay dos familias principales:
        </p>
        <ul>
          <li><strong>Carteras Calientes (Hot Wallets):</strong> Son apps en tu teléfono o computadora. Se llaman "calientes" porque están conectadas a internet. Son muy cómodas para el día a día, para hacer pagos pequeños. Son como el dinero que llevas en efectivo. No llevarías todos los ahorros de tu vida en el bolsillo, ¿verdad? Lo mismo aplica aquí.</li>
          <li><strong>Carteras Frías (Cold Wallets):</strong> Son dispositivos físicos, como un USB especial, que no están conectados a internet. Aquí es donde guardas tu gran tesoro. Para firmar una transacción, conectas el dispositivo, apruebas la operación y lo desconectas. Un ladrón en internet no puede robar algo que no está en internet. Es así de simple.</li>
        </ul>

        <h2 className={styles.subtitle}>La Frase Semilla: Tu Plan de Respaldo</h2>
        <p className={styles.paragraph}>
          Cuando configuras una cartera por primera vez, casi siempre te dará una lista de 12 o 24 palabras simples (como "árbol", "río", "batería", "calle"...). Esto es tu <strong>frase semilla</strong> o "seed phrase". ¡Es oro puro!
        </p>
        <p className={styles.paragraph}>
          Piensa en ella como el plano para reconstruir tu llave maestra. Si se te rompe el teléfono o pierdes tu cartera fría, puedes descargar una nueva cartera, introducir estas palabras en el orden correcto, y ¡voilà!, tu tesoro está de vuelta.
        </p>
        <p className={styles.paragraph}>
          ¿Cómo guardarla? Escríbela en un papel. O en dos. Guárdalos en lugares seguros y distintos. No le saques una foto. No la guardes en un archivo de texto en tu computadora o en la nube. El papel no se puede hackear.
        </p>
        
        <h2 className={styles.subtitle}>Buenas Prácticas: El Sentido Común es tu Superpoder</h2>
        <ul>
            <li><strong>Verifica las direcciones:</strong> Al enviar bitcoin, la dirección de destino es un galimatías de caracteres. Cópiala y pégala siempre. Antes de confirmar, verifica los primeros y los últimos cuatro caracteres. Una letra equivocada y tu dinero se habrá ido a un agujero negro para siempre. No hay botón de "deshacer".</li>
            <li><strong>Desconfía de los regalos:</strong> Nadie regala dinero. Si un video de YouTube o un extraño en Twitter te promete duplicar los bitcoins que le envíes, es una estafa. Siempre.</li>
            <li><strong>Cuidado con el "phishing":</strong> Recibirás correos o mensajes que parecen ser de empresas legítimas, pidiéndote tus claves o tu semilla "para verificar tu cuenta". Es mentira. Es un pescador con un cebo (phishing). No piques.</li>
            <li><strong>Mantén todo actualizado:</strong> Mantén el software de tu cartera y tu sistema operativo actualizados para tener las últimas mejoras de seguridad.</li>
        </ul>
        <p className={styles.paragraph}>
          Ser tu propio banco es un poder inmenso. Y como todo poder, requiere responsabilidad. La seguridad de tu Bitcoin no depende de algoritmos complejos, sino de hábitos sencillos y prudentes. ¡Sé un buen guardián de tus secretos!
        </p>
      </div>
    </>
  );
}
