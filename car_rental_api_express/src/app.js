const express = require('express');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes'));

module.exports = app;
