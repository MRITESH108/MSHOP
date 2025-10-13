const express = require('express');
const {handleGetCart,handlePostCart, handledeleteCart} = require('../controllers/cart');
const {handleProtectRoute} = require('../controllers/user');

const router = express.Router();

router.get('/cart',handleProtectRoute, handleGetCart);
router.post('/cart',handleProtectRoute,handlePostCart);
router.delete('/cart',handleProtectRoute,handledeleteCart);


module.exports = router;