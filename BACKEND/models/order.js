const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema ({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    items : [
        {
            productId : mongoose.Schema.Types.ObjectId,
            quantity : Number
        }
    ],
    totalQuantity : Number,
    totalPrice : Number,
    address : String,
    status : String,
    createdAt : {
        type : Date,
        default : Date.now()
    }

}, {timestamps : true});

const Order = mongoose.model('Order', orderSchema, 'order');

module.exports = Order;