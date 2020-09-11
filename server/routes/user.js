const express = require('express');
const  router = require('express-promise-router')();
//const router =  express.Router;
const UserController = require('../controllers/userController');

router.route('/signup').post(UserController.signup);

router.route('/signin').post(UserController.signin);

router.route('/secret').post(UserController.secret);

modules.export = router;