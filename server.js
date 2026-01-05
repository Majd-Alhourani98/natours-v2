const app = require('./app');
const connectDB = require('./config/db');

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
