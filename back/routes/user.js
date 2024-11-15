const express = require("express");
const pool = require("../db.js");
const router = express.Router();

router.get("/", (req, res) => {
  pool.query("SELECT id, email FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});

module.exports = router;
