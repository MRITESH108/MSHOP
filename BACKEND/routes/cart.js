const express = require('express');
const {handleGetCart,handlePostCart} = require('../controllers/cart');
const {handleProtectRoute} = require('../controllers/user');

const router = express.Router();

router.get('/cart',handleProtectRoute, handleGetCart);
router.post('/cart',handleProtectRoute,handlePostCart);


module.exports = router;