const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  // Original data
  title: {
    type: String,
    required: [true, 'Please add the original title'],
    trim: true,
  },
  url: {
    type: String,
    required: [true, 'Please add the original URL'],
    unique: true
  },
  imageUrl: {
    type: String
  },
  content: { // Raw content
    type: String,
    required: [true, 'Please add the raw content']
  },
  
  // AI-generated SEO content
  seoTitle: {
    type: String,
    required: [true, 'Please add an SEO title'],
    trim: true
  },
  slug: {
    type: String,
    required: [true, 'Please add a slug'],
    unique: true,
    trim: true
  },
  metaDescription: {
    type: String,
    required: [true, 'Please add a meta description']
  },
  articleBody: { // Markdown content
    type: String,
    required: [true, 'Please add the article body']
  },
  imageAltText: {
    type: String,
  },
  keywords: {
    type: [String],
    default: []
  },
  structuredData: { // JSON-LD as a string
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

// We keep the URL and Slug as unique identifiers.
NewsSchema.index({ title: 1 }, { unique: false });

module.exports = mongoose.model('News', NewsSchema);