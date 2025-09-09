export const sitemapConfig = {
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://cryptomonedashoy.com',
          apiUrl: 'https://cryptomonedashoy-production.up.railway.app/api', // URL de producción hardcodeada
  staticPages: [
    {
      path: '/',
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      path: '/noticias',
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      path: '/aprende',
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ],
  
  newsConfig: {
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  revalidateTime: 3600, // 1 hora
  // Configuración adicional para SEO
  seo: {
    defaultLanguage: 'es',
    supportedLanguages: ['es'],
    defaultCountry: 'ES',
  },
  // Configuración de la API
  api: {
    timeout: 20000, // 20 segundos
    retries: 3,
    endpoints: {
      news: '/api/news',
    },
  },
};
