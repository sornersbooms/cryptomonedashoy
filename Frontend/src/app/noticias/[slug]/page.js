import Image from 'next/image';
import styles from './style.module.css';
import MarkdownRenderer from '../../../components/MarkdownRenderer';
import { getRandomLocalImage } from '../../../utils/imageUtils';

const getArticleData = async (slug) => {
  try {
        const apiUrl = process.env.INTERNAL_API_URL || process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/news/${slug}`);
    if (!res.ok) { return null; }
    const newsData = await res.json();
    const article = newsData.data;

    if (article) {
      const relativeImagePath = getRandomLocalImage();
      // For the <Image> component, we need the relative path.
      article.displayImage = relativeImagePath;
      // For OpenGraph (social sharing), we need the full, absolute URL.
      article.ogImage = `${process.env.NEXT_PUBLIC_SITE_URL}${relativeImagePath}`;
    }
    return article;
  } catch (error) {
    console.error("Error fetching article data:", error);
    return null;
  }
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
      images: [
        {
          url: article.ogImage, // Use the absolute URL for social media
          width: 1200, // Typical OG image width
          height: 630, // Typical OG image height
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
