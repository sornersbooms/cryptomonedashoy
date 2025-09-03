import { sitemapConfig } from './sitemap.config.js';

export async function getSitemapStats() {
  const { baseUrl, apiUrl, api } = sitemapConfig;
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), api.timeout);

    const response = await fetch(`${apiUrl}${api.endpoints.news}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (response.ok) {
      const newsData = await response.json();
      
      if (newsData.success && newsData.data && Array.isArray(newsData.data)) {
        return {
          success: true,
          totalPages: 2 + newsData.data.length, // 2 páginas estáticas + noticias
          staticPages: 2,
          newsPages: newsData.data.length,
          lastUpdated: new Date().toISOString(),
          apiStatus: 'OK',
          apiResponseTime: response.headers.get('x-response-time') || 'N/A',
        };
      }
    }
    
    return {
      success: false,
      error: 'API response not ok',
      totalPages: 2,
      staticPages: 2,
      newsPages: 0,
      lastUpdated: new Date().toISOString(),
      apiStatus: 'ERROR',
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      totalPages: 2,
      staticPages: 2,
      newsPages: 0,
      lastUpdated: new Date().toISOString(),
      apiStatus: 'TIMEOUT/ERROR',
    };
  }
}
