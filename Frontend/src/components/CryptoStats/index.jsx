'use client';

import React, { useState } from 'react';
import styles from './style.module.css';

// Helper para formatear números como moneda
const formatCurrency = (value, currency) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

// Helper para formatear números grandes
const formatLargeNumber = (value) => {
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0
    }).format(value);
}

const CryptoStats = ({ marketData, cryptoName }) => {
  const [currency, setCurrency] = useState('usd');

  if (!marketData) {
    return <div>Loading stats...</div>;
  }

  const stats = {
    price: marketData.current_price?.[currency],
    marketCap: marketData.market_cap?.[currency],
    volume24h: marketData.total_volume?.[currency],
    circulatingSupply: marketData.circulating_supply,
    ath: marketData.ath?.[currency],
    ath_change_percentage: marketData.ath_change_percentage?.[currency],
  };

  return (
    <div className={styles.statsContainer}>
        <div className={styles.header}>
            <h2 className={styles.title}>{cryptoName} Price Statistics</h2>
            <div className={styles.currencySelector}>
                <button onClick={() => setCurrency('usd')} className={currency === 'usd' ? styles.active : ''}>USD</button>
                <button onClick={() => setCurrency('eur')} className={currency === 'eur' ? styles.active : ''}>EUR</button>
            </div>
        </div>

        <div className={styles.statsGrid}>
            <div className={styles.statItem}>
                <span className={styles.statLabel}>Price</span>
                <span className={styles.statValue}>{stats.price ? formatCurrency(stats.price, currency) : 'N/A'}</span>
            </div>
            <div className={styles.statItem}>
                <span className={styles.statLabel}>Market Capitalization</span>
                <span className={styles.statValue}>{stats.marketCap ? formatCurrency(stats.marketCap, currency) : 'N/A'}</span>
            </div>
            <div className={styles.statItem}>
                <span className={styles.statLabel}>Volume (24h)</span>
                <span className={styles.statValue}>{stats.volume24h ? formatCurrency(stats.volume24h, currency) : 'N/A'}</span>
            </div>
            <div className={styles.statItem}>
                <span className={styles.statLabel}>Circulating Supply</span>
                <span className={styles.statValue}>{stats.circulatingSupply ? `${formatLargeNumber(stats.circulatingSupply)} ${cryptoName}` : 'N/A'}</span>
            </div>
            <div className={styles.statItem}>
                <span className={styles.statLabel}>All-Time High</span>
                <span className={styles.statValue}>{stats.ath ? formatCurrency(stats.ath, currency) : 'N/A'}</span>
            </div>
             <div className={styles.statItem}>
                <span className={styles.statLabel}>% From ATH</span>
                <span className={styles.statValue}>{stats.ath_change_percentage ? `${stats.ath_change_percentage.toFixed(2)}%` : 'N/A'}</span>
            </div>
        </div>
    </div>
  );
};

export default CryptoStats;