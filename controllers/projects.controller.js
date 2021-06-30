function read(req, res) {
    res.send('Return projects!');
}

const projectsController = { read };

module.exports = projectsController;
