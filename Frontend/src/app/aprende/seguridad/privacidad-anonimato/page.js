'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function PrivacidadAnonimatoPage() {
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
        <h1 className={styles.title}>Privacidad y Anonimato en Blockchain</h1>
        <p className={styles.paragraph}>
          Muy bien, aclaremos una de las mayores confusiones que existen sobre las criptomonedas. Mucha gente cree que, como no usas tu nombre real, transacciones como las de Bitcoin son totalmente anónimas. Esto es un error fundamental. Es como pensar que por usar un apodo en un pueblo pequeño, nadie sabe lo que haces. Tarde o temprano, la gente empieza a conectar los puntos.
        </p>
        <p className={styles.paragraph}>
          La mayoría de las blockchains, como la de Bitcoin o Ethereum, no son anónimas, son <strong>pseudónimas</strong>. Hay una gran diferencia. Pensemos en ello.
        </p>

        <h2 className={styles.subtitle}>Pseudonimato: Un Libro de Cuentas Público</h2>
        <p className={styles.paragraph}>
          Imaginen que la blockchain es un cuaderno de contabilidad gigante y transparente que todo el mundo puede leer. En este cuaderno no pone "Juan le pagó 10 a María". En su lugar, pone "La dirección 1A2b3C le pagó 10 a la dirección 4D5e6F". Estas direcciones son tus <strong>pseudónimos</strong>.
        </p>
        <p className={styles.paragraph}>
          El truco está en que, aunque tu nombre real no está ahí, todas y cada una de las transacciones que ha hecho esa dirección están a la vista de todos, para siempre. Si en algún momento alguien consigue vincular tu identidad del mundo real con una de esas direcciones (y hay muchas formas de hacerlo), de repente todo tu historial financiero queda al descubierto. Es como si el extracto de tu cuenta bancaria fuera público.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-4231398_1280.jpg" alt="Privacidad en Blockchain" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Cómo se Rompe el Pseudonimato?</h2>
        <p className={styles.paragraph}>
          La conexión entre tu identidad y tu dirección se puede hacer de muchas maneras. La más común es a través de los <strong>exchanges centralizados (CEX)</strong>. Para comprar criptomonedas con tu dinero fiduciario (euros, dólares), tienes que pasar un proceso de identificación (KYC - Conoce a tu Cliente). En ese momento, el exchange sabe que la dirección a la que retiras tus fondos te pertenece. Y como los gobiernos pueden pedirle esa información a los exchanges, tu privacidad se desvanece.
        </p>
        <p className={styles.paragraph}>
          Otras formas incluyen el análisis de la cadena de bloques (blockchain analysis). Hay empresas especializadas en analizar ese libro de contabilidad público para agrupar direcciones y rastrear el flujo de fondos, identificando patrones y conectando pseudónimos con identidades reales.
        </p>

        <h2 className={styles.subtitle}>Buscando la Verdadera Privacidad: Monedas y Herramientas</h2>
        <p className={styles.paragraph}>
          Si Bitcoin es como usar un apodo, hay otras criptomonedas que son como usar una capa de invisibilidad. Se conocen como <strong>monedas de privacidad</strong>, y están diseñadas desde cero para ocultar la información de las transacciones.
        </p>
        <ul>
            <li><strong>Monero (XMR):</strong> Es el rey de la privacidad. Usa una combinación de tres tecnologías (direcciones sigilosas, firmas de anillo y RingCT) para ocultar el remitente, el receptor y la cantidad de cada transacción. Mirar el explorador de bloques de Monero es como mirar una pantalla en negro. No se ve nada.</li>
            <li><strong>Zcash (ZEC):</strong> Ofrece privacidad opcional. Puedes hacer transacciones transparentes (como en Bitcoin) o transacciones blindadas (totalmente privadas) usando una tecnología de criptografía avanzada llamada <strong>zk-SNARKs</strong>.</li>
        </ul>
        <p className={styles.paragraph}>
          Además de las monedas de privacidad, existen herramientas llamadas <strong>mezcladores (mixers)</strong> o <strong>tumblers</strong>, como Tornado Cash. Un mezclador es como un gran caldero. Mucha gente echa sus monedas, se remueven todas juntas y luego cada uno saca la misma cantidad que metió. Al final, es extremadamente difícil saber qué monedas de las que salieron corresponden a las que entraron, rompiendo el rastro en la cadena de bloques.
        </p>

        <h2 className={styles.subtitle}>¿Por Qué es Importante la Privacidad?</h2>
        <p className={styles.paragraph}>
          La privacidad no es solo para la gente que tiene algo que ocultar. Es un derecho humano fundamental. ¿Te gustaría que tu vecino, tu jefe o una empresa de marketing supiera cada céntimo que ganas, en qué lo gastas y cuánto tienes ahorrado? Probablemente no. La falta de privacidad financiera te hace vulnerable a robos, a la vigilancia, a la discriminación y al marketing no deseado.
        </p>
        <p className={styles.paragraph}>
          Entender la diferencia entre el pseudonimato y el anonimato es crucial. Bitcoin te da un nivel de privacidad mayor que una tarjeta de crédito, pero no es una capa de invisibilidad. Para una privacidad real, se necesitan herramientas diseñadas específicamente para ello. Conocer estas herramientas y cómo funcionan te da el poder de decidir qué nivel de privacidad quieres para tu vida financiera. Y esa elección es la verdadera esencia de la autogobernanza.
        </p>
      </div>
    </>
  );
}
