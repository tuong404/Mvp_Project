const express = require('express');
const router = express.Router();

const siteController = require('../controller/SiteController');

// Home, search, contract
router.get('/', siteController.index);

module.exports = router;