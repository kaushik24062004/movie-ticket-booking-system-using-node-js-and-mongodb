const Booking = require('../models/Booking');
const asyncHandler = require('express-async-handler');

// Create Booking
exports.createBooking = asyncHandler(async (req, res) => {
  const { movie, seats, showtime } = req.body;

  const booking = new Booking({
    user: req.user._id,
    movie,
    seats,
    showtime,
  });

  const createdBooking = await booking.save();
  res.status(201).json(createdBooking);
});

// Get User Bookings
exports.getUserBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate('movie', 'title');
  res.json(bookings);
});
