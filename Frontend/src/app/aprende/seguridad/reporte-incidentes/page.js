'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ReporteIncidentesPage() {
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
        <h1 className={styles.title}>Reportando Incidentes de Seguridad</h1>
        <p className={styles.paragraph}>
          Muy bien, hemos hablado de cómo protegerse, cómo identificar estafas y cómo guardar sus llaves. Pero, ¿qué pasa si, a pesar de todas las precauciones, algo sale mal? ¿Qué haces si te hackean, si caes en una estafa o si descubres una vulnerabilidad? No te quedes de brazos cruzados. Saber <strong>cómo y dónde reportar un incidente de seguridad</strong> es tan importante como saber cómo prevenirlo.
        </p>
        <p className={styles.paragraph}>
          Piensen en esto como un accidente de coche. Por mucho que seas un buen conductor, los accidentes ocurren. Y cuando ocurren, no te quedas en medio de la carretera lamentándote. Tomas medidas: compruebas si hay heridos, llamas a la policía, a tu seguro. En el mundo cripto, es similar. Hay pasos a seguir, y cada minuto cuenta.
        </p>

        <h2 className={styles.subtitle}>Paso 1: Actúa Rápido y Minimiza Daños</h2>
        <p className={styles.paragraph}>
          Lo primero es lo primero: <strong>detén la hemorragia</strong>. Si te han hackeado una cuenta de exchange, intenta cambiar la contraseña inmediatamente y activa el 2FA si no lo tenías. Si ves que tus fondos están siendo movidos, intenta retirar lo que quede a una wallet segura que tú controles (una hardware wallet, por ejemplo).
        </p>
        <p className={styles.paragraph}>
          Si el ataque es a tu wallet personal, y sospechas que tu clave privada ha sido comprometida, crea una nueva wallet inmediatamente y mueve todos tus fondos restantes a esa nueva dirección. La clave es actuar con rapidez para evitar que el atacante se lleve más de lo que ya tiene.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-6884852_1280.jpg" alt="Reportando Incidentes de Seguridad" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Paso 2: Recopila Toda la Información</h2>
        <p className={styles.paragraph}>
          Antes de contactar a nadie, sé un buen científico. Recopila todos los datos posibles. Esto incluye:
        </p>
        <ul>
            <li><strong>Direcciones de las wallets:</strong> La tuya, la del atacante (si la conoces).</li>
            <li><strong>IDs de transacción (TxIDs):</strong> Son como el número de serie de cada movimiento en la blockchain. Son cruciales.</li>
            <li><strong>Capturas de pantalla:</strong> De correos de phishing, de mensajes sospechosos, de la interfaz del exchange, de cualquier cosa relevante.</li>
            <li><strong>Fechas y horas:</strong> Cuándo ocurrió el incidente, cuándo lo descubriste.</li>
            <li><strong>Cualquier otra comunicación:</strong> Chats, emails, etc.</li>
        </ul>
        <p className={styles.paragraph}>
          Cuanta más información tengas, más fácil será para las autoridades o los equipos de seguridad ayudarte. Sé preciso y objetivo. No añadas emociones, solo hechos.
        </p>

        <h2 className={styles.subtitle}>Paso 3: ¿A Quién Contactar?</h2>
        <p className={styles.paragraph}>
          Aquí es donde la cosa se pone un poco más compleja, porque depende de la naturaleza del incidente.
        </p>
        <ul>
            <li><strong>El Exchange o Plataforma Afectada:</strong> Si el incidente ocurrió en un exchange centralizado o en una plataforma DeFi, contacta a su equipo de soporte inmediatamente. Ellos tienen herramientas y datos que tú no tienes y pueden ayudarte a congelar fondos o investigar.</li>
            <li><strong>Autoridades Policiales:</strong> Si has sido víctima de un robo o estafa, repórtalo a la policía de tu país. Aunque la recuperación de fondos sea difícil, es importante que quede constancia. En muchos países, hay unidades especializadas en delitos cibernéticos.</li>
            <li><strong>Agencias de Ciberseguridad:</strong> Algunos países tienen agencias gubernamentales dedicadas a la ciberseguridad que pueden ofrecerte orientación o incluso investigar el incidente.</li>
            <li><strong>Comunidad Cripto:</strong> Si el incidente afecta a un proyecto DeFi o a una vulnerabilidad de un contrato inteligente, a veces la comunidad puede ser tu mejor aliada. Publica la información (con cautela, sin revelar datos personales) en foros relevantes como Reddit, Twitter o Discord. Otros usuarios o desarrolladores pueden haber visto algo similar o pueden ayudarte a analizar la situación.</li>
        </ul>

        <h2 className={styles.subtitle}>La Importancia de Reportar</h2>
        <p className={styles.paragraph}>
          Reportar un incidente no solo te ayuda a ti, sino que ayuda a toda la comunidad. Cada reporte es una pieza de información que ayuda a las autoridades y a los equipos de seguridad a entender mejor cómo operan los atacantes, a identificar patrones y a desarrollar mejores defensas. Es como cuando un científico publica sus resultados, incluso si el experimento no salió como esperaba. Otros pueden aprender de ello.
        </p>
        <p className={styles.paragraph}>
          No te avergüences si caes en una estafa. Los estafadores son muy buenos en lo que hacen. Lo importante es aprender de la experiencia y compartirla para que otros no cometan el mismo error. La seguridad en el mundo cripto es un esfuerzo colectivo. Y cada incidente reportado, por pequeño que sea, es un paso más hacia un ecosistema más seguro para todos.
        </p>
      </div>
    </>
  );
}
