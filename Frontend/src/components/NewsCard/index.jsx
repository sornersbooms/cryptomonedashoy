import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';

const DEFAULT_IMAGE_URL = '/placeholder.png';

// The component now accepts a 'slug' prop for reliable linking.
const NewsCard = ({ title, description, imageUrl, slug }) => {
  // If there's no slug or title, we can't link anywhere or display anything.
  if (!slug || !title) {
    return null;
  }

  const finalImageUrl = (imageUrl === 'no-photo.jpg' || !imageUrl) ? DEFAULT_IMAGE_URL : imageUrl;

  return (
    <Link href={`/noticias/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={finalImageUrl}
            alt={title} // The title itself is a decent alt text for a card image
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