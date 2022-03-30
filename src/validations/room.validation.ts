export {};
const Joi = require("joi");

const postNewRoom = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.string().required(),
    squareMeter: Joi.number().required(),
    locationId: Joi.number().required(),
  }),
};
module.exports = {
  postNewRoom,
};
