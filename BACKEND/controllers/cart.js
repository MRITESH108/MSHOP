const Cart = require('../models/cart');

const handleGetCart = async (req, res) => {
    const userId = req.user.id;
    try {
        const existingCart = await Cart.findOne({ userId });
        if (existingCart) {
            res.status(200).json(existingCart);
        }
        else {
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
        const productId = item.productId || item._id;

        if (!existingUserCart) {
            const newCart = new Cart({
                userId,
                items: [{
                    productId,
                    name: item.name,
                    quantity: item.quantity || 1,
                    price: item.price,
                }],
                totalPriceItems: item.price * (item.quantity || 1),
                totalQuantityItems: item.quantity || 1,
            });
            await newCart.save();
            res.status(200).json(existingUserCart);

        }
        const idx = existingUserCart.items.findIndex(
            (i) => i.productId.toString() === productId.toString()
        );

        if (idx === -1) {
            existingUserCart.items.push({
                productId,
                name: item.name,
                quantity: item.quantity || 1,
                price: item.price,
            });
            existingUserCart.totalPriceItems += item.price * (item.quantity || 1);
            existingUserCart.totalQuantityItems += item.quantity || 1;
        } else {
            const existingItem = existingUserCart.items[idx];
            const newQty = existingItem.quantity + (item.value || 1);

            if (newQty <= 0) {
                existingUserCart.totalPriceItems -= existingItem.price * existingItem.quantity;
                existingUserCart.totalQuantityItems -= existingItem.quantity;
                existingUserCart.items.splice(idx, 1);
            } else {
                existingItem.quantity = newQty;
                existingUserCart.totalPriceItems += item.price * (item.value || 1);
                existingUserCart.totalQuantityItems += item.value || 1;
            }
        }

        await existingUserCart.save();
        res.status(200).json(existingUserCart);

    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error });
    }
};

const handledeleteCart = async (req, res) => {
    const userId = req.user.id;
    try {
        const existingUserCart = await Cart.findOne({ userId });
        if(existingUserCart){
            existingUserCart.items = [];
            existingUserCart.totalPriceItems = 0;
            existingUserCart.totalQuantityItems = 0;
            await existingUserCart.save();
            res.status(200).json(existingUserCart);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error });
    }

}

module.exports = {
    handleGetCart,
    handlePostCart,
    handledeleteCart
}