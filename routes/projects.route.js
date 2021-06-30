const express = require('express');
const projectsController = require('../controllers/projects.controller');
const router = express.Router();

router.get('/', projectsController.read);

module.exports = router;
