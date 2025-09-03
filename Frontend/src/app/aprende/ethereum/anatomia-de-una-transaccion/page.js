'use client';
import React, { useState } from 'react';
import styles from './Lesson.module.css'; // Changed to Lesson.module.css
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AnatomiaDeUnaTransaccionPage() {
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
        <h1 className={styles.title}>Anatomía de una Transacción en Ethereum</h1>
        <p className={styles.paragraph}>
          Muy bien, amigos, ¡vamos a meternos en las trincheras! Ya hablamos de Ethereum como una especie de supercomputadora mundial. Pero, ¿cómo le damos instrucciones? ¿Cómo hacemos que haga algo? Todo se reduce a una cosa: las <strong>transacciones</strong>.
        </p>
        <p className={styles.paragraph}>
          Olvídense de la palabra "transacción" como si solo fuera enviar dinero. En Ethereum, una transacción es más como un <strong>mensaje con instrucciones</strong> que envías a la red. Es como mandarle una nota a un genio en una botella, pidiéndole que haga algo por ti.
        </p>

        <h2 className={styles.subtitle}>La Nota para el Genio: ¿Qué Hay Dentro?</h2>
        <p className={styles.paragraph}>
          Imaginen que están escribiendo esa nota. No pueden garabatear cualquier cosa; tiene que tener un formato que el genio entienda. Una transacción en Ethereum es igual. Tiene varias partes, como los campos de un formulario. Vamos a ver las más importantes:
        </p>
        <ul>
          <li><strong>Nonce:</strong> ¡No se asusten! Esto es solo un número de conteo. Si esta es la primera transacción que envían desde su cuenta, el nonce es 0. La segunda es 1, la tercera 2, y así. Es como numerar tus cartas para que el genio sepa en qué orden leerlas. Evita que alguien copie y reenvíe una transacción tuya antigua.</li>
          <li><strong>To (Destinatario):</strong> ¿A quién le envían la nota? Esta es la dirección de la cuenta que recibirá el mensaje. Puede ser la cuenta de un amigo al que le envías Ether, o puede ser la dirección de un Contrato Inteligente al que le pides que ejecute una de sus funciones.</li>
          <li><strong>Value (Valor):</strong> ¿Cuánto Ether (la moneda de Ethereum) quieres enviar con este mensaje? Si solo quieres pedirle a un contrato que haga algo, este valor puede ser cero. Pero si quieres pagarle a alguien, aquí pones la cantidad.</li>
          <li><strong>Data (Datos):</strong> ¡Aquí está la magia! Este campo es opcional. Si solo envías Ether, puede estar vacío. Pero si le estás hablando a un Contrato Inteligente, aquí es donde pones las instrucciones. Es como la parte de la nota donde escribes: "Genio, por favor, registra mi voto para el candidato A" o "cómprame ese gatito digital tan chulo".</li>
          <li><strong>Gas Limit & Gas Price:</strong> Piensen en esto como el "pago por el esfuerzo" del genio. Cada operación en Ethereum cuesta una pequeña cantidad de "gas". El <strong>Gas Limit</strong> es lo máximo que estás dispuesto a gastar en total para que tu transacción se complete. El <strong>Gas Price</strong> es cuánto estás dispuesto a pagar por cada unidad de "gas". Si pones un precio más alto, los "mineros" (la gente que mantiene la red) se sentirán más motivados a procesar tu nota antes que las de otros. Es como ofrecer una mejor propina.</li>
        </ul>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3368174_1280.jpg" alt="Visualización abstracta de una transacción en la blockchain" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Firma Digital: "Fui Yo"</h2>
        <p className={styles.paragraph}>
          Una vez que has rellenado todos los campos de la nota, tienes que firmarla. Pero no con un bolígrafo. La firmas con tu <strong>clave privada</strong>, una contraseña secreta que solo tú conoces. Esta firma digital es la prueba irrefutable de que tú, y solo tú, autorizaste esa transacción. Es matemáticamente imposible de falsificar.
        </p>
        <p className={styles.paragraph}>
          Cuando envías tu transacción firmada a la red, todo el mundo puede usar tu <strong>clave pública</strong> (que es como tu número de cuenta) para verificar que la firma es válida. Pero no pueden usarla para descubrir tu clave privada. ¡Es un truco matemático maravilloso!
        </p>

        <h2 className={styles.subtitle}>En Resumen: ¿Qué es una Transacción?</h2>
        <p className={styles.paragraph}>
          Así que, en pocas palabras, una transacción en Ethereum no es más que un <strong>mensaje firmado digitalmente</strong> que se envía a la red. Este mensaje le pide a la red que haga algo: ya sea mover Ether de un sitio a otro, o ejecutar el código de un Contrato Inteligente. Y todo ello, pagando una pequeña tarifa (el gas) por el trabajo computacional requerido. ¡Simple, pero increíblemente poderoso!
        </p>
      </div>
    </>
  );
}
