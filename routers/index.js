const express = require('express');
const controllers = require('../controllers');
let router = express.Router();

router.get('/', controllers.User.getUser);
router.post('/', (req, res) => {
  res.json(req.body);
});

module.exports = router;
