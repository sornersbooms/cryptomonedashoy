'use client';
import React, { useState } from 'react';
import styles from './Lesson.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function FuturoPage() {
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
        <h1 className={styles.title}>El Futuro de Ethereum: La Ciudad del Mañana</h1>
        <p className={styles.paragraph}>
          ¡Llegamos al final de nuestro viaje por ahora! Hemos visto qué es Ethereum, cómo funciona y qué se puede construir sobre él. Pero la historia no ha terminado. De hecho, apenas está comenzando. Ethereum es menos un producto terminado y más una <strong>ciudad en constante evolución</strong>. Hablemos de los planos para el futuro.
        </p>
        <p className={styles.paragraph}>
          La visión de Ethereum siempre ha sido ambiciosa: ser una computadora mundial, una base para una internet más abierta y justa. Pero para llegar allí, la ciudad necesita resolver algunos desafíos clave, principalmente relacionados con la escalabilidad y la sostenibilidad a largo plazo. La hoja de ruta actual se centra en hacer la red más rápida, más barata y más accesible para todos.
        </p>

        <h2 className={styles.subtitle}>Más Carriles para la Autopista: Danksharding</h2>
        <p className={styles.paragraph}>
          Ya hablamos de las Capas 2 (los "Rollups") como autobuses que agrupan transacciones. El siguiente gran paso se llama <strong>Danksharding</strong>. Si los Rollups son autobuses, Danksharding es como añadir 64 carriles nuevos a la autopista, pero dedicados exclusivamente a estos autobuses.
        </p>
        <p className={styles.paragraph}>
          Técnicamente, introduce un nuevo tipo de transacción que puede llevar "blobs" de datos muy grandes y baratos. Los Rollups pueden usar estos blobs para publicar sus resúmenes de transacciones de forma mucho más económica. ¿El resultado para el usuario? Las transacciones en Capas 2 se volverán <strong>ridículamente baratas</strong>, potencialmente céntimos de céntimo, abriendo la puerta a aplicaciones que hoy serían impensables por los costes.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/libra-4338939_1280.jpg" alt="Una balanza simbolizando el equilibrio y la justicia de una red descentralizada" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Otros Horizontes Emocionantes</h2>
        <ul>
            <li><strong>Abstracción de Cuentas:</strong> ¡Esto es genial! Busca hacer que las wallets sean mucho más inteligentes y fáciles de usar. Imaginen poder pagar las tarifas de gas con el mismo token que están enviando, en lugar de necesitar siempre ETH. O configurar reglas de seguridad complejas, como límites de gasto diarios o recuperación social si pierden su clave. Hará que usar Ethereum se parezca mucho más a usar una aplicación bancaria moderna.</li>
            <li><strong>Statelessness (Verificación sin Estado):</strong> Una idea a más largo plazo. Busca hacer que sea mucho más fácil correr un nodo validador sin necesidad de tener un disco duro gigantesco con toda la historia de Ethereum. Si es más fácil correr un nodo, más gente lo hará, y la red se volverá aún más descentralizada y robusta.</li>
            <li><strong>Computación Cuántica y Criptografía:</strong> Los desarrolladores ya están pensando en el día en que las computadoras cuánticas puedan romper la criptografía actual. Se está investigando activamente para migrar la red a nuevos tipos de criptografía que sean resistentes a los ataques cuánticos, asegurando la longevidad de la red para las próximas décadas.</li>
        </ul>

        <h2 className={styles.subtitle}>En Resumen: Una Apuesta por la Apertura</h2>
        <p className={styles.paragraph}>
          El futuro de Ethereum es un esfuerzo continuo para cumplir su promesa inicial: ser la capa base para una internet de valor que sea abierta, sin permisos y propiedad de los usuarios. Se trata de escalar sin sacrificar la descentralización. Se trata de mejorar la experiencia del usuario hasta que sea indistinguible de las aplicaciones web que usamos hoy, pero con toda la potencia de la autopropiedad y la transparencia debajo. La construcción de la ciudad digital continúa, y todos estamos invitados a participar.
        </p>
      </div>
    </>
  );
}
