const mysql = require("mysql2");
require("dotenv").config();

// Set up the connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: process.env.DB_WAIT_FOR_CONNECTIONS === "true",
  connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT, 10),
  queueLimit: parseInt(process.env.DB_QUEUE_LIMIT, 10),
});

module.exports = pool;
