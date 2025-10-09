const express = require('express');
const {handleUserSignUp,handleloginuser, handleProtectRoute, handleGetCart,handleLogOut} = require('../controllers/user');


const userRouter = express.Router();



userRouter.post('/signup',handleUserSignUp);
userRouter.post('/login',handleloginuser);
userRouter.post('/logout',handleLogOut);



module.exports = userRouter;