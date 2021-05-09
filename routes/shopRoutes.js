const express = require('express');
const path = require('path');
const shopController = require('../controllers/shopController');

const router = express.Router();

router.get('/add-to-cart/:id', shopController.addToCart);

router.get('/cartry', shopController.getCart);

router.post('/delete-cart', shopController.deleteInCart);

router.get('/error-demo', (req, res, next) => {
    throw new Error('This is to test Error handling in express');
});

module.exports = router;