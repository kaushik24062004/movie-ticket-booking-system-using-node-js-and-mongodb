const express = require('express');
const { createBooking, getUserBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createBooking);
router.route('/mybookings').get(protect, getUserBookings);

module.exports = router;
