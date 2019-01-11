const userService = require('../services').User;

module.exports = {
  getUser: (req, res) => {
    userService.getAll().then(users => {
      res.render('list-user', {users});
    });
  }
};
