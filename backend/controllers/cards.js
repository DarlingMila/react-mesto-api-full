const Card = require('../models/card');

const ForbiddenError = require('../errors/forbidden-error');
const NotFoundError = require('../errors/not-found-error');

//  GET /cards — возвращает все карточки
const getCards = (req, res, next) => {
  Card.find()
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(next);
};

//  POST /cards — создаёт карточку
const createCard = (req, res, next) => {
  const ownerId = req.user._id;
  const {
    name,
    link,
  } = req.body;

  Card.create({
    name,
    link,
    owner: ownerId,
  })
    .then((card) => res.status(201).send({
      card: card.toJSON(),
    }))
    .catch(next);
};

//  DELETE /cards/:cardId — удаляет карточку по идентификатору
const deleteCard = (req, res, next) => {
  const { cardId } = req.params;

  return Card.findByIdAndRemove(cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      }

      if (card.owner.toString() !== req.user._id) {
        throw new ForbiddenError('Вы не можете удалить карточку');
      }

      return res.status(200).send({
        message: 'Карточка была удалена',
      });
    })
    .catch(next);
};

//  PUT /cards/:cardId/likes — поставить лайк карточке
const likeCard = (req, res, next) => {
  const { cardId } = req.params;
  const ownerId = req.user._id;

  return Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: ownerId } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      } else {
        return res.status(200).send({
          message: 'Поставлен лайк',
          card,
        });
      }
    })
    .catch(next);
};

//  DELETE /cards/:cardId/likes — убрать лайк с карточки
const dislikeCard = (req, res, next) => {
  const { cardId } = req.params;
  const ownerId = req.user._id;

  return Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: ownerId } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      } else {
        return res.status(200).send({
          message: 'Лайк убран',
          card,
        });
      }
    })
    .catch(next);
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
