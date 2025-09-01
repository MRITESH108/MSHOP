const express = require('express');
const cors = require('cors');
const connectMongoDb = require('./config/db');
const router = require('./routes/productRouter');



const app = express();
app.use(cors());
connectMongoDb();

app.use('/',router);




app.listen(3000,()=> console.log('server started at http://localhost:3000 '));