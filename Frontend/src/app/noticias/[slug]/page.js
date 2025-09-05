import Image from 'next/image';
import { getRandomLocalImage } from '../../../utils/imageUtils';
import styles from './style.module.css';
import { slugify } from '../../../utils/slugify';

const getArticleData = async (slug) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/news`);
    if (!res.ok) {
      throw new Error('Failed to fetch news');
    }
    const newsData = await res.json();
    const allNews = newsData.data;

    const newsItem = allNews.find(news => slugify(news.title) === slug);

    if (!newsItem) {
      return null; // O manejar el caso de no encontrado
    }

    // Limpiar el resumen de prefijos no deseados
    const cleanedSummary = newsItem.summary.replace(/^(título:\s*|\*\*titulo\*\*:\s*)/i, '').trim();

    // Asumimos que la API devuelve estos campos. Ajusta según la estructura real.
    return {
      title: newsItem.title,
      content: cleanedSummary, // Usando el resumen limpiado
      author: newsItem.author || 'Equipo de CryptoMonedasHoy',
      date: new Date(newsItem.published_date).toLocaleDateString('es-ES', {
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

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}
