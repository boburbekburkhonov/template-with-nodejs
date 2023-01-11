import { Router } from "express";
import { getPortfolio, postPortFolio } from "../controller/getPortfolio.js";
import { validate } from "../middleware/validate.js";
import { validation } from "../validation/validation.js";

const portFolioRouter = Router();

export default portFolioRouter
  .get("/profile", getPortfolio)
  .post("/profile/request", validate(validation), postPortFolio);