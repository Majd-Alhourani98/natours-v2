const express = require('express');
const morgan = require('morgan');

// Express application
const app = express();

// Parse incoming JSON request
app.use(express.json());

// log HTTP requests
app.use(morgan('dev'));

// health check route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    uptime: process.uptime(),
    message: 'Express server is running 🚀',
  });
});

module.exports = app;
