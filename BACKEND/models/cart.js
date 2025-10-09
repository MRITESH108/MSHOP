const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId : mongoose.Schema.Types.ObjectId,
    items : [
        {
            productId : mongoose.Schema.Types.ObjectId,
            quantity : Number
        }
    ]
});

const Cart = mongoose.model('Cart', cartSchema,'cart');

module.exports = Cart;