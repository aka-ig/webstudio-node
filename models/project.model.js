const fs = require('fs');
const path = require('path');
const config = require('../config');

function create(projectName) {
    return new Promise((resolve, reject) => {
        try {
            const projectPath = path.resolve(config.storagePath, projectName);
            if (fs.existsSync(projectPath)) {
                reject('Project already exist, please change name');
                return;
            }
            // Create project
            resolve('Success');
        } catch (e) {
            reject(e);
        }
    });
}

const projectModel = { create };

module.exports = projectModel;
