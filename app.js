const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');

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

// Connect to the database
connectDB();

// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`\n${'━'.repeat(21)} SERVER ${'━'.repeat(21)}`);
  console.log(`🟢 STATUS       → Running `);
  console.log(`🔗 LINK         → http://localhost:${PORT}`);
  console.log(`🌍 ENVIRONMENT  → ${app.get('env')}`);
  console.log(`⏰ STARTED AT   → ${new Date().toLocaleString()}\n`);
});
