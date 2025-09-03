'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function GestionDeRiesgosPage() {
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
        <h1 className={styles.title}>14. Gestión de Riesgos: El Arte de No Perderlo Todo</h1>
        <p className={styles.paragraph}>
          ¡Hola, curiosos del universo financiero! Hoy vamos a hablar de algo que, aunque no suena tan emocionante como ganar millones, es absolutamente fundamental: la <strong>Gestión de Riesgos</strong>. Imaginen que son exploradores en una jungla inmensa y desconocida. ¿Se lanzarían sin un mapa, sin una brújula, sin saber qué peligros acechan? ¡Claro que no! En el trading, la jungla es el mercado, y la gestión de riesgos es su mapa y su brújula.
        </p>

        <h2 className={styles.subtitle}>La Incertidumbre es el Juego</h2>
        <p className={styles.paragraph}>
          En la vida, y especialmente en los mercados, la única certeza es la incertidumbre. No podemos predecir el futuro. Si alguien les dice que sabe lo que va a pasar, ¡corran! La gestión de riesgos no se trata de eliminar la incertidumbre, sino de entenderla, cuantificarla y prepararse para ella. Es como un científico que no puede predecir el resultado exacto de un experimento, pero sí puede diseñar el experimento para minimizar los errores y entender las probabilidades.
        </p>

        <h2 className={styles.subtitle}>Capital: Su Combustible Precioso</h2>
        <p className={styles.paragraph}>
          Su capital de trading es como el combustible de su nave espacial. Si se quedan sin combustible, la nave se detiene. Si pierden todo su capital, no pueden seguir operando. La primera regla de la gestión de riesgos es: <strong>proteger su capital</strong>. Esto significa que en cada operación, deben saber cuánto están dispuestos a perder. No es una suposición, es un cálculo. Si están dispuestos a perder el 1% de su capital en una operación, y esa operación sale mal, solo pierden ese 1%. No el 10%, no el 50%. ¡Solo el 1%!
        </p>
        <p className={styles.paragraph}>
          Esto se logra con algo llamado <strong>stop-loss</strong>. Es como un paracaídas automático. Si el precio de su activo cae a un cierto nivel, su operación se cierra automáticamente para limitar sus pérdidas. Es una herramienta simple, pero increíblemente poderosa.
        </p>

        <h2 className={styles.subtitle}>Tamaño de la Posición: ¿Cuánta Gasolina Pongo?</h2>
        <p className={styles.paragraph}>
          Relacionado con lo anterior, está el <strong>tamaño de la posición</strong>. Si tienen un tanque de gasolina de 100 litros y solo quieren arriesgar 1 litro por viaje, ¿cuánta gasolina ponen en el tanque para cada viaje? No van a llenar el tanque si solo necesitan un poco. De la misma manera, el tamaño de su posición (cuánto dinero invierten en una operación) debe estar directamente relacionado con cuánto están dispuestos a arriesgar. Si su stop-loss es del 5% y solo quieren arriesgar el 1% de su capital total, entonces su posición no puede ser más del 20% de su capital total (1% / 5% = 0.20).
        </p>

        <h2 className={styles.subtitle}>Diversificación: No Pongan Todos los Huevos en la Misma Canasta</h2>
        <p className={styles.paragraph}>
          Imaginen que tienen una canasta con todos sus huevos. Si se les cae la canasta, ¡adiós huevos! Pero si tienen varias canastas y distribuyen los huevos, si una se cae, no lo pierden todo. En el trading, esto se llama <strong>diversificación</strong>. No pongan todo su dinero en un solo activo. Distribúyanlo en diferentes activos, diferentes mercados, diferentes estrategias. Así, si uno de ellos tiene un mal día, los otros pueden compensarlo.
        </p>

        <h2 className={styles.subtitle}>Ratio Riesgo/Recompensa: ¿Vale la Pena el Experimento?</h2>
        <p className={styles.paragraph}>
          Antes de cada experimento (operación), un buen científico se pregunta: ¿cuánto puedo ganar si esto funciona, y cuánto puedo perder si no funciona? Esto es el <strong>ratio riesgo/recompensa</strong>. Si están arriesgando 1 dólar para ganar 3 dólares, su ratio es 1:3. Si arriesgan 1 dólar para ganar 0.50 dólares, su ratio es 1:0.5. Siempre busquen operaciones donde la recompensa potencial sea significativamente mayor que el riesgo. No tiene sentido arriesgar mucho para ganar poco.
        </p>

        <h2 className={styles.subtitle}>La Disciplina: La Clave del Éxito</h2>
        <p className={styles.paragraph}>
          La gestión de riesgos no es solo un conjunto de reglas, es una mentalidad. Es la disciplina de seguir sus reglas incluso cuando sus emociones les gritan que hagan lo contrario. Es como un piloto que sigue su lista de verificación antes de despegar, sin importar lo que sienta. La disciplina es lo que los mantendrá en el juego a largo plazo.
        </p>
        <p className={styles.paragraph}>
          En resumen, la gestión de riesgos es la ciencia de la supervivencia en el trading. No se trata de evitar las pérdidas, porque las pérdidas son parte del juego. Se trata de controlar las pérdidas para que nunca sean catastróficas, y así poder seguir operando y aprendiendo. Es la física de no explotar en el espacio. ¡Y eso es todo por hoy!
        </p>
      </div>
    </>
  );
}
