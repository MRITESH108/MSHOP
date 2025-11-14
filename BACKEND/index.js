const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { connectMongoDbProduct } = require('./config/db')

// import routes
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/user');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');

connectMongoDbProduct();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/', productRouter)
app.use('/', userRouter)
app.use('/',cartRouter)
app.use('/',orderRouter)

app.listen(5000, () => console.log('server started at http://localhost:5000 '));