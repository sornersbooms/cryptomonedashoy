const express = require('express');
const News = require('../models/News');
const scrapeNews = require('../scripts/puppeteerScraper');

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json({
      success: true,
      count: news.length,
      data: news
    });
  } catch (err) {
    res.status(400).json({
      success: false
    });
  }
});

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
