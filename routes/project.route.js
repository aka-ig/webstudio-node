const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');

/**
 * Read project by name
 */
router.get('/:projectName', projectController.read);

/**
 * Create new project
 */
router.post('/', projectController.create);

/**
 * Update project by name
 */
router.put('/:projectName', projectController.update);

/**
 * Remove project by name
 */
router.delete('/:projectName', projectController.remove);

module.exports = router;
