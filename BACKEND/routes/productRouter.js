const express = require('express');
const {handleGetAllProducts, handlePostProducts,handleProductDescription} = require('../controllers/product');


const router = express.Router();



router.get('/allproducts',handleGetAllProducts);
router.get('/products/:id',handleProductDescription)
router.post('/',handlePostProducts);



module.exports = router;