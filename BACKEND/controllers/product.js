const Product = require('../models/product');

const handleGetAllProducts = async(req,res)=>{
  const products = await Product.find();
  const count = products.length;
  const slicedData = products.slice(0,5);
  res.json({
    count,
    slicedData
  });
};

const handlePostProducts = async(req,res)=>{
  
};


module.exports = {
  handleGetAllProducts,
  handlePostProducts
};