import Image from 'next/image';
import { getRandomLocalImage } from '../../../utils/imageUtils';
import styles from './style.module.css';
import { slugify } from '../../../utils/slugify';
import { parseContent } from '../../../utils/contentParser';
import MarkdownRenderer from '../../../components/MarkdownRenderer';

const getArticleData = async (slug) => {
  try {
    const res = await fetch(`https://cryptomonedashoy-production.up.railway.app/api/news`);
    if (!res.ok) {
      throw new Error('Failed to fetch news');
    }
    const newsData = await res.json();
    const allNews = newsData.data;

    const newsItem = allNews.find(news => slugify(news.title) === slug);

    if (!newsItem) {
      return null;
    }

    const structuredContent = parseContent(newsItem.summary);

    const randomDate = new Date(Date.now() - Math.random() * 48 * 60 * 60 * 1000);

    return {
      title: newsItem.title,
      structuredContent,
      author: newsItem.author || 'Equipo de CryptoMonedasHoy',
      date: randomDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      imageUrl: newsItem.media || getRandomLocalImage(),
    };
  } catch (error) {
    console.error("Error fetching article data:", error);
    return null;
  }
};

export default async function NewsArticlePage({ params }) {
  const { slug } = params;
  const article = await getArticleData(slug);

  if (!article) {
    return <div>No se encontró la noticia.</div>;
  }

  const { structuredContent } = article;

  return (
    <article className={styles.articleContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.meta}>
          Por {article.author} | Publicado el {article.date}
        </p>
      </header>

      <div className={styles.imageContainer}>
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={800}
          height={400}
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.content}>
        {structuredContent.resumen && (
          <>
            <h2>Resumen</h2>
            <p><MarkdownRenderer text={structuredContent.resumen} /></p>
          </>
        )}

        {structuredContent.puntosClave && (
          <>
            <h2>Puntos Clave</h2>
            <ul>
              {structuredContent.puntosClave.split('-').map((point, index) => 
                point.trim() && <li key={index}><MarkdownRenderer text={point.trim()} /></li>
              )}
            </ul>
          </>
        )}

        {structuredContent.comentario && (
          <>
            <h2>Comentario</h2>
            <p><MarkdownRenderer text={structuredContent.comentario} /></p>
          </>
        )}

        {structuredContent.fuente && (
          <>
            <h3>Fuente</h3>
            <p><MarkdownRenderer text={structuredContent.fuente} /></p>
          </>
        )}
      </div>
    </article>
  );
}
