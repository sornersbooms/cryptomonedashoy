'use client';
import React, { useState } from 'react';
import styles from '../que-es-bitcoin/page.module.css'; // Re-using the same styles
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function MitosRealidadesPage() {
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
        <h1 className={styles.title}>Mitos y Realidades de Bitcoin: Separando la Señal del Ruido</h1>
        <p className={styles.paragraph}>
          Cuando algo nuevo y poderoso irrumpe en el mundo, como lo ha hecho Bitcoin, inevitablemente se rodea de un torbellino de historias, miedos y exageraciones. Es natural. La gente intenta comprenderlo usando viejas etiquetas. Vamos a hacer de detectives y a examinar algunos de los mitos más famosos, para ver si son hechos sólidos o castillos en el aire.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-4503758_1280.jpg" alt="Símbolo de interrogación sobre Bitcoin" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Mito 1: "Bitcoin solo se usa para actividades ilegales"</h2>
        <p className={styles.paragraph}>
          <strong>La idea:</strong> Como no hay un banco vigilando, es el sueño de cualquier criminal.
        </p>
        <p className={styles.paragraph}>
          <strong>La realidad:</strong> Pensemos en esto un segundo. La blockchain de Bitcoin es un libro de contabilidad <strong>público</strong>. Cada transacción, desde la primera hasta la última, está registrada y visible para cualquiera que quiera mirar. Es como si un ladrón publicara todos sus movimientos bancarios en un periódico. No es anónimo, es "pseudónimo". Tu nombre real no aparece, pero tu dirección (tu "número de cuenta") sí. Si las autoridades consiguen vincular esa dirección contigo, todo tu historial financiero queda expuesto para siempre. De hecho, el dinero en efectivo de toda la vida es mucho más anónimo y preferido para actividades ilícitas. ¿Se ha usado Bitcoin para el mal? Sí, al igual que se usa el dinero, los coches e internet. Pero su diseño transparente no es ideal para los criminales.
        </p>

        <h2 className={styles.subtitle}>Mito 2: "Bitcoin no está respaldado por nada, no tiene valor real"</h2>
        <p className={styles.paragraph}>
          <strong>La idea:</strong> No hay oro en una bóveda ni un gobierno que lo garantice. Es aire digital.
        </p>
        <p className={styles.paragraph}>
          <strong>La realidad:</strong> Detengámonos a preguntar, ¿qué respalda al euro o al dólar hoy en día? Hace mucho tiempo era el oro, pero ya no. Ahora su valor se basa en la "fe y crédito" del gobierno que lo emite. Es un respaldo basado en la confianza en una institución. Bitcoin tiene un tipo de respaldo diferente. No se apoya en una institución, sino en las matemáticas. Su valor proviene de:
        </p>
        <ul>
          <li><strong>Su red:</strong> Miles de ordenadores en todo el mundo que mantienen el sistema funcionando.</li>
          <li><strong>Su seguridad:</strong> Una criptografía tan fuerte que, hasta hoy, es inviolable.</li>
          <li><strong>Su escasez:</strong> Una regla inmutable de que solo existirán 21 millones.</li>
        </ul>
        <p className={styles.paragraph}>Su respaldo es la confianza en un sistema predecible y a prueba de manipulaciones, en lugar de la confianza en políticos o banqueros.
        </p>

        <h2 className={styles.subtitle}>Mito 3: "Bitcoin consume una cantidad criminal de energía"</h2>
        <p className={styles.paragraph}>
          <strong>La idea:</strong> La minería de Bitcoin va a hervir los océanos y destruir el planeta.
        </p>
        <p className={styles.paragraph}>
          <strong>La realidad:</strong> Este es un tema complejo y con mucho debate. Es cierto, la red de Bitcoin consume una cantidad significativa de energía. ¡Asegurar una red monetaria global que vale cientos de miles de millones no es gratis! Pero hay que ponerlo en perspectiva. ¿Cuánta energía gasta el sistema financiero tradicional, con sus rascacielos, servidores, cajeros automáticos y viajes en jet? Es una cifra difícil de calcular, pero sin duda es masiva. Además, los mineros de Bitcoin tienen un incentivo económico para buscar la energía más barata posible, que a menudo son fuentes renovables (hidroeléctrica, solar, eólica) que de otro modo se desperdiciarían. La pregunta no es si usa energía, sino si el servicio que ofrece (una red de valor global, abierta y resistente a la censura) justifica ese coste.
        </p>

        <h2 className={styles.subtitle}>Mito 4: "Bitcoin es una burbuja que va a estallar y valer cero"</h2>
        <p className={styles.paragraph}>
          <strong>La idea:</strong> Ha subido demasiado rápido, es un esquema Ponzi y caerá a cero.
        </p>
        <p className={styles.paragraph}>
          <strong>La realidad:</strong> Bitcoin ha sido declarado "muerto" más de 400 veces por la prensa a lo largo de su historia. Ha tenido ciclos de subidas parabólicas y caídas dramáticas. Esto es típico de una tecnología nueva y disruptiva mientras el mundo entero intenta averiguar cuánto vale. Una burbuja es cuando el precio de algo supera con creces su valor fundamental. El verdadero debate es: ¿cuál es el valor fundamental de Bitcoin? Si crees que es un sistema de pago global y una reserva de valor como el oro digital, su valor fundamental podría ser enorme. Si crees que no sirve para nada, entonces cualquier precio te parecerá una burbuja. Más que una burbuja, es un proceso de "descubrimiento de precio" a escala mundial, y es un camino lleno de baches.
        </p>
      </div>
    </>
  );
}
