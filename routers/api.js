const express = require('express');
const controller = require('../controllers').Api;
let router = express.Router();

router.get('/users', controller.getUsers);

module.exports = router;
