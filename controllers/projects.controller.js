const projectsModel = require("../models/projects.model");

function read(req, res) {
    projectsModel.read().then((data) => res.send(data), (err) => res.status(500).send(err));
}

const projectsController = { read };

module.exports = projectsController;
