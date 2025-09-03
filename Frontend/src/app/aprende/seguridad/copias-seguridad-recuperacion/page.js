'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function CopiasSeguridadRecuperacionPage() {
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
        <h1 className={styles.title}>Copias de Seguridad y Planes de Recuperación</h1>
        <p className={styles.paragraph}>
          Muy bien, hemos hablado mucho sobre cómo defender nuestro castillo de los atacantes. Pero, ¿qué pasa si el desastre no viene de fuera, sino de dentro? ¿Qué pasa si simplemente pierdes la llave? ¿O si el castillo se quema en un incendio? Un plan de seguridad no está completo sin un buen <strong>plan de recuperación</strong>. Porque los accidentes ocurren.
        </p>
        <p className={styles.paragraph}>
          La idea es simple: tienes que asumir que un día, tu teléfono se caerá al agua, tu computadora morirá o tu hardware wallet simplemente dejará de funcionar. No es una cuestión de "si" ocurrirá, sino de "cuándo". Un plan de recuperación es lo que haces para que ese día, en lugar de ser un pánico catastrófico, sea solo un pequeño inconveniente.
        </p>

        <h2 className={styles.subtitle}>La Semilla de Recuperación es TODO</h2>
        <p className={styles.paragraph}>
          Ya lo hemos dicho, pero hay que repetirlo hasta la saciedad. Tu <strong>frase semilla de 12 o 24 palabras</strong> es el plan de recuperación. No es la wallet, no es el dispositivo, no es la aplicación. Esas son solo herramientas para acceder a tus fondos. El verdadero tesoro, la llave maestra que puede reconstruirlo todo desde cero, es esa lista de palabras.
        </p>
        <p className={styles.paragraph}>
          Si tienes tu frase semilla, puedes perder tu hardware wallet, tu teléfono puede explotar y tu computadora puede ser abducida por extraterrestres. No importa. Compras un nuevo dispositivo, introduces las palabras en el orden correcto y todos tus fondos estarán ahí, esperándote. Si pierdes la semilla, has perdido tu dinero para siempre. Así de simple.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-7077716_1280.jpg" alt="Copia de seguridad" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Creando un Respaldo a Prueba de Tontos (y de Desastres)</h2>
        <p className={styles.paragraph}>
          El objetivo es guardar tu semilla de forma que esté a salvo de robos, pero también de daños físicos y de tu propia memoria olvidadiza. Aquí no vale con una sola copia.
        </p>
        <ul>
            <li><strong>La Regla del 3-2-1:</strong> Es un principio clásico de las copias de seguridad. Ten al menos <strong>3 copias</strong> de tu semilla, en <strong>2 tipos de medios diferentes</strong> (ej. papel y metal), y guarda al menos <strong>1 copia fuera de tu casa</strong>.</li>
            <li><strong>Materiales Resistentes:</strong> El papel está bien, pero el fuego y el agua son sus enemigos. Considera seriamente invertir en una placa de metal para estampar tus palabras. Es una inversión pequeña para proteger algo que puede valer mucho.</li>
            <li><strong>Ubicaciones Seguras y Diversas:</strong> No guardes todas las copias en el mismo cajón. Una podría estar en una caja fuerte en tu casa. Otra, en una caja de seguridad en un banco. Otra, en casa de un familiar de máxima confianza. La idea es que un único desastre (un robo, un incendio) no pueda destruir todas tus copias a la vez.</li>
        </ul>

        <h2 className={styles.subtitle}>El Peligro de la Complejidad: No te Pases de Listo</h2>
        <p className={styles.paragraph}>
          Algunas personas, con la mejor de las intenciones, crean sistemas de respaldo súper complejos. Dividen la semilla en tres partes y le dan una parte a tres personas diferentes. O la cifran con una contraseña que luego olvidan. ¡Cuidado! A veces, tu peor enemigo eres tú mismo. 
        </p>
        <p className={styles.paragraph}>
          Tu plan de recuperación debe ser lo suficientemente simple como para que puedas recordarlo y ejecutarlo en una situación de estrés. Y, muy importante, debe ser comprensible para tus herederos. Si te pasa algo, ¿podría tu familia recuperar los fondos? Un plan de herencia claro es una parte fundamental de la autogobernanza responsable.
        </p>

        <h2 className={styles.subtitle}>Pon a Prueba tu Plan</h2>
        <p className={styles.paragraph}>
          Un plan que no se ha probado no es un plan, es una oración. Una vez que tengas tu sistema de respaldo, ¡pruébalo! No tienes que hacerlo con todos tus fondos. Puedes enviar una pequeña cantidad de cripto a tu hardware wallet, luego borrar la wallet por completo y intentar recuperarla desde cero usando una de tus copias de seguridad.
        </p>
        <p className={styles.paragraph}>
          El sentimiento de alivio y confianza que te da ver que tus fondos reaparecen después de una recuperación exitosa no tiene precio. Te enseña que el sistema funciona y te da la tranquilidad de saber que estás preparado. No esperes a que ocurra un desastre real para descubrir si tu plan de recuperación tenía un agujero. Sé tu propio simulacro de incendio. Es la única forma de estar verdaderamente seguro.
        </p>
      </div>
    </>
  );
}
