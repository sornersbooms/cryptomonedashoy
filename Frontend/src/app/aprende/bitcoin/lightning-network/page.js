'use client';
import React, { useState } from 'react';
import styles from '../que-es-bitcoin/page.module.css'; // Re-using the same styles
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function LightningNetworkPage() {
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
        <h1 className={styles.title}>La Red Lightning: Bitcoin a la Velocidad de un Rayo</h1>
        <p className={styles.paragraph}>
          Hemos visto que la blockchain de Bitcoin es como una fortaleza: increíblemente segura y robusta. Pero las fortalezas, por su naturaleza, son lentas y pesadas. Cada transacción es un bloque de piedra que se añade al muro, y eso lleva tiempo (unos 10 minutos) y cuesta dinero (las comisiones de los mineros).
        </p>
        <p className={styles.paragraph}>
          Esto está muy bien para enviar una gran suma de dinero, como comprar una casa. Pero, ¿y si solo quieres comprar un café? Esperar 10 minutos y pagar una comisión considerable por algo tan pequeño no tiene sentido. ¡El café se quedaría helado! Aquí es donde entra una de las ideas más brillantes del ecosistema: la <strong>Red Lightning</strong>.
        </p>

        <h2 className={styles.subtitle}>La Analogía de la Cuenta del Bar</h2>
        <p className={styles.paragraph}>
          Imaginen que van a un bar con un amigo. ¿Sacan la tarjeta de crédito para pagar cada cerveza que piden? ¡Claro que no! Sería un lío. Lo que hacen es abrir una cuenta. El camarero va anotando: "una para ti, otra para tu amigo, otra para ti...".
        </p>
        <p className={styles.paragraph}>
          Durante toda la noche, hacen un montón de "transacciones" que solo se registran en la libreta del camarero. Al final, cuando ya no van a beber más, piden la cuenta y hacen <strong>un único pago</strong> para saldarlo todo. Es mucho más rápido y eficiente, ¿verdad?
        </p>
        <p className={styles.paragraph}>
          La Red Lightning es, en esencia, un sistema de cuentas de bar para Bitcoin.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-7077716_1280.jpg" alt="Representación de una red rápida de conexiones" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Cómo Funciona esta Magia?</h2>
        <p className={styles.paragraph}>
          En lugar de registrar cada pequeño pago en la blockchain principal (el libro de contabilidad lento), dos personas pueden abrir un <strong>"canal de pago"</strong>. Esto es como abrir la cuenta en el bar. Se hace con una transacción en la blockchain, donde ambos depositan una cantidad de Bitcoin en una especie de caja de seguridad compartida.
        </p>
        <p className={styles.paragraph}>
          Una vez el canal está abierto, pueden enviarse Bitcoin entre ellos de forma <strong>instantánea y casi gratuita</strong>. ¡Miles de veces si quieren! No están molestando a la blockchain. Solo se están pasando "notas" privadas entre ellos, actualizando el saldo de su caja compartida. Todo esto ocurre fuera de la cadena, a la velocidad de un rayo (de ahí el nombre).
        </p>
        <p className={styles.paragraph}>
          Cuando deciden que ya no necesitan el canal, lo "cierran". Esto crea una última transacción en la blockchain que registra el saldo final de cada uno. La blockchain solo ve la transacción de apertura y la de cierre, no todas las idas y venidas que ocurrieron en medio.
        </p>

        <h2 className={styles.subtitle}>Una Red de Cuentas de Bar</h2>
        <p className={styles.paragraph}>
          "Pero yo no tengo un canal con la cafetería", dirán. ¡No importa! Aquí está la parte de "Red". Si tú tienes un canal abierto con tu amigo, y tu amigo tiene uno con la cafetería, puedes pagarle a la cafetería <strong>a través de tu amigo</strong>. La red busca automáticamente una ruta de canales interconectados para que tu pago llegue a su destino. Es una red de cuentas de bar que se hablan entre sí.
        </p>
        <p className={styles.paragraph}>
          En resumen, Lightning es una "capa 2". No reemplaza a Bitcoin, sino que se construye encima. Usa la seguridad de la blockchain para lo importante (los acuerdos iniciales y finales) y crea una red paralela súper rápida y barata para los pagos del día a día. Es la tecnología que podría hacer que Bitcoin pase de ser solo "oro digital" a ser también dinero para el café de la mañana.
        </p>
      </div>
    </>
  );
}
