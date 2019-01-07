const express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.render('index');
});
router.post("/", (req, res) => {
  res.json(req.body);
});

module.exports = router;
