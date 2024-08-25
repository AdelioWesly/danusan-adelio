const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfigurasi koneksi database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "adelio",
  database: "komentar",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected!");
});

// Middleware untuk melayani file statis
app.use(express.static(path.join(__dirname, "public")));

// Route untuk root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "indexs.html"));
});

// Route untuk halaman produk
app.get("/product2.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "product2.html"));
});
// Route untuk halaman produk
app.get("/product3.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "product3.html"));
});
// Route untuk halaman produk
app.get("/product4.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "product4.html"));
});

// Route untuk halaman produk
app.get("/product5.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "product5.html"));
});
// Route untuk halaman produk
app.get("/product6.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "product6.html"));
});

// Endpoint untuk menambahkan komentar
app.post("/add-comment", (req, res) => {
  const { username, comment } = req.body;
  const sql = "INSERT INTO comments (username, comment) VALUES (?, ?)";
  db.query(sql, [username, comment], (err, result) => {
    if (err) throw err;
    res.send("Comment added!");
  });
});
// Endpoint untuk menambahkan komentar
app.post("/add-comment2", (req, res) => {
  const { username, comment } = req.body;
  const sql = "INSERT INTO produk2 (username, comment) VALUES (?, ?)";
  db.query(sql, [username, comment], (err, result) => {
    if (err) throw err;
    res.send("Comment added!");
  });
});
// Endpoint untuk menambahkan komentar
app.post("/add-comment4", (req, res) => {
  const { username, comment } = req.body;
  const sql = "INSERT INTO produk4 (username, comment) VALUES (?, ?)";
  db.query(sql, [username, comment], (err, result) => {
    if (err) throw err;
    res.send("Comment added!");
  });
});
// Endpoint untuk menambahkan komentar
app.post("/add-comment5", (req, res) => {
  const { username, comment } = req.body;
  const sql = "INSERT INTO produk5 (username, comment) VALUES (?, ?)";
  db.query(sql, [username, comment], (err, result) => {
    if (err) throw err;
    res.send("Comment added!");
  });
});
// Endpoint untuk menambahkan komentar
app.post("/add-comment6", (req, res) => {
  const { username, comment } = req.body;
  const sql = "INSERT INTO produk6 (username, comment) VALUES (?, ?)";
  db.query(sql, [username, comment], (err, result) => {
    if (err) throw err;
    res.send("Comment added!");
  });
});

// Endpoint untuk mengambil komentar
app.get("/comments", (req, res) => {
  const sql = "SELECT * FROM comments ORDER BY created_at DESC";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// Endpoint untuk mengambil komentar
app.get("/produk2", (req, res) => {
  const sql = "SELECT * FROM produk2 ORDER BY created_at DESC";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// Endpoint untuk mengambil komentar
app.get("/produk2", (req, res) => {
  const sql = "SELECT * FROM produk3 ORDER BY created_at DESC";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// Endpoint untuk mengambil komentar
app.get("/produk4", (req, res) => {
  const sql = "SELECT * FROM produk4 ORDER BY created_at DESC";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// Endpoint untuk mengambil komentar
app.get("/produk5", (req, res) => {
  const sql = "SELECT * FROM produk5 ORDER BY created_at DESC";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// Endpoint untuk mengambil komentar
app.get("/produk6", (req, res) => {
  const sql = "SELECT * FROM produk6 ORDER BY created_at DESC";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Tambahkan endpoint baru di sini
app.get("/status", (req, res) => {
  res.send("Server is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
