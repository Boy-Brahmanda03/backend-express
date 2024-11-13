require("dotenv").config();

const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("ca.pem"), // Path to the CA certificate file
  },
});

module.exports = db;
