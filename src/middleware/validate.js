import { errorHandlerError } from "../errors/errorHanler.js";

export const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);

    if(error){
      return next(new errorHandlerError(error.message, 401))
    }

    req.filtered = value;

    next()
  }
}