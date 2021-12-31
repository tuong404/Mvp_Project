const express = require('express');
const router = express.Router();

const adminController = require('../controller/AdminController');

// [GET] api/v1/admin-page
router.get('/users', adminController.authentication, adminController.show);
router.get('/users/:id', adminController.authentication, adminController.showInfo);
router.post('/users/create', adminController.authentication, adminController.createUser);
router.put('/users/:id', adminController.authentication, adminController.updateUser);
router.delete('/users/:id', adminController.authentication, adminController.deleteUser);

module.exports = router;