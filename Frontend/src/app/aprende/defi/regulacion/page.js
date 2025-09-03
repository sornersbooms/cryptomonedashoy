'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function RegulacionPage() {
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
        <h1 className={styles.title}>El Futuro: ¿Un Juego de Niños o un Campo de Batalla?</h1>
        <p className={styles.paragraph}>
          Hemos llegado al final de nuestro viaje por la madriguera del conejo de DeFi. Hemos visto las piezas, las hemos juntado y hemos vislumbrado las cosas increíbles que se pueden construir. Pero ahora tenemos que levantar la vista y hacernos la pregunta del millón: ¿a dónde va todo esto? ¿Es una moda pasajera o es el futuro de las finanzas? Y, lo que es más importante, ¿qué opinan los "adultos" de todo esto? (los gobiernos y los reguladores).
        </p>

        <h2 className={styles.subtitle}>El Elefante en la Habitación: La Regulación</h2>
        <p className={styles.paragraph}>
          DeFi ha crecido en una especie de Salvaje Oeste, un espacio sin ley. Esto ha permitido una innovación explosiva, pero también ha permitido estafas, hacks y todo tipo de locuras. Los gobiernos de todo el mundo están empezando a prestar atención, y no saben muy bien qué hacer. Es como intentar ponerle una matrícula a un enjambre de abejas.
        </p>
        <p className={styles.paragraph}>
          El problema fundamental es que la regulación financiera tradicional está diseñada para intermediarios: bancos, brókeres, etc. Les dicen: "Usted, señor Banco, tiene que conocer a sus clientes (KYC), tiene que prevenir el lavado de dinero (AML) y tiene que tener una licencia". Pero, ¿a quién le pides una licencia en DeFi? ¿Al contrato inteligente? ¿A la DAO? Es un choque de paradigmas.
        </p>
        <p className={styles.paragraph}>
          Los reguladores tienen un dilema: si son demasiado duros, pueden ahogar la innovación y empujarla a la clandestinidad. Si son demasiado blandos, no protegen a los consumidores y abren la puerta al caos. Encontrar ese equilibrio es el mayor desafío para el futuro de DeFi.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3510168_1280.jpg" alt="Un laberinto representando la complejidad de la regulación de DeFi" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Futuro previsible: ¿Qué podemos esperar?</h2>
        <p className={styles.paragraph}>
          Nadie tiene una bola de cristal, pero podemos ver algunas tendencias claras. El futuro de DeFi probablemente no será una utopía totalmente descentralizada ni una distopía totalmente controlada. Será un punto intermedio, un espectro de descentralización.
        </p>
        <ul>
          <li><strong>DeFi Regulada (CeDeFi):</strong> Veremos más plataformas que intentan combinar lo mejor de ambos mundos. Usarán la tecnología de DeFi, pero tendrán puntos de control centralizados para cumplir con las regulaciones, como la identificación de usuarios.</li>
          <li><strong>La Interoperabilidad es Clave:</strong> El futuro es multi-cadena. La capacidad de mover valor e información entre diferentes blockchains de forma fluida y segura será cada vez más importante. Los puentes mejorarán y serán más seguros.</li>
          <li><strong>Activos del Mundo Real (RWAs):</strong> La próxima gran frontera es tokenizar activos del mundo real. Imaginen poder usar su casa como colateral para un préstamo en DeFi, o comprar y vender fracciones de un edificio como si fueran tokens. Los sintéticos son solo el principio.</li>
          <li><strong>Mejor Experiencia de Usuario:</strong> Seamos honestos, usar DeFi todavía es complicado. El futuro pasa por hacer que todo sea tan fácil como usar una aplicación bancaria normal. Las wallets mejorarán, las interfaces serán más limpias y no necesitarás un doctorado para hacer yield farming.</li>
        </ul>

        <h2 className={styles.subtitle}>La Verdad Fundamental</h2>
        <p className={styles.paragraph}>
          DeFi es un experimento. Un experimento caótico, arriesgado, emocionante y absolutamente fascinante sobre una nueva forma de organizar las finanzas y, quizás, la sociedad. Muchas de las aplicaciones que vemos hoy desaparecerán. Habrá más hacks, más dramas, más regulaciones.
        </p>
        <p className={styles.paragraph}>
          Pero la idea central, la de un sistema financiero abierto, transparente, programable y accesible para cualquiera con una conexión a internet, es demasiado poderosa para desaparecer. Los LEGOs ya están sobre la mesa. Ahora nos toca a todos, como comunidad global, decidir qué queremos construir con ellos.
        </p>
      </div>
    </>
  );
}
