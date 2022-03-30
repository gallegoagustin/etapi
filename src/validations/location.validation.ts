export {};
const Joi = require("joi");

const updateLeaseRange = {
  body: Joi.object().keys({
    start: Joi.string().required(),
    end: Joi.string().required(),
    locationId: Joi.number().required(),
  }),
};
module.exports = {
  updateLeaseRange,
};
