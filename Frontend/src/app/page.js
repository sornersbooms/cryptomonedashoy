import styles from "./page.module.css";
import NewsCard from "../components/NewsCard";
import Link from 'next/link'; // Importar Link

// --- OBTENER DATOS --- 
async function getNews() {
  try {
    const res = await fetch(`http://localhost:5000/api/news`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch news');
    return (await res.json()).data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

async function getTrending() {
  try {
    const res = await fetch(`http://localhost:5000/api/cryptos/trending`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch trending data');
    return await res.json();
  } catch (error) {
    console.error("Error fetching trending:", error);
    return [];
  }
}

async function getCategories() {
  try {
    const res = await fetch(`http://localhost:5000/api/cryptos/categories`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch categories');
    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// --- COMPONENTE PRINCIPAL ---
export default async function Home() {
  // Llamadas a la API en paralelo
  const [newsData, trendingData, categoriesData] = await Promise.all([
    getNews(),
    getTrending(),
    getCategories(),
  ]);

  return (
    <main className={styles.main}>
      <aside className={styles.leftSidebar}>
        <h3>Categorías</h3>
        <ul>
          {categoriesData.slice(0, 10).map((category) => ( // Limitar a 10 para no saturar
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
            imageUrl={news.imageUrl} // Usar la imagen que ya viene de la API
          />
        ))}
      </section>

      <aside className={styles.rightSidebar}>
        <h3>Tendencias</h3>
        <ul>
          {trendingData.map((trend) => {
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
