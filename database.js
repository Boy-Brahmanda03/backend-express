const mysql = require("mysql");
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "db_krs",
});

module.exports = db;
