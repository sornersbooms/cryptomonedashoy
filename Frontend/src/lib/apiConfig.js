
const getApiBaseUrl = () => {
  // Lee la variable de entorno y provee un fallback para el entorno local
  return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
};

const fetchApi = async (endpoint, options = {}) => {
  const url = `${getApiBaseUrl()}${endpoint}`;
  const defaultOptions = {
    cache: 'no-store', // Default cache policy
  };
  const finalOptions = { ...defaultOptions, ...options };

  try {
    const res = await fetch(url, finalOptions);
    if (!res.ok) {
      console.error(`API call failed for ${url} with status: ${res.status}`);
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    return await res.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    // Retornar un estado consistente en caso de error
    return null;
  }
};

export const api = {
  // Crypto endpoints
  getCryptoList: () => fetchApi('/api/cryptos/list'),
  getCryptoDetails: (id) => fetchApi(`/api/cryptos/details/${id}?tickers=true&market_data=true&vs_currencies=usd,eur,cop`),
  getCryptoChart: (id, days = '30') => fetchApi(`/api/cryptos/chart/${id}?days=${days}`),
  getTrending: () => fetchApi('/api/cryptos/trending'),
  getCategories: () => fetchApi('/api/cryptos/categories'),

  // News endpoints
  getNews: (cryptoId = null) => {
    const endpoint = cryptoId ? `/api/news?crypto=${cryptoId}` : '/api/news';
    return fetchApi(endpoint);
  },
  getNewsArticle: (slug) => fetchApi(`/api/news/${slug}`),
  triggerScrape: () => fetchApi('/api/news/scrape', { method: 'POST' }),
};
