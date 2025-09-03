const mongoose = require('mongoose');
//hola masa
const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    unique: true,
    trim: true,
    maxlength: [100, 'Title can not be more than 100 characters']
  },
  url: {
    type: String,
    required: [true, 'Please add a URL'],
    unique: true
  },
  imageUrl: {
    type: String
  },
  content: {
    type: String,
    required: [true, 'Please add some content']
  },
  summary: {
    type: String,
    required: [true, 'Please add a summary']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('News', NewsSchema);
