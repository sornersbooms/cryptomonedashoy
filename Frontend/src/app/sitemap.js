import { sitemapConfig } from './sitemap.config.js';
import { slugify } from '../utils/slugify.js';
import courseData from '../lib/courseData.js';
// gracias
// Función para obtener todas las rutas de los cursos desde courseData
const getAprendeRoutes = () =>
  Object.values(courseData)
    .filter(course => course?.modules)
    .flatMap(course =>
      course.modules.map(module => ({
        url: `${sitemapConfig.baseUrl}${module.path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      }))
    );

export default async function sitemap() {
  const { baseUrl, apiUrl, staticPages, newsConfig, revalidateTime, api } = sitemapConfig;
  
  // Generar páginas estáticas
  const staticPagesWithUrls = staticPages.map(page => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Generar rutas de 'aprende' desde los datos
  const aprendeRoutes = getAprendeRoutes();

  let allRoutes = [...staticPagesWithUrls, ...aprendeRoutes];

  try {
    // Crear un controlador de aborto para timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), api.timeout);

    // Obtener todas las noticias desde la API
    const response = await fetch(`${apiUrl}${api.endpoints.news}`, {
      next: { revalidate: revalidateTime },
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (response.ok) {
      const newsData = await response.json();
      
      if (newsData.success && newsData.data && Array.isArray(newsData.data)) {
        // Generar entradas para cada noticia usando el título para el slug
        const newsPages = newsData.data.map((news) => {
          const slug = slugify(news.title);
          // Si no se puede generar un slug, se omite la entrada para evitar errores
          if (!slug) {
            console.error(`No se pudo generar un slug para la noticia con título: ${news.title}`);
            return null;
          }
          return {
            url: `${baseUrl}/noticias/${slug}`,
            lastModified: new Date(news.createdAt || new Date()),
            changeFrequency: newsConfig.changeFrequency,
            priority: newsConfig.priority,
          };
        }).filter(Boolean); // Filtrar cualquier entrada nula
        
        // Combinar todas las rutas
        allRoutes = [...allRoutes, ...newsPages];
      }
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Timeout al obtener noticias para el sitemap');
    } else {
      console.error('Error al obtener noticias para el sitemap:', error);
    }
    // En producción, podrías querer loggear esto a un servicio de monitoreo
  }
  
  // Devolver todas las rutas
  return allRoutes;
}
