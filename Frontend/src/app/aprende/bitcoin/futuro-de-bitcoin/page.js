'use client';
import React, { useState } from 'react';
import styles from '../que-es-bitcoin/page.module.css'; // Re-using the same styles
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function FuturoBitcoinPage() {
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
        <h1 className={styles.title}>El Futuro de Bitcoin: ¿Qué Sigue en Este Viaje?</h1>
        <p className={styles.paragraph}>
          Hemos llegado al final de nuestro recorrido, pero el viaje de Bitcoin apenas ha comenzado. Intentar predecir el futuro con exactitud es un juego de tontos. Pero lo que sí podemos hacer, como científicos curiosos, es observar las corrientes, entender las fuerzas en juego y explorar las preguntas más interesantes que nos guiarán hacia adelante.
        </p>
        <p className={styles.paragraph}>
          No tenemos una bola de cristal, pero tenemos principios básicos para analizar las posibilidades. ¿Hacia dónde se dirige este fascinante experimento?
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-9268421_1280.png" alt="Una red global y futurista" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Gran Pregunta: ¿Oro Digital o Dinero para el Café?</h2>
        <p className={styles.paragraph}>
          Este es uno de los debates más grandes. ¿Cuál es el destino principal de Bitcoin? Hay dos visiones principales:
        </p>
        <ul>
          <li><strong>Oro Digital (Reserva de Valor):</strong> La idea de que Bitcoin es como el oro, pero mejor. Es un lugar seguro para guardar riqueza a largo plazo, protegido de la inflación y la censura. Su seguridad y su escasez lo hacen perfecto para este papel.</li>
          <li><strong>Dinero para el Día a Día (Medio de Intercambio):</strong> La visión de que, gracias a innovaciones como la Red Lightning, Bitcoin se usará para comprar de todo, desde una casa hasta un café, de forma rápida y barata.</li>
        </ul>
        <p className={styles.paragraph}>
          La respuesta más probable no es una u otra, sino <strong>ambas</strong>. La capa principal de la blockchain puede actuar como la capa de liquidación final, el "oro" en la bóveda, para transacciones grandes e importantes. Mientras tanto, capas superiores como la Red Lightning pueden proporcionar la velocidad y la eficiencia para los pagos cotidianos. Una cosa no excluye a la otra.
        </p>

        <h2 className={styles.subtitle}>El Tira y Afloja: Regulación y Adopción</h2>
        <p className={styles.paragraph}>
          Imaginen que aparece una nueva especie de animal en la selva. Los otros animales no saben cómo reaccionar. ¿Es un amigo, un enemigo, comida? Los gobiernos y los bancos están en esa fase con Bitcoin. Algunos lo ven como una amenaza a su control, otros como una innovación que deben adoptar. El futuro verá un constante tira y afloja regulatorio en todo el mundo.
        </p>
        <p className={styles.paragraph}>
          La adopción por parte de la gente común dependerá de una sola cosa: la <strong>simplicidad</strong>. ¿Será tan fácil de usar como las aplicaciones bancarias actuales? Empresas de todo el mundo están trabajando para construir interfaces más amigables. El día que tu abuela pueda usar Bitcoin sin darse cuenta de que está usando Bitcoin, ese día la adopción masiva habrá llegado.
        </p>

        <h2 className={styles.subtitle}>La Evolución Constante: Mejoras Tecnológicas</h2>
        <p className={styles.paragraph}>
          Bitcoin no es una reliquia en un museo; es software vivo. Cientos de los desarrolladores más brillantes del planeta trabajan constantemente para proponer mejoras (llamadas "BIPs" o Propuestas de Mejora de Bitcoin). Estas mejoras no pueden cambiar las reglas fundamentales, como el límite de 21 millones, pero pueden añadir nuevas capacidades.
        </p>
        <p className={styles.paragraph}>
          Se está investigando para mejorar la privacidad, la eficiencia y la capacidad de los contratos inteligentes en la red. Esta evolución es lenta y metódica por diseño. Cuando se trata del dinero de millones de personas, la seguridad es la prioridad absoluta. No se puede "mover rápido y romper cosas".
        </p>

        <h2 className={styles.subtitle}>Un Experimento que ya ha Cambiado el Mundo</h2>
        <p className={styles.paragraph}>
          El futuro de Bitcoin no está escrito en piedra. Es un sistema complejo que interactúa con la sociedad, la política y la tecnología. Pero una cosa es segura: el genio ya ha salido de la botella. Bitcoin demostró al mundo que es posible tener una red de valor global, descentralizada, abierta y resistente a la censura, que no depende de ninguna empresa o gobierno.
        </p>
        <p className={styles.paragraph}>
          Esa idea, por sí sola, ya ha inspirado miles de innovaciones y ha cambiado para siempre la conversación sobre el dinero. Sea cual sea el camino que tome, el viaje será fascinante de observar.
        </p>
      </div>
    </>
  );
}
