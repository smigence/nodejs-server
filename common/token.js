const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env];

module.exports = {
  sign: data => jwt.sign(data, config.secretKey, { expiresIn: '1h' }),
  verify: token => {
    jwt.verify(token, config.secretKey, (err, decoded) => {
      if (err) return null;
      return decoded;
    });
  }
};
