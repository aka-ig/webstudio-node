const path = require('path');

const config = {
	port: process.env.PORT || 5000,
	storagePath: process.env.STORAGEPATH || path.resolve(__dirname, './data'),
};

module.exports = config;
