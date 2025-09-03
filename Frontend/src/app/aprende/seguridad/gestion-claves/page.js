'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function GestionClavesPage() {
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
        <h1 className={styles.title}>Gestión de Claves Privadas y Semillas</h1>
        <p className={styles.paragraph}>
          Muy bien, hemos llegado al corazón del asunto. Si ser tu propio banco es la idea principal, entonces la gestión de claves es el manual de operaciones de tu bóveda. Suena complicado, pero vamos a simplificarlo. Todo se reduce a una cosa: cómo generar, guardar y nunca, jamás, revelar tu secreto más importante.
        </p>

        <h2 className={styles.subtitle}>La Semilla Maestra: 12 o 24 Palabras Mágicas</h2>
        <p className={styles.paragraph}>
          Cuando configuras una wallet por primera vez, te da una lista de 12 o 24 palabras. Esto se conoce como <strong>frase semilla</strong> o <strong>semilla de recuperación</strong>. ¿Qué es esto? Imaginen que su wallet es un árbol. Este árbol puede tener miles de ramas y hojas, que son todas las direcciones de criptomonedas que puedan necesitar. La frase semilla es, literalmente, la semilla de la que brota todo el árbol.
        </p>
        <p className={styles.paragraph}>
          A partir de esta única semilla, la wallet puede generar matemáticamente cada una de las claves privadas que necesitarás. Esto es una maravilla, porque significa que no tienes que hacer una copia de seguridad de miles de claves. Solo tienes que guardar en un lugar seguro esa única lista de palabras. Si tu teléfono se rompe o tu hardware wallet se pierde, puedes comprar uno nuevo, introducir tus 12 o 24 palabras y ¡voilà!, tu árbol de dinero vuelve a crecer exactamente como estaba.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-4503758_1280.jpg" alt="Clave privada" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Santuario de tu Semilla: ¿Dónde Guardarla?</h2>
        <p className={styles.paragraph}>
          Aquí es donde la gente comete los errores más grandes. La regla número uno es: <strong>NUNCA guardes tu frase semilla en un dispositivo conectado a internet.</strong> Nunca. ¿Una captura de pantalla? ¡No! ¿Un archivo de texto en tu escritorio? ¡Jamás! ¿En un gestor de contraseñas en la nube? ¡Ni se te ocurra!
        </p>
        <p className={styles.paragraph}>
          ¿Por qué? Porque cualquier cosa digital puede ser hackeada. Tu semilla debe vivir en el mundo físico, fuera del alcance de los piratas informáticos. Las mejores prácticas son simples y un poco anticuadas, pero funcionan:
        </p>
        <ul>
            <li><strong>Escríbela en papel:</strong> Usa el trozo de papel que viene con tu hardware wallet. Haz dos o tres copias.</li>
            <li><strong>Grábala en metal:</strong> El papel puede quemarse o mojarse. Para una seguridad de archivo, puedes comprar placas de metal diseñadas para estampar tus palabras. A prueba de fuego y de inundaciones.</li>
            <li><strong>Distribúyela:</strong> Guarda las copias en lugares diferentes y seguros. Una en tu caja fuerte, otra en la casa de un familiar de confianza, por ejemplo. No pongas todos los huevos en la misma cesta.</li>
        </ul>

        <h2 className={styles.subtitle}>El Error que No Puedes Cometer</h2>
        <p className={styles.paragraph}>
          El error más catastrófico es <strong>introducir tu semilla de una wallet fría (hardware) en una wallet caliente (software)</strong>. Imagina que tienes tu tesoro en una bóveda de máxima seguridad (tu hardware wallet). Un día, por conveniencia, decides apuntar la combinación de la bóveda en un post-it y pegarlo en la puerta de tu casa (una hot wallet). ¡Has destruido por completo el propósito de la bóveda!
        </p>
        <p className={styles.paragraph}>
          Si alguna vez una aplicación o sitio web te pide que introduzcas tu frase de recuperación de 12/24 palabras, es casi con total seguridad una estafa. La única vez que debes usarla es cuando estás recuperando tu propia wallet en un dispositivo nuevo y de confianza.
        </p>

        <h2 className={styles.subtitle}>La "Passphrase" o Palabra de Paso (La Palabra 25)</h2>
        <p className={styles.paragraph}>
          Para los más paranoicos (lo cual es bueno en seguridad), hay una capa extra. Se llama <strong>passphrase</strong> o "palabra de paso". Es como una palabra número 13 o 25 que tú inventas y añades a tu semilla. No se escribe, se memoriza.
        </p>
        <p className={styles.paragraph}>
          Esto crea una wallet completamente nueva y oculta. Si un ladrón te apunta con una pistola y te obliga a darle tu semilla de 24 palabras, se la das. Él la introducirá y verá una wallet, quizás con una pequeña cantidad de dinero que dejaste ahí como señuelo. Pero no podrá acceder a tu wallet principal, porque le falta esa palabra secreta que solo está en tu cabeza. Es el nivel definitivo de negación plausible.
        </p>
        <p className={styles.paragraph}>
          Gestionar tus claves es un acto de responsabilidad personal. Requiere disciplina y un poco de trabajo al principio, pero una vez que estableces un sistema seguro, puedes dormir tranquilo sabiendo que tu banco personal es inexpugnable.
        </p>
      </div>
    </>
  );
}
