const express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to development server of BLUESK");
});
router.post("/", (req, res) => {
  res.json(req.body);
});

module.exports = router;
