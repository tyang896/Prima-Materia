const mongoose = require('mongoose');
//needs mongodb location
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/prima-materia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;