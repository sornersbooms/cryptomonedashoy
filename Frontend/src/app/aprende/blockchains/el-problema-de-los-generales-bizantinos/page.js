'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ByzantineGeneralsPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const blockchainCourse = courseData.blockchains;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={blockchainCourse.title}
        modules={blockchainCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>El Problema de los Generales Bizantinos: ¿Cómo Confiar en los Extraños?</h1>
        <p className={styles.paragraph}>
          ¡Vamos a jugar un juego! Imaginen que somos un grupo de generales del Imperio Bizantino y queremos conquistar una ciudad. Estamos acampados en diferentes colinas alrededor de ella y la única forma de comunicarnos es enviando mensajeros a caballo.
        </p>
        <p className={styles.paragraph}>
          Suena bastante simple, ¿no? Pero aquí viene el truco... <strong>¿Qué pasa si uno de nosotros es un traidor?</strong> ¿O si el enemigo captura a un mensajero y le cambia el mensaje?
        </p>

        <h2 className={styles.subtitle}>El Verdadero Problema: El Acuerdo</h2>
        <p className={styles.paragraph}>
          Verán, el punto crucial no es si atacamos o nos retiramos. <strong>¡Es el acuerdo!</strong> Si todos atacamos al mismo tiempo, ganamos. Si todos nos retiramos, salvamos el ejército para luchar otro día. Pero si algunos atacan y otros se retiran... ¡es un desastre absoluto! Los que atacan son aniquilados. La coordinación lo es todo.
        </p>
        <p className={styles.paragraph}>
          Un general traidor podría ser muy astuto. Podría enviar "¡Ataquen al amanecer!" a la mitad de los generales, y "¡Retírense!" a la otra mitad. El traidor se salva, los leales que atacan son derrotados, y la ciudad resiste. El objetivo del traidor es sabotear el consenso. Entonces, la pregunta es:
        </p>
        <p className={styles.paragraph}>
          <em>¿Cómo podemos diseñar un sistema donde los generales leales puedan llegar a un acuerdo garantizado, sabiendo que algunos podrían ser traidores?</em>
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3368174_1280.jpg" alt="Representación abstracta de una red de confianza" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>De Generales a Computadoras</h2>
        <p className={styles.paragraph}>
          Ahora, cambiemos a los generales por computadoras en una red como la de Bitcoin. Cada computadora (o "nodo") es un general. Tienen que ponerse de acuerdo sobre el estado de un libro de contabilidad: <strong>"¿Qué transacciones son válidas y cuáles no?"</strong>. No hay un banco central, no hay un jefe que tome la decisión final.
        </p>
        <p className={styles.paragraph}>
          Algunas de esas computadoras podrían ser maliciosas (los "traidores"). Podrían intentar hacer trampa, por ejemplo, transmitiendo una transacción falsa o intentando gastar la misma moneda dos veces. Si la red no puede ponerse de acuerdo sobre cuál es la "verdad", todo el sistema de dinero digital se vendría abajo. Nadie confiaría en él.
        </p>

        <h2 className={styles.subtitle}>La Solución: Hacer que la Verdad sea Costosa</h2>
        <p className={styles.paragraph}>
          Aquí es donde la idea de la <strong>blockchain</strong> se vuelve absolutamente brillante. Es como si los generales leales dijeran: "Para probar que tu mensaje es auténtico y que de verdad quieres atacar, no basta con enviarnos una nota. Tienes que resolver un acertijo matemático increíblemente difícil que te costará mucha energía y recursos. Un traidor no se tomaría tanta molestia solo para engañarnos".
        </p>
        <p className={styles.paragraph}>
          Este "costo" para poder "hablar" (añadir un nuevo bloque de transacciones) es lo que se conoce como <strong>Prueba de Trabajo (Proof-of-Work)</strong>. Hace que sea extremadamente caro y difícil mentir, y mucho más rentable decir la verdad y colaborar con la red. Garantiza que, a pesar de los posibles traidores, el grupo de computadoras honestas siempre llegará a un consenso sobre la historia de las transacciones.
        </p>
        
        <p className={styles.paragraph}>
          Así que, el Problema de los Generales Bizantinos es en realidad un rompecabezas sobre cómo lograr un acuerdo en un sistema distribuido donde la confianza no se puede dar por sentada. La solución de Bitcoin a este problema es uno de los avances más importantes que hacen posible que las criptomonedas funcionen.
        </p>
      </div>
    </>
  );
}
