import Joi from "joi";

export const validation = Joi.object().keys({
  name: Joi.string().required().max(10),
  email: Joi.string().required(),
  message: Joi.string()
}).required()