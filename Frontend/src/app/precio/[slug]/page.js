import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import CryptoStats from '@/components/CryptoStats';
import CryptoChart from '@/components/CryptoChart';
import CryptoCalculator from '@/components/CryptoCalculator';
import NewsFeed from '@/components/NewsFeed';

// Esta función se ejecuta en el servidor durante el build
export async function generateStaticParams() {
  try {
    const res = await fetch('http://localhost:5000/api/cryptos/list');
    if (!res.ok) {
      throw new Error(`Failed to fetch crypto list: ${res.statusText}`);
    }
    const cryptos = await res.json();
    return cryptos.map((crypto) => ({ slug: crypto.id }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

// Función para obtener los datos de una cripto específica
async function getCryptoData(slug) {
  try {
    const res = await fetch(`http://localhost:5000/api/cryptos/details/${slug}?tickers=true&market_data=true&vs_currencies=usd,eur,cop`);
    if (!res.ok) {
      throw new Error('Failed to fetch crypto data');
    }
    return res.json();
  } catch (error) {
    console.error(`Error fetching data for ${slug}:`, error);
    return null;
  }
}

// El componente de la página
export default async function CryptoPricePage({ params }) {
  const { slug } = params;
  const cryptoData = await getCryptoData(slug);

  if (!cryptoData) {
    return <div className={styles.mainContainer}>Error: Could not load cryptocurrency data.</div>;
  }

  const { name, symbol, description, market_data } = cryptoData;

  return (
    <main className={styles.mainContainer}>
      <h1>Precio de {name} Hoy ({symbol ? symbol.toUpperCase() : ''})</h1>
      
      <CryptoStats marketData={market_data} cryptoName={symbol.toUpperCase()} />

      <CryptoChart cryptoId={slug} />

      <CryptoCalculator cryptoName={name} cryptoSymbol={symbol} marketData={market_data} />

      <h2>¿Qué es {name}?</h2>
      <div 
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description?.en || 'No description available.' }} 
      />

      <div className={styles.learnMore}>
        <Link href={`/aprende/que-es/${slug}`}>
          Guía para principiantes: ¿Qué es {name}?
        </Link>
        <Link href={`/aprende/como-funciona/${slug}`}>
          Análisis técnico: ¿Cómo funciona {name}?
        </Link>
      </div>

      <NewsFeed cryptoId={slug} />
    </main>
  );
}
