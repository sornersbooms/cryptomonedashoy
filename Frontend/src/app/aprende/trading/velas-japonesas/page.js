'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function VelasJaponesasPage() {
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
        <h1 className={styles.title}>Velas Japonesas: Las Pequeñas Historias del Mercado</h1>
        <p className={styles.paragraph}>
          Ya sabemos que los gráficos son el mapa del tesoro del trader. Pero, ¿cuál es la mejor forma de leer ese mapa? ¡Con las <strong>velas japonesas</strong>! No son velas de cera, ni tienen nada que ver con Japón, salvo su origen. Son pequeñas historias visuales que nos cuentan mucho sobre lo que pasó en el mercado.
        </p>

        <h2 className={styles.subtitle}>¿Qué es una Vela Japonesa? La Cápsula del Tiempo</h2>
        <p className={styles.paragraph}>
          Imaginen que cada vela es como una pequeña cápsula del tiempo. En un gráfico de 1 hora, cada vela te cuenta la historia de lo que pasó en esa hora. En un gráfico diario, cada vela te cuenta la historia de ese día.
        </p>
        <p className={styles.paragraph}>
          Cada vela tiene cuatro piezas de información cruciales:
        </p>
        <ul>
          <li><strong>Apertura (Open):</strong> El precio al que empezó la "historia" de esa vela.</li>
          <li><strong>Cierre (Close):</strong> El precio al que terminó la "historia" de esa vela.</li>
          <li><strong>Máximo (High):</strong> El precio más alto que alcanzó el activo durante esa "historia".</li>
          <li><strong>Mínimo (Low):</strong> El precio más bajo que alcanzó el activo durante esa "historia".</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Gráfico de velas japonesas" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Cuerpo y las Mechas: La Batalla de Compradores y Vendedores</h2>
        <p className={styles.paragraph}>
          La parte gorda de la vela es el <strong>cuerpo</strong>. Nos dice la diferencia entre el precio de apertura y el de cierre.
        </p>
        <ul>
          <li><strong>Vela Verde (o Blanca):</strong> Si el precio de cierre es <em>mayor</em> que el de apertura, la vela es verde (o blanca). ¡Significa que los compradores ganaron la batalla en ese período!</li>
          <li><strong>Vela Roja (o Negra):</strong> Si el precio de cierre es <em>menor</em> que el de apertura, la vela es roja (o negra). ¡Significa que los vendedores ganaron la batalla!</li>
        </ul>
        <p className={styles.paragraph}>
          Las líneas finas que salen del cuerpo son las <strong>mechas</strong> (o sombras). Nos muestran el precio máximo y mínimo que se alcanzó durante ese período. Son como las "sombras" de la batalla, indicando hasta dónde llegaron los precios antes de retroceder.
        </p>

        <h2 className={styles.subtitle}>Leyendo las Historias: Patrones Simples</h2>
        <p className={styles.paragraph}>
          La belleza de las velas es que, al combinarse, forman patrones que nos dan pistas sobre lo que podría pasar. No son reglas fijas, son más bien "probabilidades" basadas en la psicología del mercado:
        </p>
        <ul>
          <li><strong>Vela Larga (Cuerpo Grande):</strong> Mucha fuerza en una dirección. Si es verde, los compradores fueron muy fuertes. Si es roja, los vendedores dominaron.</li>
          <li><strong>Vela Pequeña (Cuerpo Pequeño):</strong> Indica indecisión. Compradores y vendedores están en un empate. El mercado no sabe qué hacer.</li>
          <li><strong>Doji (Cuerpo Casi Inexistente):</strong> Apertura y cierre casi iguales. ¡Mucha indecisión! Puede ser una señal de que la tendencia actual está perdiendo fuerza y podría cambiar.</li>
          <li><strong>Martillo (Hammer):</strong> Una vela con un cuerpo pequeño en la parte superior y una mecha inferior muy larga. Si aparece después de una caída, puede indicar que los compradores están empezando a tomar el control y el precio podría subir.</li>
        </ul>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          Las velas japonesas son como el alfabeto del Análisis Técnico. Cada vela es una letra, y cuando las juntas, forman palabras y frases que te cuentan la historia del mercado. No son perfectas, y no te dicen el futuro con certeza, pero te dan una visión mucho más rica y detallada de la batalla entre compradores y vendedores que una simple línea. ¡Es una forma de ver la psicología del mercado en acción!
        </p>
      </div>
    </>
  );
}
