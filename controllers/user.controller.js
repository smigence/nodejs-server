const userService = require('../services').User;

module.exports = {
  getUser: async (req, res) => {
    try {
      const users = await userService.getAll();
      res.render('list-user', { users });
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
