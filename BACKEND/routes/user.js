const express = require('express');

const { handleGetAllUsers, handleGetUserbyId, handleUpdateUserbyId, handleDeleteUserbyId, handleCreateUserbyId, handleHTMLRender } = require('../controllers/user');

const router = express.Router();


router.route("/")
       .get(handleGetAllUsers)
       .post(handleCreateUserbyId);

// router.get('/', handleHTMLRender);

router.route('/:id')
   .get(handleGetUserbyId)
   .patch(handleUpdateUserbyId)
   .delete(handleDeleteUserbyId);



module.exports = router;