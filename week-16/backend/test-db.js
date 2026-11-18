// node --env-file=.env test-db.js
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))" command to generate JWT_SECRET


const { DataSource } = require("typeorm");

const testDataSource = new DataSource({
  type: "postgres",                 // tells TypeORM to use the pg driver
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function testConnection() {
  try {
    await testDataSource.initialize();
    const rows = await testDataSource.query("SELECT version()");
    console.log("Connected!");
    console.log(rows[0].version);
  } catch (error) {
    console.error("Connection failed:", error.message);
  } finally {
    if (testDataSource.isInitialized) await testDataSource.destroy();
  }
}

testConnection();