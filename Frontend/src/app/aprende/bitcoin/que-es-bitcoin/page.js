'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function QueEsBitcoinPage() {
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
        <h1 className={styles.title}>¿Qué Es Bitcoin? El Dinero de Internet</h1>
        <p className={styles.paragraph}>
          ¡Hola! Vamos a desentrañar uno de los grandes misterios de hoy: <strong>Bitcoin</strong>. Suena a algo de ciencia ficción, pero les prometo que es más sencillo de lo que parece. Olvídense de todo el ruido y la jerga por un momento.
        </p>
        <p className={styles.paragraph}>
          Piensen en el dinero que usan todos los días. Cuando pagan con una tarjeta, no están entregando billetes físicos, ¿verdad? Solo están enviando un mensaje al banco para que actualice sus números: "Quítenle 10 de mi cuenta y súmenle 10 a la cuenta de la tienda". Todo son numeritos en el libro de contabilidad privado de un banco. El banco tiene el control.
        </p>

        <h2 className={styles.subtitle}>Un Cuaderno de Notas Para Todos</h2>
        <p className={styles.paragraph}>
          Ahora, imaginen un cuaderno de notas mágico. Este cuaderno no lo tiene un solo banco. ¡Lo tiene todo el mundo! Cualquiera que quiera puede descargarse una copia completa. Cuando quieren pagarle a alguien, en lugar de pedírselo a un banco, simplemente escriben en el cuaderno: <strong>"Yo, [su firma secreta], le doy 1 bitcoin a María"</strong>.
        </p>
        <p className={styles.paragraph}>
          Este mensaje se anuncia a todos los que tienen una copia del cuaderno. Todos lo ven y lo añaden a su copia. No hay una oficina central, no hay un jefe. Es un sistema de dinero que pertenece a la gente que lo usa. A este cuaderno de notas público y compartido lo llamamos la <strong>blockchain</strong>. Es simplemente una cadena de todas las transacciones que han ocurrido.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Monedas de Bitcoin físicas simbólicas" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Pero es Seguro?</h2>
        <p className={styles.paragraph}>
          "¡Un momento!", dirán. "Si todos tienen el cuaderno, ¿no puede alguien hacer trampa y escribir que tiene un millón de bitcoins?". ¡Excelente pregunta! Aquí está la genialidad del asunto.
        </p>
        <p className={styles.paragraph}>
          El sistema lo hace increíblemente difícil. Las páginas de este cuaderno están selladas con una especie de "cera digital" súper fuerte llamada <strong>criptografía</strong>. Y para añadir una nueva página de transacciones, hay que resolver un acertijo matemático muy complicado que requiere muchísima potencia de computadora. A este proceso lo llamamos "minería". Es tan difícil y costoso que hace que no valga la pena hacer trampa. Es más rentable ser honesto y ayudar a mantener el sistema seguro.
        </p>

        <h2 className={styles.subtitle}>Entonces, ¿Qué es Bitcoin?</h2>
        <p className={styles.paragraph}>
          En resumen, Bitcoin es dos cosas a la vez:
        </p>
        <ul>
          <li>Es <strong>dinero digital</strong>: Una moneda que no puedes tocar, como el saldo de tu cuenta bancaria, pero que es tuya de verdad.</li>
          <li>Es una <strong>red de pagos</strong>: Un sistema global para enviar ese dinero a cualquier persona, en cualquier parte del mundo, sin necesidad de un intermediario.</li>
        </ul>
        <p className={styles.paragraph}>
          Es la primera forma de dinero que funciona de persona a persona a través de internet, de forma segura y sin que nadie pueda detenerlo o controlarlo. Es un experimento fascinante sobre cómo podemos crear confianza entre extraños usando solo las matemáticas. ¡Y eso es todo!
        </p>
      </div>
    </>
  );
}
