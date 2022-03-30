export {};
const Joi = require("joi");

const postNewRoom = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.string().required(),
    longitude: Joi.string().required(),
    latitude: Joi.string().required(),
    locationId: Joi.number().required(),
  }),
};
module.exports = {
  postNewRoom,
};
