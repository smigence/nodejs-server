const models = require('../models');

module.exports = {
  getAll: () => models.user.findAll(),
  findOne: account => models.user.findOne({ where: { ...account } })
};
