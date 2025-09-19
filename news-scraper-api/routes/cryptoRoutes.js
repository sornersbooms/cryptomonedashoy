const express = require('express');
const router = express.Router();
const { CoinGeckoClient } = require('coingecko-api-v3');
const client = new CoinGeckoClient();
const CryptoCache = require('../models/CryptoCache');

const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3';
const TEN_MINUTES_IN_MS = 10 * 60 * 1000;

// Helper function to manage cache
const getCachedData = async (cacheKey, fetchFunction) => {
  const cached = await CryptoCache.findOne({ cryptoId: cacheKey });

  if (cached && (Date.now() - cached.createdAt.getTime() < TEN_MINUTES_IN_MS)) {
    console.log(`DEBUG: Returning cached data for ${cacheKey}`);
    return cached.data;
  }

  console.log(`DEBUG: Fetching new data for ${cacheKey}`);
  const newData = await fetchFunction();

  await CryptoCache.findOneAndUpdate(
    { cryptoId: cacheKey },
    { data: newData, createdAt: Date.now() },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  return newData;
};

// Route to get the top 100 cryptocurrencies
router.get('/list', async (req, res) => {
  try {
    const data = await getCachedData('crypto-list', async () => {
      const apiUrl = `${COINGECKO_API_BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`;
      const response = await fetch(apiUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    });
    res.json(data);
  } catch (error) {
    console.error('Error in /list route:', error);
    res.status(500).json({ message: 'Error fetching crypto list', error: error.message });
  }
});

// Route to get details for a specific cryptocurrency
router.get('/details/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getCachedData(`details-${id}`, async () => {
      const apiUrl = `${COINGECKO_API_BASE}/coins/${id}?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true&vs_currencies=usd,eur,cop`;
      const response = await fetch(apiUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      return response.json();
    });
    res.json(data);
  } catch (error) {
    console.error(`Error in /details/${id} route:`, error);
    res.status(500).json({ message: 'Error fetching crypto details', error: error.message });
  }
});

// Route to get historical data for the chart
router.get('/chart/:id', async (req, res) => {
  const { id } = req.params;
  const { days = '7', vs_currency = 'usd' } = req.query;
  try {
    const data = await getCachedData(`chart-${id}-${days}-${vs_currency}`, async () => {
      // Reverted to fetch for reliability
      const apiUrl = `${COINGECKO_API_BASE}/coins/${id}/market_chart?vs_currency=${vs_currency}&days=${days}`;
      const response = await fetch(apiUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    });
    res.json(data);
  } catch (error) {
    console.error(`Error in /chart/${id} route:`, error);
    res.status(500).json({ message: 'Error fetching market chart', error: error.message });
  }
});

// Route to get trending cryptocurrencies
router.get('/trending', async (req, res) => {
  try {
    const data = await getCachedData('trending-cryptos', async () => {
      const response = await client.trending();
      return response.coins; // The original code returned response.coins
    });
    res.json(data);
  } catch (error) {
    console.error('Error in /trending route:', error);
    res.status(500).json({ message: 'Error fetching trending cryptos', error: error.message });
  }
});

// Route to get the list of categories
router.get('/categories', async (req, res) => {
  try {
    const data = await getCachedData('crypto-categories', async () => {
      return client.coinCategoriesList();
    });
    res.json(data);
  } catch (error) {
    console.error('Error in /categories route:', error);
    res.status(500).json({ message: 'Error fetching categories', error: error.message });
  }
});

module.exports = router;
