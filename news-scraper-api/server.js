const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cron = require('node-cron'); // Import node-cron
const connectDB = require('./config/db');
const cors = require('cors');
const scrapeNews = require('./scripts/puppeteerScraper'); // Import the scraper function

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

// Mount routers
app.use('/api/news', news);

// --- Schedule the scraper task ---
// This will run every day at 1:40 PM, Bogota time.
cron.schedule('54 13 * * *', () => {
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
