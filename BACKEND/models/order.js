const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
            price: {
                type: Number,
                required: true,
                min: 0,
            },
        }
    ],
    totalPriceItems: {
        type: Number,
        default: 0,
        min: 0
    },
    totalQuantityItems: {
        type: Number,
        default: 0,
        min: 0
    },
    address: {
        type: [String],
        required: true
    },
    status: {
        type : String,
        default : 'Delivered'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema, 'order');

module.exports = Order;