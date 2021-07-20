const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const { NODE_ENV, JWT_KEY } = process.env;

const BadRequestError = require('../errors/bad-request-error');
const UnauthorizedError = require('../errors/unauthorized-error');
const NotFoundError = require('../errors/not-found-error');
const ConflictError = require('../errors/conflict-error');

//  GET /users — возвращает всех пользователей
const getUsers = (req, res, next) => {
  User.find()
    .then((users) => res.status(200).send(users))
    .catch(next);
};

//  GET /users/:userId - возвращает пользователя по _id
const getUserById = (req, res, next) => {
  const { userId } = req.params;

  if (userId.length < 24 || userId.length > 24) {
    throw new BadRequestError('Неверный айди пользователя');
  }

  return User.findById(userId)
    .then((user) => {
      if (user) {
        return res.status(200).send({
          name: user.name,
          about: user.about,
          avatar: user.avatar,
          _id: user._id,
        });
      }
      throw new NotFoundError('Нет пользователя с таким айди');
    })
    .catch(next);
};

//  POST /users — создаёт пользователя
const createUser = (req, res, next) => {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;

  return bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({
        name,
        about,
        avatar,
        email,
        password: hash,
      })
        .then((user) => res.status(201).send({
          name: user.name,
          about: user.about,
          avatar: user.avatar,
          _id: user._id,
          email: user.email,
        }))
        .catch((err) => {
          if (err.name === 'MongoError' && err.code === 11000) {
            const error = new ConflictError('Пользователь с данной почтой уже существует');
            next(error);
          }
        });
    });
};

//  PATCH /users/me — обновляет профиль
const updateUserProfile = (req, res, next) => {
  const userId = req.user._id;

  const {
    name,
    about,
  } = req.body;

  User.findByIdAndUpdate(
    userId,
    {
      name,
      about,
    },
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: true, // если пользователь не найден, он будет создан
    },
  )
    .then((user) => res.send({
      name: user.name,
      about: user.about,
      avatar: user.avatar,
      _id: user._id,
    }))
    .catch(next);
};

//  PATCH /users/me/avatar — обновляет аватар
const updateUserAvatar = (req, res, next) => {
  const userId = req.user._id;

  const {
    avatar,
  } = req.body;

  User.findByIdAndUpdate(
    userId,
    {
      avatar,
    },
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: true, // если пользователь не найден, он будет создан
    },
  )
    .then((user) => res.send({
      name: user.name,
      about: user.about,
      avatar: user.avatar,
      _id: user._id,
    }))
    .catch(next);
};

const login = (req, res, next) => {
  const {
    email,
    password,
  } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Поля почта и пароль должны быть заполнены');
  }

  return User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError('Пользователь с данной почтой не найден');
      }

      return bcrypt.compare(password, user.password, ((error, isValid) => {
        if (error) {
          throw new BadRequestError('Переданы некорректные данные');
        }

        if (!isValid) {
          throw new UnauthorizedError('Неверный пароль');
        }

        const token = jwt.sign(
          { _id: user._id },
          NODE_ENV === 'production' ? JWT_KEY : 'dev-secret',
          { expiresIn: '7d' },
        );

        return res.status(200).send({
          message: 'Вход выполнен',
          token,
        });
      }));
    })
    .catch(next);
};

const getMyInfo = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      res.status(200).send({ user });
    })
    .catch(next);
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUserProfile,
  updateUserAvatar,
  login,
  getMyInfo,
};
