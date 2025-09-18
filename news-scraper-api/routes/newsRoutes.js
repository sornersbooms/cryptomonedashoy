const express = require('express');
const News = require('../models/News');
const scrapeNews = require('../scripts/puppeteerScraper');
const { localImages } = require('../server'); // Importar la lista de imágenes

const router = express.Router();

// GET all news (with optional crypto filter and local image injection)
router.route('/').get(async (req, res) => {
  try {
    let query = {};
    if (req.query.crypto) {
      query.keywords = req.query.crypto;
    }

    // Use .lean() for faster queries and easier object manipulation
    const newsArticles = await News.find(query).lean().sort({ createdAt: -1 });

    // Inject random local images if available
    let dataWithLocalImages = newsArticles;
    if (localImages && localImages.length > 0) {
      dataWithLocalImages = newsArticles.map(article => {
        const randomImage = localImages[Math.floor(Math.random() * localImages.length)];
        return {
          ...article,
          imageUrl: randomImage // Override the original imageUrl
        };
      });
    }

    res.status(200).json({
      success: true,
      count: dataWithLocalImages.length,
      data: dataWithLocalImages
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
});

// GET single news by slug
router.route('/:slug').get(async (req, res) => {
  try {
    // No modificamos esta ruta para que la página de la noticia individual sí muestre la imagen original si la tuviera.
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