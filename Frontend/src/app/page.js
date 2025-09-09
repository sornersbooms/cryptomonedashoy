import styles from "./page.module.css";
import NewsCard from "../components/NewsCard";
import { getRandomLocalImage } from "../utils/imageUtils"; // Re-add the import

async function getNews() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, { cache: 'no-store' });
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

const categoriesData = [
  "DeFi",
  "NFTs",
  "Metaverso",
  "Web3",
  "Altcoins",
];

const trendsData = [
  { name: "Bitcoin", change: "+5.2%" },
  { name: "Ethereum", change: "+3.8%" },
  { name: "Solana", change: "-2.1%" },
  { name: "Cardano", change: "+1.5%" },
];

export default async function Home() {
  const newsData = await getNews();

  if (!newsData || !Array.isArray(newsData)) {
    return <div>No se pudieron cargar las noticias.</div>;
  }

  return (
    <main className={styles.main}>
      <aside className={styles.leftSidebar}>
        <h3>Categorías</h3>
        <ul>
          {categoriesData.map((category, index) => (
            <li key={index}>{category}</li>
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
            imageUrl={getRandomLocalImage()} // Use the random local image
          />
        ))}
      </section>

      <aside className={styles.rightSidebar}>
        <h3>Tendencias</h3>
        <ul>
          {trendsData.map((trend, index) => (
            <li key={index}>
              <span>{trend.name}</span>
              <span>{trend.change}</span>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}
