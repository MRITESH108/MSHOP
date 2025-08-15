const express = require('express');
const fs = require('fs')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;

const users = require('./MOCK_DATA.json');
const { json } = require('stream/consumers');

// routes
app.get("/api/users", (req, res) => {
   res.json(users);
});

// <----- HTML Document Render-------> 
app.get('/users', (req, res) => {
   const html = `
   <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
   </ul>
   `;
   res.send(html);
});

//<------ Dynamic path Parameters--------->

// app.get('/api/users/:id', (req, res) => {
//    const id = Number(req.params.id);
//    const user = users.find((user) => user.id === id);
//    res.json(user);
// });

app.route('/api/users/:id').get((req, res) => {
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);
   res.json(user);
}).patch((req, res) => {
   // write patch thing
   const id = Number(req.params.id);
   const user = req.body;
   const userIndex = users.findIndex((user) => user.id === id);
   if (userIndex === -1) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
   }
   users[userIndex] = {
      ...users[userIndex],
      ...user
   }
   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
      res.json({ status: "success", user: users[userIndex]});
   });

}).delete((req, res) => {
   // write delete thing
})
app.post('/api/users', (req, res) => {
   // todo=create new user with id
   const body = req.body;
   users.push({
      id: users.length + 1, ...body
   });
   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
      res.json({ status: "success", id: users.length });
   });

});


app.listen(PORT, () => { console.log("Server Started at port : 8000") });