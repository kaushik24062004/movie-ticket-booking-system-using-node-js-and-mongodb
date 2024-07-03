const User = require('../models/User');
const Movie = require('../models/Movie');
const asyncHandler = require('express-async-handler');

// Get All Users
exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// Get All Movies
exports.getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});
