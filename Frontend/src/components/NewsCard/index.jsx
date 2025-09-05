import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '../../utils/slugify';

const DEFAULT_IMAGE_URL = '/placeholder.png';

const NewsCard = ({ title, description, imageUrl }) => {
  // Si no hay título, no renderizamos la tarjeta para evitar errores.
  if (!title || typeof title !== 'string') {
    return null;
  }

  const newsSlug = slugify(title);
  const finalImageUrl = (imageUrl === 'no-photo.jpg' || !imageUrl) ? DEFAULT_IMAGE_URL : imageUrl;

  return (
    <Link href={`/noticias/${newsSlug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={finalImageUrl}
            alt={`Imagen de la noticia: ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
