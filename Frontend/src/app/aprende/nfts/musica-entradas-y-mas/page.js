'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function NftsMusicaEntradasPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const nftsCourse = courseData.nfts;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={nftsCourse.title}
        modules={nftsCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Casos de Uso: Música, Entradas y más</h1>
        <p className={styles.paragraph}>
          Hemos hablado de arte y coleccionables, de videojuegos y metaversos. Pero la verdad es que los NFTs son como esas herramientas universales que, una vez que las entiendes, empiezas a verlas por todas partes. ¿Música? ¿Entradas para conciertos? ¿Certificados de cualquier cosa? ¡Sí, sí y sí! La idea es la misma: la propiedad digital verificable.
        </p>
        <p className={styles.paragraph}>
          Piensen en la música. Un artista crea una canción. La graba. La distribuye. ¿Pero quién es el dueño de esa canción? ¿El artista? ¿La discográfica? ¿La plataforma de streaming? Es un lío, ¿verdad? Y lo que es peor, el artista a menudo recibe una miseria por cada reproducción. Es como si un científico hiciera un descubrimiento brillante, y luego solo recibiera un centavo cada vez que alguien lo menciona en un libro. ¡Es una locura!
        </p>

        <h2 className={styles.subtitle}>La Música: De la Reproducción a la Propiedad</h2>
        <p className={styles.paragraph}>
          Con los NFTs, la música puede cambiar. Imaginen que una canción no es solo un archivo de audio, sino un <strong>NFT</strong>. El artista puede vender ese NFT directamente a sus fans. Y no solo una copia, sino una edición limitada. Cada NFT podría representar una parte de la propiedad de la canción, o un derecho a regalías, o acceso exclusivo a contenido futuro.
        </p>
        <p className={styles.paragraph}>
          Es como si el artista no solo vendiera discos, sino que vendiera un pedacito de su estudio, o un derecho a escuchar la canción antes que nadie, o incluso un porcentaje de las ganancias futuras. Los fans se convierten en <strong>inversores</strong> y <strong>socios</strong>, no solo en oyentes pasivos. Y el artista tiene una conexión directa con su audiencia, sin intermediarios que se lleven la mayor parte del pastel. Es una forma de decir: "Esta canción es mía, y si la compras, eres parte de ella".
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/cryptocurrency-3412233_1280.jpg" alt="Música y Entradas con NFTs" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Entradas: Adiós a la Falsificación y la Reventa Abusiva</h2>
        <p className={styles.paragraph}>
          ¿Y qué hay de las entradas para conciertos o eventos deportivos? ¡Un dolor de cabeza! Entradas falsificadas, reventa a precios desorbitados, gente que no puede ir y no puede vender su entrada de forma segura. Es un mercado lleno de trampas.
        </p>
        <p className={styles.paragraph}>
          Si una entrada es un <strong>NFT</strong>, todo cambia. Cada entrada es única y está registrada en la blockchain. No se puede falsificar. Y si alguien quiere revenderla, el artista o el organizador del evento puede programar el NFT para que una parte de la reventa vuelva a ellos. Es como si cada vez que se revendiera una entrada, el artista recibiera una pequeña comisión. ¡Adiós a los revendedores abusivos! Y el comprador sabe que la entrada es auténtica. Es una forma de traer la transparencia y la justicia a un mercado que a menudo carece de ellas.
        </p>

        <h2 className={styles.subtitle}>Y Mucho Más: La Imaginación es el Límite</h2>
        <p className={styles.paragraph}>
          Pero no se detengan ahí. Piensen en cualquier cosa que necesite un certificado de autenticidad o de propiedad. Títulos universitarios, licencias profesionales, historiales médicos, bienes raíces, incluso la identidad digital. Cualquier cosa que necesite ser verificable y no pueda ser falsificada.
        </p>
        <p className={styles.paragraph}>
          Los NFTs son una herramienta para crear <strong>escasez digital</strong> y <strong>propiedad verificable</strong> en un mundo que es inherentemente copiable. Es una forma de decir: "Esto es real, esto es único, y esto es mío". Y una vez que entiendes ese concepto fundamental, las aplicaciones son infinitas. Es como cuando entendimos que la electricidad no era solo para la luz, sino para todo. Los NFTs son así: una idea simple con consecuencias profundas. ¡Es un campo de juego para la imaginación! 
        </p>
      </div>
    </>
  );
}