const mongoose = require('mongoose');

const { connectMongoDbProduct } = require('../config/db')

connectMongoDbProduct();

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    description : String,
    category : String
});

const Product = mongoose.model('product',productSchema,'mixed');

module.exports = Product;
