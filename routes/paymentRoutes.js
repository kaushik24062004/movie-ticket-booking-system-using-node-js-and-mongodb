const express = require('express');
const { createPayment, getUserPayments } = require('../controllers/paymentController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createPayment);
router.route('/mypayments').get(protect, getUserPayments);

module.exports = router;
