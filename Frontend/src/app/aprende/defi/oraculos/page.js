'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function OraculosPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const defiCourse = courseData.defi;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={defiCourse.title}
        modules={defiCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Oráculos: El Puente entre Dos Mundos</h1>
        <p className={styles.paragraph}>
          Muy bien, tenemos este fantástico mundo de DeFi, con sus contratos inteligentes que son como robots que siguen reglas a la perfección. Pero hay un problema, un gran problema. Estos robots viven en una caja cerrada llamada blockchain. No pueden ver lo que pasa afuera. No saben si está lloviendo, no saben quién ganó el partido de fútbol y, lo más importante, <strong>no saben el precio de nada en el mundo real</strong>.
        </p>
        <p className={styles.paragraph}>
          Un contrato inteligente no tiene ni idea de a cuánto se vende el Ether en dólares. Es como un genio en una botella que puede hacer cálculos increíblemente complejos, pero es ciego y sordo al mundo exterior. Entonces, ¿cómo hacemos para que nuestros LEGOs financieros interactúen con la realidad? Necesitamos un mensajero. Necesitamos un <strong>oráculo</strong>.
        </p>

        <h2 className={styles.subtitle}>El Dilema del Mensajero</h2>
        <p className={styles.paragraph}>
          Un oráculo es simplemente un servicio que busca información del mundo real (como el precio del Ether en Coinbase o Binance) y la introduce en la blockchain para que los contratos inteligentes puedan usarla. Suena fácil, ¿verdad? ¡Pues no lo es! Porque aquí vuelve nuestro viejo amigo: el problema de la confianza.
        </p>
        <p className={styles.paragraph}>
          Si tenemos un sistema descentralizado donde no confiamos en nadie, pero luego dependemos de un solo mensajero para que nos diga el precio... ¡hemos vuelto al punto de partida! ¿Qué pasa si el mensajero miente? ¿Si se equivoca? ¿Si lo hackean? Todo el sistema que depende de esa información se vendría abajo. A esto se le llama <strong>"El Problema del Oráculo"</strong>.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Un puente conectando el mundo real con la blockchain" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Solución: Un Coro de Mensajeros</h2>
        <p className={styles.paragraph}>
          ¿Cómo resolvemos esto? Pues, si no puedes confiar en un solo mensajero, ¡usa un montón de ellos! Los oráculos descentralizados, como <strong>Chainlink</strong>, que es el más famoso, no son un solo servicio, son una red de muchos mensajeros independientes (llamados nodos).
        </p>
        <p className={styles.paragraph}>
          Funciona así:
        </p>
        <ol>
          <li>Un contrato inteligente necesita saber el precio de ETH/USD. Lanza una pregunta a la red del oráculo.</li>
          <li>Muchos nodos independientes van a diferentes fuentes de datos (Coinbase, Kraken, etc.) para buscar el precio.</li>
          <li>Cada nodo envía su respuesta. Quizás uno dice $3,000, otro $3,001 y un tercero $2,999.</li>
          <li>El oráculo junta todas estas respuestas, descarta los valores atípicos o locos, y calcula un promedio fiable.</li>
          <li>Ese precio promedio y súper verificado es el que finalmente se introduce en la blockchain para que el contrato inteligente lo use.</li>
        </ol>

        <h2 className={styles.subtitle}>¿Por Qué es Tan Importante?</h2>
        <p className={styles.paragraph}>
          Sin oráculos fiables, DeFi simplemente no podría existir como lo conocemos. Son la pieza que permite que todo funcione. Los préstamos descentralizados necesitan oráculos para saber si el colateral de alguien ha perdido valor y necesita ser liquidado. Los seguros descentralizados los necesitan para saber si un evento del mundo real (como la caída de una moneda) ha ocurrido. Los mercados de predicciones los necesitan para saber quién ganó las elecciones.
        </p>
        <p className={styles.paragraph}>
          Los oráculos son el puente indispensable que conecta el aislado y determinista mundo de la blockchain con el caótico e impredecible mundo real. Son los sentidos del ecosistema DeFi. Sin ellos, estaríamos construyendo castillos en una burbuja, sin conexión con la realidad.
        </p>
      </div>
    </>
  );
}
