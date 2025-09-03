import styles from '../aprende.module.css';
import { getCourseData } from '@/lib/courseData';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const courseData = getCourseData(params.courseSlug);
  if (!courseData) {
    return {
      title: 'Curso no encontrado',
    };
  }
  return {
    title: `${courseData.title} | CryptomonedasHoy`,
    description: `Aprende todo sobre ${courseData.title} con nuestro curso completo. Módulos desde cero hasta avanzado.`,
  };
}

export default function CoursePage({ params }) {
  const courseData = getCourseData(params.courseSlug);

  if (!courseData) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{courseData.title}</h1>
      <p className={styles.description}>
        Bienvenido al inicio del curso. Selecciona un módulo de la barra izquierda para comenzar tu aprendizaje.
      </p>
      {/* El contenido de cada módulo se renderizará en una ruta anidada, ej: /aprende/bitcoin/que-es-bitcoin */}
    </div>
  );
}
