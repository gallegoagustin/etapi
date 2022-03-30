export {};
const Joi = require("joi");

const postNewPublication = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    user: Joi.number().required(),
  }),
};
module.exports = {
  postNewPublication,
};
