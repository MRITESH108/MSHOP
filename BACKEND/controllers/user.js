const User = require('../models/user');


async function handleGetAllUsers(req, res) {
    const allDbusers = await User.find({});
    res.json(allDbusers);
};
async function handleGetUserbyId(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) res.status(404).json({ error: "User not found" });
    res.json(user);
}
async function handleUpdateUserbyId(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    res.json({ status: "Success" });
}
async function handleDeleteUserbyId(req, res) {
     await User.findByIdAndDelete(req.params.id);
      res.json({ status: "Success" });
}
async function handleCreateUserbyId(req, res) {
     const body = req.body;
   if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.job_title
   ) {
      return res.status(404).json({ msg: "All fields are mandatory..." });
   }
   const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title
   });

   return res.status(201).json({ msg: "Success"});
}

async function handleHTMLRender(req, res) {
     const allDbusers = await User.find({});
   const html = `
   // <-----From DataBase----->
   <ul>
      ${allDbusers.map((user) => `<li>${user.firstName}-${user.email}</li>`).join('')}
   </ul>
   `;


   res.send(html);
}


module.exports = {
    handleGetAllUsers,
    handleGetUserbyId,
    handleUpdateUserbyId,
    handleDeleteUserbyId,
    handleCreateUserbyId,
    handleHTMLRender,

}