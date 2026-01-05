const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

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

// Localhost MongoDB connection
const DB_URI = 'mongodb://localhost:27017/';
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`\n${'━'.repeat(15)} SERVER ${'━'.repeat(15)}`);
  console.log(`🟢 STATUS       → Running `);
  console.log(`🔗 LINK         → http://localhost:${PORT}`);
  console.log(`🌍 ENVIRONMENT  → ${app.get('env')}`);
  console.log(`⏰ STARTED AT   → ${new Date().toLocaleString()}\n`);
});
