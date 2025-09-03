'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function TiposDeOrdenesPage() {
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
        <h1 className={styles.title}>Tipos de Órdenes: Hablando el Idioma del Mercado</h1>
        <p className={styles.paragraph}>
          Muy bien, ya sabemos dónde comprar y vender (CEX y DEX). Pero, ¿cómo le decimos al mercado <em>exactamente</em> lo que queremos hacer? No es como ir a una tienda y decir "dame esto". En el trading, tienes que ser muy preciso. Es como darle instrucciones a un camarero muy eficiente, pero que solo entiende órdenes muy específicas.
        </p>

        <h2 className={styles.subtitle}>El Libro de Órdenes: El Cuaderno del Camarero</h2>
        <p className={styles.paragraph}>
          Antes de las órdenes, hablemos del "cuaderno del camarero", el <strong>libro de órdenes</strong>. Aquí es donde se anotan todas las intenciones de compra y venta. Por un lado, tienes a los "compradores" (bids) que dicen "Quiero comprar 1 Bitcoin a 30.000 dólares". Por el otro, a los "vendedores" (asks) que dicen "Quiero vender 1 Bitcoin a 30.001 dólares". El mercado es el lugar donde estas intenciones se encuentran.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/work-1627703_1280.jpg" alt="Un libro de órdenes abstracto" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Orden de Mercado: La Orden "¡YA!"</h2>
        <p className={styles.paragraph}>
          Esta es la orden más sencilla. Le dices al camarero: "Quiero comprar 1 Bitcoin <em>ahora mismo</em>, al precio que sea". El camarero mira el libro de órdenes y te empareja con el mejor precio disponible en ese instante. Es la forma más rápida de ejecutar una operación, pero no te garantiza el precio exacto. Es como pedir "lo que haya" en el menú.
        </p>
        <p className={styles.paragraph}>
          <strong>Uso:</strong> Cuando la velocidad es más importante que el precio exacto.
        </p>

        <h2 className={styles.subtitle}>Orden Límite: La Orden "¡A este Precio o Mejor!"</h2>
        <p className={styles.paragraph}>
          Aquí eres más específico. Le dices al camarero: "Quiero comprar 1 Bitcoin, pero <em>solo</em> si el precio baja a 29.900 dólares o menos". O "Quiero vender 1 Bitcoin, pero <em>solo</em> si el precio sube a 30.500 dólares o más". Tu orden se queda en el libro de órdenes esperando a que el precio llegue a tu nivel. Si no llega, la orden no se ejecuta.
        </p>
        <p className={styles.paragraph}>
          <strong>Uso:</strong> Para controlar el precio de entrada o salida, pero no garantiza la ejecución.
        </p>

        <h2 className={styles.subtitle}>Orden Stop-Loss: La Orden "¡Para la Hemorragia!"</h2>
        <p className={styles.paragraph}>
          Esta es una orden de protección. Imagina que compraste Bitcoin a 30.000 dólares. Le dices al camarero: "Si el precio de Bitcoin cae a 29.000 dólares, <em>vende mi Bitcoin automáticamente</em>". Es una orden para limitar tus pérdidas si el mercado va en tu contra. Cuando el precio alcanza tu "stop", tu orden se convierte en una orden de mercado y se ejecuta al mejor precio disponible.
        </p>
        <p className={styles.paragraph}>
          <strong>Uso:</strong> Para gestionar el riesgo y proteger tu capital.
        </p>

        <h2 className={styles.subtitle}>Orden Take-Profit: La Orden "¡Asegura las Ganancias!"</h2>
        <p className={styles.paragraph}>
          Es lo contrario al stop-loss. Compraste Bitcoin a 30.000. Le dices al camarero: "Si el precio de Bitcoin sube a 31.000 dólares, <em>vende mi Bitcoin automáticamente</em>". Es para asegurar tus ganancias cuando el mercado va a tu favor.
        </p>
        <p className={styles.paragraph}>
          <strong>Uso:</strong> Para asegurar ganancias automáticamente.
        </p>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          Entender estos tipos de órdenes es como aprender el lenguaje del mercado. Te permite ser preciso con tus intenciones, gestionar tu riesgo y automatizar tus operaciones. No es solo apretar un botón; es darle instrucciones claras a un sistema complejo para que trabaje para ti. ¡Es la diferencia entre ser un espectador y ser un jugador activo en el mercado!
        </p>
      </div>
    </>
  );
}
