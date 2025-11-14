const Order = require('../models/order');
const Cart = require('../models/cart');
const User = require('../models/user');

const handlePostOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    // 1. Get cart
    const cart = await Cart.findOne({ userId });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // 2. Get user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 3. Create order
    const newOrder = new Order({
      userId,
      items: cart.items,
      totalPrice: cart.totalPriceItems,
      totalQuantityItems: cart.totalQuantityItems,
      address: user.address,
    });

    await newOrder.save();

    // 4. Optional: clear cart after order
    cart.items = [];
    cart.totalPriceItems = 0;
    cart.totalQuantityItems = 0;
    await cart.save();

    res.status(200).json({ message: "Order placed successfully", orderId: newOrder._id });

  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
      details: error.message
    });
  }
};

module.exports = { handlePostOrder };
