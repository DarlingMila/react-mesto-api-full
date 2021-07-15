const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { celebrate, Joi, errors } = require('celebrate');

const dotenv = require('dotenv');

dotenv.config();

const { PORT = 3001 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors({
//   origin: 'http://mesto.cards.nomoredomains.club',
//   credentials: true,
// }));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.listen(PORT);

const auth = require('./middlewares/auth');
const error = require('./middlewares/error');
const { urlValidation, emailValidation } = require('./middlewares/validation');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const {
  createUser,
  login,
} = require('./controllers/users');

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post(
  '/sign-up',
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
  '/sign-in',
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
