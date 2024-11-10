const express = require("express");
const app = express();
const db = require("./database");
const port = 3001;
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

// Home route
app.get("/", (req, res) => {
  res.send("Connected!");
});

// Get all students with cumulative IPK
app.get("/api/mahasiswa", (req, res) => {
  const query = `
    SELECT m.*, COALESCE(i.IPK, 0) AS cumulativeIPK
    FROM mahasiswa m
    LEFT JOIN ipk i ON m.nim = i.nim;
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching students:", err);
      res.status(500).send("Error fetching students");
      return;
    }
    res.json(results);
  });
});

// Get student by NIM with cumulative IPK
app.get("/api/mahasiswa/nim/:nim", (req, res) => {
  const { nim } = req.params;
  const query = `
    SELECT m.*, COALESCE(i.IPK, 0) AS cumulativeIPK
    FROM mahasiswa m
    LEFT JOIN ipk i ON m.nim = i.nim
    WHERE m.nim = ?;
  `;
  db.query(query, [nim], (err, results) => {
    if (err) {
      console.error("Error fetching student by NIM:", err);
      res.status(500).send("Error fetching student by NIM");
      return;
    }
    if (results.length === 0) {
      res.status(404).send("Student not found");
    } else {
      res.json(results[0]);
    }
  });
});

// Search students by name
app.get("/api/mahasiswa/nama/:nama", (req, res) => {
  const { nama } = req.params;
  const query = `
    SELECT m.*, COALESCE(i.IPK, 0) AS cumulativeIPK
    FROM mahasiswa m
    LEFT JOIN ipk i ON m.nim = i.nim
    WHERE m.nama LIKE ?;
  `;
  db.query(query, [`%${nama}%`], (err, results) => {
    if (err) {
      console.error("Error searching student by name:", err);
      res.status(500).send("Error searching student by name");
      return;
    }
    res.json(results);
  });
});

// Get students by semester with IPS data
app.get("/api/mahasiswa/semester/:semester", (req, res) => {
  const { semester } = req.params;
  const query = `
    SELECT m.nim, m.nama, m.jenisKelamin, i.semesterKRS AS semester, i.IPS AS semesterIPS, i.IPK AS cumulativeIPK
    FROM mahasiswa m
    JOIN ipk i ON m.nim = i.nim
    WHERE i.semesterKRS = ?
    ORDER BY m.nim;
  `;
  db.query(query, [semester], (err, results) => {
    if (err) {
      console.error("Error fetching students by semester with IPS data:", err);
      res.status(500).send("Error fetching students by semester with IPS data");
      return;
    }
    res.json(results);
  });
});

// Filter students by specific criteria (example: gender and semester)
app.get("/api/mahasiswa/filter", (req, res) => {
  const { gender, semester } = req.query;
  let query = `
    SELECT m.nim, m.nama, m.jenisKelamin, i.semesterKRS AS semester, i.IPS AS semesterIPS, i.IPK AS cumulativeIPK
    FROM mahasiswa m 
    LEFT JOIN ipk i ON m.nim = i.nim 
    WHERE 1=1
  `;
  const params = [];

  if (gender) {
    query += " AND m.jenisKelamin = ?";
    params.push(gender);
  }
  if (semester) {
    query += " AND i.semesterKRS = ?";
    params.push(semester);
  }

  db.query(query, params, (err, results) => {
    if (err) {
      console.error("Error filtering students:", err);
      res.status(500).send("Error filtering students: " + err.message);
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
