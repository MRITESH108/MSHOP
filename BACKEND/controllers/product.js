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
const handleProductDescription = async(req,res)=>{
  const productbyId = await Product.findById(req.params.id);
  res.json(productbyId);
};


module.exports = {
  handleGetAllProducts,
  handlePostProducts,
  handleProductDescription
};