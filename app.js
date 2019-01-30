const express = require('express');
const path = require('path');
const morgan = require('morgan');
const routers = require('./routers');
const apiRouter = require('./routers/api');
const tokenUtil = require('./common/token');
var app = express();

const middleware = [
  express.urlencoded({ extended: false }),
  express.json(),
  express.static(path.join(__dirname, 'public')),
  morgan('dev')
];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(middleware);
app.use(routers);
app.use('/api', checkValidToken, apiRouter);

app.use((req, res) => {
  res.status(404).send('Page not found');
});

function checkValidToken(req, res, next) {
  const token = req.headers['authorization']
    ? req.headers['authorization'].slice(7)
    : null;
  const encoded = tokenUtil.verify(token);
  if (encoded) next();
  else res.json({ message: 'Login is required' });
}

module.exports = app;
