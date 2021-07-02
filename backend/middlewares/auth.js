const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_KEY } = process.env;

const UnauthorizedError = require('../errors/unauthorized-error');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(`что пришло в res ${res}`);
  console.log(`авторизация ${authorization}`);
  console.log(`что в req ${req}`);

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  const token = authorization.replace('Bearer ', '');

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

  console.log(`что в req.user ${req.user}`);
  console.log(`что в payload ${payload}`);

  next();
};

module.exports = auth;
