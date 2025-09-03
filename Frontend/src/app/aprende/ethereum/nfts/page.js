'use client';
import React, { useState } from 'react';
import styles from './Lesson.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function NftsPage() {
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
        <h1 className={styles.title}>NFTs: Certificados de Propiedad Digital</h1>
        <p className={styles.paragraph}>
          ¡Muy bien! Han oído hablar de los <strong>NFTs</strong>. Probablemente han visto imágenes de monos aburridos que se venden por una fortuna y han pensado: "¡Esto es una locura!". Y tienen razón, a veces lo es. Pero vamos a ignorar el ruido y a entender la idea fundamental, que es realmente interesante.
        </p>
        <p className={styles.paragraph}>
          Primero, la palabra rara: <strong>No Fungible</strong>. Suena intimidante, pero es un concepto que ya conocen. "Fungible" significa "intercambiable". Un billete de 10 euros es fungible; me da igual tener tu billete de 10 que el mío, ambos valen lo mismo y sirven para lo mismo. Un bitcoin es fungible.
        </p>
        <p className={styles.paragraph}>
          "No fungible" es lo contrario: algo único e irrepetible. La Mona Lisa es no fungible; solo hay una. La casa donde creciste es no fungible. Una entrada para el asiento 7B de la final del mundial es no fungible. Son especiales.
        </p>

        <h2 className={styles.subtitle}>Entonces, ¿Qué es un NFT?</h2>
        <p className={styles.paragraph}>
          Un NFT (Token No Fungible) es simplemente un <strong>certificado de propiedad digital</strong>. Es un registro en la blockchain de Ethereum que dice: "La persona que controla esta dirección es la dueña de ESTA COSA ÚNICA".
        </p>
        <p className={styles.paragraph}>
          "¡Pero puedo hacer clic derecho y guardar la imagen!", dirán. ¡Y es verdad! Pueden tener una copia de la imagen, igual que pueden comprar un póster de la Mona Lisa. Pero solo una persona (o un museo) es dueña del cuadro original. El NFT es la escritura de propiedad del "original" digital. Es una entrada única en el gran libro de contabilidad de Ethereum que todo el mundo puede ver y que nadie puede borrar o falsificar.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/nft-7219625_1280.png" alt="Representación de un Token No Fungible (NFT) como una obra de arte digital única" width={600} height={600} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>No Solo para Monos Aburridos</h2>
        <p className={styles.paragraph}>
          El arte digital fue solo el primer caso de uso que llamó la atención. Pero la idea de un certificado de propiedad digital único se puede aplicar a muchísimas cosas:
        </p>
        <ul>
            <li><strong>Objetos en videojuegos:</strong> Una espada legendaria o una armadura única que ganas en un juego. Con un NFT, eres el dueño real de ese objeto, y podrías incluso venderlo fuera del juego.</li>
            <li><strong>Entradas para eventos:</strong> Una entrada como un NFT prueba que eres el dueño y puede programarse para que no se pueda revender por más de su precio original, por ejemplo.</li>
            <li><strong>Nombres de dominio:</strong> Nombres de usuario o direcciones de wallet legibles por humanos (como "ricardo.eth").</li>
            <li><strong>Activos del mundo real:</strong> En el futuro, la escritura de una casa o el título de un coche podría ser un NFT, haciendo la transferencia de propiedad mucho más fácil y segura.</li>
        </ul>

        <h2 className={styles.subtitle}>En Resumen: La Singularidad en un Mundo de Copias</h2>
        <p className={styles.paragraph}>
          En un mundo digital donde todo se puede copiar y pegar infinitamente, los NFTs introducen por primera vez el concepto de <strong>escasez y propiedad verificable</strong>. Son un tipo especial de token (generalmente un estándar llamado ERC-721) que actúa como un título de propiedad a prueba de falsificaciones para cualquier cosa, digital o física. La tecnología es lo que importa, no necesariamente las imágenes de monos. ¡Es una herramienta para demostrar la propiedad de una manera que nunca antes había sido posible en internet!
        </p>
      </div>
    </>
  );
}
