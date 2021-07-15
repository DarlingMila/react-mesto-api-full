const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_KEY } = process.env;

const UnauthorizedError = require('../errors/unauthorized-error');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  console.log(`бэк: что пришло в res ${res}`);
  console.log(`бэк: авторизация ${authorization}`);
  console.log(`бэк: что в req ${req}`);

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  const token = authorization.replace('Bearer ', '');

  console.log(`бэк: token ${token}`);

  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_KEY : 'dev-secret',
    );
  } catch (err) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  req.user = payload;

  // console.log(`бэк: req.user ${req.user}`);
  // console.log(`бэк: payload ${payload}`);

  next();
};

module.exports = auth;
