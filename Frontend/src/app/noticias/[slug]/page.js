import Image from 'next/image';
import { getRandomLocalImage } from '../../../utils/imageUtils';
import styles from './style.module.css';

import { slugify } from '../../../utils/slugify';

// Helper functions (defined once at module level)
const generateStableRandomDate = (seed) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  const randomFactor = Math.abs(hash / 2147483647);

  const now = new Date();
  const fortyEightHoursAgo = now.getTime() - (48 * 60 * 60 * 1000);
  
  const randomTime = fortyEightHoursAgo + (randomFactor * (48 * 60 * 60 * 1000));
  
  return new Date(randomTime);
};

const StructuredSummary = ({ text }) => {
  if (!text) return null;

  const sections = [];
  text.replace(/\*\*([a-zA-Zá-éíóúñÁÉÍÓÚÑ\s]+):\*\*([^]*?)(?=\*\*|$)/g, (match, title, content) => {
    sections.push({ title: title.trim(), content: content.trim() });
  });

  if (sections.length === 0) {
    return <p>{text}</p>;
  }

  return (
    <div>
      {sections.map(({ title, content }, index) => {
        const key = `${title}-${index}`;
        const contentLines = content.split('\n').map(l => l.trim()).filter(l => l);
        const hasListItems = contentLines.some(line => line.startsWith('-'));

        if (title.toLowerCase().trim() === 'título') {
            return (
              <div key={key} style={{ marginBottom: '1em' }}>
                {contentLines.map((p, i) => <p key={`${key}-p-${i}`} style={{ textAlign: 'center', fontSize: '1.2em', fontWeight: 'bold' }}>{p}</p>)}
              </div>
            )
        }

        if (title.toLowerCase().trim() === 'fuente') {
            const linkRegex = /.*\[(.*?)\].*\((.*?)\)/;
            const match = content.match(linkRegex);
            if (match) {
                const linkText = match[1];
                const url = match[2];
                const textBeforeLink = content.split(`[${linkText}]`)[0];
                return (
                    <div key={key} style={{ marginBottom: '1em' }}>
                        <p>
                            {textBeforeLink}
                            <a href={url} target="_blank" rel="noopener noreferrer">{linkText}</a>
                        </p>
                    </div>
                )
            }
        }

        if (hasListItems) {
          return (
            <div key={key} style={{ marginBottom: '1em' }}>
              <ul>
                {contentLines.map((line, i) => <li key={`${key}-${i}`}>{line.replace(/^-/, '').trim()}</li>)}
              </ul>
            </div>
          );
        }

        return (
          <div key={key} style={{ marginBottom: '1em' }}>
            {contentLines.map((p, i) => <p key={`${key}-p-${i}`}>{p}</p>)}
          </div>
        );
      })}
    </div>
  );
};

// Generar las rutas estáticas en el momento del build
export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/news`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch news for static params');
    }
    const { data: news } = await res.json();

    if (!Array.isArray(news)) {
      return [];
    }

    return news.map((item) => ({
      slug: slugify(item.title),
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

// Función para obtener una única noticia por su slug
// IDEALMENTE, el backend debería tener un endpoint como /api/news/:slug
// Por ahora, se obtiene todo y se filtra, lo cual es ineficiente para muchas noticias.
async function getNoticia(slug) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/news`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch news for single item lookup');
    }
    const { data: news } = await res.json();

    if (!Array.isArray(news)) {
      return null;
    }

    const noticia = news.find(item => slugify(item.title) === slug);
    return noticia;
  } catch (error) {
    console.error(`Error fetching noticia with slug ${slug}:`, error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const noticia = await getNoticia(params.slug);

  if (!noticia) {
    return {
      title: 'Noticia no encontrada',
      description: 'La noticia que buscas no existe o ha sido movida.',
    };
  }

  const getSummaryForDescription = (text) => {
    if (!text) return '';
    const match = text.match(/\*\*Resumen\*\*:\s*([^]*?)(?=\*\*|$)/i);
    if (match && match[1]) {
      const summaryText = match[1].trim().replace(/\n/g, ' ');
      return summaryText.length > 160 ? summaryText.substring(0, 157) + '...' : summaryText;
    }
    const cleanText = text.replace(/\*\*/g, '').replace(/\n/g, ' ');
    return cleanText.length > 160 ? cleanText.substring(0, 157) + '...' : cleanText;
  };

  const description = getSummaryForDescription(noticia.summary);
  const imageUrl = `https://cryptomonedashoy.com${getRandomLocalImage()}`;

  return {
    title: noticia.title,
    description: description,
    openGraph: {
      title: noticia.title,
      description: description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: noticia.title,
        },
      ],
      locale: 'es_ES',
      type: 'article',
    },
  };
}

// El componente de la página de la noticia
export default async function NoticiaPage({ params }) {
  const noticia = await getNoticia(params.slug);
  const randomImage = getRandomLocalImage();

  if (!noticia) {
    return <div>Noticia no encontrada.</div>;
  }

  const contentToDisplay = noticia.summary || noticia.content || '';
  const displayDate = generateStableRandomDate(noticia.title);

  const getSummaryForDescription = (text) => {
    if (!text) return '';
    const match = text.match(/\*\*Resumen\*\*:\s*([^]*?)(?=\*\*|$)/i);
    if (match && match[1]) {
      return match[1].trim().replace(/\n/g, ' ');
    }
    return text.replace(/\*\*/g, '').replace(/\n/g, ' ');
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: noticia.title,
    image: [`https://cryptomonedashoy.com${randomImage}`],
    datePublished: displayDate.toISOString(),
    dateModified: displayDate.toISOString(),
    author: [{
      '@type': 'Organization',
      name: 'CryptomonedasHoy',
    }],
    publisher: {
      '@type': 'Organization',
      name: 'CryptomonedasHoy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cryptomonedashoy.com/opengraph-image.jpg',
      },
    },
    description: getSummaryForDescription(contentToDisplay),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className={styles.mainTitle}>{noticia.title}</h1>
      <div className={styles.mainImageContainer}>
        <Image 
            src={randomImage} 
            alt={noticia.title} 
            fill
            style={{ objectFit: 'cover' }}
            priority
        />
      </div>
      <div className={styles.articleContainer}>
        <p style={{textAlign: 'center'}}><small>{displayDate.toLocaleString()}</small></p>
        <article className={styles.articleContent}>
          <StructuredSummary text={contentToDisplay} />
        </article>
      </div>
    </>
  );
}
