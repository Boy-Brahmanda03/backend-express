require("dotenv").config();
const fs = require("fs");

const mysql = require("mysql");
const db = mysql.createConnection({
	host: "ppl2024-backend-ppls.d.aivencloud.com",
	user: "avnadmin",
	password: process.env.DB_PASSWORD,
	database: "defaultdb",
	port: 20860,
	ssl: {
		rejectUnauthorized: true,
		ca: fs.readFileSync("ca.pem"), // Path to the CA certificate file
	},
});

module.exports = db;
