const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs'); // Importar File System
const cron = require('node-cron');
const connectDB = require('./config/db');
const cors = require('cors');
const scrapeNews = require('./scripts/puppeteerScraper');

// --- Cargar imágenes locales al iniciar ---
// Eliminada la lógica de carga de imágenes locales del backend
// El frontend ahora maneja sus propias imágenes locales
// ----------------------------------------

// Load env vars using an absolute path
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Connect to database
connectDB();

const app = express();

// CORS middleware
const corsOptions = {
  origin: 'https://cryptomonedas.com', // Reemplaza con el dominio real de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Si necesitas enviar cookies o encabezados de autorización
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

// Body parser
app.use(express.json());

const news = require('./routes/newsRoutes');
const cryptoRoutes = require('./routes/cryptoRoutes');

// Mount routers
app.use('/api/news', news);
app.use('/api/cryptos', cryptoRoutes);

// --- Schedule the scraper task ---
cron.schedule('00 08 * * *', () => {
  console.log('⏰ Running scheduled job: Scraping daily news...');
  scrapeNews().catch(err => {
    console.error('Error during scheduled scrape:', err);
  });
}, {
  scheduled: true,
  timezone: "America/Bogota"
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  console.log('📰 News scraper scheduled to run daily at 1:40 PM.');
});
