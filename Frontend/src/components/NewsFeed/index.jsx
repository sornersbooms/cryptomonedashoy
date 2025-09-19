'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './style.module.css';
import { api } from '../../lib/apiConfig';

const NewsFeed = ({ cryptoId }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!cryptoId) return;

    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await api.getNews(cryptoId);
        setNews(response?.data || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [cryptoId]);

  if (loading) {
    return <div className={styles.loading}>Cargando noticias...</div>;
  }

  return (
    <div className={styles.newsContainer}>
      <h2 className={styles.title}>Noticias Recientes sobre {cryptoId}</h2>
      {news.length > 0 ? (
        <div className={styles.newsGrid}>
          {news.map((item) => (
            <Link href={`/noticias/${item.slug}`} key={item._id} className={styles.newsCard}>
              {item.imageUrl && <img src={item.imageUrl} alt={item.imageAltText || item.seoTitle} className={styles.newsImage} />}
              <div className={styles.cardContent}>
                <h3 className={styles.newsTitle}>{item.seoTitle}</h3>
                <p className={styles.newsDescription}>{item.metaDescription}</p>
                <span className={styles.readMore}>Leer más →</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No se encontraron noticias recientes para esta criptomoneda.</p>
      )}
    </div>
  );
};

export default NewsFeed;
