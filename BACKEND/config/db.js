const mongoose = require('mongoose');


const MONGODB_URI = 'mongodb://localhost:27017/';

const connectMongoDb = async()=>{
   await mongoose.connect(MONGODB_URI)
   .then(()=> console.log('MongoDb Connected'))
   .catch((err)=> console.error('Error: ', err));
}


module.exports = connectMongoDb;