'use client';

import React, { useState, useMemo } from 'react';
import styles from './style.module.css';

const CryptoCalculator = ({ cryptoName, cryptoSymbol, marketData }) => {
  const [cryptoAmount, setCryptoAmount] = useState('1');
  const [fiatAmount, setFiatAmount] = useState('');
  const [currency, setCurrency] = useState('usd');

  const currentPrice = useMemo(() => {
    return marketData?.current_price?.[currency] || 0;
  }, [marketData, currency]);

  // Effect to calculate fiat amount when crypto amount or price changes
  useState(() => {
    if (currentPrice > 0) {
      const calculatedFiat = (parseFloat(cryptoAmount) * currentPrice).toFixed(2);
      setFiatAmount(calculatedFiat);
    }
  }, [cryptoAmount, currentPrice]);

  const handleCryptoChange = (e) => {
    const value = e.target.value;
    setCryptoAmount(value);
    if (currentPrice > 0) {
      const calculatedFiat = (parseFloat(value) * currentPrice).toFixed(2);
      setFiatAmount(calculatedFiat);
    }
  };

  const handleFiatChange = (e) => {
    const value = e.target.value;
    setFiatAmount(value);
    if (currentPrice > 0) {
      const calculatedCrypto = (parseFloat(value) / currentPrice).toFixed(6);
      setCryptoAmount(calculatedCrypto);
    }
  };

  return (
    <div className={styles.calculatorContainer}>
      <h2 className={styles.title}>Convertidor de {cryptoName}</h2>
      <div className={styles.converterBody}>
        <div className={styles.inputGroup}>
          <label htmlFor="crypto-input">{cryptoSymbol.toUpperCase()}</label>
          <input 
            id="crypto-input"
            type="number" 
            value={cryptoAmount} 
            onChange={handleCryptoChange} 
            className={styles.input}
          />
        </div>
        <div className={styles.equals}>=</div>
        <div className={styles.inputGroup}>
            <div className={styles.fiatHeader}>
                 <label htmlFor="fiat-input">Moneda Fiat</label>
                 <div className={styles.currencySelector}>
                    <button onClick={() => setCurrency('usd')} className={currency === 'usd' ? styles.active : ''}>USD</button>
                    <button onClick={() => setCurrency('eur')} className={currency === 'eur' ? styles.active : ''}>EUR</button>
                </div>
            </div>
          <input 
            id="fiat-input"
            type="number" 
            value={fiatAmount} 
            onChange={handleFiatChange} 
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
};

export default CryptoCalculator;
