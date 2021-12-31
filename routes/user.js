const express = require('express');
const router = express.Router();

const userController = require('../controller/UserController');

// [GET] api/v1/login
router.post('/', userController.login);

module.exports = router;