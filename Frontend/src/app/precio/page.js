import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import SparklineChart from '@/components/SparklineChart';

// Helper para formatear números
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

const formatLargeNumber = (value) => {
    return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 }).format(value);
}

async function getMarketData() {
  try {
    const res = await fetch('http://localhost:5000/api/cryptos/list', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch market data');
    return await res.json();
  } catch (error) {
    console.error("Error fetching market data:", error);
    return [];
  }
}

export default async function PriceIndexPage() {
  const marketData = await getMarketData();

  return (
    <main className={styles.mainContainer}>
      <header className={styles.header}>
        <h1>Precios de Criptomonedas por Capitalización de Mercado</h1>
        <p>Consulta los precios, gráficos y datos de mercado de cientos de criptomonedas.</p>
      </header>

      <div className={styles.tableContainer}>
        <table className={styles.priceTable}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>24h %</th>
              <th>Cap. de Mercado</th>
              <th>Volumen (24h)</th>
              <th>Gráfico (7d)</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((coin) => {
              const isPositive = coin.price_change_percentage_24h >= 0;
              return (
                <tr key={coin.id}>
                  <td>{coin.market_cap_rank}</td>
                  <td>
                    <Link href={`/precio/${coin.id}`} className={styles.coinName}>
                      <img src={coin.image} alt={`${coin.name} logo`} width={24} height={24} />
                      {coin.name} <span className={styles.coinSymbol}>{coin.symbol.toUpperCase()}</span>
                    </Link>
                  </td>
                  <td>{formatCurrency(coin.current_price)}</td>
                  <td>
                    <span className={isPositive ? styles.positive : styles.negative}>
                      {isPositive ? '▲' : '▼'} {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </td>
                  <td>{formatLargeNumber(coin.market_cap)}</td>
                  <td>{formatLargeNumber(coin.total_volume)}</td>
                  <td>
                    {coin.sparkline_in_7d && <SparklineChart data={coin.sparkline_in_7d.price} isPositive={isPositive} />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
