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
            res.send('Something went wrong!');
        }
        const isMatch = await bcrypt.compare(password, fetchedUser.password);
        if(isMatch){
            console.log(fetchedUser)
            console.log(fetchedUser.password)
            res.send('got loginned!');
        }
        else{
            res.send('Something went wrong!');
        }
    }
    catch (error) {
        res.send('Something went wrong')
    }
}


module.exports = { handleUserSignUp, handleloginuser }