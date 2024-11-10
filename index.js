const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.get("/", (req, res) => {
	res.send("Hello Wordl!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
