const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userController = require('./user.controller');

router.post('/login',userController.user_sign_in);;
router.post('/signup',userController.user_sign_up);
router.delete('/:userId',userController.user_delete_id)

module.exports=router;
