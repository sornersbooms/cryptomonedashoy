import Image from 'next/image';
import styles from './style.module.css';
import MarkdownRenderer from '../../../components/MarkdownRenderer';
import { getRandomLocalImage } from '../../../utils/imageUtils';
import { api } from '../../../lib/apiConfig';

// Helper function to fetch and process article data
const getArticleData = async (slug) => {
  const response = await api.getNewsArticle(slug);
  // The API returns { success: true, data: article }
  const article = response?.data;

  if (article) {
    // Assign a random local image for display. This is a relative path.
    article.displayImage = getRandomLocalImage();
  }
  return article;
};

export async function generateMetadata({ params }) {
  const article = await getArticleData(params.slug);

  if (!article) {
    return { title: 'Noticia no encontrada' };
  }

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    keywords: article.keywords || [],
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      // Note: Using a random local image for OG is not ideal as the path is relative.
      // For this to work correctly in production, an absolute URL to a hosted image is needed.
      images: [
        {
          url: article.displayImage, 
          width: 1200,
          height: 630,
          alt: article.imageAltText,
        },
      ],
      locale: 'es_ES',
      type: 'article',
    },
  };
}

export default async function NewsArticlePage({ params }) {
  const { slug } = params;
  const article = await getArticleData(slug);

  if (!article) {
    return <div>No se encontró la noticia.</div>;
  }

  const structuredDataScript = { __html: article.structuredData };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript}
        key="news-article-jsonld"
      />
      <article className={styles.articleContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>{article.seoTitle}</h1>
          <p className={styles.meta}>
            Publicado el {new Date(article.createdAt).toLocaleDateString('es-ES', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </p>
        </header>
        <div className={styles.imageContainer}>
          <Image
            src={article.displayImage} // Use the relative path for the component
            alt={article.imageAltText}
            width={800}
            height={400}
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.content}>
          <MarkdownRenderer text={article.articleBody} />
        </div>
        {article.keywords && article.keywords.length > 0 && (
          <div className={styles.keywordsContainer}>
            <strong>Etiquetas:</strong>
            {article.keywords.map(keyword => (
              <span key={keyword} className={styles.keyword}>{keyword}</span>
            ))}
          </div>
        )}
      </article>
    </>
  );
}
