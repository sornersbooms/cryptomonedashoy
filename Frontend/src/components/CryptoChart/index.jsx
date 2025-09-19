'use client';

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically registers the necessary components
import styles from './style.module.css';
import { api } from '../../lib/apiConfig';

const CryptoChart = ({ cryptoId }) => {
  const [chartData, setChartData] = useState(null);
  const [days, setDays] = useState('30');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const data = await api.getCryptoChart(cryptoId, days);
        
        if (!data || !data.prices) { // Check for data and prices array
            throw new Error('Failed to fetch chart data');
        }

        const formattedData = {
          labels: data.prices.map(price => new Date(price[0]).toLocaleDateString()),
          datasets: [
            {
              label: 'Price (USD)',
              data: data.prices.map(price => price[1]),
              borderColor: '#0070f3',
              backgroundColor: 'rgba(0, 112, 243, 0.1)',
              fill: true,
              tension: 0.1,
              pointRadius: 0, // Hide points
            },
          ],
        };
        setChartData(formattedData);
      } catch (err) {
        console.error(err);
        setError('Could not load chart data.');
        setChartData(null);
      }
    };

    if (cryptoId) {
      fetchData();
    }
  }, [cryptoId, days]);

  const timeRanges = [
    { label: '1D', value: '1' },
    { label: '7D', value: '7' },
    { label: '1M', value: '30' },
    { label: '3M', value: '90' },
    { label: '1Y', value: '365' },
    { label: 'Max', value: 'max' },
  ];

  return (
    <div className={styles.chartContainer}>
        <div className={styles.timeSelector}>
            {timeRanges.map(range => (
                <button 
                    key={range.value} 
                    onClick={() => setDays(range.value)} 
                    className={days === range.value ? styles.active : ''}
                >
                    {range.label}
                </button>
            ))}
        </div>

      {error && <div className={styles.error}>{error}</div>}
      {!chartData && !error && <div className={styles.loading}>Loading Chart...</div>}
      {chartData && (
        <div style={{height: '400px'}}> {/* Wrapper with explicit height */}
          <Line 
            data={chartData} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                  x: {
                      ticks: {
                          maxTicksLimit: 10, // Limit number of x-axis labels
                      }
                  }
              },
              plugins: {
                  legend: {
                      display: false // Hide legend
                  }
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CryptoChart;
