// const product = require('../models/product');

const product = [
  {
    name : "Gysers",
    price : 20,
    description : "A electric product which makes your life easier and also warms you even in winters",
    category : "Electrical"
  },
  {
    name : "Computers",
    price : 150,
    description : "A electric product which is used for computation and any other big problem",
    category : "Electrical"
  },
  {
    name : "Air conditioner",
    price : 75,
    description : "A electric product which is used for cool air",
    category : "Electrical"
  },
  {
    name : "Refrigerator",
    price : 60,
    description : "A electric product which is used for reserve food and cool water",
    category : "Electrical"
  },
  {
    name : "Fan",
    price : 30,
    description : "A electric product which is used for air",
    category : "Electrical"
  },
  {
    name : "Cables",
    price : 80,
    description : "A electric product which is used for trsnsefering electricity",
    category : "Electrical"
  },
  {
    name : "Induction",
    price : 40,
    description : "A electric product which is used for making food",
    category : "Electrical"
  },
  {
    name : "LED bulbs",
    price : 70,
    description : "A electric product which is used for light",
    category : "Electrical"
  },
  {
    name : "Chargers",
    price : 50,
    description : "A electric product which charge your phone",
    category : "Electrical"
  },
  {
    name : "Hair Dryer",
    price : 10,
    description : "A electric product which dries your hair",
    category : "Electrical"
  },
  {
    name : "Phones",
    price : 120,
    description : "A electric product which let you to communicate to you farther one",
    category : "Electrical"
  },
]


const handleGetAllProducts = async(req,res)=>{
  const count = product.length;
  const slicedData = product.slice(0,5);
  res.json({
    count,
    slicedData
  });
};

const handlePostProducts = async(req,res)=>{
  
};


module.exports = {
  handleGetAllProducts,
  handlePostProducts
};