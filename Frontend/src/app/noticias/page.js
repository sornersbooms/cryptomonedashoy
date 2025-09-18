import NewsCard from '../../components/NewsCard';
import { getRandomLocalImage } from '../../utils/imageUtils';
import styles from './noticias.module.css';

async function getNews() {
  try {
    const res = await fetch(`${process.env.API_URL}/news`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export default async function NoticiasPage() {
  const newsData = await getNews();

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Todas las Noticias</h1>
      <section className={styles.newsGrid}>
        {newsData.map((news) => (
          <NewsCard
            key={news.slug}
            slug={news.slug}
            title={news.seoTitle}
            description={news.metaDescription}
            imageUrl={getRandomLocalImage()} // Using random local images as on the homepage
          />
        ))}
      </section>
    </div>
  );
}