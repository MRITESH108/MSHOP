const express = require('express');
const {handleGetAllProducts, handlePostProducts} = require('../controllers/product');


const router = express.Router();



router.get('/',handleGetAllProducts);
router.post('/',handlePostProducts);


module.exports = router;