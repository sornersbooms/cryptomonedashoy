import { slugify } from '../../../components/NewsCard';

async function getNews() {
  const res = await fetch(`${process.env.API_URL}/api/news`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data.data;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const allNews = await getNews();
  const newsItem = allNews.find(news => slugify(news.title) === slug);

  if (!newsItem) {
    return { title: 'Noticia no encontrada' };
  }

  const DEFAULT_IMAGE_URL = '/placeholder.png';
  const ogImageUrl = (newsItem.imageUrl && newsItem.imageUrl !== '') ? newsItem.imageUrl : '/opengraph-image.jpg';

  return {
    title: newsItem.title,
    description: newsItem.summary ? newsItem.summary.substring(0, 160) + '...' : newsItem.title,
    openGraph: {
      title: newsItem.title,
      description: newsItem.summary ? newsItem.summary.substring(0, 160) + '...' : newsItem.title,
      images: [{ url: ogImageUrl }],
      url: `https://cryptomonedashoy.com/noticias/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: newsItem.title,
      description: newsItem.summary ? newsItem.summary.substring(0, 160) + '...' : newsItem.title,
      images: [ogImageUrl],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
