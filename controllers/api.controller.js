const userService = require('../services').User;
const tokenUtil = require('../common/token');

module.exports = {
  login: (req, res) => {
    const account = { ...req.body };
    userService
      .findOne(account)
      .then(rs => {
        const token = tokenUtil.sign(rs.dataValues);
        res.json({
          message: 'Login successfullly',
          token: token
        });
      })
      .catch(err => {
        res.json({ message: 'Login fail' });
      });
  },
  getUsers: (req,res) => res.json("Here is list user !!!")
};
