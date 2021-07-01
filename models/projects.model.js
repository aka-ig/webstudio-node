const fs = require('fs');
const path = require('path');
const config = require('../config');

function read() {
    return new Promise((resolve, reject) => {
        try {
            const files = fs.readdirSync(config.storagePath);
            const projects = [];
            files.forEach(file => {
                const filePath = path.resolve(config.storagePath, file);
                const fileStats = fs.statSync(filePath);
                if (fileStats.isDirectory()) {
                    // check project.json inside folder
                    if (fs.existsSync(path.resolve(filePath, 'project.json'))) {
                        const project = {
                            name: file,
                            created: fileStats.ctime,
                            updated: fileStats.mtime,
                        };
                        projects.push(project);
                    }
                }
            });
            resolve(projects);
        } catch (e) {
            reject(e);
        }
    });
}

const projectsModel = { read }

module.exports = projectsModel;
