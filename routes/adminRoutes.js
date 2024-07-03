const express = require('express');
const { getUsers, getMovies } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/users').get(protect, admin, getUsers);
router.route('/movies').get(protect, admin, getMovies);

module.exports = router;
