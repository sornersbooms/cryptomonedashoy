import styles from "./page.module.css";
import NewsCard from "../components/NewsCard";
import Link from 'next/link'; // Importar Link
import { api } from '../lib/apiConfig';
import { getRandomLocalImage } from '../utils/imageUtils'; // Importar la función

// --- COMPONENTE PRINCIPAL ---
export default async function Home() {
  // Llamadas a la API en paralelo
  const [newsResponse, trendingData, categoriesData] = await Promise.all([
    api.getNews(),
    api.getTrending(),
    api.getCategories(),
  ]);

  // Extraer los datos de la respuesta de noticias y manejar casos de error
  const newsData = newsResponse?.data || [];

  return (
    <main className={styles.main}>
      <aside className={styles.leftSidebar}>
        <h3>Categorías</h3>
        <ul>
          {(categoriesData || []).slice(0, 10).map((category) => ( // Limitar a 10 y manejar error
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </aside>

      <section className={styles.newsGrid}>
        {newsData.map((news) => (
          <NewsCard
            key={news.slug}
            slug={news.slug}
            title={news.seoTitle}
            description={news.metaDescription}
            imageUrl={getRandomLocalImage()} // Usar siempre una imagen aleatoria
          />
        ))}
      </section>

      <aside className={styles.rightSidebar}>
        <h3>Tendencias</h3>
        <ul>
          {(trendingData || []).map((trend) => {
            const priceChange = trend.item.data.price_change_percentage_24h.usd;
            const isPositive = priceChange >= 0;
            return (
              <li key={trend.item.id}>
                <Link href={`/precio/${trend.item.id}`}>
                  <img src={trend.item.thumb} alt={trend.item.name} />
                  <span>{trend.item.name} ({trend.item.symbol.toUpperCase()})</span>
                  <span className={isPositive ? styles.positive : styles.negative}>
                    {isPositive ? '+' : ''}{priceChange.toFixed(2)}%
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </main>
  );
}
