const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { urlValidation } = require('../middlewares/validation');

const {
  getUsers,
  getUserById,
  updateUserProfile,
  updateUserAvatar,
  getMyInfo,
} = require('../controllers/users');

//  GET /users — возвращает всех пользователей
router.get('/users', getUsers);

// GET /users/me - возвращает информацию о текущем пользователе
router.get('/users/me', getMyInfo);

//  GET /users/:userId - возвращает пользователя по _id
router.get(
  '/users/:userId',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().length(24).hex(),
    }).unknown(true),
  }),
  getUserById,
);

//  PATCH /users/me — обновляет профиль
router.patch(
  '/users/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
    }),
  }),
  updateUserProfile,
);

//  PATCH /users/me/avatar — обновляет аватар
router.patch(
  '/users/me/avatar',
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().custom(urlValidation),
    }),
  }),
  updateUserAvatar,
);

module.exports = router;
