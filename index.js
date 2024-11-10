const express = require("express");
const app = express();
const db = require("./database");
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Connect to MySQL
db.connect((err) => {
	if (err) {
		console.error("Error connecting to MySQL: " + err.stack);
		return;
	}
	console.log("Connected to MySQL as ID " + db.threadId);
});

app.get("/", (req, res) => {
	res.send("Hello Wordl!");
});

app.get("/api/mahasiswa", (req, res) => {
	db.query("Select * from mahasiswa", (err, results) => {
		if (err) {
			res.status(500).send("Error fetching users");
			return;
		}
		res.json(results);
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
