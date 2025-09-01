const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title : String,
    category : String,
    description : String,
    price : String
});

const product = mongoose.model('user', productSchema);


module.exports = product;