'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const SparklineChart = ({ data, isPositive }) => {
  const chartData = {
    labels: data.map((_, index) => index), // Ocultaremos las etiquetas
    datasets: [
      {
        data: data,
        borderColor: isPositive ? '#16c784' : '#ea3943',
        borderWidth: 2,
        pointRadius: 0, // Sin puntos
        fill: false,
        tension: 0.4, // Curva suave
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false, // Ocultar eje X
      },
      y: {
        display: false, // Ocultar eje Y
      },
    },
    plugins: {
      legend: {
        display: false, // Ocultar leyenda
      },
      tooltip: {
        enabled: false, // Deshabilitar tooltips
      },
    },
    elements: {
        line: {
            borderCapStyle: 'round'
        }
    }
  };

  return <div style={{ width: '150px', height: '50px' }}><Line data={chartData} options={options} /></div>;
};

export default SparklineChart;
