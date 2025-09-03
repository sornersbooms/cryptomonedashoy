'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function MediasMovilesPage() {
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
        <h1 className={styles.title}>Indicadores: Medias Móviles (El Suavizador de Ruido)</h1>
        <p className={styles.paragraph}>
          Ya sabemos leer las velas y trazar líneas de tendencia. Pero a veces, el precio es muy ruidoso, como un niño pequeño que no para de moverse. Necesitamos algo que nos ayude a ver la "tendencia" real, a suavizar ese ruido. Aquí es donde entran los <strong>indicadores</strong>, y el más básico y fundamental es la <strong>Media Móvil</strong>.
        </p>

        <h2 className={styles.subtitle}>¿Qué es una Media Móvil? El Promedio de la Clase</h2>
        <p className={styles.paragraph}>
          Imaginen que están en una clase y quieren saber cómo le va a la clase en general en los exámenes. No miran solo la nota del último examen de un alumno. Miran el "promedio" de las últimas 10 notas de la clase. Eso les da una idea más suave y general del rendimiento.
        </p>
        <p className={styles.paragraph}>
          Una <strong>Media Móvil (MA)</strong> es exactamente eso. Es el promedio del precio de un activo durante un número determinado de períodos (por ejemplo, los últimos 10 días, las últimas 50 horas, los últimos 200 minutos). A medida que el tiempo avanza, el promedio se "mueve", eliminando el precio más antiguo y añadiendo el más reciente.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Gráfico de precios con medias móviles" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Tipos de Medias Móviles: Simple vs. Exponencial</h2>
        <p className={styles.paragraph}>
          Hay dos tipos principales de medias móviles:
        </p>
        <ul>
          <li><strong>Media Móvil Simple (SMA):</strong> Es el promedio aritmético simple. Sumas los precios de cierre de los últimos X períodos y los divides por X. Es como el promedio de notas de la clase.</li>
          <li><strong>Media Móvil Exponencial (EMA):</strong> Es un poco más sofisticada. Le da más peso a los precios más recientes. Es como si el último examen de la clase contara un poco más para el promedio. Esto la hace más sensible a los cambios recientes del precio.</li>
        </ul>

        <h2 className={styles.subtitle}>Cómo Usarlas: Leyendo la Línea Suave</h2>
        <p className={styles.paragraph}>
          Las Medias Móviles son como un "suavizador de ruido". Nos ayudan a identificar la tendencia principal y a encontrar posibles puntos de entrada o salida.
        </p>
        <ul>
          <li><strong>Identificar la Tendencia:</strong> Si el precio está por encima de la Media Móvil, y la Media Móvil está subiendo, es una señal alcista. Si el precio está por debajo y la Media Móvil está bajando, es una señal bajista.</li>
          <li><strong>Soporte y Resistencia Dinámicos:</strong> Una Media Móvil puede actuar como un soporte o resistencia "dinámico". El precio puede rebotar en ella, como si fuera una línea de tendencia que se curva con el precio.</li>
          <li><strong>Cruces (Crossovers):</strong> Cuando una Media Móvil más rápida (por ejemplo, la de 50 períodos) cruza por encima de una más lenta (por ejemplo, la de 200 períodos), puede ser una señal de compra (cruce dorado). Si la cruza por debajo, puede ser una señal de venta (cruce de la muerte). Es como si el promedio de corto plazo confirmara un cambio en el promedio de largo plazo.</li>
        </ul>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          Las Medias Móviles no son perfectas, y no te dicen el futuro. Son herramientas que te ayudan a ver la tendencia subyacente, a filtrar el ruido del mercado y a tomar decisiones más informadas. Son como el promedio de la clase: no te dice quién va a sacar un 10 en el próximo examen, pero te da una buena idea de cómo va el grupo en general. ¡Son una de las herramientas más básicas y poderosas en el arsenal de un trader!
        </p>
      </div>
    </>
  );
}
