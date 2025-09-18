import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

// Reutilizamos la misma lógica que en las páginas de precios para generar las páginas
export async function generateStaticParams() {
  try {
    const res = await fetch('http://localhost:5000/api/cryptos/list');
    if (!res.ok) throw new Error('Failed to fetch crypto list');
    const cryptos = await res.json();
    return cryptos.map((crypto) => ({ slug: crypto.id }));
  } catch (error) {
    console.error("Error in generateStaticParams (aprende):", error);
    return [];
  }
}

// Reutilizamos la función para obtener los datos
async function getCryptoData(slug) {
  try {
    const res = await fetch(`http://localhost:5000/api/cryptos/details/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch crypto data');
    return res.json();
  } catch (error) {
    console.error(`Error fetching data for ${slug}:`, error);
    return null;
  }
}

// El componente de la página educativa
export default async function AprendeQueEsPage({ params }) {
  const { slug } = params;
  const cryptoData = await getCryptoData(slug);

  if (!cryptoData) {
    return <div className={styles.articleContainer}>Error: No se pudo cargar el contenido.</div>;
  }

  const { name, symbol, description } = cryptoData;

  return (
    <article className={styles.articleContainer}>
      <header className={styles.header}>
        <h1>¿Qué es {name}? Guía para Principiantes</h1>
        <p className={styles.subtitle}>Una introducción completa a {name} ({symbol?.toUpperCase()}) y su funcionamiento en el mundo de las criptomonedas.</p>
      </header>

      <div className={styles.callToAction}>
        <p>¿Buscas el precio actual?</p>
        <Link href={`/precio/${slug}`} className={styles.ctaButton}>
          Ver Precio de {name} Hoy →
        </Link>
      </div>

      <div 
        className={styles.articleBody}
        dangerouslySetInnerHTML={{ __html: description?.en || 'No hay descripción disponible.' }} 
      />

      <footer className={styles.footer}>
        <Link href={`/precio/${slug}`} className={styles.ctaButton}>
          Ver Precio de {name}
        </Link>
        <Link href={`/aprende/como-funciona/${slug}`} className={styles.ctaButtonSecondary}>
          Aprender Cómo Funciona {name}
        </Link>
      </footer>
    </article>
  );
}
