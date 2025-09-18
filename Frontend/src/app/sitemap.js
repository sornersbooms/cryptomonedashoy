import { sitemapConfig } from './sitemap.config.js';
import { slugify } from '../utils/slugify.js';
import courseData from '../lib/courseData.js';

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

// Función para obtener todas las rutas de criptomonedas
const getCryptoPriceRoutes = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/cryptos/list');
    if (!res.ok) {
      throw new Error(`Failed to fetch crypto list for sitemap: ${res.statusText}`);
    }
    const cryptos = await res.json();
    return cryptos.map((crypto) => ({
      url: `${sitemapConfig.baseUrl}/precio/${crypto.id}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    }));
  } catch (error) {
    console.error("Error in getCryptoPriceRoutes for sitemap:", error);
    return [];
  }
};

// Función para obtener las nuevas rutas dinámicas de /aprende/que-es/[cryptoId] y /aprende/como-funciona/[cryptoId]
const getDynamicAprendeRoutes = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/cryptos/list');
    if (!res.ok) {
      throw new Error(`Failed to fetch crypto list for dynamic aprende routes: ${res.statusText}`);
    }
    const cryptos = await res.json();
    const routes = [];
    cryptos.forEach(crypto => {
      routes.push({
        url: `${sitemapConfig.baseUrl}/aprende/que-es/${crypto.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
      routes.push({
        url: `${sitemapConfig.baseUrl}/aprende/como-funciona/${crypto.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
    return routes;
  } catch (error) {
    console.error("Error in getDynamicAprendeRoutes for sitemap:", error);
    return [];
  }
};

export default async function sitemap() {
  const { baseUrl, apiUrl, staticPages, newsConfig, revalidateTime, api } = sitemapConfig;
  
  // Generar páginas estáticas
  const staticPagesWithUrls = staticPages.map(page => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Generar rutas de 'aprende' desde los datos de courseData
  const aprendeRoutes = getAprendeRoutes();

  // Generar rutas de precios de criptomonedas
  const cryptoPriceRoutes = await getCryptoPriceRoutes();

  // Generar las nuevas rutas dinámicas de /aprende/que-es/[cryptoId] y /aprende/como-funciona/[cryptoId]
  const dynamicAprendeRoutes = await getDynamicAprendeRoutes();

  let allRoutes = [...staticPagesWithUrls, ...aprendeRoutes, ...cryptoPriceRoutes, ...dynamicAprendeRoutes];

  try {
    // Crear un controlador de aborto para timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), api.timeout);

        const fullApiUrl = `${apiUrl}${api.endpoints.news}`;
    
    // --- DEBUGGING LOGS ---
    console.log('[SITEMAP DEBUG] Trying to generate sitemap...');
    console.log(`[SITEMAP DEBUG] INTERNAL_API_URL: ${process.env.INTERNAL_API_URL}`);
    console.log(`[SITEMAP DEBUG] NEXT_PUBLIC_API_URL: ${process.env.NEXT_PUBLIC_API_URL}`);
    console.log(`[SITEMAP DEBUG] Final API URL used: ${fullApiUrl}`);
    // --- END DEBUGGING LOGS ---

    console.log(`Sitemap: Fetching news from: ${fullApiUrl}`);

    // Obtener todas las noticias desde la API
    const response = await fetch(fullApiUrl, {
      next: { revalidate: revalidateTime },
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    console.log(`Sitemap: News API response status: ${response.status}, ok: ${response.ok}`);

    if (response.ok) {
      const newsData = await response.json();
      console.log('Sitemap: News data received:', newsData); // Re-add this log
      
      if (newsData.success) {
        if (Array.isArray(newsData.data)) {
          if (newsData.data.length === 0) {
            throw new Error('[SITEMAP DEBUG] API returned success=true but data array is EMPTY!'); // Force error if empty
          }
          // Generar entradas para cada noticia usando el título para el slug
          const newsPages = newsData.data.map((news) => {
            const slug = news.slug;
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
        } else {
          throw new Error('[SITEMAP DEBUG] API returned success=true but data is NOT an array!'); // Force error if not array
        }
      } else {
        throw new Error(`[SITEMAP DEBUG] API returned success=false. Response: ${JSON.stringify(newsData)}`); // Force error if success=false
      }
    } else {
      throw new Error(`[SITEMAP DEBUG] API response not OK. Status: ${response.status}, StatusText: ${response.statusText}`);
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Timeout al obtener noticias para el sitemap');
      throw new Error('[SITEMAP DEBUG] Timeout al obtener noticias para el sitemap'); // Re-throw for build failure
    } else {
      console.error('Error al obtener noticias para el sitemap:', error);
      throw new Error(`[SITEMAP DEBUG] Error general al obtener noticias para el sitemap: ${error.message}`); // Re-throw for build failure
    }
  }
  
  // Devolver todas las rutas
  return allRoutes;
}
