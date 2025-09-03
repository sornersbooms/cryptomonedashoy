'use client';
import React, { useState } from 'react';
import styles from './Lesson.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function Erc20Page() {
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
        <h1 className={styles.title}>Tokens ERC-20: Fichas de Casino Digitales</h1>
        <p className={styles.paragraph}>
          ¡Absolutamente! Imaginen que Ethereum no es solo una supercomputadora, sino también un gigantesco casino o un parque de diversiones. El Ether (ETH) es el dinero oficial que se usa para pagar por las atracciones (el "gas"). Pero, ¿y si cada atracción quisiera tener sus propias fichas? Una para la montaña rusa, otra para la casa de los sustos... Sería un lío, ¿verdad?
        </p>
        <p className={styles.paragraph}>
          Aquí es donde entra el <strong>ERC-20</strong>. No es una cosa, es una <strong>receta</strong>. Es un conjunto de reglas comunes, un estándar, que todo el mundo acordó seguir para crear estas "fichas" personalizadas dentro de Ethereum. Gracias a esta receta, todas las fichas, sin importar para qué sirvan, "hablan" el mismo idioma.
        </p>

        <h2 className={styles.subtitle}>La Receta Mágica del ERC-20</h2>
        <p className={styles.paragraph}>
          Piensen en ello como las reglas para fabricar una pila AA. Cualquier empresa puede hacer pilas AA, y todas funcionan en tus aparatos porque siguen el mismo estándar de tamaño y voltaje. El ERC-20 hace lo mismo para los tokens en Ethereum. La "receta" exige que cada token sepa cómo responder a preguntas básicas, como:
        </p>
        <ul>
          <li><strong>totalSupply():</strong> ¿Cuántas fichas de estas existen en total?</li>
          <li><strong>balanceOf(dueño):</strong> ¿Cuántas fichas tiene esta persona en particular?</li>
          <li><strong>transfer(destinatario, cantidad):</strong> ¡La función clave! Envía una cantidad de mis fichas a otra persona.</li>
          <li><strong>approve(gastador, cantidad):</strong> Le doy permiso a otra persona (o a un contrato) para que gaste una cantidad de mis fichas en mi nombre.</li>
          <li><strong>allowance(dueño, gastador):</strong> Pregunta cuántas fichas le he permitido gastar a esa persona.</li>
          <li><strong>transferFrom(dueño, destinatario, cantidad):</strong> La función que usa el "gastador" para mover las fichas que le aprobé.</li>
        </ul>
        <p className={styles.paragraph}>
          Como todos los tokens ERC-20 tienen estas funciones con los mismos nombres, cualquier programa (como una wallet o un exchange) sabe exactamente cómo interactuar con ellos. No necesita un manual de instrucciones para cada nueva ficha. ¡Es increíblemente eficiente!
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-7678815_1280.jpg" alt="Representación de diferentes tokens y criptomonedas" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Para Qué Sirven Estas "Fichas"?</h2>
        <p className={styles.paragraph}>
          ¡Para casi cualquier cosa que se les ocurra! Son como arcilla digital. Aquí tienen algunos ejemplos:
        </p>
        <ul>
            <li><strong>Fichas de Gobernanza:</strong> Si tienes una de estas, tienes derecho a votar sobre el futuro de un proyecto. ¡Democracia digital!</li>
            <li><strong>Stablecoins:</strong> Tokens diseñados para que su valor esté siempre pegado a un dólar (como USDC o Tether). Son el refugio seguro en el volátil mundo cripto.</li>
            <li><strong>Fichas de Utilidad:</strong> Te dan acceso a un servicio. Por ejemplo, necesitas el token X para usar una red de almacenamiento descentralizada.</li>
            <li><strong>Acciones de un Proyecto:</strong> Representan una participación en una nueva empresa o idea.</li>
        </ul>

        <h2 className={styles.subtitle}>En Resumen: La Clave es la Estandarización</h2>
        <p className={styles.paragraph}>
          Así que, un token ERC-20 no es más que un <strong>contrato inteligente que sigue un conjunto de reglas comunes</strong>. Esta estandarización es lo que permitió la explosión de las Finanzas Descentralizadas (DeFi) y otros miles de proyectos en Ethereum. Creó un ecosistema donde diferentes aplicaciones pueden interactuar entre sí sin problemas, como si fueran piezas de Lego. ¡Una idea simple que cambió el juego por completo!
        </p>
      </div>
    </>
  );
}
