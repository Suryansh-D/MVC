const express = require('express');
const mongoose = require('mongoose');

const userController = require('../controllers/userController');

const app = express();
require('dotenv').config()

const router = express.Router();

router.post('/api/users', userController.createUser);
router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:id', userController.getUserById);
router.put('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;
