'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ComprarVenderBitcoinPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const bitcoinCourse = courseData.bitcoin;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={bitcoinCourse.title}
        modules={bitcoinCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Comprar y Vender Bitcoin: El Mercado Digital</h1>
        <p className={styles.paragraph}>
          Muy bien, ya sabemos qué es esta cosa de Bitcoin, cómo funciona a grandes rasgos... pero, ¿cómo conseguimos un poco? ¿O cómo nos deshacemos de él si queremos volver a tener dólares o euros? ¡Vamos a verlo! No es tan misterioso como parece.
        </p>

        <h2 className={styles.subtitle}>El Punto de Encuentro: Los Exchanges</h2>
        <p className={styles.paragraph}>
          Imaginen que quieren cambiar sus dólares por yenes para un viaje a Japón. ¿A dónde van? A una casa de cambio. Un lugar donde gente que quiere comprar dólares se encuentra con gente que quiere venderlos. Un <strong>exchange de criptomonedas</strong> es exactamente eso, pero en internet. Es un gran mercado digital.
        </p>
        <p className={styles.paragraph}>
          Es el lugar más común para empezar. Son sitios web que juntan a miles de compradores y vendedores de todo el mundo. El precio del bitcoin en un momento dado es simplemente el punto medio en el que los compradores y vendedores se ponen de acuerdo.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-4231398_1280.jpg" alt="Gráfico de precios de criptomonedas en un teléfono" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>El Proceso, Paso a Paso (Sin Asustarse)</h2>
        <p className={styles.paragraph}>
          El proceso suele ser muy parecido en todos los exchanges:
        </p>
        <ol>
          <li><strong>Crear una cuenta:</strong> Igual que en cualquier otra web, con un email y una contraseña.</li>
          <li><strong>Verificar tu identidad:</strong> ¡Esto es importante! Como se trata de dinero real, las leyes les obligan a saber quién eres. Tendrás que mostrar una foto de tu DNI o pasaporte. Es una medida de seguridad para proteger a todos.</li>
          <li><strong>Depositar dinero:</strong> Conectas tu cuenta bancaria y envías algo de tu dinero "normal" (euros, dólares, etc.) al exchange.</li>
          <li><strong>¡Comprar!:</strong> Vas a la sección de "Comprar", dices cuántos euros quieres gastar en bitcoin, y haces clic. ¡Listo! El exchange hace el intercambio por ti y verás los bitcoins en el saldo de tu cuenta.</li>
        </ol>
        <p className={styles.paragraph}>
          <strong>¿Y para vender?</strong> Es el mismo proceso, pero al revés. Vendes tus bitcoins, recibes euros en tu cuenta del exchange, y de ahí los puedes mandar de vuelta a tu banco.
        </p>

        <h2 className={styles.subtitle}>Una Idea Clave: El Exchange no es tu Cartera</h2>
        <p className={styles.paragraph}>
          Esto es fundamental. Cuando tienes bitcoins en un exchange, es como si el dueño del puesto del mercado te guardara el dinero. Es cómodo, pero en última instancia, ellos tienen el control. Si el exchange tiene problemas, tu dinero podría estar en riesgo.
        </p>
        <p className={styles.paragraph}>
          Por eso, mucha gente, una vez que compra sus bitcoins, los mueve a una <strong>cartera o "wallet" personal</strong>. Una wallet es una aplicación o un dispositivo que solo tú controlas. Es como sacar el dinero del mercado y guardarlo en tu propio bolsillo. Es un paso extra, pero te da la máxima seguridad y control. Ya hablaremos más de las wallets, ¡es un tema en sí mismo!
        </p>

        <h2 className={styles.subtitle}>En Resumen</h2>
        <p className={styles.paragraph}>
          No hay que ser un genio de las finanzas. Comprar y vender bitcoin es, en esencia, usar una casa de cambio online. Te registras, demuestras quién eres, y cambias tu dinero de siempre por este nuevo dinero digital. ¡Así de simple!
        </p>
      </div>
    </>
  );
}
