'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function LegislacionCumplimientoPage() {
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
        <h1 className={styles.title}>Legislación y Cumplimiento Normativo</h1>
        <p className={styles.paragraph}>
          Muy bien, hemos hablado de cómo proteger nuestro dinero de los ladrones y de nuestros propios errores. Pero hay otro actor en este juego: el gobierno. Y no, no es un ladrón, pero tiene sus propias reglas. Y entenderlas es crucial para navegar el mundo cripto sin problemas. Esto es lo que llamamos <strong>legislación y cumplimiento normativo</strong>.
        </p>
        <p className={styles.paragraph}>
          Piensen en las criptomonedas como una nueva invención, como el automóvil. Al principio, no había reglas para los coches. La gente conducía como quería, había accidentes. Luego, los gobiernos empezaron a poner normas: límites de velocidad, semáforos, licencias de conducir. No para fastidiar, sino para que el sistema funcionara de forma segura y ordenada. Con las criptomonedas, estamos en esa fase de "poner normas".
        </p>

        <h2 className={styles.subtitle}>El Gran Dilema: Innovación vs. Control</h2>
        <p className={styles.paragraph}>
          Los gobiernos tienen dos preocupaciones principales con las criptomonedas:
        </p>
        <ul>
            <li><strong>Lavado de Dinero y Financiación del Terrorismo (AML/CFT):</strong> Quieren evitar que los criminales usen las criptomonedas para mover dinero sucio. Por eso exigen a los exchanges que identifiquen a sus usuarios (KYC - Conoce a tu Cliente).</li>
            <li><strong>Protección al Inversor:</strong> Quieren proteger a la gente de estafas y proyectos fraudulentos. Por eso, a veces, clasifican ciertos tokens como "valores" y exigen que cumplan con las mismas regulaciones que las acciones de una empresa.</li>
        </ul>
        <p className={styles.paragraph}>
          El problema es que las criptomonedas son una tecnología que evoluciona muy rápido, y las leyes son lentas. Es como intentar atrapar un rayo con una red de mariposas. Los reguladores están intentando entender algo que cambia constantemente, y a veces, sus reglas no encajan bien con la realidad de la tecnología.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/libra-4338939_1280.jpg" alt="Legislación y Cumplimiento Normativo" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>KYC y AML: ¿Por Qué te Piden el DNI?</h2>
        <p className={styles.paragraph}>
          Cuando se registran en un exchange centralizado (CEX) como Binance o Coinbase, les piden su DNI, una prueba de domicilio, y a veces hasta una selfie. Esto es el <strong>KYC (Know Your Customer)</strong>. Es una exigencia legal para que el exchange sepa quién eres. Y lo hacen para cumplir con las leyes <strong>AML (Anti-Money Laundering)</strong>, es decir, contra el lavado de dinero.
        </p>
        <p className={styles.paragraph}>
          Esto significa que, aunque las transacciones en la blockchain sean pseudónimas, el punto de entrada y salida al sistema financiero tradicional (el exchange) está regulado. Si compran Bitcoin en un CEX, el gobierno puede saber que ustedes son los dueños de esa dirección de Bitcoin. Es un compromiso entre la privacidad y la legalidad.
        </p>

        <h2 className={styles.subtitle}>Impuestos: El Tío Sam Siempre Cobra</h2>
        <p className={styles.paragraph}>
          Esta es la parte que a nadie le gusta, pero es una realidad. En la mayoría de los países, las criptomonedas son consideradas un activo, y las ganancias que obtienen al venderlas (o al intercambiarlas por otras criptos) están sujetas a impuestos. Es como vender acciones o bienes inmuebles.
        </p>
        <p className={styles.paragraph}>
          La clave es llevar un buen registro de todas sus transacciones: cuándo compraron, cuándo vendieron, a qué precio. Esto puede ser complicado, especialmente si hacen mucho trading o interactúan con DeFi. Hay herramientas de software que les ayudan a calcular sus impuestos cripto. No ignorar este tema es fundamental para evitar problemas futuros.
        </p>

        <h2 className={styles.subtitle}>El Futuro de la Regulación: ¿Hacia Dónde Vamos?</h2>
        <p className={styles.paragraph}>
          La regulación de las criptomonedas es un campo en constante evolución. Algunos países están adoptando un enfoque más amigable con la innovación, creando "sandboxes" regulatorios para que las empresas puedan experimentar. Otros son más restrictivos, prohibiendo ciertas actividades o incluso las criptomonedas por completo.
        </p>
        <p className={styles.paragraph}>
          Lo importante es entender que la regulación no va a desaparecer. A medida que las criptomonedas se vuelven más grandes y más adoptadas, los gobiernos querrán tener más control sobre ellas. Esto puede ser bueno para la adopción masiva, ya que da más seguridad a los inversores institucionales, pero también puede limitar algunas de las libertades que tanto valoramos en el espacio cripto.
        </p>
        <p className={styles.paragraph}>
          Manténganse informados sobre las leyes en su país. No tienen que ser abogados, pero entender los principios básicos de la regulación les ayudará a tomar decisiones más inteligentes y a evitar problemas legales. Es como entender las reglas de la carretera antes de salir a conducir. No es emocionante, pero es necesario para llegar a salvo a su destino.
        </p>
      </div>
    </>
  );
}
