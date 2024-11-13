const mysql = require("mysql2");
const fs = require("fs");

const connection = mysql.createConnection({
	host: process.env.DB_HOST, // Masukkan hostname dari Aiven
	port: process.env.DB_PORT, // Ambil port dari variabel lingkungan
	user: process.env.DB_USER, // Username untuk database
	password: process.env.DB_PASS, // Password untuk database
	database: process.env.DB_NAME, // Nama database
	ssl: {
		ca: fs.readFileSync("ca.pem"), // Path ke file sertifikat SSL (jika dibutuhkan oleh Aiven)
	},
	connectTimeout: 10000, // Atur timeout agar lebih panjang untuk mencegah error ETIMEDOUT
});

connection.connect((err) => {
	if (err) {
		console.error("Error connecting to MySQL:", err.message);
		return;
	}
	console.log("Connected to MySQL");
});
