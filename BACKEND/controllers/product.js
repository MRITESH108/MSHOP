const product = require('../models/product');


const handleGetAllProducts = async(req,res)=>{
  const data = await product.find();
  const total = await product.countDocuments();
  const limit = 10;
  const page = parseInt(req.query.page);
  const start = (page-1)*limit;
  const end = start+limit;
  const totalPages = Math.ceil(total/limit);
  const paginatedData = data.slice(start,end);

  res.json({
    total,
    totalPages,
    paginatedData

  });
};

const handlePostProducts = async(req,res)=>{
  
};


module.exports = {
  handleGetAllProducts,
  handlePostProducts
};