const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { celebrate, Joi, errors } = require('celebrate');

const dotenv = require('dotenv');

dotenv.config();

const auth = require('./middlewares/auth');
const error = require('./middlewares/error');
const { urlValidation, emailValidation } = require('./middlewares/validation');
const { requestLogger, errorLogger } = require('./middlewares/logger');

app.use(cors({
  origin: 'http://mesto.cards.nomoredomains.club',
  credentials: true,
}));

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const {
  createUser,
  login,
} = require('./controllers/users');

const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.listen(PORT);

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().custom(urlValidation),
      email: Joi.string().required().custom(emailValidation),
      password: Joi.string().required(),
    }),
  }),
  createUser,
);

app.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().custom(emailValidation),
      password: Joi.string().required(),
    }),
  }),
  login,
);

app.use(auth);

app.use('/', usersRouter);
app.use('/', cardsRouter);

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  error(err, req, res, next);
});
