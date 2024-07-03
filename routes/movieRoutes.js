const express = require('express');
const router = express.Router();
const { createMovie, getMovies } = require('../controllers/movieController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, admin, createMovie)
  .get(getMovies);

module.exports = router;
