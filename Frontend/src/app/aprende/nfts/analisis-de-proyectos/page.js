'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AnalizandoProyectosNFTsPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const nftsCourse = courseData.nfts;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={nftsCourse.title}
        modules={nftsCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Analizando Proyectos de NFTs: ¿Es Oro o Solo Brilla?</h1>
        <p className={styles.paragraph}>
          ¡Hola, curiosos! Hoy vamos a meternos en un tema que es un poco como la física de partículas: <strong>analizar proyectos de NFTs</strong>. No es tan complicado como parece, pero requiere una buena dosis de observación, escepticismo y, sobre todo, ¡no dejarse llevar por el brillo inicial! Porque, como en la ciencia, no todo lo que reluce es oro.
        </p>
        <p className={styles.paragraph}>
          Imaginen que están en un laboratorio y les presentan una nueva partícula. ¿Qué hacen? No la aceptan sin más, ¿verdad? La observan, la someten a pruebas, buscan sus propiedades, intentan entender su comportamiento. Con los NFTs es igual. No se trata solo de ver una imagen bonita y decir: "¡Quiero eso!". Se trata de entender qué hay detrás, qué la hace valiosa, o si es solo una ilusión.
        </p>

        <h2 className={styles.subtitle}>La Pregunta Fundamental: ¿Por Qué?</h2>
        <p className={styles.paragraph}>
          La primera pregunta que deben hacerse es: <strong>¿Por qué existe este proyecto?</strong> ¿Qué problema resuelve? ¿Qué valor añade? Si la respuesta es solo "para que la gente gane dinero rápido", ¡cuidado! Eso es como un experimento sin hipótesis clara. Un buen proyecto de NFT, como un buen experimento, tiene un propósito, una razón de ser.
        </p>
        <p className={styles.paragraph}>
          Piensen en los NFTs de arte. Su valor puede venir de la reputación del artista, la singularidad de la obra, o la comunidad que se forma alrededor de ella. En los NFTs de juegos, el valor puede estar en la utilidad dentro del juego, la escasez de los ítems, o la capacidad de generar ingresos. Siempre hay un "por qué" más allá de la especulación.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-7678815_1280.jpg" alt="Análisis de datos de criptomonedas" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Observando el Ecosistema</h2>
        <p className={styles.paragraph}>
          Como buenos científicos, deben observar el ecosistema del proyecto. Esto incluye:
        </p>
        <ul>
          <li><strong>El Equipo:</strong> ¿Quién está detrás del proyecto? ¿Tienen experiencia? ¿Son transparentes? Un equipo anónimo es como un experimento sin autor: ¿quién se hace responsable si algo sale mal?</li>
          <li><strong>La Comunidad:</strong> ¿Hay una comunidad activa y comprometida? ¿Dónde se reúnen (Discord, Twitter)? Una comunidad fuerte es como un grupo de científicos colaborando: se apoyan, discuten, y hacen avanzar el conocimiento.</li>
          <li><strong>La Hoja de Ruta (Roadmap):</strong> ¿Tienen un plan claro para el futuro? ¿Qué prometen y cómo planean lograrlo? Un roadmap es como el diseño experimental: te dice qué van a hacer y cómo.</li>
          <li><strong>La Tecnología:</strong> ¿En qué blockchain está construido? ¿Es robusta? ¿Hay riesgos de seguridad conocidos? Esto es como entender los instrumentos que usas en tu laboratorio.</li>
        </ul>

        <h2 className={styles.subtitle}>Métricas y Datos: Los Números No Mienten (Casi)</h2>
        <p className={styles.paragraph}>
          Finalmente, y esto es crucial, ¡miren los números! No se dejen engañar por el bombo publicitario. Vayan a los datos:
        </p>
        <ul>
          <li><strong>Volumen de Trading:</strong> ¿Cuánto se está comprando y vendiendo? Un alto volumen puede indicar interés, pero también especulación.</li>
          <li><strong>Precio Mínimo (Floor Price):</strong> Es el precio más bajo al que se vende un NFT de la colección. Es un indicador de la demanda.</li>
          <li><strong>Número de Propietarios Únicos:</strong> ¿Cuántas personas diferentes poseen NFTs de la colección? Una distribución amplia es generalmente más saludable que unos pocos "ballenas" que controlan la mayoría.</li>
          <li><strong>Rareza:</strong> ¿Qué tan raro es el NFT que les interesa? La escasez, como en la física, puede aumentar el valor.</li>
        </ul>
        <p className={styles.paragraph}>
          Recuerden, el mercado de NFTs es un experimento en curso, lleno de variables y a veces, de resultados inesperados. No hay garantías. Pero si aplican un poco de pensamiento crítico, hacen sus preguntas, observan los datos y no se dejan llevar por la emoción, estarán mucho mejor equipados para entender qué es lo que realmente están viendo. ¡Y eso, mis amigos, es la esencia de la ciencia!
        </p>
      </div>
    </>
  );
}
