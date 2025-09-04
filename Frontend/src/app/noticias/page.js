import React from 'react';
import NewsCard from '../../components/NewsCard';
import styles from './noticias.module.css';
import { getRandomLocalImage } from '../../utils/imageUtils';

async function getNews() {
  console.log('Executing getNews()');
  try {
    const res = await fetch(`https://cryptomonedashoy-production.up.railway.app/api/news`, { cache: 'no-store' }); // Deshabilita la caché
    if (!res.ok) {
      throw new Error('Failed to fetch news');
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return []; // Devuelve un array vacío en caso de error
  }
}

// Función para obtener el resumen del texto
const getSummary = (text) => {
  if (!text) return '';
  const match = text.match(/\*\*Resumen\*\*:\s*([^]*?)(?=\*\*|$)/i);
  if (match && match[1]) {
    const summaryText = match[1].trim().replace(/\n/g, ' ');
    return summaryText.length > 100 ? summaryText.substring(0, 97) + '...' : summaryText;
  }
  const cleanText = text.replace(/\*\*/g, '').replace(/\n/g, ' ');
  return cleanText.length > 100 ? cleanText.substring(0, 97) + '...' : cleanText;
};
// Esto es un cambio para forzar el redespliegue
export default async function NoticiasPage() {
  const news = await getNews();
  const latestNews = news.slice(0, 20);

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Últimas Noticias</h1>
      {latestNews.length > 0 ? (
        <div className={styles.newsGrid}>
          {latestNews.map((item) => (
            <NewsCard
              key={item._id || item.title} // Usar _id si está disponible, si no, el título
              title={item.title}
              description={getSummary(item.summary)}
              imageUrl={getRandomLocalImage()} // Usar imagen aleatoria local
            />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>No se encontraron noticias en este momento.</p>
      ) }
    </div>
  );
}
