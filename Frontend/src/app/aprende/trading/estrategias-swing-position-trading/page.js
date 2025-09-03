'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function SwingPositionTradingPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const tradingCourse = courseData.trading; // Asumiendo que 'trading' es la clave para el curso de trading en courseData

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={tradingCourse.title}
        modules={tradingCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>17. Estrategias: Swing y Position Trading</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! Hoy vamos a hablar de algo que a muchos les parece magia negra, pero que en realidad es pura física aplicada al mercado: las estrategias de trading. No se asusten con los nombres rimbombantes, "Swing Trading" y "Position Trading". Son solo formas elegantes de decir "cómo jugamos con el tiempo".
        </p>
        <p className={styles.paragraph}>
          Imaginen que están en un laboratorio, y en lugar de partículas, tenemos precios. Estos precios se mueven, suben y bajan, como si estuvieran bailando al ritmo de una orquesta invisible. Nuestro trabajo, como científicos curiosos, es entender ese baile y, si podemos, predecir el siguiente paso.
        </p>

        <h2 className={styles.subtitle}>El Swing Trading: La Danza de Corto Plazo</h2>
        <p className={styles.paragraph}>
          Piensen en un columpio, un "swing". ¿Qué hace un columpio? Sube y baja, ¿verdad? El swing trading es exactamente eso. Buscamos esos movimientos de "sube y baja" en el precio de un activo. No nos interesa el viaje completo de la vida del activo, solo esos pequeños vaivenes que duran unos días o unas semanas.
        </p>
        <p className={styles.paragraph}>
          Es como si estuviéramos observando una onda. Queremos subirnos a la ola cuando empieza a formarse y bajarnos justo antes de que rompa. No somos surfistas de olas gigantes, sino de esas olas medianas que nos permiten un paseo rápido y emocionante.
        </p>
        <p className={styles.paragraph}>
          ¿Cómo lo hacemos? Observamos patrones. Los precios no se mueven al azar, tienen una especie de "memoria" o "inercia". Si algo ha estado subiendo, es probable que siga subiendo un poco más antes de corregir. Y si ha estado bajando, lo mismo. Buscamos puntos de inflexión, como cuando el columpio llega a su punto más alto y empieza a bajar, o viceversa.
        </p>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-7072522_1280.jpg" alt="Gráfico de trading con velas japonesas" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>
        <p className={styles.paragraph}>
          Es un juego de probabilidades, no de certezas. No podemos saber con exactitud dónde estará el precio mañana, pero podemos decir: "Basado en lo que he observado, hay una alta probabilidad de que se mueva en esta dirección por un tiempo". Y eso, mis amigos, es la ciencia del trading.
        </p>

        <h2 className={styles.subtitle}>El Position Trading: La Gran Migración</h2>
        <p className={styles.paragraph}>
          Ahora, olvídense del columpio y piensen en una migración de aves. Las aves no vuelan de un árbol a otro en cuestión de días. Vuelan miles de kilómetros, a través de continentes, durante meses o incluso años. El position trading es así.
        </p>
        <p className={styles.paragraph}>
          Aquí no nos interesan los pequeños ruidos del mercado, las fluctuaciones diarias o semanales. Nos interesa la dirección general, la "tendencia" a largo plazo. Es como si estuviéramos viendo el mapa meteorológico de un continente entero, no solo el pronóstico para mañana en nuestra ciudad.
        </p>
        <p className={styles.paragraph}>
          Buscamos activos que creemos que van a crecer significativamente en los próximos meses o años. Nos basamos en fundamentos: ¿Es una buena empresa? ¿Tiene un producto innovador? ¿El mercado en general va en esa dirección? Es menos sobre el "cuándo" y más sobre el "qué" y el "por qué".
        </p>
        <p className={styles.paragraph}>
          Una vez que tomamos una "posición" (de ahí el nombre), la mantenemos. No nos asustan las pequeñas tormentas en el camino. Sabemos que el viaje es largo y que habrá turbulencias, pero confiamos en que el destino final será el correcto. Es una estrategia para pacientes, para aquellos que entienden que la naturaleza no se apresura.
        </p>

        <h2 className={styles.subtitle}>¿Cuál es Mejor?</h2>
        <p className={styles.paragraph}>
          No hay una respuesta única, como no hay una única forma de hacer ciencia. Ambas son herramientas, y la elección depende de lo que quieras lograr y de tu personalidad.
        </p>
        <ul>
          <li>
            <strong>Swing Trading:</strong> Requiere más atención, más análisis técnico, y es más activo. Es para los que disfrutan de la adrenalina de los movimientos rápidos.
          </li>
          <li>
            <strong>Position Trading:</strong> Requiere más paciencia, más análisis fundamental, y es menos activo. Es para los que prefieren ver el panorama general y dejar que el tiempo haga su trabajo.
          </li>
        </ul>
        <p className={styles.paragraph}>
          En última instancia, el trading, como la física, es sobre observar, formular hipótesis, probarlas y aprender de los resultados. No hay trucos mágicos, solo una comprensión profunda de cómo funcionan las cosas. ¡Así que salgan y observen esos precios como si fueran las estrellas en el cielo!
        </p>
      </div>
    </>
  );
}