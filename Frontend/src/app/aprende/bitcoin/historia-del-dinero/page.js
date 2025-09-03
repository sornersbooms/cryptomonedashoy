'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function HistoriaDelDineroPage() {
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
        <h1 className={styles.title}>La Historia del Dinero: De Conchas a Clicks</h1>
        <p className={styles.paragraph}>
          Para entender por qué algo como Bitcoin es tan revolucionario, primero tenemos que hacer un viaje rápido. Un viaje a través de la historia de esa cosa que todos usamos todos los días: el dinero. ¿Qué es realmente?
        </p>
        <p className={styles.paragraph}>
          Al principio, no había dinero. Si tú tenías gallinas y querías los zapatos que yo hacía, teníamos un problema si yo no quería tus gallinas. A esto se le llama el problema de la "doble coincidencia de deseos". Es un verdadero dolor de cabeza. El comercio era muy ineficiente.
        </p>

        <h2 className={styles.subtitle}>Solución 1: Cosas Raras y Duraderas</h2>
        <p className={styles.paragraph}>
          Los humanos son listos. Se dieron cuenta de que podían usar un intermediario. Algo que todo el mundo estuviera de acuerdo en que tenía valor. Empezamos con cosas como <strong>conchas marinas, cuentas de colores o sal</strong>. ¿Por qué? Porque eran relativamente raras, difíciles de falsificar y no se echaban a perder como los plátanos. Esto funcionó durante mucho tiempo. Era mejor que el trueque.
        </p>

        <h2 className={styles.subtitle}>Solución 2: ¡Metales Brillantes!</h2>
        <p className={styles.paragraph}>
          Luego descubrimos los metales. El <strong>oro y la plata</strong> eran aún mejores. Son raros, duraderos (no se oxidan), son divisibles (puedes cortarlos en trocitos) y son bonitos. Así que empezamos a hacer monedas. Ahora el valor estaba en el propio metal. Una moneda de oro valía lo que valía el oro que contenía. Esto fue un gran avance.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Antiguas monedas de oro y plata" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Solución 3: El Papelito de "Te Debo"</h2>
        <p className={styles.paragraph}>
          Cargar con bolsas pesadas de oro era peligroso y poco práctico. Así que la gente empezó a dejar su oro en un lugar seguro (con un orfebre, el prototipo de un banquero) y a cambio recibía un recibo de papel. Un pagaré. Pronto, la gente se dio cuenta de que era más fácil intercambiar los papelitos que ir a por el oro. Así nació el <strong>papel moneda</strong>. El billete era solo una promesa de que podías canjearlo por oro real.
        </p>

        <h2 className={styles.subtitle}>Solución 4: El Dinero por Decreto (Fiat)</h2>
        <p className={styles.paragraph}>
          Con el tiempo, los gobiernos intervinieron y dijeron: "Olvídense del oro. Usen estos billetes que imprimimos nosotros. Tienen valor porque nosotros, el gobierno, decimos que lo tienen". A esto se le llama <strong>dinero fiduciario o "fiat"</strong>. La palabra "fiat" en latín significa "hágase". El dinero tiene valor por decreto, por la confianza que tenemos en el gobierno que lo emite.
        </p>
        <p className={styles.paragraph}>
          Y ese es el sistema que tenemos hoy. La mayor parte de nuestro dinero ya ni siquiera son billetes, son solo números en las computadoras de los bancos. Es digital, pero está centralizado y controlado.
        </p>

        <h2 className={styles.subtitle}>El Siguiente Paso...</h2>
        <p className={styles.paragraph}>
          Y esto nos lleva directamente a Bitcoin. Bitcoin es un nuevo experimento en esta larga historia. Se pregunta: ¿podemos tener dinero que sea puramente digital, pero que no necesite un gobierno o un banco que lo controle? ¿Podemos crear un sistema de valor entre personas, basado en las matemáticas y la criptografía en lugar de en la confianza en una autoridad central? La historia del dinero es una de evolución constante, y Bitcoin es simplemente el capítulo más reciente y extraño de ese libro.
        </p>
      </div>
    </>
  );
}