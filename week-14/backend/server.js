const app = require("./app/app");
const { AppDataSource } = require("./config/data-source");

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await AppDataSource.initialize();
    console.log("Connected to PostgreSQL");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Could not connect to the database:", error.message);
    process.exit(1);
  }
}

start();