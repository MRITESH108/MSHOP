const mongoose = require('mongoose');

const PRODUCTDB_URI = 'mongodb://localhost:27017/products';

const connectMongoDbProduct = async () => {
   try {
      const connection = await mongoose.connect(PRODUCTDB_URI);
      console.log('MongoDB Connected with product');
      return connection; 
   } catch (err) {
      console.error('Product DB Error:', err);
   }
};

module.exports = {
   connectMongoDbProduct
};
