'use client';
import React, { useState } from 'react';
import styles from './Lesson.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function DappsPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const ethereumCourse = courseData.ethereum;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={ethereumCourse.title}
        modules={ethereumCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>DApps: Aplicaciones sin Dueño</h1>
        <p className={styles.paragraph}>
          ¡Muy bien, clase! Usamos aplicaciones todos los días: Instagram, Gmail, el juego de moda en el móvil. Todas tienen algo en común: alguien es el dueño. Una empresa como Google o Facebook controla los servidores, pone las reglas y, si quiere, puede cerrar la aplicación mañana mismo. Tus datos, tus fotos, tus mensajes... viven en la casa de otro.
        </p>
        <p className={styles.paragraph}>
          Ahora, ¿y si pudiéramos construir aplicaciones que no tuvieran un dueño? ¿Aplicaciones que funcionaran por sí solas, gobernadas por reglas que todos conocen y que nadie puede cambiar por capricho? Eso, amigos míos, es una <strong>DApp</strong>, o Aplicación Descentralizada.
        </p>

        <h2 className={styles.subtitle}>¿Cuál es la Diferencia Real?</h2>
        <p className={styles.paragraph}>
          Imaginen una máquina expendedora. Metes una moneda, eliges un refresco, y la máquina te lo da. Funciona siguiendo unas reglas simples y automáticas. No hay un señor dentro de la máquina decidiendo si te da el refresco o no.
        </p>
        <p className={styles.paragraph}>
          Una DApp es muy parecida. La "máquina" es un <strong>Contrato Inteligente</strong> que vive en la blockchain de Ethereum. Las "reglas" son el código de ese contrato. Y la "red" que se asegura de que todo funcione como debe es la propia red Ethereum, mantenida por miles de personas en todo el mundo.
        </p>
        <ul>
          <li><strong>Frontend (Lo que ves):</strong> La parte visual de la DApp (los botones, el texto) se ve y se siente como cualquier página web o aplicación normal. Se construye con las mismas herramientas.</li>
          <li><strong>Backend (La magia detrás):</strong> Aquí está el cambio radical. En lugar de conectarse a un servidor central propiedad de una empresa, el frontend se conecta directamente a la blockchain de Ethereum para leer datos y pedirle a los contratos inteligentes que hagan cosas.</li>
        </ul>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Una red de nodos interconectados, representando la descentralización" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Las Superpotencias de las DApps</h2>
        <p className={styles.paragraph}>
          Este cambio de arquitectura, de centralizado a descentralizado, les da a las DApps unas características muy interesantes:
        </p>
        <ul>
            <li><strong>Resistentes a la Censura:</strong> Como no hay un servidor central, nadie puede "apagar" la aplicación. Mientras la red Ethereum exista, la DApp seguirá funcionando.</li>
            <li><strong>Sin Tiempo de Inactividad:</strong> La DApp nunca se "cae" porque un servidor falló. Se apoya en toda la red Ethereum.</li>
            <li><strong>Transparencia Total:</strong> El código del backend (el contrato inteligente) es público. Cualquiera puede auditarlo y verificar que hace lo que dice que hace. No hay agendas ocultas.</li>
            <li><strong>Integridad de Datos:</strong> Los datos guardados en la blockchain son inmutables. Nadie puede alterarlos o borrarlos sin más.</li>
        </ul>

        <h2 className={styles.subtitle}>En Resumen: Internet en Manos de la Gente</h2>
        <p className={styles.paragraph}>
          Así que una DApp es simplemente una aplicación cuyo motor no está en el garaje de una sola empresa, sino que es un motor compartido, público y verificable que funciona sobre Ethereum. Son la base para construir servicios financieros más justos (DeFi), juegos donde eres el verdadero dueño de tus objetos (NFTs) y organizaciones gobernadas por sus propios miembros (DAOs). Es un vistazo a una internet más abierta y que pertenece a sus usuarios. ¡Fascinante!
        </p>
      </div>
    </>
  );
}
