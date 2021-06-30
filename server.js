const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const apiRoute = require('./routes/api');
const app = express();
const port = config.port;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use('/api', apiRoute);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});
