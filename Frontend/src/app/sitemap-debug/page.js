import { getSitemapStats } from '../sitemap-stats';
import styles from './style.module.css';

export default async function SitemapDebugPage() {
  const stats = await getSitemapStats();
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🔍 Debug del Sitemap - Criptomonedas Hoy</h1>
      
      <div className={`${styles.statsCard} ${styles.statsCard}`}>
        <h2 className={styles.statsTitle}>📊 Estadísticas del Sitemap</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>Estado</div>
            <div className={styles.statValue}>{stats.success ? '✅ OK' : '❌ ERROR'}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>Total de Páginas</div>
            <div className={styles.statValue}>{stats.totalPages}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>Páginas Estáticas</div>
            <div className={styles.statValue}>{stats.staticPages}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>Páginas de Noticias</div>
            <div className={styles.statValue}>{stats.newsPages}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>Estado de la API</div>
            <div className={styles.statValue}>{stats.apiStatus}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>Última Actualización</div>
            <div className={styles.statValue}>{stats.lastUpdated}</div>
          </div>
        </div>
        
        {stats.error && (
          <div className={styles.errorBox}>
            <strong>Error:</strong> {stats.error}
          </div>
        )}
      </div>
      
      <div className={`${styles.statsCard} ${styles.urlsCard}`}>
        <h2 className={styles.statsTitle}>🔗 URLs del Sitemap</h2>
        <ul className={styles.urlsList}>
          <li><strong>Página Principal:</strong> <a href="/" target="_blank">/</a></li>
          <li><strong>Noticias:</strong> <a href="/noticias" target="_blank">/noticias</a></li>
          <li><strong>Sitemap XML:</strong> <a href="/sitemap.xml" target="_blank">/sitemap.xml</a></li>
          <li><strong>Robots TXT:</strong> <a href="/robots.txt" target="_blank">/robots.txt</a></li>
        </ul>
      </div>
      
      <div className={`${styles.statsCard} ${styles.configCard}`}>
        <h2 className={styles.statsTitle}>⚙️ Configuración</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>URL Base</div>
            <div className={styles.statValue}>https://cryptomonedashoy.com</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>API URL</div>
            <div className={styles.statValue}>{process.env.API_URL || 'API_URL no configurada'}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>Revalidación</div>
            <div className={styles.statValue}>1 hora</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>Timeout API</div>
            <div className={styles.statValue}>5 segundos</div>
          </div>
        </div>
      </div>
      
      <div className={`${styles.statsCard} ${styles.verificationCard}`}>
        <h2 className={styles.statsTitle}>✅ Verificación</h2>
        <p>Para verificar que tu sitemap esté funcionando correctamente:</p>
        <ol className={styles.verificationList}>
          <li>Visita <a href="/sitemap.xml" target="_blank">/sitemap.xml</a></li>
          <li>Verifica que aparezcan todas las URLs</li>
          <li>Envía el sitemap a Google Search Console</li>
          <li>Monitorea la indexación en Search Console</li>
        </ol>
      </div>
    </div>
  );
}
