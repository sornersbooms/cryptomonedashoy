const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs'); // Importar File System
const cron = require('node-cron');
const connectDB = require('./config/db');
const cors = require('cors');
const scrapeNews = require('./scripts/puppeteerScraper');

// --- Cargar imágenes locales al iniciar ---
let localImages = [];
const imagesDirectory = path.join(__dirname, '..', 'Frontend', 'public', 'images');

try {
  const allFiles = fs.readdirSync(imagesDirectory);
  localImages = allFiles.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)).map(file => `/images/${file}`);
  console.log(`🖼️  Found and loaded ${localImages.length} local images.`);
} catch (err) {
  console.error("❌ Could not read local images directory:", err);
}
// Exportar para que las rutas puedan usarlo
module.exports.localImages = localImages;
// ----------------------------------------

// Load env vars using an absolute path
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Connect to database
connectDB();

const app = express();

// CORS middleware
app.use(cors());

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
