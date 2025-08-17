const express = require('express');
const fs = require('fs')
const app = express();
const mongoose = require('mongoose')

// <-------MiddleWare Plugins------------->
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;
// const users = require('./MOCK_DATA.json');
const { type } = require('os');




// <--------Getting Satrted with MONGODB------------->
// connection
mongoose.connect('mongodb://localhost:27017')
.then(()=> console.log("MongoDb connected"))
.catch((err)=> console.log("Mongo Error",err));

// Schema
const userSchema = new mongoose.Schema({
   firstName:{
      type: String,
      required : true,
   },
   lastName:{
      type: String,
   },
   email:{
      type: String,
      unique : true,
   },
   gender:{
      type: String,
   },
   jobTitle:{
      type: String,
   },
   
},
{ timestamps: true}
);

// Model
const User = mongoose.model("user", userSchema);



// routes <-----RESTAPI----->
app.get("/api/users", async(req, res) => {
   const allDbusers = await User.find({});
   res.json(allDbusers);
   // res.json(users);
});

// <----- HTML Document Render-------> 
app.get('/users', async(req, res) => {
   const allDbusers = await User.find({});
   const html = `
   // <-----From DataBase----->
   <ul>
      ${allDbusers.map((user) => `<li>${user.firstName}-${user.email}</li>`).join('')}
   </ul>
   `;

   // <-----From Mockdata.json----->
   // <ul>
      //  ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
   // </ul>
   res.send(html);
});



//<------ Dynamic path Parameters--------->

// app.get('/api/users/:id', (req, res) => {
//    const id = Number(req.params.id);
//    const user = users.find((user) => user.id === id);
//    res.json(user);
// });

app.route('/api/users/:id')
.get(async(req, res) => {
   // <-----From DataBase----->
   const user = await User.findById(req.params.id);
   res.json(user);

   // <-----From Mockdata.json----->
   // const id = Number(req.params.id);
   // const user = users.find((user) => user.id === id);
   // res.json(user);
}).patch(async(req, res) => {
   // write patch thing
   // <-----From DataBase----->
   await User.findByIdAndUpdate(req.params.id,{lastName: "Changed"});
   res.json({status: "Success"});


   // <-----From Mockdata.json----->
   // const id = Number(req.params.id);
   // const user = req.body;
   // const userIndex = users.findIndex((user) => user.id === id);
   // if (userIndex === -1) {
   //    return res.status(404).json({ status: 'error', message: 'User not found' });
   // }
   // users[userIndex] = {
   //    ...users[userIndex],
   //    ...user
   // }
   // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
   //    res.json({ status: "success", user: users[userIndex]});
   // });

}).delete(async(req, res) => {
   // write delete thing
   // <-----From DataBase----->
   await User.findByIdAndDelete(req.params.id);
   res.json({status: "Success"});
});
app.post('/api/users', async(req, res) => {
   // <-----MongoDb thing------>
   const body = req.body;
   if(
      !body||
      !body.first_name||
      !body.last_name||
      !body.email||
      !body.gender||
      !body.job_title
   )  {
         return res.status(404).json({msg:"All fields are mandatory..."});
     }
   const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title
   });
   // console.log(result);
   return res.status(201).json({msg: "Succes"});




   // <-----todo=create new user with id---->
   // const body = req.body;
   // users.push({
   //    id: users.length + 1, ...body
   // });
   // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
   //    res.json({ status: "success", id: users.length });
   // });

});


app.listen(PORT, () => { console.log("Server Started at port : 8000") });