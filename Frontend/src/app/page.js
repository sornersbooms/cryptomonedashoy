import styles from "./page.module.css";
import NewsCard from "../components/NewsCard";
import { getRandomLocalImage } from "../utils/imageUtils";


async function getNews() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/news`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data.data; // Aseguramos devolver el array
  } catch (error) {
    console.error("Error fetching news:", error);
    return []; // Devolvemos un array vacío en caso de error
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
    console.error("newsData is not an array or is null:", newsData);
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
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            description={news.summary}
            imageUrl={getRandomLocalImage()} // Pass a random local image
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
