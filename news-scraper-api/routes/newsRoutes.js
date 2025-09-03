const express = require('express');
const News = require('../models/News');

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

module.exports = router;
