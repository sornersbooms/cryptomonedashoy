'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ApalancamientoPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const tradingCourse = courseData.trading;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={tradingCourse.title}
        modules={tradingCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>18. Trading con Apalancamiento</h1>
        <p className={styles.paragraph}>
          ¡Saludos, exploradores del mercado! Hoy vamos a adentrarnos en un concepto que, como la energía nuclear, puede ser increíblemente potente si se usa bien, o catastrófico si se maneja sin cuidado: el <strong>apalancamiento</strong>. No es magia, es física. Y como en la física, si aplicas una fuerza pequeña en el lugar correcto, puedes mover algo muy grande.
        </p>
        <p className={styles.paragraph}>
          Imaginen que tienen una palanca. Con una palanca, una persona puede levantar una roca que de otra forma sería imposible de mover. En el trading, el apalancamiento es esa palanca. Nos permite controlar una posición mucho más grande de lo que nuestro capital real nos permitiría.
        </p>

        <h2 className={styles.subtitle}>¿Cómo Funciona la Palanca Financiera?</h2>
        <p className={styles.paragraph}>
          Supongamos que quieren comprar 100 manzanas, pero solo tienen dinero para 10. Un "bróker" (el que nos presta la palanca) les dice: "No hay problema, yo te presto las 90 manzanas restantes. Tú pones tus 10, y si las 100 manzanas suben de precio, las ganancias son tuyas. Pero si bajan, las pérdidas también son tuyas, y me debes lo que te presté".
        </p>
        <p className={styles.paragraph}>
          Así, con solo 10 manzanas de su bolsillo, controlan 100. Si el precio de la manzana sube un 1%, ustedes ganan el 1% de 100 manzanas, no de 10. ¡Eso es diez veces más! Pero, y aquí viene la parte importante, si el precio baja un 1%, ustedes pierden el 1% de 100 manzanas. Y si baja un 10%, ¡han perdido todo su capital inicial!
        </p>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-4235718_1280.jpg" alt="Concepto de apalancamiento financiero" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>
        <p className={styles.paragraph}>
          Es como un amplificador. Amplifica las ganancias, sí, pero también amplifica las pérdidas. Por eso, el apalancamiento es una herramienta de doble filo.
        </p>

        <h2 className={styles.subtitle}>Margen y Liquidación: Las Leyes de la Palanca</h2>
        <p className={styles.paragraph}>
          Para usar esta palanca, el bróker les pide una "garantía", un "margen". Esas 10 manzanas que ustedes pusieron son su margen. Si el valor de su posición apalancada empieza a caer y se acerca al punto donde sus pérdidas superan su margen, el bróker no va a esperar a que pierdan todo su dinero y el suyo.
        </p>
        <p className={styles.paragraph}>
          En ese momento, les enviará una "llamada de margen" (margin call), pidiéndoles que pongan más dinero. Si no lo hacen, o si el precio sigue cayendo rápidamente, el bróker cerrará automáticamente su posición. A esto se le llama "liquidación". Es el momento en que la palanca se rompe y ustedes pierden su margen. Es una medida de seguridad para el bróker, pero un golpe duro para el trader.
        </p>

        <h2 className={styles.subtitle}>¿Por Qué Usar Apalancamiento?</h2>
        <p className={styles.paragraph}>
          Si es tan arriesgado, ¿por qué alguien lo usaría?
        </p>
        <ul>
          <li>
            <strong>Potenciar Ganancias:</strong> Con movimientos pequeños del mercado, se pueden obtener ganancias significativas.
          </li>
          <li>
            <strong>Eficiencia de Capital:</strong> No necesitas tener todo el capital para controlar una posición grande.
          </li>
          <li>
            <strong>Operaciones a Corto Plazo:</strong> Es muy común en el day trading o scalping, donde se buscan movimientos rápidos.
          </li>
        </ul>

        <h2 className={styles.subtitle}>La Advertencia de Feynman</h2>
        <p className={styles.paragraph}>
          Richard Feynman, el gran físico, siempre enfatizaba la importancia de entender los principios fundamentales. Con el apalancamiento, el principio fundamental es este: <strong>no estás invirtiendo más, estás asumiendo más riesgo</strong>. No es dinero gratis. Es una herramienta que magnifica tanto el éxito como el fracaso.
        </p>
        <p className={styles.paragraph}>
          Antes de tocar esta palanca, asegúrense de entender la mecánica. Practiquen con pequeñas cantidades, entiendan los riesgos de liquidación, y nunca, bajo ninguna circunstancia, apuesten más de lo que están dispuestos a perder. El mercado es un laboratorio, y el apalancamiento es un experimento de alta energía. ¡Manéjenlo con el respeto que se merece!
        </p>
      </div>
    </>
  );
}