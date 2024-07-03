const Payment = require('../models/Payment');
const asyncHandler = require('express-async-handler');

// Create Payment
exports.createPayment = asyncHandler(async (req, res) => {
  const { booking, amount } = req.body;

  const payment = new Payment({
    user: req.user._id,
    booking,
    amount,
  });

  const createdPayment = await payment.save();
  res.status(201).json(createdPayment);
});

// Get User Payments
exports.getUserPayments = asyncHandler(async (req, res) => {
  const payments = await Payment.find({ user: req.user._id }).populate('booking', 'seats');
  res.json(payments);
});
