'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function PrestamosPage() {
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
        <h1 className={styles.title}>Préstamos Descentralizados: El Monte de Piedad del Futuro</h1>
        <p className={styles.paragraph}>
          ¡Vamos al grano! Prestar y pedir prestado es una de las cosas más viejas del mundo. Yo te doy algo que a mí me sobra, y tú me lo devuelves luego, quizás con un extra por el favor. Los bancos se hicieron gigantescos haciendo justamente esto. Pero, ¿y si pudiéramos hacerlo sin el banco? ¿Sin rellenar papeles ni pedir permiso?
        </p>
        <p className={styles.paragraph}>
          Eso es exactamente un <strong>préstamo descentralizado</strong>. Es como un monte de piedad o una casa de empeños, pero automático, global y sin un señor con bigote detrás del mostrador. Funciona con reglas matemáticas, nada más.
        </p>

        <h2 className={styles.subtitle}>La Piscina de Dinero Mágica</h2>
        <p className={styles.paragraph}>
          Imaginen una gran piscina. Mucha gente que tiene dinero de sobra (digamos, stablecoins) viene y lo vierte en la piscina. ¿Por qué harían eso? Porque la piscina les paga una pequeña recompensa (intereses) por dejar su dinero ahí. A esta piscina la llamamos un <strong>"lending pool"</strong> o piscina de préstamos.
        </p>
        <p className={styles.paragraph}>
          Ahora, por otro lado, llega gente que necesita dinero. Quieren pedir prestado de la piscina. Pero la piscina no es tonta. Es un programa, y su regla principal es: "No puedes llevarte nada si no dejas algo de más valor como fianza". A esto se le llama <strong>sobre-colateralización</strong>.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-4503758_1280.jpg" alt="Una piscina de activos digitales para préstamos" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Cómo Funciona la Fianza?</h2>
        <p className={styles.paragraph}>
          Es sencillo. Si quieres pedir prestados 100 dólares de la piscina, el programa te dirá: "Claro, pero primero deposita aquí 150 dólares de otra criptomoneda, como Ether". Ese Ether se queda bloqueado como garantía (tu colateral).
        </p>
        <p className={styles.paragraph}>
          Ahora puedes irte con tus 100 dólares y hacer lo que quieras. Mientras tanto, pagas un pequeño interés a la piscina, que es la recompensa para los que pusieron el dinero al principio. Cuando devuelves los 100 dólares más los intereses, ¡zas!, el programa te devuelve tus 150 dólares en Ether. Todo automático.
        </p>

        <h2 className={styles.subtitle}>¿Y si no Pagas o el Precio se Desploma?</h2>
        <p className={styles.paragraph}>
          Aquí está la belleza del sistema. No hay que enviar a nadie a tu casa a cobrar. Si el valor de tu fianza (el Ether) empieza a caer peligrosamente cerca del valor de lo que pediste prestado (los 100 dólares), el programa se pone nervioso. Si baja demasiado, ¡PUM!, el sistema vende automáticamente tu Ether en el mercado para recuperar los 100 dólares que se prestaron. A esto se le llama <strong>liquidación</strong>.
        </p>
        <p className={styles.paragraph}>
          Es un sistema que se protege a sí mismo. Es brutal, pero es justo y transparente. Las reglas son las mismas para todos y se conocen de antemano. Gracias a esta sobre-colateralización y a las liquidaciones automáticas, la gente que puso el dinero en la piscina puede dormir tranquila, sabiendo que es muy, muy difícil que pierdan su capital.
        </p>
        <p className={styles.paragraph}>
          Y eso es todo. Los préstamos en DeFi son simplemente un sistema de piscinas de dinero donde unos depositan para ganar un extra y otros piden prestado dejando una fianza más grande. Sin bancos, sin papeleo, solo código. ¡Pura lógica!
        </p>
      </div>
    </>
  );
}
