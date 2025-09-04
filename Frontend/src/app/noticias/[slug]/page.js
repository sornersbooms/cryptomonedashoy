import Image from 'next/image';
import { getRandomLocalImage } from '../../../utils/imageUtils';
import styles from './style.module.css';
import { slugify } from '../../../utils/slugify';

// Mock data - en un futuro esto vendrá de una API
const getArticleData = async (slug) => {
  // Aquí llamarías a tu API para obtener los datos del artículo
  // Por ahora, usamos datos de ejemplo
  return {
    title: `Noticia sobre ${slug.replace(/-/g, ' ')}`,
    content: `Contenido detallado sobre ${slug}. Este es un texto de marcador de posición que sería reemplazado por el contenido real del artículo obtenido de una base de datos o un CMS.`,
    author: 'Equipo de CryptoMonedasHoy',
    date: new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
};

export default async function NewsArticlePage({ params }) {
  const { slug } = params;
  const article = await getArticleData(slug);
  const randomImage = getRandomLocalImage();

  return (
    <article className={styles.articleContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.meta}>
          Por {article.author} | Publicado el {article.date}
        </p>
      </header>

      <div className={styles.imageContainer}>
        <Image
          src={randomImage}
          alt={article.title}
          width={800}
          height={400}
          className={styles.image}
          priority
        />
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}
