const mongoose = require('mongoose');

const CryptoCacheSchema = new mongoose.Schema({
  cryptoId: {
    type: String,
    required: true,
    unique: true,
  },
  data: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '10m', // Los datos en caché expirarán después de 10 minutos
  },
});

module.exports = mongoose.model('CryptoCache', CryptoCacheSchema);