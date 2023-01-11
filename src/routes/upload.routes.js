import { Router } from "express";
import { upload, uploadGet } from "../controller/uploads.js";

const uploadRouter = Router();

export default uploadRouter
  .get("/uploads/get", uploadGet)
  .post("/upload/file", upload);
