const { DataSource } = require("typeorm");
const User = require('../entities/User')

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // auto-create tables (development only!)
  logging: true,     // print the SQL TypeORM runs — great for learning
  entities: [User], 
});

module.exports = { AppDataSource }