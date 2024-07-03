const asyncHandler = require('express-async-handler');
const Movie = require('../models/Movie');

// Create a movie
const createMovie = asyncHandler(async (req, res) => {
  const { title, description, releaseDate, duration } = req.body;

  const movie = new Movie({
    title,
    description,
    releaseDate,
    duration,
  });

  const createdMovie = await movie.save();
  res.status(201).json(createdMovie);
});

// Get all movies
const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});

// Export the functions
module.exports = {
  createMovie,
  getMovies,
};
