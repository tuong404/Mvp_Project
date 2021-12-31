const express = require('express');
const router = express.Router();

const projectController = require('../controller/ProjectController');

// [GET] api/v1/categories
router.get('/hot-projects', projectController.hotProject);
router.get('/search', projectController.search);
router.get('/:id', projectController.detail);
router.get('/', projectController.show);

module.exports = router;