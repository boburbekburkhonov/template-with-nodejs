import { Router } from "express";
import { getPortfolio, postPortFolio } from "../controller/getPortfolio.js";
import { validate } from "../middleware/validate.js";
import { validation } from "../validation/validation.js";

const router = Router()

export default router
  .get('/profile', getPortfolio)
  .post('/profile/request', validate(validation), postPortFolio)