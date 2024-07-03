const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  releaseDate: Date,
  duration: Number,
  genre: [String],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
