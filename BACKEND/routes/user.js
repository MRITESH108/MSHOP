const express = require('express');
const {handleUserSignUp,handleloginuser, handleProtectRoute, handleGetCart,handleLogOut} = require('../controllers/user');


const userRouter = express.Router();



userRouter.post('/signup',handleUserSignUp);
userRouter.post('/login',handleloginuser);
userRouter.get('/cart',handleProtectRoute,handleGetCart);
userRouter.post('/logout',handleLogOut);



module.exports = userRouter;