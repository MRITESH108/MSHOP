const express = require('express');
const {handleUserSignUp,handleloginuser} = require('../controllers/user');


const userRouter = express.Router();


userRouter.post('/login',handleloginuser)
userRouter.post('/signup',handleUserSignUp);



module.exports = userRouter;