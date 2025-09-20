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

        console.log(newUser);
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
            return res.send('Invalid credentials!');
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
        console.log(req.cookies);
        return res.send('got loginned!');
    } catch (error) {
        console.error(error);
        return res.send('Something went wrong');
    }
};


const handleProtectRoute = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.send('Token missing!');
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
    const { email } = req.user;

    const fakeCart = {
        user: email,
        items: [
            { product: 'Apple iPhone 15', quantity: 1 },
            { product: 'MacBook Pro', quantity: 1 }
        ]
    };

    res.json(fakeCart);
};


module.exports = { handleUserSignUp, handleloginuser, handleProtectRoute, handleGetCart }