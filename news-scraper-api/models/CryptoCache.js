const mongoose = require('mongoose');

const CryptoCacheSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  data: {
    type: Object,
    required: true,
  },
  cachedAt: {
    type: Date,
    default: Date.now,
    expires: 300, // Documentos expiran después de 300 segundos (5 minutos)
  },
});

module.exports = mongoose.model('CryptoCache', CryptoCacheSchema);