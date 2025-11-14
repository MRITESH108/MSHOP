const express = require('express');
const { handleProtectRoute } = require('../controllers/user');
const { handlePostOrder } = require('../controllers/order');


const router = express.Router();

router.post('/checkout',handleProtectRoute,handlePostOrder);

module.exports = router;