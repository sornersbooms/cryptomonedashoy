const express = require('express');
const News = require('../models/News');
const scrapeNews = require('../scripts/puppeteerScraper');

const router = express.Router();

// GET all news
router.route('/').get(async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 }); // Sort by newest
    res.status(200).json({
      success: true,
      count: news.length,
      data: news
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
});

// --- NUEVA RUTA AÑADIDA ---
// GET single news by slug
router.route('/:slug').get(async (req, res) => {
  try {
    const news = await News.findOne({ slug: req.params.slug });

    if (!news) {
      return res.status(404).json({ success: false, message: 'No se encontró la noticia' });
    }

    res.status(200).json({
      success: true,
      data: news
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
});
// --- FIN DE LA NUEVA RUTA ---


// POST to trigger scraping
router.route('/scrape').post(async (req, res) => {
  try {
    await scrapeNews();
    res.status(200).json({
      success: true,
      message: 'Scraping initiated successfully.'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: 'Scraping failed.'
    });
  }
});

module.exports = router;