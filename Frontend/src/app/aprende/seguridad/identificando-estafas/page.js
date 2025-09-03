'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function IdentificandoEstafasPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const seguridadCourse = courseData.seguridad;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={seguridadCourse.title}
        modules={seguridadCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Identificando Estafas y Proyectos Maliciosos</h1>
        <p className={styles.paragraph}>
          Perfecto. Ya sabemos cómo proteger nuestras llaves y cómo funcionan los engaños más comunes. Ahora, vamos a ponernos el sombrero de detective. El mundo cripto está lleno de gente brillante construyendo el futuro, pero también está lleno de charlatanes y estafadores que quieren aprovecharse del entusiasmo. Nuestro trabajo es aprender a diferenciarlos.
        </p>
        <p className={styles.paragraph}>
          No necesitan ser un genio de la informática. Solo necesitan un buen detector de tonterías. La mayoría de las estafas apelan a las mismas debilidades humanas: la codicia y el miedo a quedarse fuera (FOMO). Si aprenden a reconocer las señales de alarma, podrán esquivar la mayoría de las trampas.
        </p>

        <h2 className={styles.subtitle}>La Señal de Alarma #1: Promesas de Riqueza Rápida y Sin Riesgo</h2>
        <p className={styles.paragraph}>
          Esta es la más grande y obvia. Si alguien les promete un <strong>"rendimiento garantizado"</strong> del 10% diario, o les dice que pueden multiplicar su dinero por 100 en una semana sin ningún riesgo, huyan. Corran. No caminen. En el mundo real, y especialmente en el mundo de las inversiones, no existe el rendimiento sin riesgo. Son dos caras de la misma moneda. Cuanto mayor es el rendimiento potencial, mayor es el riesgo.
        </p>
        <p className={styles.paragraph}>
          Los estafadores crean esquemas Ponzi o piramidales. Usan el dinero de los nuevos inversores para pagarles a los antiguos, creando la ilusión de que el sistema funciona. Pero es un castillo de naipes. En cuanto deja de entrar gente nueva, todo el sistema se derrumba y los últimos en llegar lo pierden todo.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/libra-4288548_1280.jpg" alt="Estafas" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Señal de Alarma #2: Presión y Sentido de Urgencia</h2>
        <p className={styles.paragraph}>
          "¡Esta es una oportunidad única! ¡Tienes que entrar ahora antes de que sea demasiado tarde! ¡Plazas limitadas!". ¿Les suena? Los estafadores crean un falso sentido de urgencia para que no tengan tiempo de pensar. Quieren que actúen por impulso, por miedo a perderse la próxima gran cosa. 
        </p>
        <p className={styles.paragraph}>
          Un proyecto legítimo no necesita presionar a la gente. La tecnología y la propuesta de valor hablan por sí solas. Si se sienten presionados, es una señal para dar un paso atrás y tomarse un respiro. Las buenas oportunidades seguirán ahí mañana.
        </p>

        <h2 className={styles.subtitle}>La Señal de Alarma #3: Falta de Transparencia y Anonimato</h2>
        <p className={styles.paragraph}>
          ¿Quién está detrás del proyecto? ¿El equipo es anónimo o dan la cara? Si el equipo es un grupo de seudónimos con fotos de perfil de dibujos animados, la pregunta es: ¿por qué se esconden? A veces hay buenas razones, pero a menudo es porque no quieren que nadie los encuentre cuando el proyecto se vaya a pique.
        </p>
        <p className={styles.paragraph}>
          Un equipo con reputación, con perfiles públicos en LinkedIn o Twitter, tiene algo que perder. Su nombre está en juego. Busquen proyectos que sean transparentes sobre quiénes son, cuál es su visión y cómo planean lograrla. ¿Tienen un "whitepaper" (un documento técnico) claro y detallado, o es solo un montón de jerga de marketing sin sustancia?
        </p>

        <h2 className={styles.subtitle}>Otras Banderas Rojas a Vigilar</h2>
        <ul>
            <li><strong>Marketing Exagerado y Famosos:</strong> ¿El proyecto gasta más en pagar a influencers de Instagram para que lo promocionen que en desarrollo? Cuidado. A menudo es una señal de que el producto es débil.</li>
            <li><strong>Comunidad Falsa o Tóxica:</strong> ¿El grupo de Telegram o Discord está lleno de bots que solo escriben "¡To the moon!"? ¿Se borran las preguntas difíciles o se banea a los que expresan dudas? Una comunidad sana acoge el debate y la crítica.</li>
            <li><strong>Página Web y Documentación de Baja Calidad:</strong> Si la página web parece hecha en cinco minutos y el whitepaper tiene errores de ortografía, ¿qué les hace pensar que el código del contrato inteligente está bien hecho?</li>
            <li><strong>El "Rug Pull":</strong> Como vimos antes, especialmente en el mundo DeFi, si los desarrolladores son anónimos y la liquidez no está bloqueada, pueden simplemente desaparecer con el dinero.</li>
        </ul>

        <h2 className={styles.subtitle}>El Poder del "No" y la Investigación Propia (DYOR)</h2>
        <p className={styles.paragraph}>
          La mejor herramienta que tienen es la capacidad de decir "no". No a las promesas fáciles, no a la presión, no a los proyectos que no entienden. Y la segunda mejor herramienta es la curiosidad. Hagan su propia investigación (<strong>Do Your Own Research - DYOR</strong>).
        </p>
        <p className={styles.paragraph}>
          No tienen que entender cada línea de código, pero pueden leer sobre el proyecto, ver quién está detrás, comprobar si ha sido auditado y qué dice la gente sobre él (la gente escéptica, no los fans incondicionales). Aprender a identificar estas señales de alarma es como desarrollar un sexto sentido. Con el tiempo, podrán oler una estafa a kilómetros de distancia. Y ese es un superpoder muy valioso en este ecosistema.
        </p>
      </div>
    </>
  );
}
