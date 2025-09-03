import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .normalize("NFD").replace(/[̀-ͯ]/g, "") // Normalize and remove diacritics
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
};

const DEFAULT_IMAGE_URL = '/placeholder.png'; // Assuming you have a placeholder.png in your public directory

const NewsCard = ({ title, description, imageUrl }) => {
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
