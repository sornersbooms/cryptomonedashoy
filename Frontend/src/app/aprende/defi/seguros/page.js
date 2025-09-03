'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function SegurosPage() {
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
        <h1 className={styles.title}>Seguros Descentralizados: La Red de Seguridad del Pueblo</h1>
        <p className={styles.paragraph}>
          De acuerdo, el mundo DeFi es fascinante, pero también es el Salvaje Oeste. Las cosas pueden salir mal. Los programas pueden tener errores (bugs), los proyectos pueden ser hackeados... Si pones tu dinero en uno de estos LEGOs financieros y el castillo se derrumba, ¿lo pierdes todo? No necesariamente. Aquí es donde entra en juego una idea muy antigua, pero con un giro moderno: los <strong>seguros</strong>.
        </p>
        <p className={styles.paragraph}>
          Un seguro no es más que una promesa. Pagas una pequeña cantidad (una prima) y, a cambio, una compañía te promete que si ocurre un desastre específico, te devolverán tu dinero. El problema es que a veces estas compañías no quieren pagar. Buscan la letra pequeña para evitarlo. ¿Podemos hacerlo mejor?
        </p>

        <h2 className={styles.subtitle}>El Bote Común para los Días Lluviosos</h2>
        <p className={styles.paragraph}>
          Imaginen que un grupo de granjeros se junta. Todos saben que existe una pequeña posibilidad de que un lobo ataque su granja y se coma sus gallinas. Ninguno puede permitirse perder todas sus gallinas, pero todos pueden poner una moneda en un bote común.
        </p>
        <p className={styles.paragraph}>
          Crean una regla simple: "Si el lobo ataca a uno de nosotros, esa persona puede tomar dinero del bote para comprar gallinas nuevas". Esto es un <strong>seguro descentralizado</strong> en su forma más pura. No hay una compañía de seguros. Solo hay una comunidad, un bote de dinero (una piscina de capital) y un conjunto de reglas claras.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/wear-3080558_1280.jpg" alt="Una red de seguridad protegiendo los activos digitales" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Quién Paga y Quién Decide?</h2>
        <p className={styles.paragraph}>
          En DeFi, esto funciona de forma muy parecida. Hay dos grupos de personas:
        </p>
        <ul>
          <li><strong>Los que compran cobertura:</strong> Son los granjeros. Pagan una pequeña prima a la piscina de capital para proteger su dinero en un protocolo específico. Por ejemplo, "Quiero asegurar mis 1,000 dólares en el protocolo de préstamos X contra un hackeo".</li>
          <li><strong>Los que proveen capital:</strong> Son personas que depositan su dinero en la piscina del seguro. ¿Por qué? Porque se quedan con las primas que pagan los que compran la cobertura. Asumen el riesgo a cambio de una ganancia.</li>
        </ul>
        <p className={styles.paragraph}>
          "¡Ajá!", dirán. "¿Pero quién decide si el lobo realmente atacó? ¿Quién decide si un hackeo fue real y hay que pagar?". ¡Excelente pregunta! Aquí no hay un perito con corbata. La decisión la toma la propia comunidad. Los poseedores de la moneda del protocolo de seguros (los tokens de gobernanza) votan para decidir si una reclamación es válida o no. Es un juicio por un jurado de tus pares, incentivados a ser honestos para que el sistema siga funcionando y su inversión valga algo.
        </p>

        <h2 className={styles.subtitle}>Un Nuevo Modelo de Confianza</h2>
        <p className={styles.paragraph}>
          Esto es radicalmente diferente. Las reglas son transparentes y están en el código. El capital para pagar los siniestros está bloqueado en un contrato inteligente, a la vista de todos. Y la decisión de pagar no la toma una empresa con ánimo de lucro, sino una comunidad de usuarios.
        </p>
        <p className={styles.paragraph}>
          Por supuesto, no es perfecto. La votación puede ser lenta, puede haber disputas... Pero es un intento de crear una red de seguridad que sea más justa, más rápida y más transparente que el sistema tradicional. Es la comunidad protegiéndose a sí misma, sin intermediarios. ¡Es una idea muy poderosa!
        </p>
      </div>
    </>
  );
}
