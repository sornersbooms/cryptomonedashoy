'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ErroresComunesPage() {
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
        <h1 className={styles.title}>Errores Comunes a Evitar en el Trading: Lecciones de la Naturaleza</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! En el mundo del trading, como en la física, hay leyes fundamentales que, si las ignoras, te van a dar un buen golpe. No son leyes escritas en piedra por un burócrata, sino principios que emergen de la interacción humana con la incertidumbre. Y créanme, la incertidumbre es el campo de juego del trading. Vamos a desglosar algunos de los errores más comunes, no para que se sientan mal, sino para que entiendan por qué ocurren y cómo evitarlos. Es como aprender a no caerse de la bicicleta: al principio te caes, pero si entiendes la física del equilibrio, lo dominas.
        </p>

        <h2 className={styles.subtitle}>1. Operar sin un Plan: El Paseo sin Mapa</h2>
        <p className={styles.paragraph}>
          Imagina que quieres ir de aquí a la Luna. ¿Simplemente saltas y esperas llegar? ¡Claro que no! Necesitas un plan, cálculos, combustible, una trayectoria. En el trading, muchos operan sin un plan. Entran en una operación porque "sienten" que va a subir, o porque un amigo les dijo. Esto es como lanzar una moneda al aire y esperar que caiga de canto. No hay estrategia, no hay gestión de riesgos, no hay puntos de entrada o salida definidos. El resultado es el caos, y el caos en el trading se traduce en pérdidas.
        </p>
        <p className={styles.paragraph}>
          Un plan de trading es tu mapa y tu brújula. Te dice cuándo entrar, cuándo salir (con ganancias o pérdidas), cuánto arriesgar y por qué estás haciendo lo que haces. Sin él, eres un barco a la deriva en un océano tormentoso.
        </p>

        <h2 className={styles.subtitle}>2. No Gestionar el Riesgo: Jugar a la Ruleta Rusa</h2>
        <p className={styles.paragraph}>
          Este es, quizás, el error más catastrófico. Es como si un ingeniero construyera un puente sin calcular la resistencia de los materiales. Tarde o temprano, el puente se cae. En el trading, no gestionar el riesgo significa poner en juego más capital del que puedes permitirte perder en una sola operación. O, peor aún, no tener un "stop-loss" (un punto en el que cierras la operación para limitar tus pérdidas).
        </p>
        <p className={styles.paragraph}>
          El riesgo es inherente al trading, no puedes eliminarlo, pero puedes controlarlo. Piensen en ello como la probabilidad. Si en cada operación arriesgan solo un pequeño porcentaje de su capital total (digamos, el 1% o 2%), una mala racha no los sacará del juego. Es la diferencia entre una pequeña abolladura y un choque total.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-7678815_1280.jpg" alt="Errores comunes en el trading de criptomonedas" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>3. Dejarse Llevar por las Emociones: El Cerebro Reptiliano al Mando</h2>
        <p className={styles.paragraph}>
          Los humanos somos criaturas emocionales. Y en el trading, las emociones son el enemigo número uno. El miedo a perder (FOMO - Fear Of Missing Out) te hace entrar en operaciones tardías, cuando el precio ya ha subido mucho. El miedo a perder dinero te hace cerrar operaciones ganadoras demasiado pronto o mantener operaciones perdedoras con la esperanza de que se recuperen. La codicia te hace arriesgar demasiado.
        </p>
        <p className={styles.paragraph}>
          El mercado no tiene emociones. Se mueve por la oferta y la demanda, por la información y la desinformación. Si dejas que tus emociones dicten tus decisiones, estás operando contra la lógica y la probabilidad. Es como intentar volar un avión con el corazón en lugar de con el cerebro. Necesitas disciplina, paciencia y la capacidad de apegarte a tu plan, incluso cuando tus entrañas te gritan lo contrario.
        </p>

        <h2 className={styles.subtitle}>4. No Aprender de los Errores: Repetir el Experimento Fallido</h2>
        <p className={styles.paragraph}>
          En la ciencia, un experimento fallido no es un fracaso, es una oportunidad para aprender. Analizas qué salió mal, ajustas tus variables y lo intentas de nuevo. En el trading, muchos cometen el mismo error una y otra vez. Pierden dinero, se frustran y culpan al mercado, a la suerte o a cualquier cosa menos a su propia falta de análisis.
        </p>
        <p className={styles.paragraph}>
          Lleva un diario de trading. Anota cada operación: por qué entraste, por qué saliste, qué sentiste, qué aprendiste. Revisa tus operaciones pasadas. ¿Hay patrones en tus pérdidas? ¿Qué podrías haber hecho diferente? La autocrítica constructiva es tu mejor maestra. Si no aprendes de tus errores, estás condenado a repetirlos, y el mercado te cobrará por cada lección no aprendida.
        </p>

        <h2 className={styles.subtitle}>Conclusión: El Trading es una Ciencia, no una Apuesta</h2>
        <p className={styles.paragraph}>
          El trading, en su esencia, no es una apuesta. Es la aplicación de la probabilidad, la estadística y la psicología a un entorno dinámico. Los errores comunes no son fallos morales, sino desviaciones de los principios fundamentales. Entender estos principios, tener un plan, gestionar el riesgo, controlar las emociones y aprender continuamente, es lo que separa a los traders consistentes de los que simplemente están jugando a la lotería.
        </p>
        <p className={styles.paragraph}>
          Así que, la próxima vez que sientan la tentación de saltarse un paso o de dejarse llevar por el impulso, recuerden las leyes de la naturaleza. El mercado no perdona la ignorancia de sus principios. ¡A operar con cabeza y a seguir aprendiendo!
        </p>
      </div>
    </>
  );
}
