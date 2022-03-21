const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();
const { getAllUsers, createUser, getOneUser, updateUser, deleteUser } =
  userController;

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getOneUser).patch(updateUser).delete(deleteUser);

module.exports = router;
