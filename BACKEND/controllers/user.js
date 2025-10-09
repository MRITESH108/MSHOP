const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleUserSignUp = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.send('Email already exists');
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.send('user got registered');
    }
    catch (err) {
        return res.send('Something went wrong');
    }
};

const handleloginuser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const fetchedUser = await User.findOne({ email });
        if (!fetchedUser) {
            return res.send('User not found!');
        }

        const isMatch = await bcrypt.compare(password, fetchedUser.password);
        if (!isMatch) {
            return res.send('Invalid password!');
        }

        const token = jwt.sign(
            { id: fetchedUser._id, email: fetchedUser.email },
            'RiteshPandey'
        );

        res.cookie("token", token,{
            httpOnly: true,
            secure: false,
            sameSite: 'lax', 
        });

        return res.status(200).json({
            message: 'Login successful!',
            name: fetchedUser.name
        });

    } 

    catch (error) {
        console.error(error);
        return res.send('Something went wrong');
    }
};


const handleProtectRoute = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: 'Token missing' });
    }

    jwt.verify(token, 'RiteshPandey', function (err, decoded) {
        if (err) {
            return res.send('Token not verified');
        }

        req.user = decoded;
        console.log('Verified');
        next();
    });
};


const handleGetCart = (req,res) => {
    res.json("You can see your cart!");
};

const handleLogOut = (req,res)=>{
    res.clearCookie('token', {
    httpOnly: true,
    secure: false,
    sameSite: 'lax'
  });

  return res.send('Logged out successfully');

}

module.exports = { handleUserSignUp, handleloginuser, handleProtectRoute, handleGetCart,handleLogOut}