import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

// Generar las 100 páginas estáticas
export async function generateStaticParams() {
  try {
    const res = await fetch('http://localhost:5000/api/cryptos/list');
    if (!res.ok) throw new Error('Failed to fetch crypto list');
    const cryptos = await res.json();
    return cryptos.map((crypto) => ({ slug: crypto.id }));
  } catch (error) {
    console.error("Error in generateStaticParams (como-funciona):", error);
    return [];
  }
}

// Obtener los datos de la cripto
async function getCryptoData(slug) {
  try {
    const res = await fetch(`http://localhost:5000/api/cryptos/details/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch crypto data');
    return res.json();
  } catch (error) {
    console.error(`Error fetching data for ${slug}:`, error);
    return null;
  }
}

// El componente de la página
export default async function ComoFuncionaPage({ params }) {
  const { slug } = params;
  const cryptoData = await getCryptoData(slug);

  if (!cryptoData) {
    return <div className={styles.articleContainer}>Error: No se pudo cargar el contenido.</div>;
  }

  const { name, symbol, description, hashing_algorithm } = cryptoData;

  return (
    <article className={styles.articleContainer}>
      <header className={styles.header}>
        <h1>¿Cómo Funciona {name}?</h1>
        <p className={styles.subtitle}>Una explicación técnica sobre la tecnología, consenso y casos de uso de {name} ({symbol?.toUpperCase()}).</p>
      </header>

      <section className={styles.sectionContainer}>
        <h2>Introducción a la Tecnología de {name}</h2>
        <p>
          {description?.en ? 
            description.en.split('. ').slice(0, 2).join('. ') + '.' : 
            `En este artículo profundizaremos en los aspectos técnicos de ${name}, explorando su arquitectura y componentes clave.`
          }
        </p>
      </section>

      <section className={styles.sectionContainer}>
        <h2>Mecanismo de Consenso</h2>
        <p>
          {hashing_algorithm ? 
            `${name} utiliza un algoritmo de hashing conocido como ${hashing_algorithm}.` : 
            `El mecanismo de consenso es el pilar que asegura la integridad y seguridad de la red.`
          }
          {/* Placeholder for more detailed content */}
          {` Este proceso es fundamental para validar transacciones y añadir nuevos bloques a la cadena. Aún estamos recopilando información detallada sobre el mecanismo de consenso específico de ${name}.`}
        </p>
      </section>

      <section className={styles.sectionContainer}>
        <h2>Casos de Uso Principales</h2>
        <p>
          {/* Placeholder for use cases content */}
          Más allá de ser un activo digital, {name} tiene diversos casos de uso que varían según su diseño y ecosistema. Estos pueden incluir desde transferencias de valor hasta la ejecución de contratos inteligentes o la gobernanza de aplicaciones descentralizadas. Próximamente detallaremos los casos de uso más relevantes para {name}.
        </p>
      </section>

      <section className={styles.sectionContainer}>
        <h2>Gobernanza y Actualizaciones</h2>
        <p>
          {/* Placeholder for governance content */}
          El modelo de gobernanza de {name} define cómo se proponen, discuten e implementan los cambios en el protocolo. Este es un aspecto crucial para la evolución y sostenibilidad del proyecto a largo plazo. La información específica sobre el proceso de gobernanza de {name} será añadida en futuras actualizaciones de este artículo.
        </p>
      </section>

      <footer className={styles.footer}>
        <Link href={`/precio/${slug}`} className={styles.ctaButton}>
          Ver Precio y Estadísticas de {name}
        </Link>
        <Link href={`/aprende/que-es/${slug}`} className={styles.ctaButtonSecondary}>
          Leer la Introducción a {name}
        </Link>
      </footer>
    </article>
  );
}
