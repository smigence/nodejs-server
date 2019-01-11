const models = require('../models');

module.exports = {
  getAll: () => models.user.findAll()
};
