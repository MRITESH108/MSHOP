const express = require('express');
const cors = require('cors');
const {connectMongoDbProduct} = require('./config/db')

// import routes
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/user');

connectMongoDbProduct();

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use('/',productRouter)
app.use('/',userRouter)




app.listen(5000,()=> console.log('server started at http://localhost:5000 '));