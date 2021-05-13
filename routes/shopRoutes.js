const express = require('express');
const path = require('path');
const shopController = require('../controllers/shopController');

const router = express.Router();

router.post('/add-to-cart', shopController.addToCart);

router.get('/cartry', shopController.getCart);

router.post('/OrderPlace', shopController.getOrderPlaced);

router.post('/ConfirmOrder', shopController.ConfirmOrder);

router.post('/delete-cart', shopController.deleteInCart);

// router.post('/order', shopController.order);

router.get('/error-demo',(req, res, next)=>{
    throw new Error('This is to test Error handling in express');
});

module.exports = router;