const express = require('express');
const router = express.Router();
const projectRoute = require('./project.route');
const projectsRoute = require('./projects.route');

router.use('/project', projectRoute);
router.use('/projects', projectsRoute);

module.exports = router;
