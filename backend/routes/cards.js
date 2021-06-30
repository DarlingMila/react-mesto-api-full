const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { urlValidation } = require('../middlewares/validation');

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

//  GET /cards — возвращает все карточки
router.get('/cards', getCards);

//  POST /cards — создаёт карточку
router.post(
  '/cards',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      link: Joi.string().custom(urlValidation),
    }),
  }),
  createCard,
);

//  DELETE /cards/:cardId — удаляет карточку по идентификатору
router.delete(
  '/cards/:cardId',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().length(24).hex(),
    }).unknown(true),
  }),
  deleteCard,
);

//  PUT /cards/:cardId/likes — поставить лайк карточке
router.put(
  '/cards/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().length(24).hex(),
    }).unknown(true),
  }),
  likeCard,
);

//  DELETE /cards/:cardId/likes — убрать лайк с карточки
router.delete(
  '/cards/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().length(24).hex(),
    }).unknown(true),
  }),
  dislikeCard,
);

module.exports = router;
