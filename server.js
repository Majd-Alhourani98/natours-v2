const app = require('./app');
const connectDB = require('./config/db');

const bootstrap = async () => {
  try {
    // 1. Await Database Connection
    await connectDB();

    // 2. Start Server
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`\n${'━'.repeat(21)} SERVER ${'━'.repeat(21)}`);
      console.log(`🟢 STATUS       → Running `);
      console.log(`🔗 LINK         → http://localhost:${PORT}`);
      console.log(`🌍 ENVIRONMENT  → ${app.get('env')}`);
      console.log(`⏰ STARTED AT   → ${new Date().toLocaleString()}\n`);
    });
  } catch (error) {
    console.error('❌ ERROR DURING BOOTSTRAP:', error.message);
    process.exit(1);
  }
};

bootstrap();

/*
Bootstrap vs. Run: Simple Comparison
   - To keep it very simple, think of the difference like this:

  1. Run: The "Light Switch" Approach. You just turn it on. You assume everything is ready and you just want the code to execute immediately. It's used for small, simple tasks.

  2. Bootstrap: The "Pre-flight Checklist" Approach. Before you can "run" the plane, you have to:
     - Check the fuel (Environment variables).
     - Check the engines (Database connection).
     - Check the radio (Server port).
    - Only then do you take off.

*/
