const Cart = require('../models/cart');

const handleGetCart = async (req, res) => {
    const userId = req.user.id;
    try {

        const existingCart = await Cart.findOne({ userId });
        if (existingCart) {
            res.status(200).json(existingCart);
        }
        else {
            console.log('Cart not found');
            res.send('Cart not found');
        }
    } catch (err) {
        res.json(err);
    }
};

const handlePostCart = async (req, res) => {
    const userId = req.user.id;
    const item = req.body;
    try {
        const existingUserCart = await Cart.findOne({ userId });
        if (!existingUserCart) {
            const newCart = new Cart({
                userId,
                items: [{
                    productId: item._id,
                    name: item.name,
                    quantity: 1,
                    price: item.price,
                }],
                totalPriceItems: item.price,
                totalQuantityItems: 1,
            });
            await newCart.save();
            res.json('save ho gya re baabaa!')
        }
        else {
            const cartItems = existingUserCart.items.findIndex((i) => i.productId.toString() === item._id);
            if (cartItems == -1) {
                existingUserCart.items.push({
                    productId: item._id,
                    name: item.name,
                    quantity: 1,
                    price: item.price,
                })
                existingUserCart.totalPriceItems += item.price;
                existingUserCart.totalQuantityItems += 1;
                await existingUserCart.save();
            }
            res.json('iska logic abhi abhi likha h')
        }
    }
    catch (error) {
        res.json(error);
    }
};


module.exports = {
    handleGetCart,
    handlePostCart
}