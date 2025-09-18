const express = require('express');
const router = express.Router();
const { CoinGeckoClient } = require('coingecko-api-v3'); // Mantener para trending/categories
const client = new CoinGeckoClient(); // Mantener para trending/categories

// URL Base para la API de CoinGecko
const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3';

// Ruta para obtener la lista de las 100 criptomonedas principales
router.get('/list', async (req, res) => {
  try {
    const apiUrl = `${COINGECKO_API_BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching crypto list from CoinGecko:', error);
    res.status(500).json({ message: 'Error fetching crypto list' });
  }
});

// Ruta para obtener los detalles de una criptomoneda específica
router.get('/details/:id', async (req, res) => {
  try {
    const { id } = req.params;
     const apiUrl = `${COINGECKO_API_BASE}/coins/${id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true&vs_currencies=usd,eur,cop`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(`Error fetching crypto details for ${req.params.id} from CoinGecko:`, error);
    res.status(500).json({ message: 'Error fetching crypto details' });
  }
});

// Ruta para obtener datos históricos para el gráfico
router.get('/chart/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { days = '7', vs_currency = 'usd' } = req.query; // Por defecto 7 días y USD
    const apiUrl = `${COINGECKO_API_BASE}/coins/${id}/market_chart?vs_currency=${vs_currency}&days=${days}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(`Error fetching market chart for ${req.params.id} from CoinGecko:`, error);
    res.status(500).json({ message: 'Error fetching market chart' });
  }
});

// Ruta para obtener las criptomonedas en tendencia (usando la librería coingecko-api-v3)
router.get('/trending', async (req, res) => {
  try {
    const response = await client.trending();
    res.json(response.coins); // Devuelve solo el array de monedas
  } catch (error) {
    console.error('Error fetching trending cryptos from CoinGecko:', error);
    res.status(500).json({ message: 'Error fetching trending cryptos' });
  }
});

// Ruta para obtener la lista de categorías (usando la librería coingecko-api-v3)
router.get('/categories', async (req, res) => {
  try {
    const response = await client.coinCategoriesList();
    res.json(response);
  } catch (error) {
    console.error('Error fetching categories from CoinGecko:', error);
    res.status(500).json({ message: 'Error fetching categories' });
  }
});

module.exports = router;