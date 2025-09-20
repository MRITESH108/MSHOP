const express = require('express');
const {handleUserSignUp,handleloginuser, handleProtectRoute, handleGetCart} = require('../controllers/user');


const userRouter = express.Router();



userRouter.post('/signup',handleUserSignUp);
userRouter.post('/login',handleloginuser);
userRouter.get('/cart',handleProtectRoute,handleGetCart);



module.exports = userRouter;