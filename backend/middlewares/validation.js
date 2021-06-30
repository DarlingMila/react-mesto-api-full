const validator = require('validator');

const BadRequestError = require('../errors/bad-request-error');

const urlValidation = (value) => {
  const result = validator.isURL(value);
  if (!result) {
    throw new BadRequestError('Ссылка на картинку некорректна!');
  } else {
    return value;
  }
};

const emailValidation = (value) => {
  const result = validator.isEmail(value);
  if (!result) {
    throw new BadRequestError('Почта введена некорректно!');
  } else {
    return value;
  }
};

module.exports = { urlValidation, emailValidation };
