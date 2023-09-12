const express = require('express');
const app = express();

// Middleware
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

const apiRoutes = require('./Routes/api');
app.use('/api', apiRoutes);

// app.use(express.static('public'));

module.exports = app;
