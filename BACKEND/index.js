const express = require('express');
const fs = require('fs')
const app = express();
const {connectMongoDb} = require('./connection');
const userRouter = require('./routes/user');

// <-------MiddleWare Plugins------------->
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;

// mongoDB connection
connectMongoDb('mongodb://localhost:27017');


// routes <-----RESTAPI----->
app.use('/api/users',userRouter);


app.listen(PORT, () => { console.log("Server Started at port : 8000") });