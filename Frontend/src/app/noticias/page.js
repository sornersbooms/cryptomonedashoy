import NewsCard from '../../components/NewsCard';
import { getRandomLocalImage } from '../../utils/imageUtils';
import styles from './noticias.module.css';
import { api } from '../../lib/apiConfig';

export default async function NoticiasPage() {
  const newsResponse = await api.getNews();
  const newsData = newsResponse?.data || [];

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