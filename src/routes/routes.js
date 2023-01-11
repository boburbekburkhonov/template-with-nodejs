import { Router } from "express";
import portfolio from "../routes/getPortFolio.routes.js";
import upload from "../routes/upload.routes.js";

const router = Router();

export default router.use([portfolio, upload]);
