const projectModel = require('../models/project.model');

function create(req, res) {
    projectModel.create().then(data => res.send(data), err => res.status(500).send((err)));
}

function read(req, res) { }

function remove(req, res) { }

function update(req, res) { }

const projectController = { create, read, update, remove };

module.exports = projectController;
