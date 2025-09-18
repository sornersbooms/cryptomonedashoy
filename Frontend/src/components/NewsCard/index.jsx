import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import { getRandomLocalImage } from '../../utils/imageUtils'; // Importar la función

const NewsCard = ({ slug, title, description, imageUrl }) => {
  const finalImageUrl = getRandomLocalImage(); // Siempre usar una imagen local aleatoria

  return (
    <Link href={`/noticias/${slug}`} className={styles.card}>
      <div className={styles.imageContainer}>
        {finalImageUrl && (
          <Image
            src={finalImageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        )}
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};

export default NewsCard;